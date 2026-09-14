const catButton = document.querySelector("#catButton");
const dogButton = document.querySelector("#dogButton");
const result = document.querySelector("#result");

// Get a cat
catButton.addEventListener("click", async function () {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");

    if (!response.ok) {
      throw new Error("Failed to fetch cat");
    }

    const data = await response.json();

    result.innerHTML = `
    <h2>A Cat From The API</h2>
    <img src="${data[0].url}" alt="Cat from The Cat API">
    `;
  } catch (error) {
    console.error(error);
    result.textContent = "Something went wrong.";
  }
});

// Get a dog
dogButton.addEventListener("click", async function () {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/images/search");

    if (!response.ok) {
      throw new Error("Failed to fetch dog");
    }

    const data = await response.json();

    result.innerHTML = `
    <h2>A Dog From The API</h2>
    <img src="${data[0].url}" alt="Dog from The Dog API">
    `;
  } catch (error) {
    console.error(error);
    result.textContent = "Something went wrong.";
  }
});
