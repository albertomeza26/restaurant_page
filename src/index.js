const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const content = document.querySelector('#content');



function start() {
    home.style.backgroundColor = "rgb(255, 255, 255)"
    menu.style.backgroundColor = "rgb(215, 215, 215)"
    about.style.backgroundColor = "rgb(215, 215, 215)"
    contact.style.backgroundColor = "rgb(215, 215, 215)"
    index();
}


function index() {
    content.innerHTML = null
    {content.innerHTML = `<div id="resname"><img alt="Florentinos" src="images/Florentinos.svg"></div>
<div class="intro">
<h2>Welcome to Florentino's</h2>
</div>
<div id="introbody">
<p id="mainbody">
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.
<img alt="food-assortment" src="images/italianfoodassortment.svg">
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.
<br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.
<br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.
</p>
<br>
<h3>Gratzi,</h3>
<p id="sign">Florentino Staff</p>
</div>`
    }

}


home.addEventListener('click', start);
contact.addEventListener('click', phone);
about.addEventListener('click', info);
menu.addEventListener('click', food);

index();
