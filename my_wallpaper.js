//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;
let headx=65;
let heady=55;
let angle=22;
let armLX=55;
let armLY=100;
let eyesize=15
let stomachsize=100
var expression=13
var Shift = 40
var shiftY =-15
var bananaX = -35
var bananaY= 35
let gorillaamount=0
let BB1= true
let BB2= false
let gorillaangry=false
let justbananas=true

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  //pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(0, 205, 60); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
if(justbananas==true){
  push()
scale(-1,1)
translate(-132,30)
bananabunchbrown()
pop()
gorillaposeA()
  
  push()
translate(65,-65)
bananabunchbrown()
pop()}
  if(gorillaangry==true){
  push()
  gorillaposeB()
  pop()
}
if(gorillaamount==4){
scale(0.5)
push()
translate(200,0)
scale(-1,1)
gorillaposeB()
pop()
push()
translate(190,0)
gorillaposeB()
pop()
push()
translate(200,185)
scale(-1,1)
gorillaposeB()
pop()
push()
translate(190,185)
gorillaposeB()
pop()
}
if(gorillaamount==3){
if(BB1==true){
push()
translate(65,-65)
bananabunchbrown()
pop()

scale(0.5)
push()
translate(40,0)
gorillaposeA()
pop()
push()
translate(190,185)
gorillaposeB()
pop()
push()
translate(200,185)
scale(-1,1)
gorillaposeB()
pop()}
else{
push()
translate(65,-65)
bananabunchyellow()
pop()

scale(0.5)
push()
scale(-1,1)
translate(-185,0)
gorillaposeA()
pop()
push()
translate(190,185)
gorillaposeB()
pop()
push()
translate(200,185)
scale(-1,1)
gorillaposeB()
pop()}}

if(gorillaamount==2){
if(BB1==true){
push()
translate(65,-65)
bananabunchbrown()
pop()


push()
scale(0.5)
translate(40,0)
gorillaposeA()
pop()}
else{
  push()
translate(65,-65)
bananabunchyellow()
pop()

push()
scale(0.5)
scale(-1,1)
translate(-185,0)
gorillaposeA()
pop()}

if(BB2==true){
  //turning bananas brown
push()
scale(-1,1)
translate(-132,30)
bananabunchbrown()
pop()

push()
scale(0.5)
scale(-1,1)
translate(-370,170)
gorillaposeA()
pop()}}
//gorillas dont like brown bananas.
//the else intended for here didnt work and I ran out of time
}


function gorillaposeA(){
fill(80);
stroke(80,80,80);

//stomach
push()
translate(30,0)
rotate(20)
ellipse(100,100,75,stomachsize)
pop()
push()
translate(50,-40)
rotate(15)
fill(0, 205, 60)
stroke(0, 205, 60)
ellipse(100,100,100,60)
pop()


fill(50);
stroke(50,50,50);
//leftforearm
push();
translate(-6,18);
rotate(8);
ellipse(45,130,25,60);
pop();

// rightforearm
push();
translate(-03,18);
rotate(8);
ellipse(100,123,25,60);
pop();

//butt
push();
translate(-15,20);
rotate(350);
ellipse(120,140,30,50);
pop();

//foot
push();
translate(-33,105);
rotate(335);
ellipse(130,130,22,35);
pop();

fill(80);
stroke(50,50,50);

//fists
rect(07,173,23,12)
rect(65,173,23,12)
rect(132,175,21,10)

fill(50);
stroke(50,50,50);
//leftbicep
push();
translate(5,0);
rotate(16);
ellipse(armLX,armLY,30,65);
pop();
fill(80);
stroke(80,80,80);

//chest
push()
translate(-35,20)
rotate(340)
ellipse(60,110,70,stomachsize-10)
pop()


fill(50);
stroke(50,50,50);
ellipse(headx-15,heady+18,50,50)
ellipse(headx-17,heady+10,40,40)
//head
push();
rotate(angle);
ellipse(headx,heady,40,55);
pop();

//right bicep
push();
translate(5,0);
ellipse(75,110,35,70);
pop();

fill(80);
stroke(80,80,80);
//face
ellipse(headx-32,heady+30,25,27)
ellipse(headx-38,heady+19,12,13)
ellipse(headx-30,heady+18,12,13)

fill (250);
stroke (250,250,250);
//mouth
ellipse(31,90,10,expression)

//eyes
ellipse(headx-38,heady+19,eyesize,eyesize)
ellipse(headx-30,heady+18,eyesize,eyesize)
//pupils
fill(0)
stroke(0,0,0)
ellipse(headx-37.8,heady+19.5,eyesize/5*4,eyesize/5*4)
ellipse(headx-30.5,heady+18.5,eyesize/5*4,eyesize/5*4)

}


function gorillaposeB(){
fill(50);
stroke(50,50,50);

//butt
push();
translate(-50,80);
rotate(330);
ellipse(120,140,30,50);
pop();
//buttL
push();
translate(55,-40);
rotate(35);
ellipse(120,140,30,50);
pop();

//foot
push();
translate(50,0);
rotate(20);
ellipse(130,130,22,35);
pop();
//footL
push();
translate(-105,121);
rotate(330);
ellipse(130,130,22,35);
pop();
fill(80);
stroke(80,80,80);

//stomach
push()
translate(0,10)
rotate(0)
ellipse(100,100,55,stomachsize)
pop()
push()
translate(50,-40)
rotate(15)
pop();
fill(50);
stroke(50,50,50);

//leftbicep
push();
translate(45,-32);
rotate(45);
ellipse(armLX+Shift,armLY+shiftY,25,60);
pop();
fill(80);
stroke(80,80,80);

//chest
push();
translate(-30,22);
rotate(340);
ellipse(60+Shift,110+shiftY,70,stomachsize-10);
pop();


//head
push();
fill(0, 205, 60);
stroke(0, 205, 60);
ellipse(140,40,65,65);
pop();
fill(50);
stroke(50,50,50);
ellipse(headx+Shift-15,heady+shiftY+18,50,50);
ellipse(headx+Shift-17,heady+shiftY+10,40,40);

//head
push();
rotate(angle);
ellipse(headx+Shift-6,heady+shiftY-12,40,55);
pop();

//right bicep
push();
translate(-3,138);
rotate(300);
ellipse(75+Shift,110+shiftY,33,65);
pop();

push();
fill(80);
stroke(80,80,80);
//face 
ellipse(headx+Shift-32,heady+shiftY+30,25,27)
ellipse(headx+Shift-38,heady+shiftY+19,12,13)
ellipse(headx+Shift-30,heady+shiftY+18,12,13)
pop();

fill (250);
stroke (250,250,250);
//mouth
ellipse(31+Shift,90+shiftY,10,expression)

//eyes
ellipse(headx+Shift-38,heady+shiftY+19,eyesize,eyesize)
ellipse(headx+Shift-30,heady+shiftY+18,eyesize,eyesize)
//pupils
fill(0)
stroke(0,0,0)
ellipse(headx+Shift-37.8,heady+shiftY+19.5,eyesize/5*4,eyesize/5*4)
ellipse(headx+Shift-30.5,heady+shiftY+18.5,eyesize/5*4,eyesize/5*4)

//forearm
fill(50);
stroke(50,50,50);
ellipse(53,110,50,20)

ellipse(130,104,60,20)

fill(80);
stroke(50,50,50);
rect(97,95,13,20)
rect(70,100,13,20)


rect(65,173,23,12)
rect(115,173,23,12)

}

function bananabunchyellow(){
//yellowbananabunch
bananayellow()
push()
translate(-15,20)
rotate(350)
bananayellow()
pop()
push()
translate(-30,50)
rotate(335)
bananayellow()
pop()
}

//brownbananabunch
function bananabunchbrown(){
bananabrown()
push()
translate(-15,20)
rotate(350)
bananabrown()
pop()
push()
translate(-30,50)
rotate(335)
bananabrown()
pop()
}

//individualyellow banana
function bananayellow(){

fill(255,255,0);
stroke(255,255,0);
curve (40,20,90,100,70,133,10,140)
push()
translate(-29,4)
rotate(340)
ellipse(50,150,25,10)
pop ()
push()
translate(-65,55)
rotate(310)
ellipse(50,150,30,6)
pop ()

push()
fill(95,42,42)
stroke(95,42,42)
translate(8,-20)
rotate(10)
rect(100,100,4,8)
pop()}
//brown banana
function bananabrown(){

fill(61, 38, 4);
stroke(61, 38, 4);
curve (40,20,90,100,70,133,10,140)
push()
translate(-29,4)
rotate(340)
ellipse(50,150,25,10)
pop ()
push()
translate(-65,55)
rotate(310)
ellipse(50,150,30,6)
pop ()

push()
fill(33, 22, 5)
stroke(33, 22, 5)
translate(8,-20)
rotate(10)
rect(100,100,4,8)
pop()


}

