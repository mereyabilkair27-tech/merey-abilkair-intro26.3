const catButton = document.querySelector("#catButton");
const catButton2 = document.querySelector("#catButton2");
const result = document.querySelector("#result");

catButton.addEventListener("click", async function () {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=1",
    );

    const data = await response.json();

    result.innerHTML = `
    <h2>A Cat From The API</h2>
    <img src="${data[0].url}" alt="Cat">
    `;
  } catch (error) {
    result.textContent = "Something went wrong.";
  }
});

catButton2.addEventListener("click", async function () {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?has_breeds=true&limit=1",
    );

    const data = await response.json();

    result.innerHTML = `
    <h2>Tell Me About Cats</h2>
    <p>This cat is from the Cat API.</p>
    `;
  } catch (error) {
    result.textContent = "Something went wrong.";
  }
});
