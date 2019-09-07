const multipleRandomURL = 'https://dog.ceo/api/breeds/image/random/'; 
let userInput = 3;

function dogApiCall(userInput){
    fetch('https://dog.ceo/api/breeds/image/random/' + userInput)
    .then(response => response.json())
    .then(responseJson => display(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}



function display(responseJson){
    console.log(responseJson);
    for(let i =0; i < responseJson.message.length; i++){
        $('#chosen').append(`   
        <li><div class="imgWrapper"><img src="${responseJson.message[i]}" class="results-img"></div></li>
        `)
    };
    $('.results').removeClass('hidden');
}

function callOnSubmit() {
    $('form').submit(event => {
        event.preventDefault();
       userInput = $('#numberOfDogs').val();
        console.log(`user input = ${userInput}`);
        dogApiCall(userInput);
    });
}

$(callOnSubmit);