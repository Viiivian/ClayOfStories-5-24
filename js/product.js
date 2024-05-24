  // document.addEventListener('DOMContentLoaded', function() {
  //     const addToCartBtn = document.querySelector('.add-to-cart');
  //     const cartIcon = document.querySelector('.cart ');
    
  //     addToCartBtn.addEventListener('click', function() {
  //       const productImg = this.closest('.add').querySelector('img');
    
  //       // Clone product image
  //       const flyingImg = productImg.cloneNode(true);
  //       flyingImg.style.position = 'fixed';
  //       flyingImg.style.width = '50px'; // Adjust size as needed
  //       flyingImg.style.height = '50px'; // Adjust size as needed
    
  //       // Get button position and set flying image position
  //       const buttonRect = this.getBoundingClientRect();
  //       const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  //       const buttonCenterY = buttonRect.top + buttonRect.height / 2;
  //       flyingImg.style.top = `${buttonCenterY - flyingImg.offsetHeight / 2}px`;
  //       flyingImg.style.left = `${buttonCenterX - flyingImg.offsetWidth / 2}px`;
    
  //       document.body.appendChild(flyingImg);
  //       flyingImg.style.zIndex = '9999';
    
  //       // Calculate distance between button and cart icon
  //       const distanceX = cartIcon.getBoundingClientRect().left - buttonRect.left  ;
  //       const distanceY = cartIcon.getBoundingClientRect().top - buttonRect.top  ;
    
  //       // Animation
  //       flyingImg.animate([
  //         { transform: 'translate(0, 0) scale(1)' },
  //         { transform: `translate(${distanceX}px, ${distanceY}px) scale(0.01)` }
  //       ], {
  //         duration: 700,
  //         easing: 'ease-out'
  //       }).onfinish = function() {
  //         // Remove flying image after animation      
  //         flyingImg.remove();
  //       };
  //     });
  //   });       
  document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.querySelector('.add-to-cart');
    const cartIcon = document.querySelector('.cart');
  
    addToCartBtn.addEventListener('click', function() {
        const productImg = this.closest('.add').querySelector('img');
  
        // Clone product image
        const flyingImg = productImg.cloneNode(true);
        flyingImg.style.position = 'fixed';
        flyingImg.style.width = '80px'; // Adjust size as needed
        flyingImg.style.height = '80px'; // Adjust size as needed
  
        // Get button position and set flying image position
        const buttonRect = this.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;
        flyingImg.style.top = `${buttonCenterY - flyingImg.offsetHeight / 2}px`;
        flyingImg.style.left = `${buttonCenterX - flyingImg.offsetWidth / 2}px`;
  
        document.body.appendChild(flyingImg);
        flyingImg.style.zIndex = '9999';
  
        // Calculate distance between button and cart icon
        const cartRect = cartIcon.getBoundingClientRect();
        const distanceX = cartRect.left - buttonCenterX + (cartRect.width / 2 - flyingImg.offsetWidth / 2);
        const distanceY = cartRect.top - buttonCenterY + (cartRect.height / 2 - flyingImg.offsetHeight / 2);
  
        // Animation
        flyingImg.animate([
            { transform: 'translate(0, 0) scale(1)' },
            { transform: `translate(${distanceX}px, ${distanceY}px) scale(0.1)` }
        ], {
            duration: 700,
            easing: 'ease-out'
        }).onfinish = function() {
            // Ensure flying image is positioned at the cart icon
            flyingImg.style.top = `${cartRect.top + (cartRect.height / 2 - flyingImg.offsetHeight / 2)}px`;
            flyingImg.style.left = `${cartRect.left + (cartRect.width / 2 - flyingImg.offsetWidth / 2)}px`;
            // Remove flying image after animation
            flyingImg.remove();
        };
    });
});