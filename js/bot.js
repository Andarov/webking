var telegram_bot_id = "5562562128:AAHpARLvgyfvMQ0RhJs8MttRapfmgSJxlMk"; 
var chat_id = 5279474946;
var u_name, tel, cource, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    tel = document.getElementById("tel").value;
    cource = document.getElementById("cource").value;

    message = `Ismi: ${u_name};  Tel raqami: ${tel};  Kurs nomi: ${cource}`
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};
