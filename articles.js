// articles.js - Storie dei membri e gestione popup

// Dati dei membri (storie dettagliate)
const membersData = {
  mara: {
    name: 'Alberto Radossi',
    role: 'Percussion, guitar',
    bio: `<p>Alberto Radossi is an Italian percussionist based in The Hague. Active in orchestral, chamber, and experimental music, he performs across Europe, collaborating with ensembles and creating interdisciplinary projects that blend different types of arts. </p>
          <p>He is particularly interested in experimental, folk, jazz, and improvisational music.</p>`,
    avatarId: 'avatar1'  // riferimento all'ID nell'HTML
  },
  sol: {
    name: 'Daniele',
    role: 'Trumpet',
    bio: `<p>Born on April 26, 2002, he began his musical journey at the age of 8 in his local band, where his passion for music first took shape. He later studied at the “G. Rossini” Conservatory in Pesaro with A. Domizi, M. Fratini, and Federico Mondelci, refining his artistic voice through both formal studies and international masterclasses.</p>`,
    avatarId: 'avatar2'
  },
  eliot: {
    name: 'Marco Tencati Corino',
    role: 'guitar',
    bio: `<p>He has performed as a soloist in various concerts, standing out for his expressive playing and musical sensitivity. A dedicated chamber musician, he collaborates with different ensembles and projects.</p>
          <p>After graduating with top honors, he is currently pursuing a Master’s degree at the Royal Conservatory of The Hague, continuing to develop his artistic path.</p>`,
    avatarId: 'avatar3'
  }
};

// Elementi del DOM
const modalOverlay = document.getElementById('memberModal');
const modalClose = document.getElementById('modalClose');
const modalAvatar = document.getElementById('modalAvatar');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalBio = document.getElementById('modalBio');

// Funzione per aprire il modale
function openModal(memberKey) {
  const member = membersData[memberKey];
  if (!member) return;

  // Imposta l'avatar: prendi l'immagine di sfondo dall'avatar corrispondente
  const avatarElement = document.getElementById(member.avatarId);
  if (avatarElement) {
    const bgImage = window.getComputedStyle(avatarElement).backgroundImage;
    modalAvatar.style.backgroundImage = bgImage;
  } else {
    // Fallback
    modalAvatar.style.backgroundImage = 'none';
    modalAvatar.style.backgroundColor = '#2c2c34';
  }

  modalName.textContent = member.name;
  modalRole.textContent = member.role;
  modalBio.innerHTML = member.bio;

  // Mostra il modale con fade in
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // impedisce lo scroll sotto
}

// Funzione per chiudere il modale
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = ''; // ripristina scroll
}

// Event listener sulle card dei membri
document.querySelectorAll('.member-card').forEach(card => {
  card.addEventListener('click', (e) => {
    const memberKey = card.dataset.member; // 'mara', 'sol', 'eliot'
    if (memberKey) {
      openModal(memberKey);
    }
  });
});

// Chiudi al click sul pulsante X
modalClose.addEventListener('click', closeModal);

// Chiudi al click sullo sfondo (overlay)
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Chiudi con il tasto ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

console.log('📖 articles.js caricato - popup interattivo pronto');
