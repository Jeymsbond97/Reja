console.log("Train.js ishga tushdi~~~~~~~~~~~~~~~~")


// D TASK:
/*
   Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
   MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

// SOLUTION:

function checkString(string1, string2) {
  if(string1 !== string2){
    return false;
  }

  const sortString1 = string1.split("").sort().join('');
  const sortString2 = string1.split("").sort().join('');
  console.log(sortString1 + ' = ' + sortString2);
  return true;
 
 
}

console.log(checkString("hello", "hello"))


// console.log("Jack Ma Maslahatlari");

// const list = [
//     "Yaxshi talaba bo'ling", // 0-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling!", // 20-30
//     "U'zingizga ishlashni boshlang !" , // 30-40
//     "Siz kuchli bo'lgan nasrsalarni qiling!", // 40-50 
//     "Yoshlarga investitsa qiling!", // 50-60
//     "Endi dam oling ", // 60+
// ];

 // function maslahatBering(a, callback) {
// //     if(typeof a !== "number") callback("Enter number", null);
// //     else if(a <= 20) callback(null, list[0]);
// //     else if(a > 20 && a <= 30 ) callback (null, list[1]);
// //     else if(a > 30 && a <= 40 ) callback (null, list[2]);
// //     else if(a > 40 && a <= 50 ) callback (null, list[3]);
// //     else if(a > 50 && a <= 60 ) callback (null, list[4]);
// //                     else {
// //                          setTimeout(function () {
// //                               callback(null, list[5]);
// //                          }, 2000);
// //                     }

// //                     // else{
// //                     //      callback(null, list[5]);
// //                     // }
// //      }


// // console.log("Passed here 0");

// // maslahatBering(55, (err, data) => {
// //      if(err) console.log("Error:", err);
// //      else{
// //         console.log('Answer:', data )
// //      }
// // });

// // console.log("Passed here 1");



// // Async Function 

// async function maslahatBering(a) {
//     if(typeof a !== "number") throw new Error("Insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30 )  return list[1];
//     else if(a > 30 && a <= 40 )  return list[2];
//     else if(a > 40 && a <= 50 )  return list[3];
//     else if(a > 50 && a <= 60 )  return list[4];
//                     else {
//                         return new Promise((resolve, reject) => {
//                             setTimeout(() => {
//                                 resolve(list[5]);
//                             }, 5000);
//                         })
//                     }
                    
//      }


// Call vie then/catch:
// then/ catch

// console.log("passed here 0");
// maslahatBering(65)
// .then((data)=>{
//     console.log("javob:", data)
// }).catch((err)=>{
//     console.log("ERROR", err)
// });
// console.log("Passed here 1")



// asyn/await: 


// call vie await:
// async function run() {
//     let javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(30);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();









/// TASK A 


//  Masalani izohi: 

/* 
     Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
     MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/

// SOLUTION:

// function harfSanash(harf, matn) {

//      if (typeof harf !== "string" || harf.length !== 1) {
//           console.log("Iltimos, faqat bitta harf kiriting!")
//           return ;
//       }
//       if (typeof matn !== "string" || matn.length === 0) {
//           console.log("Iltimos, so'z kiriting!")
//           return;
//       }

//      harf = harf.toLowerCase();
//      matn = matn.toLowerCase();
//      let count = 0; 
//      for (let i = 0; i < matn.length; i++) {
//          if (matn[i] === harf) {
//              console.log(matn[i])
//              count++;
//          }
//      }
//      // return count;
//      console.log("Siz kiritgan so'zda " + count + " ta birxil harf qatnashgan !"); 
//  }
 
 

//  harfSanash("ee", "enginer");

//  console.log("================================");

//  harfSanash("e", 1);

//  console.log("================================");

//  harfSanash("e", "EngineErINg");

//  console.log("================================");

//  harfSanash(2, "EngineErINg");

//  console.log("================================");







/// TASK B:

/*
   Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
   MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi
*/

// SOLUTION: N0:1 with synchronous function:

// function countDigits(string){
//     if(typeof string !== "string"){
//       return "Please, faqat matn kiriting"
//     }
//     let digit = 0;
//     for(let char of string){
//       if(!isNaN(char)){
//         digit++;
//       }
     
//     }
//     console.log("Siz kiritigan so'zda " + digit + " ta raqam bor");

// }

// countDigits("ad2a54y79wet0sfgb9")

// console.log("~~~~~~~~~~~~~ 1 ~~~~~~~~~~~~~~")

// SOLUTION: N0:2 with callback function

//Define section:
// function countDigitsCall(text, callback){
//   if(typeof text !== "string" ) {
//     callback("Iltimos, faqat matn kiriting", null);
//     return;
//   }
//   let number = 0;
//   for( let char of text){
//     if(!isNaN(char)){
//       number++;
//     }
//   }
   
//   callback(null, `Siz kiritgan matnda ${number} ta raqam bor`)
// }

// Call section:

// countDigitsCall("ad2a54y79wet0sfgb9", (err, data)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log(data);
//   }
// })

// console.log("~~~~~~~~~~~~~ 2 ~~~~~~~~~~~~~~")


// // SOLUTION: N0:3 With asynchrounous Function:

// // Define section:

// function countDigitsAsync(input) {
//   return new Promise((resolve, reject) => {
//       if (typeof input !== "string") {
//           reject("Please, faqat matn kiriting");
//           return;
//       }

//       let count = 0;
//       for (let char of input) {
//           if (!isNaN(char)) {
//               count++;
//           }
//       }

//       setTimeout(()=>{
//         resolve(`Siz kiritgan so'zda ${count} ta raqam bor`);
//       }, 3000);
//   });
// }

// Call section: then/catch

//  countDigitsAsync("ad2a54y79wet0sfgb9")
//   .then(result => console.log(result))
//   .catch(err => console.error(err));


// console.log("~~~~~~~~~~~~~~~~ 3 ~~~~~~~~~~~~~~~~~~")

/*
  Yoqrida define qismida promise bilan yozilgan codeni Call qismini Await bilan yozish quydagicha bo'ladi.
*/

// Define 
// .......
// Call section => await:

// async function boshla() {
//   let natija = await countDigitsAsync("ad2a5");
//   console.log(natija);
//   natija = await countDigitsAsync("ad2a54y");
//   console.log(natija);
// }
// boshla();



//  TASK - C: 

/*
   Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.

    MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/

// SOLUTION: 

 /* class Shop {
   constructor(non, banan, nok){
    this.items = {
      non: non,
      banan: banan,
      nok: nok 
    }
   }

    // Hozirgi mahsulotlarni bilish method:
    allItems() {
      const time = new Date().toLocaleString();
      console.log(
        `Hozirgi ${time} da jami maxsulotlar: ${this.items.non} ta non, ${this.items.banan} ta banan, ${this.items.nok} ta nok `
      )
    }

   // Maxsulot qo'shish method:
   additems(item, number){
       this.items[item] += number;
       const time = new Date().toLocaleString();
       console.log(`Hozir  ${time} da omborga : ${number} ta ${item} qo'shildi!` )
   }

   // Maxsulot sotish method:

  takeItems(item, number){
    if(this.items[item] >= number){
      this.items[item] -= number;
      const time = new Date().toLocaleString();
      console.log(`Hozir  ${time} da ombordan : ${number} ta ${item} sotildi` )
    } else[
      console.log(` 
            Hozirgi vaqtda omborda yetarli ${item} mavjud emas!
            Qoldiq: ${this.items[item]} ta ${item} bor
        `)
    ]
    
  }



}

const shop = new Shop(4, 6, 2)

shop.allItems();

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
shop.additems("non", 3);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
shop.allItems();
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
shop.takeItems('banan', 7);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
shop.takeItems('nok', 2);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
shop.allItems();  */