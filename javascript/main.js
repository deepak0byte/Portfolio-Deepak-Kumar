let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle('move');
}

function validate() {
    let name = document.querySelector('.yourname');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            error();
        }
        else {
            sendEmail(name.value, email.value, msg.value);
            name.value = "";
            email.value = "";
            msg.value = "";
            success();
        }
    });
}

function sendEmail(name, email, msg) {
    emailjs.send("service_lmxnney", "template_mivpm48", {
        from_name: name,
        to_name: email,
        message: msg,
    });
}

validate();

function error() {
    swal({
        title: "Oh no...",
        text: "Fields are empty...",
        icon: "error",
    });
}

function success() {
    swal({
        title: "Good job!",
        text: "Email sent successfully!",
        icon: "success",
    });
}
