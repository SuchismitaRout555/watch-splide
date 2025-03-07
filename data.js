

// class WatchSlider extends HTMLElement {
//     constructor() {
//       super();
//       this.currentSlide = 0;
//       this.splide = null;
//     }

//     async loadData() {
//         try {
//             const response = await fetch('data.json'); // Fetch JSON file
//             const sliderData = await response.json(); // Convert response to JSON
//             this.render(sliderData);
//         } catch (error) {
//             console.error('Error loading slider data:', error);
//         }
//     }
  
//     connectedCallback() {
//       this.render();
//       this.initSplide();
//       this.setupEventListeners();
//       this.updateBackground(0);
//     }
    
//     render() {
//       this.innerHTML = `
//         <div class="hero">
//           <div class="hero-content">
//             <h1 class="hero-title" id="slide-title"></h1>
//             <h2 class="hero-subtitle" id="slide-subtitle"></h2>
//             <p class="hero-description" id="slide-description"></p>
//             <div class="price" id="slide-price"></div>
//             <div class="social-links">
//               <button class="social-btn">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
//                 </svg>
//               </button>
//               <button class="social-btn">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
//                 </svg>
//               </button>
//               <button class="social-btn">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
//                 </svg>
//               </button>
//             </div>
//           </div>
          
//           <div class="splide">
//             <div class="splide__track">
//               <ul class="splide__list">
//                 ${watchesData.map(watch => `
//                   <li class="splide__slide">
//                     <div class="hero-image">
//                       <img src="${watch.image}" alt="${watch.title}" />
//                     </div>
//                   </li>
//                 `).join('')}
//               </ul>
//             </div>
//           </div>
//         </div>
        
//         <div class="custom-navigation">
//           <button class="slide-nav-button prev-button">
//             <svg viewBox="0 0 24 24" fill="currentColor">
//               <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
//             </svg>
//           </button>
//           <button class="slide-nav-button next-button">
//             <svg viewBox="0 0 24 24" fill="currentColor">
//               <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
//             </svg>
//           </button>
//         </div>
//       `;
//     }
    
//     initSplide() {
//       this.splide = new Splide('.splide', {
//         type: 'fade',
//         rewind: true,
//         pagination: false,
//         arrows: false,
//       }).mount();
      
//       // Set initial content
//       this.updateContent(0);
//     }
    
//     setupEventListeners() {
//       const prevButton = this.querySelector('.prev-button');
//       const nextButton = this.querySelector('.next-button');
      
//       prevButton.addEventListener('click', () => {
//         this.splide.go('-');
//       });
      
//       nextButton.addEventListener('click', () => {
//         this.splide.go('+');
//       });
      
//       this.splide.on('moved', (newIndex) => {
//         this.updateContent(newIndex);
//         this.updateBackground(newIndex);
//       });
//     }
    
//     updateContent(index) {
//       const data = watchesData[index];
      
//       const titleElement = this.querySelector('#slide-title');
//       const subtitleElement = this.querySelector('#slide-subtitle');
//       const descriptionElement = this.querySelector('#slide-description');
//       const priceElement = this.querySelector('#slide-price');
      
//       titleElement.textContent = data.title;
//       subtitleElement.innerHTML = data.subtitle;
//       descriptionElement.textContent = data.description;
//       priceElement.textContent = data.price;
//     }
    
//     updateBackground(index) {
//       const data = watchesData[index];
//       document.body.style.backgroundColor = data.backgroundColor;
//     }
//   }
  
//   // Register the custom element
//   customElements.define('watch-slider', WatchSlider);

class WatchSlider extends HTMLElement {
    constructor() {
      super();
      this.currentSlide = 0;
      this.splide = null;
      this.watchesData = [];
    }

    connectedCallback() {
      // Check if data is available globally or needs to be loaded
      if (typeof watchesData !== 'undefined') {
        // Use global watchesData if available
        this.watchesData = watchesData;
        this.render();
        this.initSplide();
        this.setupEventListeners();
        this.updateBackground(0);
      } else {
        // Otherwise, load data from JSON file
        this.loadData();
      }
    }

    async loadData() {
        try {
            const response = await fetch('data.json');
            this.watchesData = await response.json();
            
            // Now that we have data, initialize the component
            this.render();
            this.initSplide();
            this.setupEventListeners();
            this.updateBackground(0);
        } catch (error) {
            console.error('Error loading slider data:', error);
        }
    }
    
    // render() {
    //   this.innerHTML = `
    //     <div class="hero">
    //       <div class="hero-content">
    //         <h1 class="hero-title" id="slide-title"></h1>
    //         <h2 class="hero-subtitle" id="slide-subtitle"></h2>
    //         <p class="hero-description" id="slide-description"></p>
    //         <div class="price" id="slide-price"></div>
    //         <div class="social-links">
    //           <button class="social-btn">
    //             <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    //               <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
    //             </svg>
    //           </button>
    //           <button class="social-btn">
    //             <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    //               <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
    //             </svg>
    //           </button>
    //           <button class="social-btn">
    //             <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    //               <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
          
    //       <div class="splide">
    //         <div class="splide__track">
    //           <ul class="splide__list">
    //             ${this.watchesData.map(watch => `
    //               <li class="splide__slide">
    //                 <div class="hero-image">
    //                   <img src="${watch.image}" alt="${watch.title}" />
    //                 </div>
    //               </li>
    //             `).join('')}
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
        
    //     <div class="custom-navigation">
    //       <button class="slide-nav-button prev-button">
    //         <svg viewBox="0 0 24 24" fill="currentColor">
    //           <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    //         </svg>
    //       </button>
    //       <button class="slide-nav-button next-button">
    //         <svg viewBox="0 0 24 24" fill="currentColor">
    //           <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    //         </svg>
    //       </button>
    //     </div>
    //   `;
    // }

    render() {
        this.innerHTML = `
          <div class="hero">
            <div class="hero-content">
              <h1 class="hero-title" id="slide-title"></h1>
              <h2 class="hero-subtitle" id="slide-subtitle"></h2>
              <p class="hero-description" id="slide-description"></p>
              <div class="price" id="slide-price"></div>
              <div class="social-links">
                <button class="social-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
                  </svg>
                </button>
                <button class="social-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button class="social-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="splide">
              <div class="splide__track">
                <ul class="splide__list">
                  ${this.watchesData.map(watch => `
                    <li class="splide__slide">
                      <div class="hero-image">
                        <img src="${watch.image}" alt="${watch.title}" />
                      </div>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
            
            <!-- Move the navigation inside the hero container -->
            <div class="custom-navigation">
              <button class="slide-nav-button prev-button">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              <button class="slide-nav-button next-button">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </button>
            </div>
          </div>
        `;
      }
    
    initSplide() {
      this.splide = new Splide('.splide', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: false,
      }).mount();
      
      // Set initial content
      this.updateContent(0);
    }
    
    setupEventListeners() {
      const prevButton = this.querySelector('.prev-button');
      const nextButton = this.querySelector('.next-button');
      
      prevButton.addEventListener('click', () => {
        this.splide.go('-');
      });
      
      nextButton.addEventListener('click', () => {
        this.splide.go('+');
      });
      
      this.splide.on('moved', (newIndex) => {
        this.updateContent(newIndex);
        this.updateBackground(newIndex);
      });
    }
    
    updateContent(index) {
      if (!this.watchesData || this.watchesData.length === 0) {
        console.error('No watch data available');
        return;
      }
      
      const data = this.watchesData[index];
      if (!data) {
        console.error('No data found for index:', index);
        return;
      }
      
      const titleElement = this.querySelector('#slide-title');
      const subtitleElement = this.querySelector('#slide-subtitle');
      const descriptionElement = this.querySelector('#slide-description');
      const priceElement = this.querySelector('#slide-price');
      
      if (titleElement) titleElement.textContent = data.title;
      if (subtitleElement) subtitleElement.innerHTML = data.subtitle;
      if (descriptionElement) descriptionElement.textContent = data.description;
      if (priceElement) priceElement.textContent = data.price;
    }
    
    updateBackground(index) {
      if (!this.watchesData || !this.watchesData[index]) return;
      
      const data = this.watchesData[index];
      document.body.style.backgroundColor = data.backgroundColor;
    }
}
  
// Register the custom element
customElements.define('watch-slider', WatchSlider);