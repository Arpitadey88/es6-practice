// 22.2 let,const,array declared with const, object declared with const

const hubby = "Samrat Kumar";
console.log(hubby);

const number = [12, 45];
number [1] = 88;
number.push(24);
// number = ["sunny", "salman", "omit hasan"];
console.log(number);

// NOTE--------------------------------------------------------------------------------------
// jeheto array 0, 1 vabe count kore tai [1] no position e 45 er jaigai 88 replace hoye gese.
// const er khetre array er value change kora jai..but puro array structure change kora jaina..
// [12, 45] er poriborte ["sunny", "salman", "omit hasan"] arokom array kora jabe na.
// 2/1 ta element change kora update kora agula kora jabe.
// --------------------------------------------------------------------------------------------

let patientName = "Rahim Chacha";
patientName = "Fatema Khala"
console.log(patientName);
// Note: patientName jotoi notun value asuk ta update hoye jabe.

let sum = 0;
for(var i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(i);
// var dia jodi variable declare kora hoi tahole setar output for loop er baire theke console log kore paaoa jai.

let sum = 0;
for(let i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(i);
// let dia variable declare korle ta baire theke paoa jai na.