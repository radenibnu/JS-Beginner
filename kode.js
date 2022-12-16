// this is comment

// sentence = "how are you today?"

//operators
// buah = 20
// persen = 0.2
// fee = buah * persen

// console.log(fee);

hargaBuah = Number(prompt("berapa harga buahnya ?"));
fee = Number(prompt("berapa persen feenya ? %")) / 100;
fee = hargaBuah * fee;
total = hargaBuah + fee;

console.log(" Total tip = ", fee);
console.log("Harga = ", total);