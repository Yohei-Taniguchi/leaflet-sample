var Converter=require("csvtojson").Converter;
var csvConverter = new Converter({
  constructResult: false,
  toArrayString: true
});

var sPATH_CSV = "D:/workspase/develop/local/Wacker/myap01/public/csv"
var sPATH_JSON = "D:/workspase/develop/local/Wacker/myap01/public/json"
var sDataFile = "/list"

var readStream = require("fs").createReadStream(sPATH_CSV +  sDataFile + ".csv");
var writeStream = require("fs").createWriteStream(sPATH_JSON + sDataFile + ".json");

readStream.pipe(csvConverter).pipe(writeStream);
