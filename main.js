X=0;
Y=0;
draw_circle="";
draw_rect="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="system is listening plz speak";
    recognition.start();
}
recognition.onresult=function(Event){
    console.log(Event);
    var content= Event.results[0][0].transcript;
    document.getElementById("status").innerHTML="speech has been recognised as "+content;
    if(content=='circle'||content=='Circle'){
X=Math.floor(Math.random()*900);
Y=Math.floor(Math.random()*600);
document.getElementById("status").innerHTML="drawing the circle";
draw_circle="set";    }
if(content=='rectangle'||content=='Rectangle'){
    X=Math.floor(Math.random()*900);
    Y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="drawing the rectangle";
    draw_rectangle="set";    }
}
function setup (){
canvas=createCanvas(900,600);

}
function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(X,Y,radius);
        document.getElementById("status").innerHTML="circle is drawn";
        draw_circle="";
    }
    if(draw_rect=="set"){
        rect(X,Y,70,50);
        document.getElementById("status").innerHTML="rectangle is drawn";
        draw_rect="";
}
}