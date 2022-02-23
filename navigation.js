const container = document.getElementById("navbar");

container.className = "nav"

text = ["Home", "Login", "Register", "Check Cookies", "test"];
hrefs = ["index.html", "login.html","signup.html","sessioncheck.php", "test.php"];

if (text.length != hrefs.length) {
    console.error("Display Text and hrefs are not the same length!")
}
else {

for (var i = 0; i < text.length; i++) {
    var temp = document.createElement("a");
    temp.href = hrefs[i];
    temp.innerHTML = text[i];
    if (i % 2 == 0) temp.className = "navLight";
    else temp.className = "navDark"
    container.appendChild(temp)
}

}


