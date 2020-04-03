const carousel = () => {
  const carousel = {};

  carousel.setup = () => {
    carouselLeft = document.querySelector('.carousel-left');
    carouselRight = document.querySelector('.carousel-right');
    carouselLeft.addEventListener( 'click', function(){ carousel.left() }, false );
    carouselRight.addEventListener( 'click', function(){ carousel.right() }, false );
  };

  carousel.left = () => {
    carouselDiv = document.querySelector('.carousel');
    carouselStyle = getComputedStyle(carouselDiv);
    currentPosition = carouselStyle.transform;
    let currentPositionValue = parseFloat(currentPosition.split(',')[4]); //Extract current computed transformX value from matrix
    if ( (currentPositionValue%500)==0 || (currentPositionValue==0) ) {
      newPositionValue = (currentPositionValue + 500);
      if ( (newPositionValue>= -1000 && newPositionValue<= 0 ) ) {
        carouselDiv.style.setProperty( 'transform', 'translateX('+newPositionValue+'px)' );
      };
    };
  };

  carousel.right = () => {
    carouselDiv = document.querySelector('.carousel');
    carouselStyle = getComputedStyle(carouselDiv);
    currentPosition = carouselStyle.transform;
    let currentPositionValue = parseFloat(currentPosition.split(',')[4]); //Extract current computed transformX value from matrix
    if ( (currentPositionValue%500)==0 || (currentPositionValue==0) ) {
      newPositionValue = (currentPositionValue - 500);
      if ( (newPositionValue>= -1000 && newPositionValue<= 0 ) ) {
        carouselDiv.style.setProperty( 'transform', 'translateX('+newPositionValue+'px)' );
      };
    };
  };

  carousel.setup();
  return carousel;
};

carousel();
