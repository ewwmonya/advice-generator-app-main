const url = 'https://api.adviceslip.com/advice';
const randomBtn = document.querySelector('.randomBtn');

const adviceContainer = document.querySelector('.advice-box');




randomBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const data = await fetchAdvice();
    displayAdvice(data)
});



const fetchAdvice = async () => {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        //console.log(data);
        return data;
    } catch (error) {
        console.log('no luck brua');
    }
}
;



const displayAdvice = (item) =>{
    const {id, advice: text} = item.slip;
    adviceContainer.innerHTML =`<p class="advice-id">ADVICE <span>#${id}</span></p>
      <p class="advice-text">${text}</p>`
};

