function currentTime24(){
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    console.log(`${hours} : ${minutes} : ${seconds}`)
}

currentTime24()

function futureDate(n){
    const date = new Date()

    date.setDate(date.getDate() + n)

    console.log(date.toDateString().split('T')[0])
}
// futureDate(1)

function DDMMYY(n = 0){
    const date = new Date();

    const day = String(date.getDate()).padStart(2,'0');
    const month = String(date.getMonth() + n).padStart(2,'0');
    const year = date.getFullYear()

    console.log(`${day}:${month}:${year}`)
}
// DDMMYY()