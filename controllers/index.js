module.exports = function () {
  var functions = {};

  functions.index = function (req, res) {
    res.render('index');
  };

  return functions;
};