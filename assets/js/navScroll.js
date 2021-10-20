let scrollpos = window.scrollY
const softwareDevButton = document.getElementById("softwareDevButton")
softwareDevButton.classList.add("active");
const graphicDesignButton = document.getElementById("graphicDesignButton")
const graphicDesignSectionPos = document.getElementById("graphicDesign").offsetTop - document.getElementById("graphicDesign").scrollTop + document.getElementById("graphicDesign").clientTop

const navBar = document.getElementById('nav')

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if(scrollpos < graphicDesignSectionPos){
     softwareDevButton.classList.add("active");
     graphicDesignButton.classList.remove("active");
  }
  else {
    graphicDesignButton.classList.add("active");
    softwareDevButton.classList.remove("active");
  }
})

function scrollToSection(sectionId){

var  section = document.getElementById(sectionId);//section.scrollIntoView(true)

window.scrollTo(0,getYPosition(section) - navBar.offsetHeight)
console.log( 'offsettop:  ' + section.offsetTop)
console.log( 'scroll:  ' + scrollpos)
}

function getYPosition(element) {
  var yPosition = 0;
  while(element) {
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
      element = element.offsetParent;
  }
  return yPosition;
}