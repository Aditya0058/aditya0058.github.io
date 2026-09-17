const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    })
})
// data from hackatime
async function loadHackatimeStats() {
    const response = await fetch('https://hackatime.hackclub.com/api/v1/users/adityarajput/stats');
    const data = await response.json();
    console.log(data);
    
    // finding elements and putting data there
    const TT = document.getElementById('total-time');
    const streak = document.getElementById('current-streak')
    TT.textContent = data.data.human_readable_total;
    const msg = `${data.data.streak} Days`;
    streak.textContent = msg;
}
loadHackatimeStats();

// theme changing 
const themeBtn = document.querySelector('.theme')
themeBtn.addEventListener('click', ()=>{
if (document.body.classList.contains('dark')){
        themeBtn.addEventListener('click', ()=>{
        document.body.classList.remove('dark');
        //changing the content of the theme button
        const isDark = document.body.classList.contains('dark');
        themeBtn.textContent = isDark? 'Light-Mode' : 'Dark-Mode';
    })
} else {
        themeBtn.addEventListener('click', ()=>{
        document.body.classList.add('dark');
        //changing the content of the theme button
        const isDark = document.body.classList.contains('dark');
        themeBtn.textContent = isDark? 'Light-Mode' : 'Dark-Mode';
        })
}


})

// Emailme button
