//Main slider

let leftArrow = document.querySelector('#leftArrow')
let rightArrow = document.querySelector('#rightArrow')

function slider(){
  let firstImage = document.querySelector('.firstPic')
  let secondImage = document.querySelector('.secondPic')
  let thirdImage = document.querySelector('.thirdPic')
  let current = 0
  position = [0, 100, 200]
  rightArrow.addEventListener(
    'click',
    function(){
      current ++
      if(current == 3){current--}
      firstImage.style.transform = `translateX(-${position[current]}vw)`
      secondImage.style.transform = `translateX(-${position[current]}vw)`
      thirdImage.style.transform = `translateX(-${position[current]}vw)`
    },
    true
  )
  leftArrow.addEventListener(
    'click',
    function(){
      current --
      if(current == -1){current++}
      firstImage.style.transform = `translateX(-${position[current]}vw)`
      secondImage.style.transform = `translateX(-${position[current]}vw)`
      thirdImage.style.transform = `translateX(-${position[current]}vw)`
    },
    true
  )

}

slider()


//Text opacity control

function opacityControl(){
  elements = document.querySelectorAll('.about')
  let current = 0
  rightArrow.addEventListener(
    'click',
    function(){
      current++
      if(current == 3){current--}
      for(let i = 0; i < elements.length; i++){
        elements[i].classList.remove('active')
      }
      elements[current].classList.add('active')
      console.log(current)

    }
  )
  leftArrow.addEventListener(
    'click',
    function(){
      current--
      if(current == -1){current++}
      for(let i = 0; i < elements.length; i++){
        elements[i].classList.remove('active')
      }
      elements[current].classList.add('active')
      console.log(current)

    }
  )
}

opacityControl()
