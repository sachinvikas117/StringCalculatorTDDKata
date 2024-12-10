class StringCalculator{

  add(string){
    if (!string) return 0; //checking for empty string
    return parseInt(string, 10);//converting single input to string
  }
  
}


module.exports=StringCalculator;

