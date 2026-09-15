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