const XLSX = require('xlsx');
const smservice=require('./sendSms')

function readXls(msg,files){
    var workbook = XLSX.readFile(files);
    var first_sheet_name = workbook.SheetNames[0];
var address_of_cell_initial = 'J';

var address_of_cell= address_of_cell_initial+1;
 
/* Get worksheet */
var worksheet = workbook.Sheets[first_sheet_name];
 
/* Find desired cell */
var desired_cell = worksheet[address_of_cell];
 
/* Get the value */
var desired_value = (desired_cell ? desired_cell.v : undefined);
desired_value='+'+desired_value;

console.log("Sending sms to : ",desired_value)
smservice(msg,desired_value);
}

module.exports = readXls;
