const cardNumberInput = document.getElementById('numer-input');

const cardHolderInput = document.getElementById('card-holder-input');

const cardExpiryInput = document.getElementById('card-exp-input');

const cardNumberDisplay = document.getElementById('numer');

const creditCard = document.getElementById('card');

creditCard.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    creditCard.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

creditCard.addEventListener('mouseleave', () => {
    creditCard.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
});

cardNumberInput.addEventListener('input', () => {

    const input = cardNumberInput.value.replace(/\D/g, ''); 

    const formattedInput = formatCardNumber(input);

    cardNumberDisplay.innerText = formattedInput;

});

 

function formatCardNumber(input) {

    return input.replace(/(\d{4})(?=\d)/g, '$1 ');

}

 

cardExpiryInput.addEventListener('change', () => {

    const input = cardExpiryInput.value;

    const [year, month] = input.split('-'); 

    

    if (year && month) {

        const formattedDate = month + '/' + year.slice(-2); 

        document.getElementById('card-exp').innerText = formattedDate;

    } else {

        document.getElementById('card-exp').innerText = 'MM/RR';

    }

});


cardHolderInput.addEventListener('input', () => {

    const newValue = cardHolderInput.value;

    document.getElementById('card-holder').innerText = newValue;

});

function changeBackground(backgroundImage) {
    card.style.backgroundImage = `url('${backgroundImage}')`;
}