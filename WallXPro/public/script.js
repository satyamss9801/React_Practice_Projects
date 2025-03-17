console.log('script.js is running!');

// API URL (Using your Access Key)
const API_URL = 'https://api.unsplash.com/photos?client_id=NWOFcCY3xL1Es_Tb7SiCvAM1NZWOO-fJxFkAc9cb2fs'; // Your Access Key

// Select the container where cards will be displayed
const container = document.getElementById('card-container');

// Fetch data from the API
fetch(API_URL)
  .then((response) => {
    if (!response.ok) throw new Error('Failed to fetch data');
    return response.json();
  })
  .then((data) => {
    console.log('API Data:', data); // Log API response to console
    data.forEach((item) => {
      createCard(item); // Call function to create card for each item
    });
  })
  .catch((error) => console.error('Error:', error));

// Function to create a card for each image
function createCard(item) {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = item.urls.small; // Assuming the API provides a 'urls.small' field
  img.alt = item.alt_description || 'Image';

  const downloadBtn = document.createElement('button');
  downloadBtn.classList.add('download-btn');
  downloadBtn.textContent = 'Download';

  // Link the download button to the image URL (direct link to image download)
  downloadBtn.onclick = () => {
    window.open(item.links.download, '_blank'); // Open the download link in a new tab
  };

  card.appendChild(img);
  card.appendChild(downloadBtn);

  container.appendChild(card);
}
