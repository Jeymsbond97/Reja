console.log("Jack Ma Maslahatlari");

const list = [
    "Yaxshi talaba bo'ling", // 0-20
    "To'g'ri boshliq tanlang va ko'proq xato qiling!", // 20-30
    "U'zingizga ishlashni boshlang !" , // 30-40
    "Siz kuchli bo'lgan nasrsalarni qiling!", // 40-50 
    "Yoshlarga investitsa qiling!", // 50-60
    "Endi dam oling ", // 60+
];

function maslahatBering(a, callback) {
    if(typeof a !== "number") callback("Enter number", null);
    else if(a <= 20) callback(null, list[0]);
    else if(a > 20 && a <= 30 ) callback (null, list[1]);
    else if(a > 20 && a <= 30 ) callback (null, list[2]);
    else if(a > 20 && a <= 30 ) callback (null, list[3]);
    else if(a > 20 && a <= 30 ) callback (null, list[4]);
     else {
          setImmediate(function () {
                callback(null, list[5]);
          }, 5000);
     }
}

console.log("Passed here 0");

maslahatBering(65, (err, data) => {
     if(err) console.log("Error:", err);
     else{
        console.log('Answer:', data )
     }
});

console.log("Passed here 1")