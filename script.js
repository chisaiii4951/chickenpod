function openModal(type) {
  const modal = document.getElementById("modal");
  const widget = document.getElementById("widget");
  const invite = document.getElementById("invite");

  modal.style.display = "block";

  if (type === "proof") {
    widget.src = "https://discord.com/widget?id=YOUR_SERVER_ID&theme=dark";
    invite.href = "https://discord.gg/YOUR_INVITE";
  } else {
    widget.src = "https://discord.com/widget?id=YOUR_SERVER_ID&theme=dark";
    invite.href = "https://discord.gg/YOUR_INVITE";
  }
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
