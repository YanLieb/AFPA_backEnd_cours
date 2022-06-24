// Scroll to top arrow

// window.addEventListener('scroll', function () {
//     let arrowUp = document.getElementById('arrowUp');

//     if (window.scrollY <= 500) {
//         arrowUp.style.opacity = "0";
//     } else {
//         arrowUp.style.opacity = "1";
//         arrowUp.addEventListener('click', function () {
//             document.getElementById('top').scrollIntoView({ block: "start" });
//         });
//     } 
// });

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 500) {
        document.getElementById('back-to-top').style.display = 'block';
    } else {
        document.getElementById('back-to-top').style.display = 'none';
    }
})

// Change Main Photo

// image = document.getElementsByTagName('img');
// // console.log(image);

// image[1].addEventListener('click', function (e) {
//     e.preventDefault();
    
//     image[0].src = 'assets/img/image1.jpg';
//     image[1].setAttribute('data-full', 'assets/img/image1.jpg');
//     document.getElementById('legende').innerHTML = 'Une image 1';
// })

// image[2].addEventListener('click', function (e) {
//     e.preventDefault();

//     image[0].src = 'assets/img/image2.jpg';
//     image[2].setAttribute('data-full', 'assets/img/image2.jpg');
//     document.getElementById('legende').innerHTML = 'Une image 2';
// })

// image[3].addEventListener('click', function (e) {
//     e.preventDefault();

//     image[0].src = 'assets/img/image3.jpg';
//     image[3].setAttribute('data-full', 'assets/img/image3.jpg');
//     document.getElementById('legende').innerHTML = 'Une image 3';
// })

// image[4].addEventListener('click', function (e) {
//     e.preventDefault();

//     image[0].src = 'assets/img/image4.jpg';
//     image[4].setAttribute('data-full', 'assets/img/image4.jpg');
//     document.getElementById('legende').innerHTML = 'Une image 4';
// })

let mesThumbnails = document.querySelectorAll('.thumbnail img');
console.log(mesThumbnails);

for (let i = 0; i < mesThumbnails.length; i++){
    mesThumbnails[i].addEventListener('click', function () {
        // animate__animated animate__shakeX
        this.classList.add('animate__animated');
        this.classList.add('animate__shakeX');

        this.addEventListener('mouseout', function () {
            this.classList.remove('animate__animated');
            this.classList.remove('animate__shakeX');
        });

        let valeurAlt = this.getAttribute('alt');
        let valeurDataFull = this.getAttribute('data-full');

        document.getElementById('full').setAttribute('src', valeurDataFull);
        document.getElementById('legende').textContent = valeurAlt;
    });
};