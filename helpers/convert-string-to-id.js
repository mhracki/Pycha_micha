export const convertId = (id)  =>{
    let withoutDiacritics="";
    if (id.includes('ł')){
     for (const char of id) {
       // check if mapping has a key with the current character
       if (char ==='ł') {
         withoutDiacritics += "l";
         // if yes, return its replacement
       } else {
         // if not, return it unchanged
         withoutDiacritics += char;
       }
     }
    return withoutDiacritics.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-')
    }
    return id.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-')
  }