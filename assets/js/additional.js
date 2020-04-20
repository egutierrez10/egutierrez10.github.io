var numOfWebsites = 5;
for(var i = 1; i <= numOfWebsites; i++){
  var modal = document.getElementById("myModal"+i);
  console.log(modal);
  var img = document.getElementById("myImg"+i);
  var modalImg = document.getElementById("img"+i);
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  var span = document.getElementsByClassName("close")[1];
  span.onclick = function() { 
    modal.style.display = "none";
  }
}
/*var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img1");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var img1 = document.getElementById("myImg1");
var modalImg1 = document.getElementById("img2");
img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
span1.onclick = function() { 
  modal1.style.display = "none";
}*/