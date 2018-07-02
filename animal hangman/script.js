const animals=["panda","hippo","mouse","lions","bears","birds","puppy","snake","crane","tiger","lemur","shark","foxes","ducks","goose","zebra","horse","camel","mouse","sheep","moose","rhino","snail","koala","otter","bison","sloth","llama","macaw","hyena","gecko","bongo","okapi","tapir"];
function play(){
let num = Math.round(Math.random()*14);
let sub=document.getElementById("sub");
let animal=animals[num];
let match=0;
let lifes=7;
sub.addEventListener("click",function(){
    match=0;
// e.preventDefault();
//     temp.innerHtml="<button id='button'>restart</button>";
    console.log(animal);
    if(lifes===0){}
    else{
      let letterg=document.getElementById("input").value;
      for(let i =0;i<animal.length;i++){
        if(letterg===animal[i]) {
          match=1;
          if(i===0){document.getElementById("first").innerHTML=letterg;}
          if(i===1){document.getElementById("second").innerHTML=letterg;} 
          if(i===2){document.getElementById("third").innerHTML=letterg;} 
          if(i===3){document.getElementById("fourth").innerHTML=letterg;} 
          if(i===4){document.getElementById("fith").innerHTML=letterg;}
        }
      }
      if(match===1){}else{
        document.getElementById("wrong").innerHTML+=letterg;
        lifes--;
        console.log(lifes);
        document.getElementById("lifes").innerHTML=lifes;
      }
    }
 
});
}
//let restart =id("button");
//eventListner(restart,"click",function(){
// innerHtml(classname("letter"),"_");
// play();
// });
