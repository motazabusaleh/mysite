alert("hello there")
var username = prompt("what is your name ")
alert(username)

var age = (prompt("how old are you?"))
if (age < 20) {
    alert("you cant enter my site")
}
else {
    alert("welcome to my site")
}

var favfood = prompt("what is your fav. food?")
alert("favfood")

function orderfood() {

    var userorder = prompt("enter your order=mansaf, burger")

    while (userorder != "mansaf" && userorder != "burger") {
        userorder = prompt("enter your order=mansaf, burger")
    }

}
orderfood();

