document.querySelector('#main-action').onclick = () => {
    document.querySelector('#cars').scrollIntoView({behavior: "smooth"})
}

document.querySelectorAll(".car-button").forEach((button) => {
    button.onclick = () => {
        document.querySelector('#price').scrollIntoView({behavior: "smooth"})
    }
})

document.querySelector('#price-action').onclick = () => {
    if(document.querySelector('#name').value === '') {
        alert("Заполните поле имя!")
    } else if(document.querySelector('#phone').value === '') {
        alert("Заполните поле телефон!")
    } else if(document.querySelector('#car').value === '') {
        alert("Заполните поле автомобиль!")
    } else {
        alert("Спасибо за заявку, мы свяжемся с Вами в ближайшее время!")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.5) / 9) + 'px,' + ((event.clientY * 0.5) / 9) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.2 * window.pageYOffset) + 'px';
    })
});