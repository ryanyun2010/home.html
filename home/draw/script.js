
// ctx.moveTo(10,10);
// ctx.lineTo(100,10);

// ctx.beginPath();

// var circle = ctx.arc(50,50,50,0,2*Math.PI);

// ctx.stroke();
// c.addEventListener("click",function(e){
//     ctx.moveTo(e.clientX,e.clientY);
//     console.log(e.clientX+", "+e.clientY);
    
//     c.addEventListener("mouseup",function(event){
//         console.log(e.clientX+", "+e.clientY);
//         ctx.lineTo(event.clientX,event.clientY);
//         ctx.stroke();
//     })
    
// })
    let colorv="white";
    // 1. Find and store the element we want to listen to events on.
    let face = document.getElementById("canvas-div");
    // 2. Define the function that will respond to the event.
    let onMouseMove = function(event) {
        console.log(event);   
        let beard = document.createElement("div");
        beard.className = "beard";
        document.body.appendChild(beard);
        beard.style.background=colorv;
        beard.style.top = event.clientY + "px";
        beard.style.left = event.clientX + "px";
        
    };
    // 3. Add the event listener for the element and function
    face.addEventListener("mousemove", function(e){onMouseMove(e);});
    const color=document.getElementById("color");
    color.addEventListener("click",function() {
        colorv=prompt("color");
    })