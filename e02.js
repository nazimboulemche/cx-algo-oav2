function SortByInsertion (tab) {
    tab.forEach((item, i) => {
      let num = tab[i];
      let j;
  
      for (j = i - 1; j >= 0 && tab[j] > num; j--) {
        tab[j + 1] = tab[j];
      };
      tab[j + 1] = num;
    });
  
    return tab;
  };
console.log(SortByInsertion([-32,5,9,-2,10,4]))