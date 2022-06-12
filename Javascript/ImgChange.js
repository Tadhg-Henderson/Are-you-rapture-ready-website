var image = document.getElementById("pastorImage")
var delay = 3000;

image.addEventListener('click', function() {
    image.src = "./Media/Images/pastor_creepy.jpg"
    image.addEventListener('click', function() {
        image.src = "./Media/Images/pastor_creepy2.jpg"
    })
    
})
image.addEventListener('mouseout', function() {
    image.src = "./Media/Images/Screenshot 2022-05-20 at 02-07-20 website.png"
})