class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'" "]+/g, '');
  }

  static titleize(string){
    let final = []
    let notAllowed = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    string.split(" ").map(function(word){
      if (!notAllowed.includes(word) ){
        final.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      }
      else { 
        final.push(word)
      }  
    })
    return this.capitalize(final.join(" "))
  }

}