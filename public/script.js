function spawnImage() {
  const img = document.createElement("img");

  img.src = "https://www.icegif.com/wp-content/uploads/2023/02/icegif-519.gif";
  img.className = "nayan";

  const randomTop = Math.random() * 90;
  img.style.top = randomTop + "%";

  const size = 420 + Math.random() * 100;
  img.style.width = size + "px";

  document.body.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 9000);
}
setInterval(spawnImage, 4000);

function spawnImage() {
  const img = document.createElement("img");

  img.src = "https://www.icegif.com/wp-content/uploads/2023/02/icegif-519.gif";
  img.className = "nayan";

  const randomTop = Math.random() * 90;
  img.style.top = randomTop + "%";

  const size = 420 + Math.random() * 100;
  img.style.width = size + "px";

  document.body.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 9000);
}

setInterval(spawnImage, 4000);

document.addEventListener("DOMContentLoaded", () => {
  console.log("JS działa");

  // 🎥 IMAGE SPAM (opcjonalne — możesz zostawić)
  function spawnImage() {
    const img = document.createElement("img");

    img.src =
      "https://www.icegif.com/wp-content/uploads/2023/02/icegif-519.gif";
    img.className = "nayan";

    const randomTop = Math.random() * 90;
    img.style.top = randomTop + "%";

    const size = 420 + Math.random() * 100;
    img.style.width = size + "px";

    document.body.appendChild(img);

    setTimeout(() => {
      img.remove();
    }, 9000);
  }

  setInterval(spawnImage, 4000);
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("playMusic");

  const audio = new Audio("images/nayansong.mp3");
  audio.loop = true;
  audio.preload = "auto";

  let playing = false;

  button.addEventListener("click", () => {
    if (!playing) {
      audio.play();
      button.textContent = "Stop Music";
      playing = true;
    } else {
      audio.pause();
      audio.currentTime = 0;
      button.textContent = "Play Music";
      playing = false;
    }
  });
});

(document.getElementById("questionForm"),
  addEventListener("submit", async function (e) {
    e.preventDefault();

    const answer = document.getElementById("captchaInput").value;

    const res = await fetch("/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answer }),
    });

    const data = await res.json();

    const result = data.result;

    if (result === "NO") {
      alert("Incorrect answer. Try again.");
    }

    if (result === "YES") {
      alert("Correct answer! Access granted.");
      document.getElementById("passwordSection").style.display = "block";
    }
  }));

function checkPassword() {
  const pass = document.getElementById("passwordInput").value;

  if (pass === "judgemypass") {
    alert("Correct password! Access granted.");
  } else {
    alert("Incorrect password. Try again.");
  }
}

async function checkPassword() {
  const password = document.getElementById("passwordInput").value;

  const res = await fetch("/roast", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });

  const data = await res.json();

  document.getElementById("roastBox").innerHTML = `<p>${data.roast}</p>`;
}
