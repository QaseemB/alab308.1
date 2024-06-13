 let n = 0;

function counter(){
    n++;
    console.log("n is now at:" + n);
    while (n<15000){
       counter()
    }
}

try {
    counter();
}catch(error){
    console.log(error)
}