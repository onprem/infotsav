export const parallax = () => {

    // ------------- VARIABLES ------------- //
    let ticking = false;
    let isFirefox = (/Firefox/i.test(navigator.userAgent));
    let isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
    let scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
    let slideDurationSetting = 600; //Amount of time for which slide is "locked"
    let currentSlideNumber = 0;
    let totalSlideNumber = document.getElementsByClassName("background").length;

  // ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
  function parallaxScroll(evt) {
    var delta;
    if (isFirefox) {
      //Set delta for Firefox
      delta = evt.detail * (-120);
    } else if (isIe) {
      //Set delta for IE
      delta = -evt.deltaY;
    } else {
      //Set delta for all other browsers
      delta = evt.wheelDelta;
    }

    if (ticking != true) {
      if (delta <= -scrollSensitivitySetting) {
        //Down scroll
        ticking = true;
        if (currentSlideNumber !== totalSlideNumber - 1) {
          currentSlideNumber++;
          nextItem();
        }
        slideDurationTimeout(slideDurationSetting);
      }
      if (delta >= scrollSensitivitySetting) {
        //Up scroll
        ticking = true;
        if (currentSlideNumber !== 0) {
          currentSlideNumber--;
        }
        previousItem();
        slideDurationTimeout(slideDurationSetting);
      }
    }
  }

  // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
  function slideDurationTimeout(slideDuration) {
    setTimeout(function() {
      ticking = false;
    }, slideDuration);
  }

  // ------------- ADD EVENT LISTENER ------------- //
  var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
  window.addEventListener(mousewheelEvent, parallaxScroll, false);

  // ------------- SLIDE MOTION ------------- //
  function nextItem() {
    var $previousSlide = document.getElementsByClassName("background")[currentSlideNumber-1];
    $previousSlide.classList.remove("up-scroll");
    $previousSlide.classList.add("down-scroll");
  }

  function previousItem() {
    var $currentSlide = document.getElementsByClassName("background")[currentSlideNumber];
    $currentSlide.classList.add("up-scroll");
    $currentSlide.classList.remove("down-scroll");
  }
  }
