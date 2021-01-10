import { Action } from "actionhero";
import PokemonData from "../data/pokemon.json";

export class PokemonList extends Action {
  constructor() {
    super();
    this.name = "pokemon:list";
    this.description = "List the Pokemon";
    this.inputs = {
      limit: { required: true, default: 50, formatter: (p) => parseInt(p) },
      offset: { required: true, default: 0, formatter: (p) => parseInt(p) },
      type: { required: false },
    };
  }

  async run({ params }) {
    const pokemon = PokemonData.filter((monster) =>
      params.type
        ? monster.type1 === params.type || monster.type2 === params.type
        : true
    ).slice(params.offset, params.offset + params.limit);

    return { pokemon };
  }
}

export class PokemonTypes extends Action {
  constructor() {
    super();
    this.name = "pokemon:types";
    this.description = "List the Types of Pokemon";
  }

  async run() {
    const types1 = PokemonData.map((monster) => monster.type1);
    const types2 = PokemonData.map((monster) => monster.type2);
    const types = [...new Set(types1.concat(types2))];

    return { types };
  }
}
