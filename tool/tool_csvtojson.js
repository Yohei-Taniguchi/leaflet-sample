var Converter=require("csvtojson").Converter;
var csvConverter = new Converter({
  constructResult: false,
  toArrayString: true
});

var sDataFile = "/list"

var readStream = require("fs").createReadStream(sDataFile + ".csv");
var writeStream = require("fs").createWriteStream(sDataFile + ".json");

readStream.pipe(csvConverter).pipe(writeStream);
