// Convert milimetr to...
document.getElementById('mmInput').addEventListener('input', function(e) {

    // Use milimetr to convert
    let mm = e.target.value;
  
    document.getElementById('mmToCm').innerHTML = (mm/10).toFixed(2);
    document.getElementById('mmToDm').innerHTML = (mm/100).toFixed(2);
    document.getElementById('mmToM').innerHTML = (mm/1000).toFixed(2);
    document.getElementById('mmToKm').innerHTML = (mm/1000000).toFixed(2);
  
});


// Convert centimetr to...
document.getElementById('cmInput').addEventListener('input', function(e) {
  
    // Use centimetr to convert
    let cm = e.target.value;
  
    document.getElementById('cmToMm').innerHTML = (cm*10).toFixed(2);
    document.getElementById('cmToDm').innerHTML = (cm/10).toFixed(2);
    document.getElementById('cmToM').innerHTML = (cm/100).toFixed(2);
    document.getElementById('cmToKm').innerHTML = (cm/100000).toFixed(2);
  
});


// Convert decimeter to...
document.getElementById('dmInput').addEventListener('input', function(e) {
  
    // Use centimetr to convert
    let dm = e.target.value;
  
    document.getElementById('dmToMm').innerHTML = (dm*100).toFixed(2); 
    document.getElementById('dmToCm').innerHTML = (dm*10).toFixed(2);
    document.getElementById('dmToM').innerHTML = (dm/10).toFixed(2); 
    document.getElementById('dmToKm').innerHTML = (dm/10000).toFixed(2);
  
});

// Convert meter to...
document.getElementById('mInput').addEventListener('input', function(e) {
  
    // Use meter to convert
    let m = e.target.value;
  
    document.getElementById('mToMm').innerHTML = (m*1000).toFixed(2);
    document.getElementById('mToCm').innerHTML = (m*100).toFixed(2);
    document.getElementById('mToDm').innerHTML = (m*10).toFixed(2);  
    document.getElementById('mToKm').innerHTML = (m/1000).toFixed(2);
  
});

// Convert kilometer to...
document.getElementById('kmInput').addEventListener('input', function(e) {
  
    // Use kilometer to convert
    let km = e.target.value;
  
    document.getElementById('kmToMm').innerHTML = (km*1000000).toFixed(2);
    document.getElementById('kmToCm').innerHTML = (km*100000).toFixed(2);
    document.getElementById('kmToDm').innerHTML = (km*10000).toFixed(2);  
    document.getElementById('kmToM').innerHTML = (km*1000).toFixed(2);
  
});