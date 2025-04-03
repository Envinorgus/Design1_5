
/* --------------------------------------------------------------------СВАЙПЕР */


document.addEventListener("DOMContentLoaded", function () {
  // Получаем ссылку на элемент <link>
  const swiperStyles = document.querySelector('link[href="https://unpkg.com/swiper/swiper-bundle.min.css"]');
  let swiperInstance = null; 

  function toggleSwiperStyles() {
    if (window.innerWidth <= 768) {
        // Включаем стили Swiper для маленьких экранов
        if (swiperStyles.disabled) {
            swiperStyles.disabled = false;
        }

        // Инициализируем Swiper, если его ещё нет
        if (!swiperInstance) {
            swiperInstance = new Swiper('.swiper', {
                direction: 'horizontal',
                loop: true,
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    } else {
        // Отключаем стили Swiper для больших экранов
        if (!swiperStyles.disabled) {
            swiperStyles.disabled = true;
        }

        // Уничтожаем Swiper для больших экранов
        if (swiperInstance) {
            swiperInstance.destroy(true, true); 
            swiperInstance = null; 
        }
    }
}

// Инициализация при загрузке страницы
toggleSwiperStyles();

// Обработка изменения размера окна
window.addEventListener("resize", function () {
    toggleSwiperStyles();
});
});
//--------------------------------------------------------------------------------- показ/сокрытие эл-ов
/*
  document.addEventListener("DOMContentLoaded", function () {
    const showMoreLink = document.querySelector(".show-more__link"); 
    const hiddenItems = document.querySelectorAll(".brand__list_hidden"); 
    const img = document.querySelector(".show-more__img"); 

    let isExpanded = false; 

    
    showMoreLink.addEventListener("click", function (event) {
        event.preventDefault(); 

        
        hiddenItems.forEach(item => {
            item.classList.toggle("brand__list_hidden");
        });

        
        isExpanded = !isExpanded;

        
        if (isExpanded) {
            showMoreLink.textContent = "Скрыть";
            img.style.transform = "rotate(180deg)";
        } 
        
        else {
            showMoreLink.textContent = "Показать все";
            img.style.transform = "rotate(0deg)";
        }
    });
}); */

document.addEventListener("DOMContentLoaded", function () {
  const showMoreButton = document.querySelector(".show-more__button");
  const listItems = document.querySelectorAll(".brand__list-item");

  let isExpanded = false;

  
  function hideItems() {
      const screenWidth = window.innerWidth;

      // Определяем, сколько элементов нужно скрыть
      const itemsToHide = screenWidth >= 1120 ? 3 : 5;

      
      listItems.forEach((item, index) => {
          if (!isExpanded && index >= listItems.length - itemsToHide) {
              item.classList.remove("show"); 
          } else {
              item.classList.add("show"); 
          }
      });

      // Обновляем текст кнопки
      updateButtonText();
  }

  
  function updateButtonText() {
      const screenWidth = window.innerWidth;
      if (isExpanded) {
          showMoreButton.querySelector(".show-more__text").textContent = "Скрыть";
      } else {
          showMoreButton.querySelector(".show-more__text").textContent =
              screenWidth >= 1120 ? "Показать все" : "Показать ещё";
      }
  }

  
  function toggleItems() {
      isExpanded = !isExpanded;

      
      if (isExpanded) {
          listItems.forEach((item) => {
              item.classList.add("show");
          });
      } else {
          
          hideItems();
      }

      
      updateButtonText();
  }

  
  hideItems();

  
  showMoreButton.addEventListener("click", function (event) {
      event.preventDefault();
      toggleItems();
  });

  
  window.addEventListener("resize", function () {
      if (!isExpanded) {
          hideItems(); 
      }
  });
});