const fs = require("fs");
const fs_p = require("fs/promises");

const read_file = () => {

    const s = Date.now();
    const res = fs.readFileSync("../video.mp4");
    const e = Date.now();

    console.log(e - s);
    
}

const read_file_better = () => {
    fs_p.readFile("../video.mp4")
        .then(b => {
            console.log("Streaming");
        });

    console.log("Another useful task");

}

// read_file();
read_file_better();