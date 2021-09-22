// const  createProxyMiddleware  = require('http-proxy-middleware');
const url = process.env.CONTAINER_NAME;
const proxy = require('http-proxy-middleware');
// module.exports = router;
// module.exports = function(app) {
//   app.use(
//     '/api/customers',
//     createProxyMiddleware({
//       target: url,
//       changeOrigin: true,
//     })
//   );
// };
module.exports = function(app) {
  app.use(proxy('/api/customers', { target: url }))
}
