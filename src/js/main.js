
/* --------------------------------------------------------------------СВАЙПЕР */
  const list = document.querySelector('.brands');
  const items = list.querySelectorAll('.brands__item');

 
  const swiperWrapper = document.querySelector('.swiper-wrapper');

  
  items.forEach(item => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide'); 
      slide.innerHTML = item.querySelector('.brands-item-slide').innerHTML; 
      swiperWrapper.appendChild(slide); 
  });

  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 16, 
    slidesPerView: "auto",
    navigation: { // Настройка навигации
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: { // Настройка пагинации
      el: ".swiper-pagination",
      clickable: true, // Делаем точки кликабельными
    },
  });


//--------------------------------------------------------------------------------- показ/сокрытие эл-ов
  document.addEventListener("DOMContentLoaded", function () {
    const showMoreLink = document.querySelector(".show-more__link"); 
    const hiddenItems = document.querySelectorAll(".brands__item_hidden"); 
    const img = document.querySelector(".show-more__img"); 

    let isExpanded = false; 

    
    showMoreLink.addEventListener("click", function (event) {
        event.preventDefault(); 

        
        hiddenItems.forEach(item => {
            item.classList.toggle("brands__item_hidden");
        });

        
        isExpanded = !isExpanded;

        
        if (isExpanded) {
            showMoreLink.textContent = "Скрыть";
            img.style.transform = "rotate(180deg)";
        } else {
            showMoreLink.textContent = "Показать все";
            img.style.transform = "rotate(0deg)";
        }
    });
});
      