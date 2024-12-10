class StringCalculator{

  add(string){
    if (!string) return 0; //checking for empty string
    let delimiter = /,|\n/; //  delimiters contianing new line and ,
    const customDelimiterMatch = string.match(/^\/\/(\[.*?\]|\S+)\n/);
    if (customDelimiterMatch) {
      const customDelimiterSection = customDelimiterMatch[1];
      string = string.slice(customDelimiterMatch[0].length);
      delimiter = new RegExp(
        [customDelimiterSection].map(d => d.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'),
        'g')
    }
    const numArray=string.split(delimiter).map(Number); //spilting string with , to numArray
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  
}


module.exports=StringCalculator;

