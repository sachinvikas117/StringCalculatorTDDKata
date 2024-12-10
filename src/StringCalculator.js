class StringCalculator{

  add(string){
    if (!string) return 0; //checking for empty string
    let delimiters = [',', '\n']; //  delimiters contianing new line and ,
    const customDelimiterMatch = string.match(/^\/\/(\[.*?\]|\S+)\n/);
    if (customDelimiterMatch) {
      const customDelimiterSection = customDelimiterMatch[1];
      string = string.slice(customDelimiterMatch[0].length);
      if (customDelimiterSection.startsWith('[')) {
        // Multiple or multi-character delimiters enclosed in brackets
        delimiters = customDelimiterSection
          .match(/\[([^\]]+)\]/g) // Match all delimiters in square brackets
          .map(d => d.slice(1, -1)); // Remove the square brackets
      } else {
        // Single-character or non-bracketed multi-character delimiter
        delimiters = [customDelimiterSection];
      }
    }
    const splitRegex = new RegExp(
      delimiters.map(d => d.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'),
      'g'
    );
    const numArray=string.split(splitRegex).map(Number); //spilting string with , to numArray
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(', ')}`); //throwing error on finding all negative number 
    }
    return numArray.reduce((sum, num) => (num <= 1000 ? sum + num : sum), 0); //skipping the number if it greater then 1000
  }
  
}


module.exports=StringCalculator;

