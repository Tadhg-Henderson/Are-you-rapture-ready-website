var image = document.getElementById("pastorImage")
var delay = 3000;

image.addEventListener('click', function() {
    image.src = "./Media/Images/pastor_creepy.jpg"
    setTimeout(function () {
        image.addEventListener('mouseenter', function() {
            image.src = "./Media/Images/pastor_creepy2.jpg"
        })
    } ,5000)
})
image.addEventListener('mouseout', function() {
    image.src = "./Media/Images/Screenshot 2022-05-20 at 02-07-20 website.png"
})