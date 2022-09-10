import * as fs from "node:fs";

let data = "Hello, i'm the file we need not to fail :D"

fs.writeFile("./fileWeWrote", data, (error) => {

    if (error) {
        console.error(error);

    } else { console.log(data); }

});