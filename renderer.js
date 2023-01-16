const Button = document.querySelector("#button");
const keywordInput = document.querySelector("#text");
Button.addEventListener("click", (event) => {
  event.preventDefault();
  const keyword = keywordInput.value;
  console.log(keyword);
  if (window.Bridge) {
    window.Bridge.setKeyword(keyword);
  }
});



window.Bridge.KeyWordData((event, data) => {
  console.log(data);
  const container = document.getElementById("container");
  const filteredData = data.items.filter(
    (item) => item.id.kind === "youtube#video"
  );
  filteredData.forEach((item, index) => {
    const videoId = item.id.videoId;
    const title = item.snippet.title;
    const thumbnail = item.snippet.thumbnails.high.url;

    const div = document.createElement("div");
    const link = document.createElement("a");
    link.href = `https://www.youtube.com/watch?v=${videoId}`;
    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = thumbnail;
    div.appendChild(thumbnailImage);
    div.appendChild(document.createTextNode(title));
    anchor.appendChild(div);
    container.appendChild(link);
  });
});
