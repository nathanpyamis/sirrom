  const words = ["Automate Tests", "Accelerate Releases", "Empower QA Teams"];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;

  function type() {
    currentWord = words[i];
    const display = document.getElementById("animated-text");

    if (isDeleting) {
      display.textContent = currentWord.substring(0, j--);
    } else {
      display.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }

  type();

