const buttonMenuProfile = document.getElementsByClassName("menu")[0]
const profileBody = document.getElementsByClassName("main-profile")[0]

const buttonMenuMessage = document.getElementsByClassName("menu")[1]
const messageBody = document.getElementsByClassName("main-message")[0]

const buttonMenuPictures = document.getElementsByClassName("menu")[2]
const picturesBody = document.getElementsByClassName("main-pictures")[0]

const buttonSplit = document.getElementById("button-split")

const audio = document.getElementById("audio_bang")
const dalmatien = document.getElementById("dalmatien")
audio.volume = 0.05

profileBody.style.zIndex = 2
messageBody.style.zIndex = 1
picturesBody.style.zIndex = 0

function swap(body1, body2)
{
    if (buttonSplit.innerText == "Collect")
    {
        if (body2.style.zIndex == "0")
        {
            move(body1, 1, 0, 0.8, -120)
            move(body2, 0.8, -120, 1, 0)
        }
        else
        {
            move(body1, 1, 0, 0.8, 120)
            move(body2, 0.8, 120, 1, 0)
        }
    }
    body1.style.zIndex = [body2.style.zIndex, body2.style.zIndex = body1.style.zIndex][0]
}

function move(body, scale1, translate1, scale2, translate2)
{
    let anime = body.animate([
        {
            transform: 'scale('+scale1+') translate('+translate1+'%)',
        },
        {
            transform: 'scale('+scale2+') translate('+translate2+'%)',
        }
    ], {
        duration: 1000,
        easing: "ease"
    })
    anime.addEventListener('finish', function() {
        body.style.transform = 'scale('+scale2+') translate('+translate2+'%)'
    });
}

function move_body(body0, body1, button)
{
    if (button.innerText == "Split")
    {
        move(body0, 1, 0, 0.8, -120)
        move(body1, 1, 0, 0.8, 120)
        button.innerText = "Collect"
    }
    else
    {
        move(body0, 0.8, -120, 1, 0)
        move(body1, 0.8, 120, 1, 0)
        button.innerText = "Split"
    }
}

buttonSplit.onclick = () =>{
    // let left = 0
    // let timer = setInterval(() => {
        
    //     console.log(window.getComputedStyle(messageBody).marginLeft)

    //     messageBody.style.marginLeft = "calc("+window.getComputedStyle(messageBody).marginLeft+" - "+left+"px)"

    //     if (window.getComputedStyle(messageBody).marginLeft[0] == "-")
    //         clearInterval(timer)
    //     left+=0.05
    // }, 1)


    if (profileBody.style.zIndex == "2")
        if (messageBody.style.zIndex == "0")
            move_body(messageBody, picturesBody, buttonSplit)
        else
            move_body(picturesBody, messageBody, buttonSplit)
    else if (messageBody.style.zIndex == "2")
        if (profileBody.style.zIndex == "0")
            move_body(profileBody, picturesBody, buttonSplit)
        else
            move_body(picturesBody, profileBody, buttonSplit)
    else
        if (messageBody.style.zIndex == "0")
            move_body(messageBody, profileBody, buttonSplit)
        else
            move_body(profileBody, messageBody, buttonSplit)
}

buttonMenuProfile.onclick = () =>{
    if (messageBody.style.zIndex == "2")
        swap(messageBody, profileBody)
    else if (picturesBody.style.zIndex == "2")
        swap(picturesBody, profileBody)
}

buttonMenuMessage.onclick = () =>{
    if (profileBody.style.zIndex == "2")
        swap(profileBody, messageBody)
    else if (picturesBody.style.zIndex == "2")
        swap(picturesBody, messageBody)
}

buttonMenuPictures.onclick = () =>{
    if (messageBody.style.zIndex == "2")
        swap(messageBody, picturesBody)
    else if (profileBody.style.zIndex == "2")
        swap(profileBody, picturesBody)
}


isplaying = false
dalmatien.onclick = () => {
    if (isplaying)
    {
        audio.pause()
        isplaying = false
    }
    else
    {
        audio.play()
        isplaying = true
    }
}

const test = document.getElementById("icon-settings-profile")
test.onclick = () =>
{
    alert()
}