class StringCalculator{

  add(string){
    if (!string) return 0; //checking for empty string
    const numArray=string.split(",").map(Number); //spilting string with , to numArray
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  
}


module.exports=StringCalculator;

