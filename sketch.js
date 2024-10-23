let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
}

function palavraAleatoria (){
  let palavras = ["Porque Choras Nono Ano?", "Não pode jogar","Abre o Alura","Abre o Classroom",   "Envia os projetos"];
  return random(palavras);
}

function inicializaCores() {
  background("pink")
  fill ("Green")
  textSize (28)
  textAlign(CENTER, CENTER); 
}

function palavraParcial(minimo,maximo){
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length)
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}


function draw() {
  inicializaCores  ()
  
    
  let texto = palavraParcial(0,width);
  text(texto, 200, 200);
  
}





  //mouseX, 0, width ==> 0 , palavra
  //console.log ("Porque Choras Nono Ano?".length) 

//console.log (quantidade);

// if(mouseX<50) {
  // let palavra = "P";
  // text (palavra, 200, 200);  
  // } else {
  // let palavra = "Porque Choras Nono Ano?" 
  //  text (palavra, 200, 200);
  // }
