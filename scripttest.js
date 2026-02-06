const pages = document.querySelectorAll(".page");

    const memories = {
      "Memory One": {
        question: "What was the colors of the Flowers i gifted you ? 💐",
        answers: [
          { lable:"Red, Yellow, Pink", result:"Nop! 😐"},
          { lable:"Red, White, Yellow", result:"YEAAAH! Beautiful Like Your eyes💝"},
          { lable:"hite, Pink, Yellow", result:"Balaki Tzidi Taghalti 😒"},
          { lable:"Red, Yellow, Dark Pink", result:"ehm ehm 🙄"},
        ]
      },
      "Memory Two": {
        question: "How much i scored for You when we played Bolling ? 🎳",
        answers: [
          { lable:"82", result:"Nop! 😛"},
          { lable:"67", result:"Try Again 😜"},
          { lable:"106", result:"Yahdik rabi.. men naytek clickiti 3la 106!? 😝"},
          { lable:"144", result:"Walah ma 3labali rani ntiri brk 🤪"},
        ]
      },
      "Memory Three": {
        question: "Whene was our first Kiss ? 💋",
        answers: [
          { lable:"05 Mai", result:"nop! it was the day that we knew that nothing will separe us 👩🏽‍❤️‍💋‍👨🏻"},
          { lable:"07 Mars", result:"dok nji n3adek machi nkissik 😁"},
          { lable:"07 Mai", result:"Will never forget it 😘"},
          { lable:"02 Fev", result:"Hadi 7otitha brk bech ma nenssach 🤣"},
        ]
      },
      "Memory Four": {
        question: "there is no question here only an affirmation 💫💕",
        answers: [
          { lable:"1 click here first!", result:"I LOVE YOU ❤️"},
          { lable:"2 then here!", result:"❤️MORE❤️"},
          { lable:"3 then here!", result:"❤️❤️MORE❤️❤️"},
          { lable:"4 then here!", result:"❤️ MORE ❤️ MORE ❤️ MORE ❤️ MORE ❤️ MORE ❤️ MORE ❤️ MORE ❤️ MORE ❤️ MORE ❤️ MORE ❤️ MORE ❤️ MORE ❤️ MORE ❤️ MORE ❤️ MORE ❤️ MORE ❤️ MORE ❤️ MORE ❤️"},
        ]
      }
    };

    function goToPage(num) {
      pages.forEach(p => p.classList.remove("active"));
      document.getElementById(`page${num}`).classList.add("active");
    }

    function selectMemory(key) {
      const data = memories[key];

      document.getElementById("question").textContent = data.question;
      document.getElementById("memoryText").textContent =
        ``;

      const buttons = document.querySelectorAll(".answers button");
      buttons.forEach((btn, i) => {
        btn.textContent = data.answers[i].lable;
        btn.onclick = () => showOverlay(data.answers[i].result);
      });

      goToPage(3);
    }

    function showOverlay(message) {
      const overlay = document.getElementById("overlay");
      const text = document.getElementById("overlayText");

      text.textContent = message;
      overlay.classList.add("show");

      setTimeout(() => {
        overlay.classList.remove("show");
      }, 1600);
    }