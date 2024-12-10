class StringCalculator{

  add(string){
    if (!string) return 0; //checking for empty string
    const numArray=string.split(",").map(Number); //spilting string with , to numArray
    if(numArray.length>1){
      return numArray.reduce((sum, num) => sum + num, 0); //summing the array
    }
    
    return parseInt(string, 10);//converting single input to string
  }
  
}


module.exports=StringCalculator;

