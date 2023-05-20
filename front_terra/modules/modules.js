import express from "express";
import process from "process";
import multer from "multer";
import path from "path";

const app = express();

const store = multer.diskStorage({
  destination: path.join(process.cwd(), "modules", "public", "images_files"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upImages = multer({ storage: store }).single("image");

app.post("/upload", upImages, (req, res) => {
  console.log(req.file.filename);
  res.send("Imagen recibida");
});
/* 
app.listen(8000, () => {
  console.log("Servidor iniciado en el puerto 8000");
});

export default upImages; */
