function signin() {
    var userInput = [];
    userInput[0] = $("#username").val();
    userInput[1] = $("#password").val();

    $.ajax({
        type: "POST",
        url: "admin.asmx/authenticate",
        data: JSON.stringify({ login: userInput }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            var results = msg.d;
            document.location.href = "http://localhost:2633/all-done.html";
            //$("#results").text(results);
            

            
        },
        error: function (msg) {
            console.log("Error");
        }
    });
};