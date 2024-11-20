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
                         }, 100);
                    }

                    // else{
                    //      callback(null, list[5]);
                    // }
     }

console.log("Passed here 0");

maslahatBering(65, (err, data) => {
     if(err) console.log("Error:", err);
     else{
        console.log('Answer:', data )
     }
});

console.log("Passed here 1")






/// TASK A 


//  Masalani izohi: 

/* 
     Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
     MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/

// SOLUTION:

function harfSanash(harf, matn) {

     if (typeof harf !== "string" || harf.length !== 1) {
          console.log("Iltimos, faqat bitta harf kiriting!")
          return ;
      }
      if (typeof matn !== "string" || matn.length === 0) {
          console.log("Iltimos, so'z kiriting!")
          return;
      }

     harf = harf.toLowerCase();
     matn = matn.toLowerCase();
     let count = 0; 
     for (let i = 0; i < matn.length; i++) {
         if (matn[i] === harf) {
             console.log(matn[i])
             count++;
         }
     }
     // return count;
     console.log("Siz kiritgan so'zda " + count + " ta birxil harf qatnashgan !"); 
 }
 
 

 harfSanash("ee", "enginer");

 console.log("================================");
 
 harfSanash("e", 1);

 console.log("================================");

 harfSanash("e", "EngineErINg");

 console.log("================================");

 harfSanash(2, "EngineErINg");

 console.log("================================")