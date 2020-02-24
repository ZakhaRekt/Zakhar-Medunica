var colorArray = [ "#000", "#fff", "#eee","#7CFC00","#006400","#FF1493","#8A2BE2","#4B0082","#0000FF","#000080" ]; // массив с цветами
var i = 0; // итератор

function changeColor(){
    document.getElementById('bigbox').style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
}
