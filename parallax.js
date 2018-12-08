function openSM(){
  document.getElementById("mySidemenu").style.width="300px";
  document.getElementById("pg-content").style.marginleft="300px";
  document.body.sttyle.backgroundcolour="black";
}

function closeSM(){
  document.getElementById("mySidemenu").style.width="0";
  document.getElementById("pg-content").style.marginleft="0";
}

window.onscroll=function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop>20 ||
  document.documentElement.scrollTop >20) {
    document.getElementById("topbtn").style.display="block";
  } else {
    document.getElementById("topbtn").style.display="none";
  }
}

function topFunction() {
  document.body.scrollTop= 0;
  document.documentElement.scrollTop=0;
}
