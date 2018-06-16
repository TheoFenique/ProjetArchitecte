function slider(){
  let leftArrow = document.querySelector('#leftArrow')
  let rightArrow = document.querySelector('#rightArrow')
  let firstImage = document.querySelector('.firstPic')
  let secondImage = document.querySelector('.secondPic')
  let thirdImage = document.querySelector('.thirdPic')
  let current = 0
  position = [0, 100, 200]
  leftArrow.addEventListener(
    'click',
    function(){
      current ++
      firstImage.style.transform = `translateX(-${position[current]}vw)`
      secondImage.style.transform = `translateX(-${position[current]}vw)`
      thirdImage.style.transform = `translateX(-${position[current]}vw)`
      if(current == 3){current--}
      console.log(current)
    },
    true
  )
  rightArrow.addEventListener(
    'click',
    function(){
      current --
      firstImage.style.transform = `translateX(-${position[current]}vw)`
      secondImage.style.transform = `translateX(-${position[current]}vw)`
      thirdImage.style.transform = `translateX(-${position[current]}vw)`
      if(current == -1){current++}
      console.log(current)
    },
    true
  )

}

slider()
