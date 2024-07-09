//for all pages
function copyLinkToClipboard() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard! Make sure you pin the link!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

//hint button
function hintAlert() {
    alert('No hints')
}


/*Doctor female voice and consciousness*/
    document.addEventListener('DOMContentLoaded', function(){
      const doctor = document.getElementById("doctor");
      const femaleVoice = document.getElementById("female-voice");
      const consciousness = document.getElementById("consciousness");
      const doctor2 = document.getElementById("doctor2");
      const consciousness2 = document.getElementById("consciousness2");
      const doctor3 = document.getElementById("doctor3");
      const nextButton = document.getElementById("next-button");

      setTimeout(function() {
        fadeInElement(doctor);
      }, 1000);

      setTimeout(function() {
        fadeInElement(femaleVoice);
      }, 4000);

      setTimeout(function() {
        fadeInElement(consciousness);
      }, 7000);

      setTimeout(function() {
        fadeInElement(doctor2);
      }, 10000);

      setTimeout(function() {
        fadeInElement(consciousness2);
      }, 13000);

      setTimeout(function() {
        fadeInElement(doctor3);
      }, 16000);

      setTimeout(function() {
        fadeInElement(nextButton);
      }, 19000);

      function fadeInElement(element) {
        element.style.display = "inline-block";
        setTimeout(function() {
          element.style.opacity = "1";
        }, 100);
      }
    });

//Audio--------------------------
window.onload = function() {
    setTimeout(function() {
        playAudio();
    }, 3000);
}

function playAudio() {
    var audio = document.getElementById('myAudio');
    audio.play().catch(function(error) {
        console.log("Autoplay was prevented. Interaction is required.");
    }); 
}

// test
    document.addEventListener('DOMContentLoaded', function(){
      const elements = [
        document.getElementById("j"),
        document.getElementById("a"),
        document.getElementById("b"),
        document.getElementById("c"),
        document.getElementById("d")
      ];

      elements.forEach((element, index) => {
        setTimeout(function() {
          fadeInElement(element);
        }, index * 2000);
      });

      function fadeInElement(element) {
        element.style.display = "block";
        setTimeout(function() {
          element.style.opacity = "1";
        }, 100);
      }
    });

//button delay
function showButton() {
    document.getElementById('delayedButton').style.display = 'block';
}

window.onload = function() {
    setTimeout(showButton, 1000);
}

//hint button but different
function hintButtonButNot() {
    alert("The instructions are the hint. Follow them.")
}
//typeWriter + button combo
    document.addEventListener('DOMContentLoaded', function(){
      const text= "It's Time";
      let i = 0;
      function typeWriter() {
        if (i < text.length) {
          document.getElementById("typewriter-text").textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        } else {
          document.getElementById("fade-button").style.display = "inline-block";
          setTimeout(function() {
            document.getElementById("fade-button").style.opacity = "1";
          }, 100);
        }
      }
      typeWriter();
    });