var BackgroundImages=["Images/un1.jpg","Images/un2.jpg","Images/un3.jpg","Images/un4.jpg","Images/un5.jpg","Images/un6.jpg","Images/un7.jpg"]
var index=0;


function initialBreathEffect() {
    var image = document.getElementById("bg-img");
    image.style.opacity = 0; 

    setTimeout(function() {
        image.src = BackgroundImages[index]; 
        image.style.opacity = 1; 
    }, 1000); 

    setInterval(changeImage, 5000); 
}
function changeImage() {
    var image = document.getElementById("bg-img");
    image.style.opacity = 0; 

    setTimeout(function() {
        index = (index + 1) % BackgroundImages.length; 
        image.src = BackgroundImages[index]; 
        image.style.opacity = 1; 
    }, 1000); 
}

initialBreathEffect()
