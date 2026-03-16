document.addEventListener('DOMContentLoaded', function() {
   
    const allowedImages = [
        'img/img1.jpg',
        'img/img2.jpg',
        'img/img3.jpg',
        'img/img4.jpg',
        'img/img5.jpg',
        'img/img6.jpg'
    ];

    document.querySelectorAll('.memory-img').forEach(function(img) {
        img.addEventListener('click', function() {
            if (img.getAttribute('src') === 'img/qmark.png') {
                var randomImg = allowedImages[Math.floor(Math.random() * allowedImages.length)];
                img.setAttribute('src', randomImg);
            }else {
                alert("kan ej vändas, klicka på starta om för att återställa alla bilder"); 
            }
        });
    });

  
    var restartBtn = document.querySelector('button');
    if (restartBtn) {
        restartBtn.addEventListener('click', function() {
            document.querySelectorAll('.memory-img').forEach(function(img) {
                img.setAttribute('src', 'img/qmark.png');
            });
        });
    }
});
