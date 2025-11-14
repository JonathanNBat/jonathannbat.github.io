var card = [
    {
        link: "https://github.com/JonathanNBat",
        title: "Pheonicks Site",
        image: "../images/windowimages/Pheonicks.png",
        description: "Website to showcase my progress and skillset"
    }
]
function cardLoad() {
    for (let i in card) {
        let insert = `
        <a href="${card[i]["link"]}" style="text-decoration: none;">
        <div class="window">
            <div class="windowhead">
                <h1 style="font-size: 20px; padding-left: 10px;"><strong>${card[i]["title"]}</strong></h1>
                <div class="circle"></div>
            </div>
            <div class="windowcontent">
                <img src="${card[i]["image"]}" alt="Photo" id="windowCover">
                <p>${card[i]["description"]}</p>
            </div>
        </div>
        </a>
        `
        let ele = document.getElementById('content');
        ele.innerHTML += insert;
    }
}
