function validator(req, res, done) {
    let body = req.body;

    if (
      !body.id ||
      !body.name ||
      !body.rating ||
      !body.description ||
      !body.genre ||
      !body.cast
    ) {
      res.status(400).send("Bad request");
      return
    }
    if (
      typeof body.id !== "number" ||
      typeof body.name !== "string" ||
      typeof body.rating !== "number" ||
      typeof body.description !== "string" ||
      typeof body.genre !== "string" ||
      typeof body.cast !== "object"
    ) {
      res.status(400).send("Invalid request format");
      return
    }
  done();
}

module.exports = { validator };
