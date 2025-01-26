document.addEventListener("DOMContentLoaded", () => {
    const starsContainers = document.querySelectorAll(".stars");
  
    starsContainers.forEach(container => {
      const rating = parseInt(container.getAttribute("data-rating"), 10); 
      const maxStars = 5;
  
      
      const filledStars = "★".repeat(rating);
      const emptyStars = "☆".repeat(maxStars - rating);
  
      
      container.textContent = filledStars + emptyStars;
    });
  });