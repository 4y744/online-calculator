let navbar = `
<ul class="navbar">
    <li class="nav-item">
        <a href="/">
            <span class="brand">Calculator</span>
        </a>
    </li>
    <li class="nav-item">
        <div class="nav-search">
            <input class="nav-search-bar" type="text" placeholder="Search">
            <button class="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </li>
    <li class="nav-item">
        <a href="/math.html">
            <i class="fa-solid fa-square-root-variable"></i>
            <span class="nav-text">Math</span>
        </a>
    </li>
    <li class="nav-item">
        <a href="/physics.html">
            <i class="fa-solid fa-atom"></i>
            <span class="nav-text">Physics</span>
        </a>
    </li>
    <li class="nav-item">
        <a href="#">
            <i class="fa-solid fa-heart-pulse"></i>
            <span class="nav-text">Health</span>
        </a>
    </li>
    <li class="nav-item">
        <a href="#">
            <i class="fa-solid fa-network-wired"></i>
            <span class="nav-text">Networking</span>
        </a>
    </li>
</ul>
`;

document.head.innerHTML += `<link rel="stylesheet" href="/css/navbar.css">`;
document.getElementsByTagName('nav')[0].innerHTML = navbar;