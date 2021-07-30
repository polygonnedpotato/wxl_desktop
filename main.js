/*
  WeatherLive Desktop
  ©2021 WeatherLive ©2021 Brendan Berger
*/
var a=process.argv.slice(2)
console.log(process.argv)
exports.startupArgs={a}
const electron=require('electron')
const { app, BrowserWindow } =electron
var fs=require('fs');var zzz = require('system-sleep');
var itd = ""; var p = false; var path =require('path')
fs.readFile('./intdata.json',function(err,data){
  if(err){
    console.error(err);
  }; itd += data; p = true;
});
while (p == false) { zzz(100) };var intdata = JSON.parse(itd)
var title=intdata.name+" "+intdata.version.join(".")
module.exports={title:title,intdata:intdata}
console.log(title)
function createWindow() {
  const win=new BrowserWindow({ width: 800, height: 600, webPreferences: {preload: path.join(__dirname, 'assets/njs/preload.js')}})
  win.loadFile('index.html')
}
app.whenReady().then(() => { createWindow()})
app.setName(title)
app.on('window-all-closed', function () {  if (process.platform !== 'darwin') app.quit()})
