let bar = document.querySelector(".complete-bar");
var counter = 1;
let steps = document.querySelectorAll(".step");

function complete() {
    if(counter==steps.length){
        steps[counter-1].innerHTML=`<i class="fa-solid fa-check"></i>`;
    steps[counter-1].classList.add("complete-step");
counter++}
    if (counter <= (steps.length-1)) {
        bar.style.width = (counter / (steps.length-1)) * 100 + "%";
        steps[counter-1].innerHTML=`<i class="fa-solid fa-check"></i>`;
        steps[counter - 1].classList.add("complete-step");
        counter++;
    }
    console.log(counter);
}

function previous() {
    if (counter > 0) {
        if(counter!=1) 
        counter--;
        bar.style.width = ((counter-1)/ (steps.length-1)) * 100 + "%";
        steps[counter-1].innerHTML=`<i class="fa-solid fa-xmark"></i>`;
        steps[counter - 1].classList.remove("complete-step");
    }
    console.log(counter);
}
let slides = document.querySelectorAll(".slide");
// console.log(slides);
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
slides.forEach((slide) => {
    slide.style.transform = `translateX(-${2 * 100+5}%)`;
  });
  document.querySelector(".form-container").style.display="block"
function goright() {
    // console.log("right");
    if(counter>steps.length-1)
        return;
    shiftright();
    complete();
    godown();
}
function goleft() {
    //   console.log("left");
    if(counter==1)
        return;
    shiftleft();
    previous();
    goup();
  }
  function shiftright() {
    let slidearray = document.querySelectorAll(".slide");
    let first = slidearray[0];
    let parent = first.parentElement;
    parent.removeChild(first);
    parent.appendChild(first);
    slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });
  }
  function shiftleft() {
    let slidearray = document.querySelectorAll(".slide");
    let last = slidearray[slides.length - 1];
    let parent = last.parentElement;
    parent.removeChild(last);
    parent.insertBefore(last, slidearray[0]);
    // console.log(parent);
    slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });
  }

let content = document.querySelectorAll(".content-page");
// console.log(content);
content.forEach((slide, index) => {
  slide.style.top = `${index * 100}%`;
});
content.forEach((slide) => {
    slide.style.transform = `translateY(-${2 * 100}%)`;
  });
  document.querySelector(".details").style.display="block"
function godown() {
    // console.log("down");
    shiftdown();
}
function goup() {
    //   console.log("up");
    shiftup();
  }
  function shiftdown() {
    let slidearray = document.querySelectorAll(".content-page");
    let first = slidearray[0];
    let parent = first.parentElement;
    parent.removeChild(first);
    parent.appendChild(first);
    content = document.querySelectorAll(".content-page");
    content.forEach((slide, index) => {
      slide.style.top = `${index * 100}%`;
    });
  }
  function shiftup() {
    let slidearray = document.querySelectorAll(".content-page");
    let last = slidearray[content.length - 1];
    let parent = last.parentElement;
    parent.removeChild(last);
    parent.insertBefore(last, slidearray[0]);
    // console.log(parent);
    content = document.querySelectorAll(".content-page");
    content.forEach((slide, index) => {
      slide.style.top = `${index * 100}%`;
    });
  }
  function submit(){
    document.querySelector(".content-container").classList.add("swap")
    steps[steps.length-1].classList.add("complete-step");
    steps[steps.length-1].innerHTML=`<i class="fa-solid fa-check"></i>`;
    setTimeout(() => {
      document.querySelector(".content-container").style.transform=`translateY(200%)`;
      document.querySelector(".processBar-container").style.transform=`translateY(-400%)`;
      setTimeout(() => {
        document.querySelector(".content-container").style.display="none";
        document.querySelector(".processBar-container").style.display="none";
        document.querySelector(".container").style.display="none";
        setTimeout(() => {
          document.querySelector(".main-container").innerHTML=`
          <div id="navbar" class="navbar">
        <div class="logo">
            <h2>Borcelle.</h2>
        </div>
        <div class="menu">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
        </div>
        <div class="buttons">
            <button>Login</button>
            <button>Sign Up</button>
        </div>
    </div>
    <div id="hero" class="hero">
        <h1>Welcome to Borcelle</h1>
        <p>Your trusted partner for digital solutions</p>
        <button>Get Started</button>
    </div>`
    setTimeout(() => {
        document.getElementById("navbar").classList.add("show-navbar");
          document.getElementById("hero").classList.add("show-hero");
      }, 1);
      }, 700);
      }, 900);
    }, 1000);

  }
