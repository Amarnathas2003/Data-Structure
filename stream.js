const fs = require("fs");

const stream = fs.createReadStream("./text.txt")

const writeStream = fs.createWriteStream("./textWrite.text");

stream.on("data", (chunk) => {
    console.log(chunk.toString());
})

writeStream.on("finish", () => {
    console.log("Write stream is finished")
})

writeStream.write("so what")