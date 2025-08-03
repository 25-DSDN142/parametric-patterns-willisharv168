//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;
let headx=65;
let heady=55;
let angle=22;
let armLX=55;
let armLY=100;
let eyesize=6
let stomachsize=70
let expression=2

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(0, 205, 60); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 


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


fill(80);
stroke(80,80,80);

//fists
rect(07,173,23,12)
rect(65,173,23,12)
rect(132,175,21,10)


}

