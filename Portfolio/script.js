// Select the Contacts div
const contactsDiv = document.querySelector('.five');

// Add a click event listener to the Contacts div
contactsDiv.addEventListener('click', function () {
  // Create a new div element
  const newDiv = document.createElement('div');
  newDiv.classList.add('main', 'seven'); // Add the classes "main" and "seven"

  // Add content to the new div
  newDiv.textContent = 'New Box';

  // Append the new div to the body or another parent element
  document.body.appendChild(newDiv);
});