const form = document.getElementById ('form');

form.addEventListener ('submit', (event) => {
    event.preventDefault();

    const weigth = Number(document.getElementById ('weight').value);

    const height = Number(document.getElementById ('height').value);


    if(isNaN(weigth) || isNaN(height)) {

        alert("Digite novamente")

        return
    }

    const bmi = (weigth / (height*height)).toFixed (2);

    const value = document.getElementById ('value');
    let description = '';

    value.classList.add('normal');


    document.getElementById ('infos'). classList.remove ('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! você está abaixo do peso!';
        value.classList.add('attention');
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Parabéns, você está com o peso ideal!';
        value.classList.add ('normal')
    } else if (bmi > 25 && bmi <= 30 ) {
        description = 'Cuidado! você está com sobrepeso!';
        value.classList.add('attention');
    } else if (bmi > 30 && bmi <= 40) {
        description = 'Cuidado! você está com obesidade severa!';
        value.classList.add('attention');
    } else {
        description = 'Cuidado! você está com obesidade mórbida!'
        value.classList.add('attention');
    }
    value.textContent = bmi.replace ('.', ',');
    document.getElementById ('description').textContent = description;
    

});