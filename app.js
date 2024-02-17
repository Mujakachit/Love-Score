
//  javascript for toggle menu 

var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";

}

function hideMenu() {
  navLinks.style.right = "-200px";

}


// Love score claculations

let heart = "❤️";

function calculateLoveScore() {
    const yourName = document.getElementById('yourName').value;
    const partnerName = document.getElementById('partnerName').value;

    if (yourName && partnerName) {
        const loveScore = Math.floor(Math.random() * 101); // Generates a random love score between 0 and 100
        const result = `❤️❤️${yourName} and ${partnerName} have a love score of ${loveScore}%❤️❤️`;
        document.getElementById('result').innerText = result;
    } else {
        alert("Please enter both names.");
    }
}

// slide show

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment slideIndex and reset if needed
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Display the current slide immediately
  slides[slideIndex - 1].style.display = "block";

  // Call showSlides function again after 2 seconds (adjust as needed)
  setTimeout(showSlides, 7000);
}

function prevSlide() {
  // Move to the previous slide
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = document.getElementsByClassName("mySlides").length;
  }
  showSlides();
}

function nextSlide() {
  // Move to the next slide
  slideIndex++;
  if (slideIndex > document.getElementsByClassName("mySlides").length) {
    slideIndex = 1;
  }
  showSlides();
}

