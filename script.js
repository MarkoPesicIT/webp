function openPopup(title, content) {
      document.getElementById('popup-title').innerText = title;
      document.getElementById('popup-content').innerText = content;
      document.getElementById('popup').style.display = 'block';
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('closing');
    setTimeout(() => {
      popup.style.display = 'none';
      popup.classList.remove('closing');
    }, 500);
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closePopup();
    }
  });

  function openPopup(title, shortDescription, fullText, imageUrl) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-content').innerHTML = `<p>${shortDescription}</p><p>${fullText}</p>`;
    document.getElementById('popup-image').src = imageUrl;
    document.getElementById('popup').style.display = 'block';
}

