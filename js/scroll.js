document.addEventListener('DOMContentLoaded', function() {
  var scrollButton = document.getElementById('scrollButton');
  
  scrollButton.addEventListener('click', function() {
      var scrollDistance = 600;
      var animationDuration = 5000; 
      
      window.scrollBy({
          top: scrollDistance,
          behavior: 'smooth',
          duration: animationDuration,
      });
  });
});