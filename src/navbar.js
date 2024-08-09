import Icon from './images/noodles-svgrepo-com.svg';
export default function navBar(){
    const navBar = document.querySelector('nav');
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');
    const h1 = document.createElement('h1');
    const myIcon = new Image();
    myIcon.classList.add('svg');
    myIcon.src = Icon;
    h1.textContent = 'Ramen Bowl ';

    /*Savor the Taste of Authentic Ramen 
    Dive into a bowl of hearty, delicious ramen crafted with the freshest 
    ingredients and a blend of savory flavors. From rich broths to perfectly 
    cooked noodles, each bowl is a testament to the art of ramen making. 
    Experience comfort and culinary excellence, delivered straight to your table.*/ 

    logoContainer.append(h1,myIcon);
    navBar.append(logoContainer);
    return document.body.appendChild(navBar);
}