//<--1 Write the code to access element which is having id as "text"
console.log(document.getElementById('text'))
//<--2 Write the code to access element which is having tag as "h1"
console.log(document.getElementsByTagName("h1"))
// <--3 Write the code to access element which is having class as "box"
console.log(document.getElementsByClassName('box'))
//<--4 "<h1>Hello </h1>  Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
console.log(document.getElementsByTagName("h1").innerText="HELLO WORLD")
//<--5   Create three cards on HTML page and arrange them using flex property in row 
// or horizontal direction and also create button at the bottom named "Change Flex direction". 
// When user clicks on this button, the cards arrangement should be changed to vertical direction.
function change(){
    document.getElementById("main").style.flexDirection="column";
}
// <!-- 6) Add one style attribute and give text color 
//         as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions" -->

function heading(){
    document.getElementById("colorchange").style.color="red";
}
// <!-- 7) Create an HTML page having content as Hello world and a button named Replace Text.
//         When user will click on this button page content should be changed to "Welcome to Elevation academy" -->
function replace(){
    let result=document.getElementById("AA").innerText="Welcome to Elevation academy";

 }

//  /Q9.Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second:-
function clock() {
  var hours = document.getElementById("hour");
  var minutes = document.getElementById("min");
  var seconds = document.getElementById("sec");
  var am = document.getElementById("ampm");
  var time = new Date();

  var hrs = time.getHours();
  var mins = time.getMinutes();
  var secs = time.getSeconds();
  var am_pm = "AM";

  if (hrs == 0) {
    hrs = 12;
  }

  if (hrs > 12) {
    hrs = hrs - 12;
    am_pm = "PM";
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  hours.innerText = hrs;
  minutes.innerText = mins;
  seconds.innerText = secs;
  am.innerText = am_pm;
}
setInterval(clock, 1000);
//  <!-- 12) Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected -->

 function getOption(){
    var result=document.getElementById("text1");
    var result2=result.value
    document.getElementById("output").innerText=result2
}