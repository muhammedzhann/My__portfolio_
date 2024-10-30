

document.getElementById("downloadBtn").addEventListener("click", function() {
    const link = document.createElement('a');
    link.href = 'images.file/Satybaldy Muhammedzhan.pdf';
    link.download = 'file:///Users/muhammedzhansatybaldy/Documents/My__portfolio/images.file/Satybaldy%20Muhammedzhan.pdf';
    link.click(); 
});




var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}




const homeImg = document.querySelector('.home-img');
const img = homeImg.querySelector('img');

homeImg.addEventListener('mousemove', (event) => {
    const rect = homeImg.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateX = y * 30; // Увеличение числа усилит эффект по оси X
    const rotateY = -x * 30; // Увеличение числа усилит эффект по оси Y

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

homeImg.addEventListener('mouseleave', () => {
    img.style.transform = 'rotateX(0) rotateY(0)'; // Сбрасываем эффект
});


const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Developer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Backend Developer";
            }, 4000);
            setTimeout(() => {
                text.textContent = "UI/UX Designer";
            }, 8000); //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 12000);



const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
e.preventDefault();
const formData = new FormData(form);
const object = Object.fromEntries(formData);
const json = JSON.stringify(object);
result.innerHTML = "Please wait..."

fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            result.innerHTML = "Form submitted successfully";
        } else {
            console.log(response);
            result.innerHTML = json.message;
        }
    })
    .catch(error => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
    })
    .then(function() {
        form.reset();
        setTimeout(() => {
            result.style.display = "none";
        }, 3000);
    });
});

