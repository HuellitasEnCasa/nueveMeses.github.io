document.getElementById("showMessage").addEventListener("click", function () {
    const msg = document.getElementById("hiddenMessage");
    const typedText = document.getElementById("typedText");

    if (msg.classList.contains("show")) {
        msg.classList.add("fade-out");
        msg.addEventListener("animationend", function handler() {
            msg.classList.remove("show", "fade-out");
            typedText.textContent = "";
            msg.removeEventListener("animationend", handler);
        });
    } else {
        msg.classList.add("show");
        typedText.textContent = "";
        typeLetterByLetter();
    }
});

const loveMessages = [
    "Te amo con todo mi corazón",
    "Eres mi persona favorita",
    "Gracias por hacerme feliz",
    "¡Por muchos meses más juntos!",
];

const loveButton = document.getElementById("loveButton");
const loveMessage = document.getElementById("loveMessage");

let clickCount = 0;
const flowerBouquet = document.getElementById("flowerBouquet");

loveButton.addEventListener("click", function () {
    const random = Math.floor(Math.random() * loveMessages.length);
    loveMessage.textContent = loveMessages[random];

    loveMessage.style.animation = "none";
    void loveMessage.offsetWidth;
    loveMessage.style.animation = "fadeIn 0.8s ease-in-out";

    loveButton.classList.add("clicked");
    setTimeout(() => loveButton.classList.remove("clicked"), 500);

    clickCount++;
    if (clickCount === 9) {
        flowerBouquet.innerHTML = "";

        for (let i = 0; i < 5; i++) {
            const flower = document.createElement("div");
            flower.classList.add("bouquet-flower");

            for (let j = 0; j < 5; j++) {
                const petal = document.createElement("span");
                flower.appendChild(petal);
            }

            flowerBouquet.appendChild(flower);
        }

        flowerBouquet.classList.remove("hidden");
        flowerBouquet.classList.add("show");

        setTimeout(() => {
            flowerBouquet.classList.add("hidden");
            flowerBouquet.classList.remove("show");
            flowerBouquet.innerHTML = "";
        }, 5000);
    }
});

const heartContainer = document.getElementById("heartContainer");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    const size = Math.random() * 10 + 10;
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    heart.style.opacity = Math.random();
    heart.style.bottom = "-20px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

const typedText = document.getElementById("typedText");
const message = `Mi reina:

Hoy celebramos 9 meses juntos. Cada momento contigo ha sido un regalo.

Gracias por ser mi compañera, por tus sonrisas, tu paciencia y tu amor. 
Espero seguir caminando a tu lado por muchos meses más 

Te amo.`;

function typeLetterByLetter() {
    let index = 0;
    function type() {
        if (index < message.length) {
            typedText.textContent += message.charAt(index);
            index++;
            setTimeout(type, 80);
        }
    }
    type();
}
