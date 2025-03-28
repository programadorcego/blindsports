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