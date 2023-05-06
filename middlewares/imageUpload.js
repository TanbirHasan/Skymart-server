const multer = require("multer");
const { v4: uuidv4 } = require("uuid");





const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      const extension = file.originalname.split(".").pop();
      const filename = `${uuidv4()}.${extension}`;
      cb(null, filename);
    },
  });
  
  const upload = multer({ storage });

  module.exports = upload;
