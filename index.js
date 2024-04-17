const fs = require("fs");
const path = require("path");

const folderPath = "./assets";

let filesArr = fs.readdirSync(folderPath);
let nameParameter = process.argv[2]

filesArr.forEach((file, index) => {
    // modifier le script pour écrire un nom de fichier de type 04_2024_0.jpg, 04_2024_1.jpg
    let fullPath = path.join(folderPath, file);
    let fileExtension = path.extname(file);
    let fileName = path.basename(file, fileExtension);

    let prefix = fileName.slice(0, process.argv[3])
    let newFileName = `${prefix}-${nameParameter}_${index}${fileExtension}`;

    try {
        fs.renameSync(fullPath, path.join(folderPath, newFileName));
    } catch (error) {
        console.error(error)
    }
});