const fs = require("fs");

const handleImageUpload = (file, filename) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("/images/" + filename + ".png", file, (err) => {
      if (err) {
        reject(err);
      }
      resolve({ message: "Upload successfully!" });
    });
  });
};

module.exports = handleImageUpload;
