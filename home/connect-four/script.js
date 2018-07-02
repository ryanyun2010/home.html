let winnert = 0;
let id = function (id) {
  return document.getElementById(id);
}
let tag = function (tag) {
  return document.getElementsByTagName(tag);
}
let doc = document;
let eventListner = function (ele, listner, func) {
  ele.addEventListener(listner, func);
}
let innerHtml = function (ele, value) {
  ele.innerHTML = value;
}
let classname = function (classnamea) {
  return document.getElementsByClassName(classnamea)
}
let cssSelectAll=function(select){
  return document.querySelectorAll(select);
}
let cssSelectOne=function(select){
  document.querySelector(select);
}

let makeimgslider4=function(){
  var slides=classname("slide");
  for(let i =0;i<slides.length;i++){
    slides[i].style.width="1000";
    slides[i].style.float="left";
    
  }
  var num=0;
  var button=document.getElementById("one");
  button.addEventListener("click",function(){
    slides[0].style.display="block";
    
  })
  var button2=document.getElementById("two");
  button2.addEventListener("click",function(){
    slides[0].style.display="none";
    slides[1].style.display="block";
    slides[2].style.display="none";
    slides[3].style.display="none";
  })
  var button3=document.getElementById("three");
  button3.addEventListener("click",function(){
    slides[0].style.display="none";
    slides[1].style.display="none";
    slides[2].style.display="block";
    slides[3].style.display="none";
  })
  var button4=document.getElementById("four");
  button4.addEventListener("click",function(){
    slides[0].style.display="none";
    slides[1].style.display="none";
    slides[2].style.display="none";
    slides[3].style.display="block";
  })

}

let col;
let turn=1;
eventListner(id("1"),"click",function(){
  col=0;
  change(col);
  if(turn===1){
    turn=2;
  }else{
    turn=1;
  }
   console.log(turn);
});
eventListner(id("2"),"click",function(){
  col=1;
  change(col); 
  if(turn===1){ 
    turn=2;
  }else{
    turn=1;
  }
});
eventListner(id("3"),"click",function(){
  col=2;
  change(col);
  if(turn===1){
    turn=2;
  }else{
    turn=1;
  }
});
eventListner(id("4"),"click",function(){
  col=3;
  change(col);
  if(turn===1){
    turn=2;
  }else{
    turn=1;
  }
});
eventListner(id("5"),"click",function(){
  col=4;
  change(col);
  if(turn===1){
    turn=2;
  }else{
    turn=1;
  }
});
eventListner(id("6"),"click",function(){
  col=5;
  change(col);
  if(turn===1){
    turn=2;
  }else{
    turn=1;
  }
});
eventListner(id("7"),"click",function(){
  col=6;
  change(col);
  if(turn===1){
    turn=2;
  }else{
    turn=1;
  }
});
var c=id("game");
var draw=c.getContext("2d");
draw.moveTo(60,200)
for(let i =1;i<9;i++){
    draw.lineTo(i*60,550);
    draw.moveTo(i*60+60,200);
}
draw.moveTo(60,200);
for(let i=200;i<600;i+=50){
  draw.lineTo(480,i);
  draw.moveTo(60,i+50);
}
draw.stroke();
let board;
let boardu;
function newBoard(){
  board=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
}

  

  
function chkLine(a,b,c,d) {
    // Check first cell non-zero and all cells match
  //console.log(a+":"+b+":"+c+":"+d)
    return ((a != 0) && (a ==b) && (a == c) && (a == d));
}

function chkWinner(bd_wrong) {
    // Check down
  
  console.log(bd_wrong);
  let bd=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
  for (r=0; r<7; r++) {
    for(c=0; c<7; c++) {
      bd[r][c] = bd_wrong[6-r][c];
    }
  }
  console.log(bd);
  
    for (r = 0; r < 4; r++){
        for (c = 0; c < 7; c++){
            if (chkLine(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c])){
                return bd[r][c];
            }
        }  
    }
    // Check right
    for (r = 0; r < 7; r++){
        for (c = 0; c < 4; c++){
            if (chkLine(bd[r][c], bd[r][c+1], bd[r][c+2], bd[r][c+3])){
                return bd[r][c];
            }
        }
    }

    // Check down-right
    for (r = 0; r < 4; r++){
        for (c = 0; c < 4; c++){
          if(r===3){
                console.log("r3 . "+bd[r][c]+":"+bd[r+1][c+1]+":"+bd[r+2][c+2]+":"+bd[r+3][c+3])
              }
            if (chkLine(bd[r][c], bd[r+1][c+1], bd[r+2][c+2], bd[r+3][c+3])){
                return bd[r][c];
              
            }
        }
    }

    // Check down-left
    for (r = 4; r < 7; r++){
        for (c = 0; c < 4; c++){
            if (chkLine(bd[r][c], bd[r-1][c+1], bd[r-2][c+2], bd[r-3][c+3])){
                return bd[r][c];
            }
        }
    }

    return 0;
}


let change =function(x){
 if(winnert===0){
  let y=0;
  for(let i =0;i<7;i++){
    if(board[i][x]===0){
      break;
    }else{
      y++;
    }
  }
 

 /* 
    winner(y-1,x); 
  /*
    num=1;
    t=0;
    winner(y+1,x);
    num2=1;
    num =1;
    t=0;
    winner(y,x-1);
    t=0;
    num=1;
    winner(y,x+1);
    t=0;
    num2=1;
    num =1;
    winner(y+1,x+1);
    t=0;
    num=1;
    winner(x-1,y-1)
    t=0;
    num2=1;
    num=1;
    winner(y-1,x+1);
    t=0;
    num=1;
    winner(y+1,x-1);
    */
  board[y][x]=turn;
  if(turn===1){
     draw.fillStyle = "#00ffff";
    //console.log("work")
    draw.fillRect(x*60+60+1,500-y*50+1,58,48);
    
  } 
  if(turn===2){
     draw.fillStyle = "#ff0000";
    //console.log("work")
    draw.fillRect(x*60+60+1,500-y*50+1,58,48);
    
  }
   //console.log(board);
  
   if(chkWinner(board)===0){}else{
      if(chkWinner(board)===1){
            document.getElementById("p1").style.display="block";
        winnert=1;
        
      }
  else{
    document.getElementById("p2").style.display="block";
    winnert=1;
  }
  
   }
  }
  
}
  
newBoard();
