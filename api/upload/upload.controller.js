async function handlerCreateImage(req, res) {
  console.log('FLAG ---> ', req.body);
  res.sed('ok');
}

module.exports = {
  handlerCreateImage,
};
