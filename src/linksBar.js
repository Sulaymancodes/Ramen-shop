export default function links(){
    const navBar = document.querySelector('nav');
    const linksContainer =  document.createElement('div');
    linksContainer.classList.add('links-container');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const aboutBtn = document.createElement('button');
    const shopBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.innerText = 'Home';
    menuBtn.innerText = 'Menu';
    aboutBtn.innerText = 'About';
    shopBtn.innerText = 'Shop';
    contactBtn.innerText = 'Contact';
    contactBtn.classList.add('contact-btn');

    linksContainer.append(homeBtn,menuBtn,aboutBtn,shopBtn,contactBtn);
    navBar.appendChild(linksContainer)
    return navBar;


}