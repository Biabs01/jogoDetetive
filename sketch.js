var detetive_img, detetive;
var ladrao_img, ladrao;
var left_wall, right_wall, top_wall, botton_wall;
var cidade1_img;
var pontos;
var carta_img, carta, carta2, carta3, carta4;

function preload(){
    detetive_img = loadImage("assets/detetive.png");
    ladrao_img = loadImage("assets/ladrao.png");
    cidade1_img = loadImage("assets/cidade1.jpeg");
    carta_img = loadImage("assets/carta (1).png");
}

function setup(){
    createCanvas(1200, 800); 
    pontos = 0;  

    detetive = createSprite(400, 200, 50, 50);
    detetive.addImage(detetive_img);
    detetive.scale = 0.3;
    detetive.debug = true;

    ladrao = createSprite(400, 600, 50, 50);
    ladrao.addImage(ladrao_img);
    ladrao.scale = 0.35;
    ladrao.visible = false;

    carta = createSprite(50, 50, 50, 50);
    carta.addImage(carta_img);
    carta.scale = 0.3;
    carta.visible = false;

    carta2 = createSprite(620, 450, 50, 50);
    carta2.addImage(carta_img);
    carta2.scale = 0.3;
    carta2.visible = false;

    carta3 = createSprite(1050, 400, 50, 50);
    carta3.addImage(carta_img);
    carta3.scale = 0.3;
    carta3.visible = false;

    carta4 = createSprite(620, 780, 50, 50);
    carta4.addImage(carta_img);
    carta4.scale = 0.3;
    carta4.visible = false;

    left_wall = createSprite(1, 400, 2, 800);
    right_wall = createSprite(1199, 400, 2, 800);
    top_wall = createSprite(600, 1, 1200, 2);
    botton_wall = createSprite(600, 799, 1200, 2);
}

function draw(){
    background(cidade1_img);

    if(keyDown("UP_ARROW")){
        detetive.y = detetive.y - 10;
    }
    if(keyDown("DOWN_ARROW")){
        detetive.y = detetive.y + 10;
    }
    if(keyDown("LEFT_ARROW")){
        detetive.x = detetive.x - 10;
    }
    if(keyDown("RIGHT_ARROW")){
        detetive.x = detetive.x + 10;
    }

    detetive.collide(left_wall);
    detetive.collide(right_wall);
    detetive.collide(top_wall);
    detetive.collide(botton_wall);

    if(detetive.isTouching(carta)){
        carta.visible = true;
        detetive.x += 50;
        dica();
    }

    if(detetive.isTouching(carta2) && (carta.visible == true)){
        carta2.visible = true;
        detetive.x += 50;
        dica2();
    }

    if(detetive.isTouching(carta3) && (carta.visible == true) && (carta2.visible == true)){
        carta3.visible = true;
        detetive.x += 50;
        dica3();
    }

    if(detetive.isTouching(carta4) && (carta.visible == true) && (carta2.visible == true) && (carta3.visible == true)){
        carta4.visible = true;
        detetive.x += 50;
        dica4();
    }

    if(detetive.isTouching(ladrao) && (carta.visible == true) && (carta2.visible == true) && (carta3.visible == true) && (carta4.visible == true)){
        ladrao.visible = true;
        detetive.x += 50;
        achou();
    }

    drawSprites();
}

function dica(){
    swal({
        title: "Você encontrou uma pista",
        text: "a próxima pista está perto do ciclista",
        confirmButtonText: "Ir para a próxima pista"
    });
}

function dica2(){
    swal({
        title: "Você encontrou uma pista",
        text: "a próxima pista está perto do prédio TopCenter",
        confirmButtonText: "Ir para a próxima pista"
    });
}

function dica3(){
    swal({
        title: "Você encontrou uma pista",
        text: "a próxima pista está perto da acessibilidade",
        confirmButtonText: "Ir para a próxima pista"
    });
}

function dica4(){
    swal({
        title: "Você encontrou uma pista",
        text: "O ladrão está andando de bicicleta ",
        confirmButtonText: "Ir para a próxima pista"
    });
}

function achou(){
    swal({
        title: "Você encontrou o ladrão",
        text: "Parabéns",
        confirmButtonText: "Ok"
    });
}