//https://teachablemachine.withgoogle.com/models/POjIvD4qz/





Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById('camera');

Webcam.attach("camera");



function capture(){

    Webcam.snap(function(data_uri){
        document.getElementById("photo").innerHTML  = "<img id='captured_image' src='"+data_uri+"'/>";
    });
}
console.log('ml5 version',ml5.version);


classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/POjIvD4qz/model.json",modelLoaded);

function modelLoaded(){
    console.log("model is Loaded");
}



function  identify(){
    img = document.getElementById('captured_image');
    console.log("i am here");
    classifier.classify(img,gotResult);
    
}
function gotResult(error,results){
   if(error){
       console.log("i am here");
       console.log(error);
   }
   else{
       console.log(results);
       document.getElementById("object").innerHTML = results[0].label;
       document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
   }
   
}
