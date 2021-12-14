isLong = true;

function convert_percentage(value){
   return `${(value * 100).toFixed(2)}%`
}

function choose_short(){
   const button1 = document.getElementById('long');
   button1.style.color;
   const button2 = document.getElementById('short');
   button2.style.color;
   isLong = false;
}

function choose_long(){
   const button1 = document.getElementById('short');
   button1.classList;
   const button2 = document.getElementById('long');
   button2.style.color;
   isLong = true;
}

function calculate_rrr(){
   isLong ? calculate_long() : calculate_short();

}

function calculate_long(){
   const entryValue = document.getElementById('entry').value;
   const stopValue = document.getElementById('stop').value;
   const targetValue = document.getElementById('target').value;
   const rrrOutput = document.getElementById('rrr');
   const targetPNLOutput = document.getElementById('target-pnl');
   const stopPNLOutput = document.getElementById('stop-pnl');

   targetPNL = (targetValue - entryValue) / entryValue;
   stopPNL = (entryValue - stopValue) / entryValue;
   rrr = targetPNL > 0 ? targetPNL / stopPNL : (targetPNL / stopPNL) * -1;

   rrrOutput.innerHTML = rrr.toFixed(2);
   targetPNLOutput.innerHTML = convert_percentage(targetPNL);
   stopPNLOutput.innerHTML = convert_percentage(stopPNL);
   
   return;
}

function calculate_short(){
   const entryValue = document.getElementById('entry').value;
   const stopValue = document.getElementById('stop').value;
   const targetValue = document.getElementById('target').value;
   const rrrOutput = document.getElementById('rrr');
   const targetPNLOutput = document.getElementById('target-pnl');
   const stopPNLOutput = document.getElementById('stop-pnl');

   targetPNL = (entryValue - targetValue) / entryValue;
   stopPNL = (stopValue - entryValue) / entryValue;
   rrr = targetPNL > 0 ? targetPNL / stopPNL : (targetPNL / stopPNL) * -1;

   rrrOutput.innerHTML = rrr.toFixed(2);
   targetPNLOutput.innerHTML = convert_percentage(targetPNL);
   stopPNLOutput.innerHTML = convert_percentage(stopPNL);
}
document.getElementById("entry").addEventListener("input", calculate_rrr);
document.getElementById("stop").addEventListener("input", calculate_rrr);
document.getElementById("target").addEventListener("input", calculate_rrr);
document.getElementById("long").addEventListener("mousedown", choose_long);
document.getElementById("long").addEventListener("mousedown", calculate_rrr);
document.getElementById("short").addEventListener("mousedown", choose_short);
document.getElementById("short").addEventListener("mousedown", calculate_rrr);
