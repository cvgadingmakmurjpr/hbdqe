const openBtn = document.getElementById("openBtn");
const start = document.getElementById("start");
const card = document.getElementById("card");
const textEl = document.getElementById("text");
const music = document.getElementById("music");

const message = `Qeyra,

Happy birthday yaa.

I hope today feels a little warmer for you. Not just because it is your special day, but because you deserve to feel appreciated, even in the simplest way.

Another year has passed, and I know life has not always been easy. There are days that go quietly, and there are days that feel heavier than they should. But through all of that, you are still here, still moving forward in your own way. That is something not everyone can do.

I hope you realize how meaningful that is.

You may not always notice it, but you have a way of making things feel calmer. There is something about you that feels steady and real, and that is rare. You do not need to try too hard for people to feel comfortable around you. It just happens naturally.

And for me, it means more than I can explain.

I do not know the exact moment it started, but at some point, you became someone I genuinely care about. Not just in passing, not just for a moment, but in a way that stays. It shows in small things. The way I think about you during random parts of the day. The way I wonder how you are doing. The way your presence, even just a little, can change how I feel.

It is simple, but it is real.

On your birthday, I am not wishing for anything unrealistic. I just hope you find moments of peace. Moments where you do not have to question yourself, where you can just be who you are without feeling like you need to prove anything.

Because the truth is, you are already enough.

I also hope that whatever you are hoping for, whatever you are quietly working towards, gets a little closer to you this year. You deserve good things, even if they come slowly.

And if there are days where things feel uncertain, I hope you remember that there is someone out here who cares about you more than you might realize.

As for me, I am not trying to rush anything or turn this into something complicated. I just want you to know what is real from my side.

I care about you.

In a calm way, in a steady way, and in a way that continues to grow without needing a reason.

Meeting you is something I am grateful for, and knowing you has made things feel a little different, in a good way.

So today, I just want to say thank you for being you, and I hope this year treats you gently.

Happy birthday, Qeyra.

Take care of yourself, always.

`;
// Happy birthday, Qeyra ❤️`;

let i = 0;

// OPEN
openBtn.addEventListener("click", () => {
    start.style.display = "none";
    card.classList.remove("hidden");

    music.play().catch(() => {});
    typeEffect();
});

// TYPING
function typeEffect() {
    if (i < message.length) {
        textEl.innerHTML += message.charAt(i);
        i++;

        let speed = Math.random() * 80 + 30;
        setTimeout(typeEffect, speed);
    } else {
        document.getElementById("questionBox").classList.remove("hidden");
        document.getElementById("bookBtn").classList.remove("hidden");
    }
}

// YES
function yes() {
    alert("I knew it 💖");
}

// NO BUTTON KABUR
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * window.innerWidth + "px";
    noBtn.style.top = Math.random() * window.innerHeight + "px";
});

// OPEN BOOK
function openBook() {
    document.getElementById("bookContainer").classList.remove("hidden");
}

// LOVE EFFECT
document.addEventListener("click", function(e) {
    let love = document.createElement("div");
    love.innerHTML = "❤️";
    love.className = "love";

    love.style.left = e.clientX + "px";
    love.style.top = e.clientY + "px";

    document.body.appendChild(love);

    setTimeout(() => love.remove(), 1000);
});
