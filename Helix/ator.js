//ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;



function mostraAtor(){
  image(imagemAtor,xAtor, yAtor, 30,30)
}


function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3

    
  }
    if(keyIsDown(DOWN_ARROW)){
    if (podeMover()){
      yAtor +=3
    }
    }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i ++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor, 15)
    if (colisao){
      voltaAtor()
      somColisao.play()
      if (meusPontos > 0){
        meusPontos-=1;
      }
    }
  }
}


function voltaAtor(){
  yAtor = 366
}

function incluiPontos(){
  fill(color(255,240,60))
  textAlign(CENTER)
  textSize(25)
  text(meusPontos,width /5 ,27)
  
}


function marcaPonto(){
  if (yAtor < 15){
    meusPontos +=1;
    voltaAtor();
    somPonto.play();
  }
}

function podeMover(){
  return yAtor < 366
}