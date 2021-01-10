export const DEFAULT = {
  routes: () => {
    // prettier-ignore
    return {
      get: [
        { path: "/:apiVersion/status", action: "status" },
        { path: "/:apiVersion/pokemon/list", action: "pokemon:list" },
        { path: "/:apiVersion/pokemon/types", action: "pokemon:types" },
        { path: "/:apiVersion/swagger", action: "swagger" },
      ],

    };
  },
};
