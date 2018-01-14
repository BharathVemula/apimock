import testRoutes from './testapis';
import prodRoutes from './prodapis';

let routes = [];

// console.error(testRoutes);
for (let i = 0; i < testRoutes.length; i += 1) {
  routes.push(testRoutes[i]);
}

for (let  i = 0; i < prodRoutes.length; i += 1) {
  routes.push(prodRoutes[i]);
}

export default routes;
