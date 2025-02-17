const resultList = [];
let result = {};
let isActive = false;
let praceticeRounds = 16;
let realRounds = 144;
function setButtonHTML() {
    const angryButton = `<button id="angry" class="button" onclick="checkEmotion('ANGRY');">Angry</button>`;
    const happyButton = `<button id="happy" class="button" onclick="checkEmotion('HAPPY');">Happy</button>`;
    const sadButton = `<button id="sad" class="button" onclick="checkEmotion('SAD');">Sad</button>`;
    const scaredButton = `<button id="scared" class="button" onclick="checkEmotion('SCARED');">Scared</button>`;
    const array = [angryButton, happyButton, sadButton, scaredButton];
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    const numbers = ["one", "two", "three", "four"];
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].replace(`class="button"`, `class="button ${numbers[i]}"`);
    }
    return array.join(" ");
}

const buttonGroupInnerHTML = setButtonHTML();
function generateImage() {
    const sadImages = [
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/sad1.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/sad10.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/sad2.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/sad3.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/sad4.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/sad5.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/sad6.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/sad7.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/sad8.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/sad9.jpeg'
    ];
    const angryImages = [
        "https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/angry1.jpeg",
        "https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/angry10.jpeg",
        "https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/angry2.jpeg",
        "https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/angry3.jpeg",
        "https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/angry4.jpeg",
        "https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/angry5.jpeg",
        "https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/angry6.jpeg",
        "https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/angry7.jpeg",
        "https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/angry8.jpeg",
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/angry9.jpeg'
    ];
    const happyImages = [
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/happy1.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/happy10.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/happy2.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/happy3.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/happy4.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/happy5.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/happy6.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/happy7.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/happy8.jpeg',
        'https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/happy9.jpeg'
    ];

    const scaredImages = [
        'https://firebasestorage.googleapis.com/v0/b/emotional-stroop.appspot.com/o/scared1.jpeg?alt=media&token=0da6347f-e36c-49f2-b1ea-4f0e7e7170ab',
        'https://firebasestorage.googleapis.com/v0/b/emotional-stroop.appspot.com/o/scared10.jpeg?alt=media&token=96b47c30-f5bc-460c-8ae1-c7146f5b7c61',
        'https://firebasestorage.googleapis.com/v0/b/emotional-stroop.appspot.com/o/scared2.jpeg?alt=media&token=da26bcf1-9c0a-4993-b65e-23ab3502add2',
        'https://firebasestorage.googleapis.com/v0/b/emotional-stroop.appspot.com/o/scared3.jpeg?alt=media&token=9afa9190-0263-40b0-b55b-2439cd908dca',
        'https://firebasestorage.googleapis.com/v0/b/emotional-stroop.appspot.com/o/scared4.jpeg?alt=media&token=53f6454d-c89e-4b51-877b-4ca0e59b8f1a',
        'https://firebasestorage.googleapis.com/v0/b/emotional-stroop.appspot.com/o/scared5.jpeg?alt=media&token=b4a4368d-fa6d-4cc3-8957-037983853f47',
        'https://firebasestorage.googleapis.com/v0/b/emotional-stroop.appspot.com/o/scared6.jpeg?alt=media&token=5674044b-fe69-4776-b005-8164ad0022a4',
        'https://firebasestorage.googleapis.com/v0/b/emotional-stroop.appspot.com/o/scared7.jpeg?alt=media&token=65bbb185-74ec-43cd-8ba4-997a99338fef',
        'https://firebasestorage.googleapis.com/v0/b/emotional-stroop.appspot.com/o/scared8.jpeg?alt=media&token=c89b2ffa-b345-4366-b63d-ac3a24b27597',
        'https://firebasestorage.googleapis.com/v0/b/emotional-stroop.appspot.com/o/scared9.jpeg?alt=media&token=85e96257-6b9a-418f-98d1-5937e7617176'
    ];

    const imageMap = {
        0: sadImages,
        1: angryImages,
        2: happyImages,
        3: scaredImages
    }
    const emotionList = [
        "SAD",
        "ANGRY",
        "HAPPY",
        "SCARED"
    ]
    const min = 0;
    const max = 3;
    const rand = Math.floor(Math.random() * (max - min + 1) + min);



    const imageList = imageMap[rand];

    const randomImage = imageList[Math.floor(Math.random() * imageList.length)];
    const randomImageEmotion = emotionList[rand];
    const randomText = emotionList[Math.floor(Math.random() * emotionList.length)];
    result["emotion"] = randomImageEmotion;
    result["text"] = randomText;
    const imageContainer = document.getElementById("imageContainer");
    const img = document.createElement('img');
    const text = document.createElement('p');
    text.classList.add('centered')
    text.innerText = randomText;
    text.style.display = 'none';
    text.setAttribute('id', 'text');
    img.onload = randomTimer;
    img.src = randomImage;
    img.style.visibility = 'hidden';
    img.setAttribute('id', 'img');
    img.classList.add(randomImageEmotion)
    imageContainer.className = '';
    // add the text emotion ("sad", "happy"...) to imageContainer class. 
    imageContainer.classList.add(randomText);
    imageContainer.appendChild(img);
    imageContainer.appendChild(text)

}
function showImage() {
    const image = document.getElementById('img');
    image.style.visibility = 'visible';
    const text = document.getElementById('text');
    text.style.display = 'inline';
    result["startTime"] = performance.now();

}

function checkEmotion(chosenEmotion) {
    let nextPageName = "";
    if (isActive) {
        isActive = false;
        result["endTime"] = performance.now();
        result["chosenEmotion"] = chosenEmotion;
        const emotionText = document.getElementById("imageContainer").className;
        if (emotionText != chosenEmotion) {
            result["correctness"] = "incorrect";
        } else {
            result["correctness"] = "correct";
        }

        if (praceticeRounds == 0 && realRounds != 0) {
            resultList.push(result);
            realRounds--
            if (realRounds == 0) {
                return renderEndPage();
            }
            nextPageName = "affective conflict resolution task"
        } else {
            praceticeRounds--
            if (praceticeRounds == 0) {
                return renderWarning();
            }
            nextPageName = "practice round"
        }
        result = {}
        resetScreen(nextPageName);
        return generateImage();
    }
}

function activatecheckEmotion() {
    isActive = true;
}

function randomTimer() {
    const min = 0.5;
    const max = 1.5;
    let rand = Math.floor(Math.random() * (max - min + 1) + min);

    setTimeout(activatecheckEmotion, rand * 1000)
    setTimeout(showImage, rand * 1000);
}

function resetScreen(nextPageName) {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = "";
    const buttonGroup = document.getElementsByClassName("button-group")[0];
    buttonGroup.innerHTML = buttonGroupInnerHTML;
    const content = document.getElementById("content");
    content.innerHTML = "";
    const title = document.getElementsByClassName("title")[0];
    title.innerText = nextPageName;
}

function renderInstructions() {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = `
            <img src='https://filedn.com/ltpGl4CBYf5Hf3ADcupJL7B/emostroop_img/sad1.jpeg' alt="">
            <div class="centered instruction-image-text">HAPPY</div>
    `;
    const buttonGroup = document.getElementsByClassName("button-group")[0];
    buttonGroup.innerHTML = `
    <button class="button" onclick="startTrial('practice round');">Start Practice Rounds</button>
    `;
}

function startTrial(nextPageName) {
    resetScreen(nextPageName);
    generateImage();
}

function renderWarning() {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = ``;
    const buttonGroup = document.getElementsByClassName("button-group")[0];
    buttonGroup.innerHTML = `<button class="button" onclick="startTrial('affective conflict resolution task');">Start</button>`;
    const title = document.getElementsByClassName("title")[0];
    title.innerHTML = `Warning`;
    const content = document.getElementById("content");
    content.innerHTML = `Practice round completed. clicking the button below will start the real trial!`;
}

function renderEndPage() {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = `Thank you for participating in our study.`;
    const buttonGroup = document.getElementsByClassName("button-group")[0];
    buttonGroup.innerHTML = `<button class="button" onclick="sendResults();">End trial</button>`;
    const title = document.getElementsByClassName("title")[0];
    title.innerHTML = `Task completed`;
}


async function sendResults(results) {
    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    fetch("/save", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: results })
    })
        .then(handleErrors)
        .then(response => console.log("Request complete! response: ", response))
        .catch(error => console.log("We got an error: ", error));
}


renderInstructions();