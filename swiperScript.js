function updateSwiperAttributes() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Получите ссылку на ваш Swiper
    var mySwiper = new Swiper('#mySwiper', {

    });

    // Измените slides-per-view в зависимости от ширины экрана
    if (screenWidth <= 600) {
        mySwiper.slidesPerView = 2;
    } else {
        mySwiper.slidesPerView = 3;
    }

    // Обновите Swiper после изменения параметров
    mySwiper.update();
}

// Вызовите функцию при загрузке страницы и изменении размеров окна
window.addEventListener('load', updateSwiperAttributes);
window.addEventListener('resize', updateSwiperAttributes);