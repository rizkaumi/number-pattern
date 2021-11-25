let button = document.getElementById('buttonClick');

button.addEventListener('click', () => {
        let n = parseInt(document.getElementById('number').value);
        let string = PatternSquare(n)
        

    function PatternSquare(n){
    let string = [];
    let previousNum = 0;
    let presentNum = 1;
    let fibonacciNum ;
    let fibonacciseries = [];
    //let oddseries = [];
    //let odd = 1;
    let NumLetseries = [];
    const letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let y3 = 0;
    let y4 = 0;
    let NumLetter = [];
        //numletter
        for (let i=0; i<n; i++){
            y3++;
            NumLetter.push(y3);
            NumLetter.push(letter[y4]);
            y4++;
        }
        NumLetter.splice(n, (n*2));
        NumLetseries= NumLetter.join(" ");
        
        //odd series
        //for (let i=0; i< n; i++){
        //    oddseries.push(odd);
        //    odd += 2;
        //}
        //oddseries = oddseries.join(" ");

        //fibonacci series
        for (let i= 1; i<= n; i++){
            fibonacciseries.push(previousNum);
            fibonacciNum = presentNum + previousNum;
            previousNum = presentNum;
            presentNum = fibonacciNum;
        }
        fibonacciseries = fibonacciseries.join(" ");
    
     for (let i = 0; i < n; i++) {
        if (i % 2 == 0){
            string.push(NumLetseries);
        }
        else {
            string.push(fibonacciseries);
        }
      }
    
    console.log("n = ", n.toString(), "\n\n" + string.join("\n") + "\n");
    }
 

})
