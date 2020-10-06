var arraii = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66]
function tugas24(arrayYangInginDiproses){
  console.log("Sebelumnya : " + arrayYangInginDiproses);
  arraySort = arrayYangInginDiproses.sort();
  console.log("Ascending : "+ arraySort);
  arrayReverse = arraySort.reverse();
  console.log("Descending : "+ arrayReverse);
}

tugas24(arraii);
