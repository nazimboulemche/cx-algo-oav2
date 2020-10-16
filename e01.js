function BubbleSortin (tab){

    for (let  i=0 ; i < tab.length ; i++){
        if (tab[i] > tab[i+1]){
            while (!tab.sort()){
                one = tab[i];
                tab[i]=tab[i+1];
                tab[i+1]=one;
            }
        }
    }
    return tab
}
console.log(BubbleSortin([1,54,3,78,69]))