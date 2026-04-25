function openModal(type) {
  const modal = document.getElementById("modal");
  const widget = document.getElementById("widget");
  const invite = document.getElementById("invite");

  modal.style.display = "block";

  if (type === "proof") {
    widget.src = "https://discord.com/widget?id=1441336765377024054&theme=dark";
    invite.href = "https://discord.gg/https://discord.gg/KSq34uw6u";
  } else {
    widget.src = "https://discord.com/widget?id=1442698990054543474&theme=dark";
    invite.href = "https://discord.gg/https://discord.gg/z4mJZAnh";
  }
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
