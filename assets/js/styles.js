AOS.init({
    duration: 1200,
  })
  

  

 /* // Selectors
const addEntryButton = document.querySelector('.add-entry-btn');
const diaryEntriesContainer = document.querySelector('.diary-entries');

// Load existing entries from Local Storage
function loadEntries() {
    const entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    entries.forEach(entry => displayEntry(entry));
}

// Display a diary entry
function displayEntry(entry) {
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('diary-entry');
    entryDiv.innerHTML = `
        <h3>${entry.title}</h3>
        <p class="date">${entry.date}</p>
        <p class="content">${entry.content}</p>
    `;
    diaryEntriesContainer.appendChild(entryDiv);
}

// Add new entry
function addEntry() {
    const title = prompt('Enter the title of your diary entry:');
    const content = prompt('Write the content of your diary entry:');

    if (title && content) {
        const entry = {
            title,
            date: new Date().toLocaleDateString(),
            content
        };

        // Save to Local Storage
        const entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
        entries.unshift(entry);
        localStorage.setItem('diaryEntries', JSON.stringify(entries));

        // Display the new entry
        displayEntry(entry);
    } else {
        alert('Both title and content are required!');
    }
}

// Event Listeners
// addEntryButton.addEventListener('click', addEntry);

// Initial Load
loadEntries();*/
