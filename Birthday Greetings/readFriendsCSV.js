const fs = require("fs");
const { parse } = require("csv-parse");

fs.createReadStream("./friends.csv", {encoding: "utf8"})
  .pipe(parse({ delimiter: ",", from_line: 2}))
  .on("data", function (row) {
    console.log(row);
  })
.on("end", function() {
    console.log("finished");
})
.on("error", function(error) {
    console.log(error.message);
});

function sendEmail(){
    //TODO: Send email to friend
    //console.log("Subject: Happy birthday!", '\n', + "Happy birthday, dear " + first_name + "!")
}

function sendSMS(){
    //TODO: Send SMS to friend
    //console.log("Happy birthday " + first_name)
}

