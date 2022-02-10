const uploadImgRoute = require("./controller/uploadImg.route.js");
const express = require("express");
const app = express();
const cors = require("cors");
// var whitelist = [
//   "https://https://l-essentiel-auxerre.web.app/",
//   "http://localhost:3001",
// ];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   methods: "GET,PUT,POST",
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true,
//   preflightContinue: false,
// };
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static("essentiel_app/build"));
// let the react app to handle any unknown routes
// serve up the index.html if express does'nt recognize the route
const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "essentiel_app", "build", "index.html"));
});

app.listen(process.env.PORT || 5000, () =>
  console.log("listening on port", process.env.PORT)
);

app.use("/api", uploadImgRoute);
