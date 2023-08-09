git puconst colorSite = document.getElementById("header-container");
colorSite.style.backgroundColor = "green";

const colorSite2 = document.querySelector(".emergency-tasks");
colorSite2.style.backgroundColor = "orange";


const colorSite3 = document.querySelectorAll(".emergency-tasks h3");
  for (let i = 0; i < colorSite3.length; i += 1) {
  colorSite3[i].style.backgroundColor = "purple";
}

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = "yellow";

const noEmergencyTasksH3 = document.querySelectorAll('.no-emergency-tasks h3');
  for (let i = 0; i < noEmergencyTasksH3.length; i += 1) {
    noEmergencyTasksH3[i].style.backgroundColor = "black";
}

const footerStyle = document.getElementById("footer-container");
footerStyle.style.backgroundColor = "darkgreen"