function konversiMenit(menit) {
  // hitung jam dengan pembagian bulat
  let jam = Math.floor(menit / 60);

  // hitung sisa menit dengan modulus
  let sisaMenit = menit % 60;

  // tambahkan '0' di depan jika menit < 10
  if (sisaMenit < 10) {
    sisaMenit = "0" + sisaMenit;
  }

  return jam + ":" + sisaMenit;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
