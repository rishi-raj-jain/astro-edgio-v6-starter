const { Router } = require("@edgio/core");
const { astroRoutes } = require("@edgio/astro");

export default new Router().use(astroRoutes);
