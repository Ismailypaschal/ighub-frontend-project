// const hambugger = document.getElementById('hambugger')
// const x = document.getElementById('x')
// const nav = document.getElementById('header_sidebar_container')

// function showMobileNav() {

//     hambugger.classList.toggle('hide')
//     x.classList.toggle('hide')
//     nav.classList.toggle('hide')
// }

const hamburger = document.getElementById('hamburger');
const x = document.getElementById('x');
const ul = document.getElementById('mobile_sidebar');

function showMobileNav() {

    hamburger.classList.toggle('hide');
    x.classList.toggle('hide');
    ul.classList.toggle('show');
}


function showConnect() {
    const down = document.getElementById("down");
    const up = document.getElementById("up");
    const connect = document.getElementById("connect");

    down.classList.toggle("hide");
    up.classList.toggle("show")
    connect.classList.toggle("show");   
}

function showConnectDesk() {
    const down = document.getElementById("downdesk");
    const up = document.getElementById("updesk");
    const connect_desk = document.getElementById("connect_desk");

    down.classList.toggle("hide");
    up.classList.toggle("show");
    connect_desk.classList.toggle("show");   
}