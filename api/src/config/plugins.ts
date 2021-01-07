import { join } from "path";

export const DEFAULT = {
  plugins: () => {
    return {
      "ah-next-plugin": {
        path: join(
          __dirname,
          "..",
          "..",
          "..",
          "node_modules",
          "ah-next-plugin"
        ),
      },
    };
  },
};
