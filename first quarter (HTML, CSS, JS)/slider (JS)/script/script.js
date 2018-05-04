

function init() {
    var slider = document.querySelector('.slider'),
        arrow_left = document.querySelector ('.arrow__left'),
        arrow_right = document.querySelector ('.arrow__right');
    slider.addEventListener('click', changeActivePicture);
    arrow_left.addEventListener('click', prevImage);
    arrow_right.addEventListener('click', nextImage);
}


    var bigImage = document.createElement('img');

var getActivePicture = function (image) {
    var findAtiveImage = document.querySelector('.slider__img_active'),
        appDiv = document.querySelector('.show-full-img'),
        smallImg = findAtiveImage.src,
        srcArr = smallImg.split('/'),
        smallImgName = srcArr[srcArr.length -1],
        bigImgScr = 'image/big/' + smallImgName;
    bigImage.src = bigImgScr;
    appDiv.appendChild(bigImage);
}

getActivePicture();

function changeActivePicture (event) {
  var classImage = event.target.classList,
      findAtiveImage = document.querySelector('.slider__img_active');
  if (classImage == 'slider__img') {
    classImage.add('slider__img_active');
    findAtiveImage.classList.remove('slider__img_active');
  }
  getActivePicture();
}

var allImage = document.querySelectorAll ('.slider__img');

function prevImage (event) {
  for (var i=0, len=allImage.length; i<len; i++) {
    var image = allImage[i].classList;
    if (image == 'slider__img slider__img_active' ) {
      image.remove ('slider__img_active');
      if ( i == 0 ) {
        allImage[--len].classList.add('slider__img_active');
      } else {
        allImage[--i].classList.add('slider__img_active');
      }
      getActivePicture();
    }
  }
}

function nextImage (event) {
  for (var i=0, len=allImage.length; i<len; i++) {
    var image = allImage[i].classList;
    if (image == 'slider__img slider__img_active' ) {
      image.remove ('slider__img_active');
      if ( i == len-1 ) {
        allImage[0].classList.add('slider__img_active');
      } else {
        allImage[++i].classList.add('slider__img_active');
      }
      getActivePicture();
    }
  }
}

window.onload = init;
