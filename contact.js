const btn = document.getElementById("btn");
const card = document.getElementById("card");
const line = document.getElementById("line");
const formBox = document.getElementById("formBox");
const typing = document.getElementById("typing");
const fields = document.querySelectorAll(".field");

let isOpen = false;
let typeInterval = null;

btn.addEventListener("click", () => {
  if (!isOpen) {
    // --- OPEN SEQUENCE ---
    isOpen = true;
    btn.classList.add("toggled");
    btn.textContent = "Close Panel";
    card.classList.add("active");
    
    setTimeout(() => {
      line.classList.add("active");
    }, 150);
    
    setTimeout(() => {
      formBox.classList.add("active");
      startTyping();
    }, 550);

  } else {
    // --- CLOSE/RESET SEQUENCE ---
    isOpen = false;
    btn.classList.remove("toggled");
    btn.textContent = "Contact Me";
    
    // 1. Instantly drop fields down
    fields.forEach(el => el.classList.remove("show"));
    
    // 2. Kill current typing animation if midway running
    clearInterval(typeInterval);
    typing.textContent = "";
    
    // 3. Close up structural frames
    setTimeout(() => {
      formBox.classList.remove("active");
    }, 200);
    
    setTimeout(() => {
      line.classList.remove("active");
    }, 400);
    
    setTimeout(() => {
      card.classList.remove("active");
    }, 600);
  }
});

function startTyping() {
  const text = "const initialized = new ContactForm();";
  let i = 0;
  typing.textContent = "";
  
  clearInterval(typeInterval); // Guard assertion
  
  typeInterval = setInterval(() => {
    typing.textContent = text.slice(0, i) + "┃";
    i++;
    
    if (i > text.length) {
      clearInterval(typeInterval);
      typing.textContent = text; // Lock text without flashing line
      
      // Reveal input fields seamlessly with dynamic stagger offsets
      fields.forEach((el, index) => {
        setTimeout(() => {
          if(isOpen) el.classList.add("show"); // Verify module state hasn't changed
        }, index * 80);
      });
    }
  }, 25);
}