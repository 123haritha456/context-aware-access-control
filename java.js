window.onload = function(){
  if(sessionStorage.getItem("identity")){
    let identity = sessionStorage.getItem("identity");
    let device = sessionStorage.getItem("device");
    let location = sessionStorage.getItem("location");
    let risk = sessionStorage.getItem("risk");
    let decision = sessionStorage.getItem("decision");

    document.getElementById("identity").innerText = identity;
    document.getElementById("device").innerText = device;
    document.getElementById("location").innerText = location;
    document.getElementById("decision").innerText = decision;

    // Animate Risk Meter
    let circle = document.querySelector(".circle");
    let text = document.getElementById("riskText");

    // Risk % based on Low/Medium/High
    let riskVal = (risk==="Low")?30:(risk==="Medium")?60:100;

    let radius = 15.9155; // as per SVG circle
    let circumference = 2 * Math.PI * radius;

    circle.setAttribute("stroke-dasharray", `0 ${circumference}`); // start from 0
    let progress = 0;

    let interval = setInterval(function(){
      if(progress > riskVal){
        clearInterval(interval);
      } else {
        let dash = (progress/100)*circumference;
        circle.setAttribute("stroke-dasharray", `${dash} ${circumference}`);
        text.innerText = progress + "%";
        progress++;
      }
    },20);

  } else {
    window.location.href="login.html";
  }
}