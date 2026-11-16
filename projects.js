// theme changing 
const themeBtn = document.querySelector('.theme')
        themeBtn.addEventListener('click', ()=>{
        document.body.classList.toggle('dark');
        //changing the content of the theme button
        const isDark = document.body.classList.contains('dark');
        themeBtn.textContent = isDark? 'Light-Mode' : 'Dark-Mode';
    })