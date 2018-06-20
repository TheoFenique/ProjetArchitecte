//Main slider

let leftArrow = document.querySelector('#leftArrow')
let rightArrow = document.querySelector('#rightArrow')
let firstImage = document.querySelector('.firstPic')
let secondImage = document.querySelector('.secondPic')
let thirdImage = document.querySelector('.thirdPic')
let current = 0
let position = [0, 100, 200]
let intervalNextSlide = setInterval(nextSlide, 6000)
let intervalNextTxt = setInterval(nextTxt, 6000)

function slide(){
  firstImage.style.transform = `translateX(-${position[current]}vw)`
  secondImage.style.transform = `translateX(-${position[current]}vw)`
  thirdImage.style.transform = `translateX(-${position[current]}vw)`
}

function nextSlide(){
  current++
  if(current > 2){current = 0}
  slide()
}

function slider(){
  rightArrow.addEventListener(
    'click',
    function(){
      current ++
      if(current > 2){current = 0}
      slide()
      console.log(current)
    },
    true
  )
  leftArrow.addEventListener(
    'click',
    function(){
      current --
      if(current < 0){current = 2}
      slide()
      console.log(current)
    },
    true
  )
}

slider()

////////////////////////
//Text opacity control//
////////////////////////

let elements = document.querySelectorAll('.about')

function nextTxt(){
  for(let i = 0; i < elements.length; i++){
    elements[i].classList.remove('active')
  }
  elements[current].classList.add('active')
}

function opacityControl(){
  rightArrow.addEventListener(
    'click',
    function(){
      for(let i = 0; i < elements.length; i++){
        elements[i].classList.remove('active')
      }
      elements[current].classList.add('active')
    }
  )

  leftArrow.addEventListener(
    'click',
    function(){
      for(let i = 0; i < elements.length; i++){
        elements[i].classList.remove('active')
      }
      elements[current].classList.add('active')


    }
  )
}

opacityControl()
