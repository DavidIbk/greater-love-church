// DEBIT CARD PAYMENT (DONATION PAGE)
//Getting all required elements
var debitCardButton = document.querySelectorAll(".donation-section .display-grid-payment-type .form-group input[type='radio']");
var debitCardOptions = document.querySelector(".debit-card-payment");
var paypalOption = document.querySelector(".paypal-payment");

function showDebitCardOptions() {

  for (var i = 0; i < debitCardButton.length; i++) {
    debitCardButton[i].addEventListener("click", function() {
      var values = this.id;
      if (values === "debit-card") {
        debitCardOptions.classList.toggle("debit-card-payment-active");
        paypalOption.classList.remove("paypal-payment-active");
      } else if (values === "paypal") {
        paypalOption.classList.toggle("paypal-payment-active");
        debitCardOptions.classList.remove("debit-card-payment-active");
      }
    });
  }
}

showDebitCardOptions();


function customAmount() {
  const customAmountField = document.querySelector(".display-grid .form-group #custom");
  if (!customAmountField) return;
  customAmountField.addEventListener("focus", function(){
    const currentAmount = document.querySelectorAll(".display-grid .form-group input[type='radio']");
    for (var i = 0; i < currentAmount.length; i++) {
      if (currentAmount[i].checked) {
        currentAmount[i].checked = false;
      }
    }

  });
}


customAmount();



//NAVBAR SLIDE FUNCTIONS

function navSlide() {
  var burger = document.querySelector(".burger"); //This gets the burger ICON
  var nav = document.querySelector(".nav-links"); //this gets all the nav-links and the button too
  var navLinks = document.querySelectorAll(".nav-links li"); //this gets all the items inside our navbar; the links and the button

  //TOGGLE OUR NAVBAR (I.E. INVOKE DROPDOWN)
  burger.addEventListener("click", function() {
    nav.classList.toggle("nav-active"); //this code instructs the browser to add the class, "nav-active" to the nav-links (because it is that class that has transform: translateX(100%) ) when the burger is clicked, therefore bringing the dropdown back onscreen.

    //ANIMATING OUR NAVLINKS INTO THE DROPDOWN (Here we make reference to our @keyframes)
    navLinks.forEach((link, index) => { //This syntax just means that we are creating a function that will apply to each nav-links list item and button. Index = 9 (number of links plus button)
      if (link.style.animation) {
        link.style.animation = "" //if the links already have animation, then we leave them as they are but if they don't, then the code below runs
      } else {
        link.style.animation = "navLinkFade 0.5s ease forwards 0.5s"; //Basically, the code here implements the CSS's navLinkFade animation. Just ensure to type it in the way it is. 0.5s stands for the speed with which the links come to the center. forwards makes the links stay (with backwards they disappear after showing). ease has no noticeable function and 1s is the time that pass before the links appear.
      }
    });

    //ANIMATING OUR BURGER ICON UPON BEING CLICKED
    burger.classList.toggle("toggle");

  });



}

navSlide(); //This invokes the function above


//ANIMATION SECTION
//INDEX.HTML PAGE
//ANIMATNG OUR LAST WEEK SERMON SECTION UPON SCROLL
window.addEventListener("scroll", () => {
  let content = document.querySelector(".last-week-sermon");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight * 1.2;

  if (contentPosition < screenPosition) {
    content.classList.add("last-week-sermon-active");

  }
})


//ANIMATING TESTIMONIALS UPON SCROLL
window.addEventListener("scroll", () => {
  let content2 = document.querySelectorAll(".up-and-down-animation");
  let content2PositionI = content2[0].getBoundingClientRect().top;
  let content2PositionII = content2[1].getBoundingClientRect().top;
  let content2PositionIII = content2[2].getBoundingClientRect().top;
  let content2PositionIV = content2[3].getBoundingClientRect().top;
  let content2PositionV = content2[4].getBoundingClientRect().top;
  let content2PositionVI = content2[5].getBoundingClientRect().top;

  let screen2Position = window.innerHeight * 1.1;

  if (content2PositionI < screen2Position) {
      content2[0].classList.add("up-and-down-animation-active");
  }
  if (content2PositionII < screen2Position) {
      content2[1].classList.add("up-and-down-animation-active");
  }
  if (content2PositionIII < screen2Position) {
      content2[2].classList.add("up-and-down-animation-active");
  }
  if (content2PositionIV < screen2Position) {
      content2[3].classList.add("up-and-down-animation-active");
  }
  if (content2PositionV < screen2Position) {
      content2[4].classList.add("up-and-down-animation-active");
  }
  if (content2PositionVI < screen2Position) {
      content2[5].classList.add("up-and-down-animation-active");
  }
})

//ANIMATING ABOUT OUR PASTOR ON ABOUT HTML PAGE
window.addEventListener("scroll", () => {
  let content3 = document.querySelector(".left-animation");
  let content4 = document.querySelector(".right-animation");
  let content3Position = content3.getBoundingClientRect().top;
  let content4Position = content4.getBoundingClientRect().top;

  let screen2Position = window.innerHeight * 1.1;

  if (content3Position < screen2Position) {
      content3.classList.add("left-animation-active");
  }
  if (content4Position < screen2Position) {
      content4.classList.add("right-animation-active");
  }
});


//CREATING AN IMAGE GALLERY LIGHTBOX FOR OUR GALLERY SECTION
//getting all required elements
const gallery = document.querySelectorAll(".image"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon"),
  currentImg = previewBox.querySelector(".current-img"),
  totalImg = previewBox.querySelector(".total-img"),
  shadow = document.querySelector(".shadow");

window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length; //passing total img length to totalImg variable
    let newIndex = i; //passing i value to newIndex variable
    let clickedImgIndex; //creating new variable

    gallery[i].onclick = () => {
      clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
      function preview() {
        currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
        let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
        previewImg.src = imageURL; //passing user clicked img url in previewImg src
      }
      preview(); //calling above function

      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if (newIndex == 0) { //if index value is equal to 0 then hide prevBtn
        prevBtn.style.display = "none";
      }
      if (newIndex >= gallery.length - 1) { //if index value is greater and equal to gallery length by -1 then hide nextBtn
        nextBtn.style.display = "none";
      }
      prevBtn.onclick = () => {
        newIndex--; //decrement index
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview();
          nextBtn.style.display = "block";
        }
      }
      nextBtn.onclick = () => {
        newIndex++; //increment index
        if (newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      }
      document.querySelector("body").style.overflow = "hidden";
      previewBox.classList.add("show");
      shadow.style.display = "block";
      closeIcon.onclick = () => {
        newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
        document.querySelector("body").style.overflow = "scroll";
      }
    }

  }
}
