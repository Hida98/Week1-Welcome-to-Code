function konversiMenit(menit) {
  let jam = Math.floor(menit / 60); // bagi menit dengan 60 untuk dapat jam
  let sisaMenit = menit % 60; // sisanya adalah menit

  // kalau sisaMenit < 10, tambahkan "0" di depannya
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
