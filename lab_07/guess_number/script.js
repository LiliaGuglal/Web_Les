let m = 100
let start = confirm(`Start a new game \nCurrent Balance: ${m}`)



while (start){
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    for (let i=0; i<3; i++) {
        let value = prompt('Enter a number');

        if (value == randomNumber){
            let win = confirm("Good work \nAre you moving on?")
            m = m + 20
            break
        } 

        if (value !== randomNumber){
            let win = confirm("Unfortunately, you was wrong \nWill you try again?")
            m = m - 20
        } 

    }
    start = confirm(`Start a new game \nCurrent Balance: ${m}`)
    console.log(start)
}
















