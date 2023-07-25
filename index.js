const toggler = document.querySelector(".toggler");
const navMenu = document.querySelector("#navMenu");

toggler.addEventListener('click', function () {
    navMenu.classList.toggle("active")
});

const scroll = document.getElementById("scroll");

scroll.addEventListener('click', () => {
    document.querySelector(".get-started").scrollIntoView({ behavior: 'smooth' });
})

async function updateDogePrice() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd');
    const data = await response.json();
    const dogePrice = data.dogecoin.usd;
    document.getElementById('dogecoinPrice').textContent = `${dogePrice} USD`;
}

updateDogePrice();