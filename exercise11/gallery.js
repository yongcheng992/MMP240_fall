var num = 0;

//Replace with your own values and add additional lines for more images
imgArray = [
  ['image/slide1'],
  ['image/slide2'],
  ['image/slide3'],
  ['image/slide4']
]

//Function called by clicking on 'next' link
//Replace id name with the id name you gave to the img
function slideshowUp() {
  num++;
  num = num % imgArray.length;
  document.getElementById('mypic').src=imgArray[num];
}

//Function called by clicking on 'previous' link
function slideshowBack() {
  num--;
  if (num < 0) {num=imgArray.length-1;}
  num = num % imgArray.length;
  document.getElementById('mypic').src=imgArray[num];
}
