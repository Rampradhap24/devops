// Log when the script is loaded
console.log("🚀 script.js loaded successfully!");

// Button click event
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("deployBtn");
  const msg = document.getElementById("msg");

  if (btn) {
    btn.addEventListener("click", () => {
      msg.textContent = "🎉 This site is automatically deployed using Jenkins & Docker!";
      msg.style.fontWeight = "bold";
      msg.style.color = "#ffeb3b";
    });
  }

  // Show dynamic timestamp
  const now = new Date();
  console.log(`Site loaded at: ${now.toLocaleString()}`);
});
