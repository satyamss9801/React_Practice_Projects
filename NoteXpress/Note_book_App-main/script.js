// Get DOM elements
const passwordModal = document.querySelector('.modal'); 
const passwordInput = document.querySelector('.modal input');
const unlockBtn = document.querySelector('.modal button');

const addTitle = document.getElementById('note-title'); 
const addContent = document.getElementById('note-content');
const addBtn = document.getElementById('add-note');
const notesEl = document.querySelector('.notes');

// Notes array
let notes = [];

// Open modal
function openPasswordModal() {
  passwordModal.style.display = 'flex';
}

// Close modal
function closePasswordModal() {
  passwordModal.style.display = 'none'; 
}

// Unlock notes
function unlockNotes(password) {
  if (password === 'secret') {
    notesEl.style.filter = 'blur(0px)';
  } else {
    alert('Incorrect password');
  }
}

// Add note
function addNote() {
  // Get values
  const title = addTitle.value;
  const content = addContent.value;

  // Add note to array
  notes.push({title, content});

  // Clear inputs
  addTitle.value = '';
  addContent.value = '';
  
  // Re-render notes
  renderNotes(); 
}

// Render notes
function renderNotes() {
  // Loop through notes
  notes.forEach(note => {
    // Create DOM elements    
    const noteEl = document.createElement('div');
    const titleEl = document.createElement('h3');
    const contentEl = document.createElement('p');

    // Set element content
    titleEl.textContent = note.title;
    contentEl.textContent = note.content;

    // Append elements
    noteEl.appendChild(titleEl);
    noteEl.appendChild(contentEl);
    notesEl.appendChild(noteEl);
  });
}

// Show password modal
openPasswordModal();

// Handle unlock click
unlockBtn.addEventListener('click', () => {
  unlockNotes(passwordInput.value);
  closePasswordModal();
});

// Handle add note click
addBtn.addEventListener('click', addNote);

// Get note elements
const Notes = document.querySelectorAll('.note');

// Handle note clicks
Notes.forEach(note => {
  note.addEventListener('click', () => {
    note.querySelector('p').classList.toggle('show');
  })  
});