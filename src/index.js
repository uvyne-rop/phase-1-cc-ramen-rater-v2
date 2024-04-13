// index.js

// Callbacks
const handleClick = (ramen) => {
  const detailImg = document.querySelector("#ramen-detail > .detail-image");
  const detailName = document.querySelector("#ramen-detail > .name");
  const detailRestaurant = document.querySelector("#ramen-detail > .restaurant");
  const detailsRating = document.getElementById("rating-display");
  const detailsComment = document.getElementById("comment-display");

  detailImg.src = ramen.image;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  detailsRating.textContent = ramen.rating.toString();
  detailsComment.textContent = ramen.comment;
};

const addSubmitListener = () => {
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const newRamen = {};
    formData.forEach((value, key) => {
      newRamen[key] = value;
    });
    const response = await fetch('http://localhost:3000/ramens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRamen),
    });
    if (response.ok) {
      const ramen = await response.json();
      const ramenMenu = document.getElementById('ramen-menu');
      const img = document.createElement('img');
      img.src = ramen.image;
      img.alt = ramen.name;
      img.addEventListener('click', () => handleClick(ramen));
      ramenMenu.appendChild(img);
      form.reset();
    } else {
      console.error('Failed to add new ramen:', response.statusText);
    }
  });
};

const displayRamens = async () => {
  try {
    const response = await fetch('http://localhost:3000/ramens');
    if (!response.ok) {
      throw new Error('Failed to fetch ramens');
    }
    const ramens = await response.json();
    const ramenMenu = document.getElementById('ramen-menu');
    ramens.forEach(ramen => {
      const img = document.createElement('img');
      img.src = ramen.image;
      img.alt = ramen.name;
      img.addEventListener('click', () => handleClick(ramen));
      ramenMenu.appendChild(img);
    });
  } catch (error) {
    console.error('Error fetching and displaying ramens:', error);
  }
};

const main = () => {
  displayRamens();
  addSubmitListener();
};

main();

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
