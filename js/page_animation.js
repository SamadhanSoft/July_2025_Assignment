/*Page Loader*/

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
  document.body.classList.remove("hidden");
});


//secCompletePayment

function pageFirstAnimation() {
  var tl = gsap.timeline();
  tl.from("header h1, nav ul li", {
    y: -30,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.1
  });
  tl.from("#secCompletePayment .left-sec h4, #secCompletePayment .left-sec h2, #secCompletePayment .left-sec p", {
    x: -100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
  });
  tl.from("#secCompletePayment .btn", {
    x: -5,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
    onComplete: () => {
      document.querySelectorAll("#secCompletePayment .btn").forEach(btn => {
        btn.style.opacity = "1";
      });
    }
  });
  tl.from("#secCompletePayment .right-sec img", {
    x: 100,
    opacity: 0,
    duration: 0.8
  }, "-=0.6");
}

pageFirstAnimation();

// animation - secPaymentProcess
function pageSecAnimation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#secPaymentProcess",
      scroller: "body",
      markers: false,
      start: "top 70%"
    }
  });

  tl2.from("#secPaymentProcess .left-sec h4, #secPaymentProcess .left-sec h2, #secPaymentProcess .left-sec p", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2
  });

  tl2.from("#secPaymentProcess .right-sec img", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5
  });
}
pageSecAnimation();

//  secSteamlinedPayout
function pageThirdAnimation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#secSteamlinedPayout",
      scroller: "body",
      markers: false,
      start: "top 70%"
    }
  });
  tl3.from("#secSteamlinedPayout .left-sec h4, #secSteamlinedPayout .left-sec h2, #secSteamlinedPayout .left-sec p, #secSteamlinedPayout .content-box", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2
  });

  tl3.from("#secSteamlinedPayout .right-sec img", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
  });

  tl3.from(".inner-section h2", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2
  });

}
pageThirdAnimation()

// secReasonsPartner
function pageFourthAnimation() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#secReasonsPartner",
      scroller: "body",
      markers: false,
      start: "top 70%"
    }
  });

  tl4.from("#secReasonsPartner .left-r", {
    x: -300,
    opacity: 0,
    duration: 2,
    delay: 0.5,
    stagger: 0.2 // reduced from 1 to 0.5
  }, "first");

  tl4.from("#secReasonsPartner .right-l", {
    x: 300,
    opacity: 0,
    duration: 2,
    stagger: 0.2 // reduced from 1 to 0.5
  }, "first");
}
pageFourthAnimation();

// secRedefiningPayment

function pageFifthAnimation() {
var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#secRedefiningPayment",
    scroller: "body",
    start: "top 70%",
    toggleActions: "play none none reverse",
    scrub: false,
  }
});
tl5.from("#secRedefiningPayment .payment-box", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: 1,
  stagger: 0.15
});
}
pageFifthAnimation();
// secPoweringPayments
function pageSixthAnimation() {
  var tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#secPoweringPayments",
      scroller: "body",
      markers: false,
      start: "top 70%"
    }
  });
  tl6.from("#secPoweringPayments .tab-panel h3, #secPoweringPayments .tab-panel p, #secPoweringPayments .tab-panel ul li", {
    x: -50,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.2
  });

  tl6.to("#secPoweringPayments .btn", {
    x: 4,
    duration: 1,
    delay: 1,
    stagger: 0.2
  })
}

pageSixthAnimation();

// secTrustedBusiness
function pageSeventhAnimation() {
  var tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: "#secPoweringPayments",
      scroller: "body",
      markers: false,
      start: "top 70%"
    }
  });
  tl7.from("#secTrustedBusiness h2", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    delay: 3,
    stagger: 0.2
  });
  tl7.from("#secTrustedBusiness .slider-box", {
    y: 60,
    opacity: 0,
    duration:0.8,
     delay:1 ,
    stagger: 0.2
  });
}
pageSeventhAnimation();

// Load sound
const bounceSound = new Audio("./sounds/click.mp3");

// Function to handle bounce + sound
function addBounc_Sound(elements) {
  elements.forEach((el) => {
    el.addEventListener("click", () => {
      // Play sound
      bounceSound.currentTime = 0;
      bounceSound.play();

      // GSAP bounce
      gsap.fromTo(el,
        { scale: 1 },
        {
          scale: 1.2,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          ease: "bounce.out"
        }
      );
    });
  });
}

// Apply to nav items
addBounc_Sound(document.querySelectorAll("nav ul li"));

// Apply to all buttons with .btn class
addBounc_Sound(document.querySelectorAll(".btn"));
// Apply to all buttons with .btn class
addBounc_Sound(document.querySelectorAll(".tab"));
