//var servo = document.getElementById('servo');
var servo = $('#servo');
var led = $('#led');
var color= ["ff0" , "0f0" , "f00" , "0ff" , "f00" , "f0f" , "00f"];
var color_len = color.length - 1;
var color_idx = 0;
var num = 0;
var direction = 'up';
setInterval(function(){
  // if(direction == 'up'){
  if(num == 0){
    // num+=180;
    num=180;
  } else {
    // num-=180;
    num=0;
  }
  // if(num > 180) {
  //   direction == 'down';
  // }
  servo.css('transform', 'rotate('+ num +'deg)');

  if(color_idx > color_len){
    color_idx = 0;
  }
  led.css('color', "#" + color[color_idx]);
  color_idx++;
}, 1000);
