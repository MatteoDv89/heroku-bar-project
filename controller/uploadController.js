const fs = require("fs");
const { endianness } = require("os");
const { nextTick } = require("process");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

module.exports.uploadImg = async (req, res, next) => {
  if (req.file) {
    let newPicture = await req.file;
    const title = req.body.title + ".jpg";
    
    try {
      await pipeline(
        newPicture.stream,
        fs.createWriteStream(`${__dirname}/../essentiel_app/build/uploads/${title}`)
      );

      res.status(200).json({ statut: "200" });
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(400).send("error");
  }
};
