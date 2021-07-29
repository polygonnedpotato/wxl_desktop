/*
  WeatherLive Desktop
  ©2021 WeatherLive ©2021 Brendan Berger
*/
var a=process.argv.slice(2)
console.log(process.argv)
exports.startupArgs={a}
const { app, BrowserWindow } = require('electron')
var fs=require('fs');var zzz = require('system-sleep'); var rcfg = ""; var p = false
fs.readFile('./intdata.json',function(err,data){
  if(err){
    console.error(err);
  }; rcfg += data; p = true;
});
while (p == false) { zzz(100) };var cfg = JSON.parse(rcfg)
function createWindow() {
  const win=new BrowserWindow({ width: 800, height: 600 })
  win.loadFile('index.html')
}
app.whenReady().then(() => { createWindow()})
app.on('window-all-closed', function () {  if (process.platform !== 'darwin') app.quit()})