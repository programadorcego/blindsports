const toggleMenu = document.querySelector('.toggle-menu');

toggleMenu.addEventListener('click', e => {
    const btn = e.target;
    btn.classList.toggle('toggled');
    let toggled = btn.classList.contains('toggled');
    let maxHeight = 0;
    let visibility = 'hidden';
    btn.ariaExpanded = toggled;

    if(toggled) {
        maxHeight = document.querySelector('.menu-wrap').scrollHeight;
        visibility = 'visible';
    }

    document.querySelector('.menu-wrap').style.visibility = visibility;
    document.querySelector('.menu-wrap').style.maxHeight = `${maxHeight}px`;
});

const root = document.querySelector(':root');
let fontRootSize = localStorage.getItem('fontRootSize') || 16;
fontRootSize = parseInt(fontRootSize);
root.style.fontSize = `${fontRootSize}px`;

let highContrast = !!localStorage.getItem('high-contrast');

if(highContrast) document.body.classList.add('high-contrast');

document.querySelector('.increase-font-size').addEventListener('click', () => {
    if(fontRootSize < 32) {
        fontRootSize += 2;
        localStorage.setItem('fontRootSize', fontRootSize);
    }

    root.style.fontSize = `${fontRootSize}px`;
});

document.querySelector('.decrease-font-size').addEventListener('click', () => {
    if(fontRootSize > 16) {
        fontRootSize -= 2;
        localStorage.setItem('fontRootSize', fontRootSize);
    }

    root.style.fontSize = `${fontRootSize}px`;
});

document.querySelector('.reset').addEventListener('click', () => {
    fontRootSize = 16;
    highContrast = false;

    localStorage.removeItem('high-contrast');
    localStorage.removeItem('fontRootSize');

    document.body.classList.remove('high-contrast');

    root.style.fontSize = `${fontRootSize}px`;
});

document.querySelector('.set-high-contrast').addEventListener('click', () => {
    highContrast = !highContrast;
    localStorage.setItem('high-contrast', highContrast)
    
    if(!highContrast) localStorage.removeItem('high-contrast');

    document.body.classList.toggle('high-contrast');
});