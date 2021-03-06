var args = require("minimist")(process.argv.slice(2), { string: "file" }),
    hello = require("./helloworld3.js");

function printHelp() {
    console.log("3.js (c) Kyle Simpson");
    console.log("");
    console.log("usage:");
    console.log("--help          print this help");
    console.log("--file={NAME}   read the file of {NAME} and output");
    console.log("");
}

if (args.help || !args.file) {
    printHelp();
    process.exit(1);
}

hello.say(args.file)
.val(function (contents) {
    console.log(contents.toString());
})
.or(function (err) {
    console.error("Error:", err);
});
