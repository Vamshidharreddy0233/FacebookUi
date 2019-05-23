// var da;
// function preload()
// {
//      da=loadJSON("data.json");
//      console.log(da);
//  }

//  function setup()
//  {
     
// createCanvas(400,400);
//  }
// function draw()
// {
//     background(0);

// fill(da.r,da.g,da.v);
// text(da.name,10,50);
// }

// var dt=fetch("./data.json")
// .then(function(resp)
// {
//     return resp.json();
// }).then(function(data)
// {
// dt=data;

// console.log(dt);
// document.getElementById("c1").innerHTML=dt.name;
// });



var promise=fetch("./data.json");

promise.then(function(resp)
{

    let dt=resp.json().
    then(function (jsDt)
{
    
    // console.log(jsDt.img);
// var x=document.querySelector(".p");
// x.innerHTML=jsDt.img;    
    // var x=document.querySelector(".d");
    //  x=document.createElement("IMG");
    //   x.setAttribute("src", "./images/srk.jpg");
    //   x.setAttribute("width", "304");
    //   x.setAttribute("height", "228");
    //   x.setAttribute("alt", "The Pulpit Rock");
    //  document.body.appendChild(x);
    //   x.innerHTML=jsDt.img;  


var x=document.getElementById("dt");
x.innerHTML=jsDt.name;
});
});
