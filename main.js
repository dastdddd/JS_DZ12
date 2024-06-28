const images = document.querySelector(".images");

fetch(
  "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      // console.log(data[i]);
      images.innerHTML = `
    <img id="img" src="${data[i].url}" alt="">
  `;
    }
  })
  .catch((err) => {
    console.log(err);
    images.style.display = "none";
    document.querySelector(".error").innerHTML = `
      <h2>Error</h2>
      <h1>${err}</h1>
    `;
  });

images.addEventListener("click", () => {
  document.getElementById("img").style.objectFit = "cover";
});
