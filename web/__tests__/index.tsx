import { mount } from "enzyme";
import IndexPage from "../pages/index";

describe("<setupStepCard />", () => {
  let component;

  beforeAll(async () => {
    const pokemonData = [
      {
        pokedex_number: 4,
        abilities: "['Blaze', 'Solar Power']",
        name: "Charmander",
        type1: "fire",
        type2: "",
      },
    ];
    const types = ["fire"];
    component = mount(<IndexPage pokemon={pokemonData} types={types} />);
  });

  afterAll(() => {
    component.unmount();
  });

  it("renders", () => {
    expect(component.html()).toContain("Charmander");
  });
});
