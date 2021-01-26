//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("button").addEventListener("click", getImage);

function getImage() {
  let inputVal = document.querySelector("input").value;
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=Ynf3tkw6JROsRE4ycUjRI1Elthzj2tgb6qr5bhii";

  fetch(url)
    .then((res) => res.json()) //parse response as JSON
    .then((data) => {
      console.log(data);
      let imgName = data.title;
      let imgSrc = data.url;
      let imgDsrc = data.explanation;
      document.querySelector("h2").innerText = imgName;
      document.querySelector("img").src = imgSrc;
      document.querySelector("h3").innerText = imgDsrc;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
