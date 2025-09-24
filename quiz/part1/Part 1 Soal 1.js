let nama = "Hida",
  peran = "Tank";

if (Hida === "") {
  console.log("Nama wajib diisi!");
} else {
  if (Tank === "") {
    console.log("Pilih Peranmu untuk memulai game");
  } else if (peran === "Tank") {
    console.log(
      "Halo Tank " + Hida + ", kamu dapat menyerang dengan senjatamu!"
    );
  } else if (peran === "Fighter") {
    console.log(
      "Halo Fighter " + Sofi + ", kamu akan membantu temanmu yang terluka"
    );
  } else if (peran === "Mage") {
    console.log(
      "Halo Mage " + Sukron + ", ciptakan keajaiban yang membantu kemenanganmu!"
    );
  } else {
    console.log(
      "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
    );
  }
}
