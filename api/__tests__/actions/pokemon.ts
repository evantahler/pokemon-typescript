import { Process, specHelper } from "actionhero";
import { UnwrapPromise } from "../../../web/utils/unwrapPromise";
import { PokemonList, PokemonTypes } from "../../src/actions/pokemon";

const actionhero = new Process();

describe("Action", () => {
  describe("pokemon:list", () => {
    beforeAll(async () => {
      await actionhero.start();
    });

    afterAll(async () => {
      await actionhero.stop();
    });

    test("returns pokemon according to offset, limit, and type", async () => {
      const {
        pokemon,
      }: UnwrapPromise<
        typeof PokemonList.prototype.run
      > = await specHelper.runAction("pokemon:list", {
        limit: 1,
        offset: 3,
        type: "grass",
      });
      expect(pokemon.length).toBe(1);
      expect(pokemon[0].name).toEqual("Oddish");
    });

    test("All the types can be returned by the API", async () => {
      const {
        types,
      }: UnwrapPromise<
        typeof PokemonTypes.prototype.run
      > = await specHelper.runAction("pokemon:types", {});
      expect(types.length).toBe(19);
      expect(types).toContain("grass");
    });
  });
});
