const buildRoutes = (app, routes) => {
  for (const route of routes) {
    buildRoute(app, route);
  }
};
const buildRoute = (app, { method, name, action }) => {
  app[method](name, action);
};
export { buildRoutes };