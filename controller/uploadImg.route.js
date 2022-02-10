const router = require("express").Router();
const multer = require("multer");
const upload = multer();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, `${__dirname}../../../essentiel_app/public/uploads/`);
//   },
// });
const uploadController = require("./uploadController");

router.get("/", (req, res) => {
  res.status(200).json({ status: "200" });
});
router.post("/upload", upload.single("fileImg"), uploadController.uploadImg);

module.exports = router;
