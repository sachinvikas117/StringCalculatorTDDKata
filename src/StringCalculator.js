class StringCalculator{

  add(string){
    if (!string) return 0; //checking for empty string
    let delimiter = /,|\n/; //  delimiters contianing new line and ,
    const numArray=string.split(delimiter).map(Number); //spilting string with , to numArray
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  
}


module.exports=StringCalculator;

