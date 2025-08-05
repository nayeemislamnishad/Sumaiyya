const gallery = document.querySelector('.gallery');

for (let i = 2; i <= 50; i++) {
  const div = document.createElement('div');
  div.className = 'photo';
  div.innerHTML = `
    <img src="images/photo${i}.jpg" alt="Photo ${i}">
    <p class="caption">This is memory #${i}, and I still adore you 💗</p>
  `;
  gallery.appendChild(div);
}
