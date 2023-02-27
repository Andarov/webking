var telegram_bot_id = "5562562128:AAHpARLvgyfvMQ0RhJs8MttRapfmgSJxlMk"; 
var chat_id = 5279474946;
var u_name, tel, cource, message, name2, last_name, cource_name, tel2, xabar;
var ready = function() {
    if (u_name, tel, cource) {
        u_name = document.getElementById("name").value;
        tel = document.getElementById("tel").value;
        cource = document.getElementById("cource").value;

        message = `Ismi: ${u_name};  Tel raqami: ${tel};  Kurs nomi: ${cource}`
    }else
    {
        name2 = document.getElementById("name2").value;
        last_name = document.getElementById("last-name").value;
        cource_name = document.getElementById("cource-name").value;
        tel2 = document.getElementById("tel2").value;
        xabar = document.getElementById("message").value;

        message = `Ismi: ${name2}};  Familiyasi: ${last_name};  Kurs nomi: ${cource_name};  Tel raqami: ${tel2};  Xabar: ${xabar}`;
    }

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

    if (u_name, tel, cource){
        document.getElementById("name").value = "";
        document.getElementById("tel").value = "";
        document.getElementById("cource").value = "";
    }
    else{
        document.getElementById("name2").value = "";
        document.getElementById("tel2").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("cource-name").value = "";
        document.getElementById("message").value = "";
    }

    alert("So'rovingiz yuborilsinmi")

    return false;
};
