function sortbyselection(tab){
    for(var i = 0; i < tab.length; i++){
      
      var min = i; 
      for(var a = i+1; a < tab.length; a++){
        if(tab[a] < tab[min]){
         
         min = a; 
        }
      }
      var tableau = tab[i];
      tab[i] = tab[min];
      tab[min] = tableau;
    }
    return tab;
  };
  console.log(sortbyselection([5,7,9,10,5,1]));