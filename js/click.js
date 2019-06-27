const { ipcRenderer, remote, shell } = window.require('electron');
let minobj=document.getElementById('min');
let maxobj=document.getElementById('max');
let closeobj=document.getElementById('close')
minobj.onclick=function(){
   remote.getCurrentWindow().show();
    remote.getCurrentWindow().minimize(); 
}
maxobj.onclick=function(){
    remote.getCurrentWindow().maximize(); 
}
closeobj.onclick=function(){
    remote.getCurrentWindow().hide();
}
