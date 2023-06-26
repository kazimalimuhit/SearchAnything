let btn = document.querySelector(".btn");
let img = document.querySelector(".image");
let input = document.querySelector(".input");
let h1 = document.querySelector(".h1");
let icon = document.querySelector(".icon");
let body = document.querySelector(".body");
let ptag = document.querySelector(".ptag");
let download = document.getElementById("download");
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let container = document.querySelector(".container");
let desc = "";
let likePhoto = "";
let link = "";
let existingP = "";
btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const randomItem = arr[randomIndex];

  arr.splice(randomIndex, 1);

  if (arr.length === 0) {
    arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  console.log(randomItem);

  let hello = input.value.toString();
  let url =
    "https://api.unsplash.com/search/photos?page=1&query=" +
    hello +
    "?&client_id=_6fxlTIQ9LSKV-QvKIa7ImXMub5TlClXX5ALCwvlTSk";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      img.src = res.results[randomItem].urls.raw;
      likePhoto = res.results[randomItem].id;
      console.log(res.results[randomItem]);
      existingP = document.querySelector("p");
      if (existingP) {
        existingP.remove();
      }
      let p = document.createElement("p");
      p.textContent = res.results[randomItem].description;
      p.classList.add("p");
      ptag.appendChild(p);
    });
});

/*icon.addEventListener("click", () => {
  let photoId = likePhoto;
  let accessToken = "_6fxlTIQ9LSKV-QvKIa7ImXMub5TlClXX5ALCwvlTSk";
  fetch(`https://api.unsplash.com/photos/${photoId}/like`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Accept-Version": "v1",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("Success!");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
*/
body.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const randomItem = arr[randomIndex];

    arr.splice(randomIndex, 1);

    if (arr.length === 0) {
      arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    console.log(randomItem);

    let hello = input.value.toString();
    let url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      hello +
      "?&client_id=_6fxlTIQ9LSKV-QvKIa7ImXMub5TlClXX5ALCwvlTSk";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        img.src = res.results[randomItem].urls.raw;
        existingP = document.querySelector("p");
        likePhoto = res.results[randomItem].id;
        console.log(res.results[randomItem]);
        if (existingP) {
          existingP.remove();
        }
        let p = document.createElement("p");
        p.textContent = res.results[randomItem].description;
        p.classList.add("p");
        ptag.appendChild(p);
      });
  }
});
