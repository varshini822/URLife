document.getElementById("shorten-btn").addEventListener("click", () => {
  const input = document.getElementById("long-url");
  const result = document.getElementById("result");
  const longUrl = input.value.trim();

  if (!longUrl) {
    result.textContent = "⚠️ Please enter a valid URL.";
    result.style.color = "crimson";
    return;
  }

  // Simulate shortening
  const fakeShort = "https://urlify.ly/" + Math.random().toString(36).substring(2, 8);
  result.innerHTML = `Shortened URL: <a href="${longUrl}" target="_blank">${fakeShort}</a>`;
  result.style.color = "#2d6a4f";
});
