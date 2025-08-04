
    const electionDate = new Date("August 20, 2025 00:00:00").getTime();
    const countdown = document.getElementById("countdown");

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = electionDate - now;

      if (distance < 0) {
        countdown.innerHTML = "Election Day is Here!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
    
  // Load saved comments
  document.addEventListener("DOMContentLoaded", () => {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments.forEach(c => displayComment(c.name, c.message));
  });

  // Add comment
  function addComment() {
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !message) {
      alert("Please enter both name and message!");
      return;
    }

    displayComment(name, message);

    // Save to local storage
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push({ name, message });
    localStorage.setItem("comments", JSON.stringify(comments));

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
  }

  // Display comment on page
  function displayComment(name, message) {
    const commentList = document.getElementById("commentList");
    const div = document.createElement("div");
    div.style.border = "1px solid #ddd";
    div.style.padding = "10px";
    div.style.margin = "10px 0";
    div.style.borderLeft = "5px solid var(--primary)";
    div.innerHTML = `<strong>${name}:</strong> ${message}`;
    commentList.appendChild(div);
  }
