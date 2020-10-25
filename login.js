const loginButton = document.getElementById("button-login")
const goingRegButton = document.getElementById("button-going-reg")
const registerButton = document.getElementById("button-register")
const okayButton = document.getElementById("button-okay")
const goingLoginButton = document.getElementById("button-going-login")

const loginBody = document.getElementById("login-form")
const registerBody = document.getElementById("register-form")
const okayBody = document.getElementById("okay-form")

const mainBody = document.getElementsByTagName("body")[0]

mainBody.style.background = "linear-gradient(45deg, white, rgb("+rnd(100, 150)+", "+rnd(150, 200)+", "+rnd(150, 200)+"))"

function rnd(min, max) {
    return Math.random() * (max - min) + min;
}

goingLoginButton.onclick = () => {
    move(loginBody, "-100", "0")
    move(registerBody, "-100", "0")
}

goingRegButton.onclick = () => {
    move(loginBody, "0", "-100")
    move(registerBody, "0", "-100")
}

registerButton.onclick = () => {
    move(registerBody, "-100", "-200")
    move(okayBody, "0", "-100")
}
okayButton.onclick = () => {
    document.location.href = ("index.html")
}

function move(body, translate1, translate2)
{
    let anime = body.animate([
        {
            transform: 'translate('+translate1+'%)',
        },
        {
            transform: 'translate('+translate2+'%)',
        }
    ], {
        duration: 1000,
        easing: "ease"
    })
    anime.addEventListener('finish', function() {
        body.style.transform = 'translate('+translate2+'%)'
    });
}
