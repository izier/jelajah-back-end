const fs = require("fs");

const handleImageUpload = (file, filename) => {
  const pathname ="./public/" + filename + ".png" 
  return new Promise((resolve, reject) => {
    fs.writeFile(pathname, file, (err) => {
      if (err) {
        reject(err);
      }
      resolve("/public/" + filename + ".png");
    });
  });
};

module.exports = handleImageUpload;
