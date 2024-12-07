// Ikki turdagi dasturlash tilllari mavjud

// 1. Compiled language: Java, GoLang, C , C++, C# Rust   => Compiling (mashina tiliga o'g'iradi birinchi keyin run qiladi), & Run

// 2. Interpreted Language: NodeJS , Python, PHP, Ruby    => Run ( Birdaniga yozilgan codeni o'qib ketadi)

/*
   Bularni farqi Compiled languagelar codelarni birinchi mashina tiliga o'giradi keyi run qiladi va shu jarayonda type error chiqsa run qilmasdan shunday errorni ko'rsatad.
   Interpretedda esa o'sha xatoga kelmaguncha u xatoni bilib bo'lmaydi.
*/

// Data typle in typescriptda:

// Typescript - bu type errorlarni oldindan aniqlash uchun ishlatiladi va u javascriptni ustida qurilganligi sababli javascriptni harqadnay code unda ishlaydi asosiy ishi static tiplash uchun ishlatiladi.

// Typescript ustida amallar:

let box: string = "Hello";
box = "100"

const counter: number = 2000;

let state : number | string = " Tokhirbek ";

let panding : boolean = true;

// Oddiy usulda object yaratish:

//Interface => Bu shunchaki type ga aniqlik kiritish uchun ishlatiladigan referancega ega bo'lmagan typescript structure: u bilan data type lari qay ko'rinishda bo'lishini oldindan kiritilgani kabi yozilmagan bo'lsa errorni ko'rsatadi;
interface Person {
    name : string;
    age : number;
    nation: string;
}

const person: Person = {
    name: "Tokhirbek",
    age: 27,
    nation: "Uzbekistion"
}


// Nomaqbul usul:

let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

// Array 

let skills: string[];
skills = ['Problem Sovling','Software Design','Programming'];  // bu indexlarga birorta string bo'lmagan qiymat qo'shsak xatolik beradi: Misol un number bersak error beradi!

// Agar ikkisi ham qatnashishini istasangiz quydagicha yozishingiz kerak bo'ladi!
let array : (string | number)[]; 


// class lar da typescript:

class Fish {
    age: number;
    firstName: string;
    lastName: string;

    constructor(age: number, firstName: string, lastName: string) {
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const fish= new Fish(27, "Tokhirbek", "Aminjonov") // Agar shu xolatda kiritgan typelarni o'rniga boshqa type yozsangiz xatolik beradi va code ishlamaydi!




