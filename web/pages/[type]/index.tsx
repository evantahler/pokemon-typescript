import { UnwrapPromise } from "../../utils/unwrapPromise";
import { PokemonList, PokemonTypes } from "../../../api/src/actions/pokemon";
import { Table } from "react-bootstrap";
import { TypeButtons } from "../../components/typeButtons";
import { useRouter } from "next/router";

type ListApiResponse = UnwrapPromise<typeof PokemonList.prototype.run>;
type TypesApiResponse = UnwrapPromise<typeof PokemonTypes.prototype.run>;

const imageStyle = {
  maxHeight: 75,
  maxWidth: 75,
};

export default function IndexPage(props) {
  const {
    pokemon,
    types,
  }: {
    pokemon: ListApiResponse["pokemon"];
    types: TypesApiResponse["types"];
  } = props;

  const router = useRouter();

  return (
    <>
      <TypeButtons types={types} activeType={router.query.type as string} />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type 1</th>
            <th>Type 2</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map((monster) => (
            <tr key={monster.pokedex_number}>
              <td>{monster.name}</td>
              <td>
                <a href={`/${monster.type1}`}>{monster.type1}</a>
              </td>
              <td>
                <a href={`/${monster.type2}`}>{monster.type2}</a>
              </td>
              <td>
                <img
                  style={imageStyle}
                  src={`https://pokeres.bastionbot.org/images/pokemon/${monster.pokedex_number}.png`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

IndexPage.getInitialProps = async ({ query }) => {
  const { type } = query;
  const pokemonResponse = await fetch(
    `${process.env.API_URL}/api/1/pokemon/list?type=${type}`
  );

  const typesResponse = await fetch(
    `${process.env.API_URL}/api/1/pokemon/types`
  );

  const { pokemon } = await pokemonResponse.json();
  const { types } = await typesResponse.json();

  return { pokemon, types };
};
