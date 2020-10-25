const buttonMessage = document.getElementById('icon_mes')
const bodyMessage = document.getElementById('mBody')
let message = document.getElementById("input-message")

let new_msg = (msg) =>
{
    let msg_value = msg.value
    if (msg_value.length>0)
    {
        let d = new Date()
        let mins = d.getMinutes()
        if (mins<10)
            mins = "0"+mins
        let cur_date = d.getHours()+":"+mins+" "+d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear()
       
        let message = document.createElement("div")
        message.innerText = msg_value
        message.className = "message"
        bodyMessage.appendChild(message)
        
        let message_date = document.createElement("div")
        message_date.innerText = cur_date
        message_date.className = "message-date"
        message.appendChild(message_date)
    }
    bodyMessage.scrollTop = bodyMessage.scrollHeight
    msg.value = ""
}

buttonMessage.onclick = () => {
    new_msg(message)
}

message.addEventListener('keydown', function(e) {
    if (e.keyCode == 13){
        new_msg(message)
    }
})
