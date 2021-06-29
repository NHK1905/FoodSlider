let hero = document.querySelector('.hero')

let slider = document.querySelector('.slider')

let slides = slider.querySelectorAll('.slide')

let slide_index = 0

let can_slide_play = true

let hero_bgs = [
    './images/goi-cuon-bg.jpg',
    './images/bun-bo-bg.jpg',
    './images/pho-ga-bg.jpg',
]

showSlide = (index) => {
    slides.forEach(e => e.classList.remove('active'))
    slides[index].classList.add('active')
    hero.style.backgroundImage = `url(${hero_bgs[index]})`
}

nextSlide = () => {
    slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1
    showSlide(slide_index)
}

//Dừng slide khi di chuột vào
slider.addEventListener('mouseover', () => can_slide_play = false)

//Chạy slide khi di chuột ra khỏi
slider.addEventListener('mouseleave', () => can_slide_play = true)

showSlide(slide_index)



//Autoplay slide
// setInterval(() => {
//     if (!can_slide_play) return nextSlide()
// },2500);

//Slide nhỏ
slider.querySelectorAll('.slider-control-item').forEach((item, index) => {
    item.addEventListener('click', () => showSlide(index))
})