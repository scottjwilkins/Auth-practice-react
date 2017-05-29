module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.send([
      "doorknobs",
      "peanut butter",
      "toe beans",
      "glass"
    ])
  });
}
