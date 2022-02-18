const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/-+*#@!%^&()_[]{}';
const generateBtn = document.querySelector("#generate-btn");
const passwordBox = document.getElementsByClassName("password-box");

function generator(length){
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

generateBtn.addEventListener("click", ()=>{
    for(let i = 0; i<4; i++){
        passwordBox[i].value = generator(12);
    }

});

for(let i =0; i < passwordBox.length; i++){
    passwordBox[i].addEventListener("click", ()=>{
        /* Select the text field */
        passwordBox[i].select();
        passwordBox[i].setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(passwordBox[i].value);

        /* Alert the copied text */
        alert("Copied the text: " + passwordBox[i].value);
    });
}
//console.log(generator(12));