// script.js - Simple product rendering and AI chat placeholder

// Sample product data (you can replace with real data)
const products = [
  {
    name: "Vá»¯a XÃ¢y Dá»±ng Victory",
    img: "https://vuaxoatuong.vn/pic/SystemWebsite/logo_6355.jpg",
    desc: "Vá»¯a cháº¥t lÆ°á»£ng cao, gia cÃ´ng nhanh, phÃ¹ há»£p cho má»i cÃ´ng trÃ¬nh.",
    price: "150,000 VND"
  },
  {
    name: "Vá»¯a XÃ¢y Dá»±ng Premium",
    img: "https://vuaxoatuong.vn/pic/SystemWebsite/logo_6355.jpg",
    desc: "Vá»¯a háº¡t má»‹n, Ä‘á»™ bÃ¡m tá»‘t, chá»‹u thá»i tiáº¿t tá»‘t.",
    price: "200,000 VND"
  },
  {
    name: "Keo DÃ¡n Gáº¡ch Victory",
    img: "https://vuaxoatuong.vn/pic/SystemWebsite/logo_6355.jpg",
    desc: "Keo dÃ¡n gáº¡ch nhanh khÃ´, Ä‘á»™ bÃ¡m máº¡nh.",
    price: "120,000 VND"
  }
];

function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <p class="price">${p.price}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Simple AI chat placeholder (echo back user input)
function initChat() {
  const chatBtn = document.getElementById("chatBtn");
  const chatModal = document.getElementById("chatModal");
  const closeBtn = document.getElementById("closeBtn");
  const sendBtn = document.getElementById("sendBtn");
  const chatInput = document.getElementById("chatInput");
  const chatLog = document.getElementById("chatLog");

  chatBtn.addEventListener("click", () => chatModal.classList.toggle("hidden"));
  closeBtn.addEventListener("click", () => chatModal.classList.add("hidden"));
  sendBtn.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", e => { if (e.key === "Enter") sendMessage(); });

  function sendMessage() {
    const msg = chatInput.value.trim();
    if (!msg) return;
    appendMessage("You", msg);
    // Placeholder AI response: just echo back
    setTimeout(() => appendMessage("AI", `Báº¡n nÃ³i: ${msg}`), 500);
    chatInput.value = "";
  }

  function appendMessage(sender, text) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatLog.appendChild(p);
    chatLog.scrollTop = chatLog.scrollHeight;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initChat();
});
