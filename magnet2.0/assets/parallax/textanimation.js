
    var textToWrite = "Ultimate Destination for NSUT Students !";
    
    var textContainer = document.getElementById("text-container");
    
    function animateTextWriting() {
     
      textContainer.innerHTML = '';
  
      var currentPosition = 0;
      
  
      var interval = setInterval(function() {
  
        textContainer.innerHTML += textToWrite[currentPosition];
        currentPosition++;
        
        if (currentPosition === textToWrite.length) {
          clearInterval(interval); 
        }
      }, 100); 
    }
  
    function restartAnimation() {
      animateTextWriting(); 
      setInterval(animateTextWriting, 10000); 
    }
  
    restartAnimation();
