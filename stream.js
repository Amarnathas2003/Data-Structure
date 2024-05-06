const fs = require("fs");

const path = "./text.txt";

fs.unlink(path, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Fie has been deleted");
})

