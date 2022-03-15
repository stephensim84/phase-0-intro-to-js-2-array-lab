let cats = ['Milo', 'Otis', 'Garfield'];
 function destructivelyAppendCat(name){
return cats.push(name)
 };

 function destructivelyPrependCat(name){
return cats.unshift(name)
 }
 
 function destructivelyRemoveLastCat(){
    
  return cats.pop()
 }

 function destructivelyRemoveFirstCat(name) {
     return cats.shift()
 }
 function appendCat(name){
    let name_1= [...cats,name];
    return name_1
  }
  function appendCat(name){
    let name_1= [...cats,name];
    return name_1;
  }
  
  function prependCat(name){
    let name_2=[name, ...cats];
    return name_2
  }
  
  function removeLastCat(){
    let caats= cats.slice(0,cats.length-1);
    return caats;
  }
  
  function removeFirstCat(){
    let catts= cats.slice(1)
    return catts
  }
