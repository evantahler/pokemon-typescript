export const DEFAULT = {
  routes: () => {
    // prettier-ignore
    return {
      get: [
        { path: "/:apiVersion/status", action: "status" },
        { path: "/:apiVersion/swagger", action: "swagger" },
      ],

    };
  },
};
