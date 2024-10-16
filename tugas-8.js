// Soal Palindrom

// Buat sebuah fungsi bernama isPalindrome yang menerima satu parameter string dan mengembalikan true jika string tersebut adalah palindrom (dibaca sama dari depan dan belakang), dan false jika tidak. Fungsi ini harus mengabaikan huruf besar/kecil dan karakter selain huruf (misalnya tanda baca).

function isPalindrome(str) {
  let clearKata = str.toLowerCase().replace(/[^A-Za-z]/g, "");
  let balikKata = clearKata.split("").reverse().join("");

  return clearKata === balikKata;
}

console.log(isPalindrome("aman Nama1!"));
console.log(isPalindrome("Radar"));
console.log(isPalindrome("aman"));

console.log("---------------\n");
// Buat sebuah fungsi bernama apakahAnagram yang menerima dua parameter, yaitu dua buah string. Fungsi ini harus mengembalikan nilai true jika kedua string tersebut adalah anagram (memiliki jumlah dan jenis huruf yang sama meskipun urutannya berbeda), dan mengembalikan false jika tidak. Fungsi harus mengabaikan perbedaan huruf kapital dan spasi.

function apakahAnagram(str1, str2) {
  let kataSatu = str1.toLowerCase().replace(/[^A-Za-z]/g, "");
  console.log(kataSatu);
  let kataDua = str2.toLowerCase().replace(/[^A-Za-z]/g, "");

  if (kataSatu.length !== kataDua.length) {
    return false;
  }

  let kataUnikSatu = kataSatu.split("").sort().join("");
  // console.log(kataUnikSatu.split(""));
  // console.log(kataUnikSatu.split("").sort());
  // console.log(kataUnikSatu.split("").sort().join(""));

  let kataUnikDua = kataDua.split("").sort().join("");
  // console.log(kataUnikDua.split(""));
  // console.log(kataUnikDua.split("").sort());
  // console.log(kataUnikDua.split("").sort().join(""));

  return kataUnikSatu === kataUnikDua;
}

// apakahAnagram(saya);
// console.log(apakahAnagram("aman", "nama"));
console.log(apakahAnagram("listen", "silent"));

// console.log(apakahAnagram("hello", "worldouiu"));
