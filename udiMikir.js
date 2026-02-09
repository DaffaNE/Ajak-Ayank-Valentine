function upsertYesResponse() {
      const card = document.getElementById('card');
      card.innerHTML = `
        <h1>YEAYYY!!! 💞</h1>
        <iframe src="https://tenor.com/embed/13588564667124748548" width="200" height="200" frameborder="0" allowfullscreen style="display:block; margin:16px auto 20px;"></iframe>
        <p>
          Cihuyy Kuyank Mau jadi Valentine atuu 💖<br />
          Makacih Udii, kamu bikin hariku celalu spesial.
          <br /><br />
          Happy Valentine! 🌸💌
        </p>
      `;
    }

    function moveNoButton() {
      const noBtn = document.querySelector('.no');
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    }

    function backgroundEffect() {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerText = ['💖', '💕', '💗', '💘'][Math.floor(Math.random() * 4)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 3 + 4 + 's';
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 7000);
    }
    setInterval(backgroundEffect, 300);