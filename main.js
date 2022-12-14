canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeight = 90;

backgroundImage = "mars.jpg";

roverImage = "rover.png";

//CRIAR POSIÇÕES DO ROVER


function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src = backgroundImage;   // carregar a imagem

	roverImgTag = new Image(); //definindo uma variável com uma nova imagem
	roverImgTag.onload = uploadrover; // ajustando uma função, ao carregar essa variável
	roverImgTag.src = roverImage;   // carregar a imagem
}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}


//criar escutador de eventos

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			//chamar a função cima
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			//chamar a função baixo
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			//chamar a função esquerda
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			//chamar a função direita
			console.log("direita");
		}
}
function up()
{
	//colocar número nas posições do rover
	if(roverY >= )
	{
		roverY = roverY - 10;
		console.log("Quando direcional cima for pressionada,  x = " + roverX + " | y = " +roverY);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	//colocar número nas posições do rover
	if(roverY <=)
	{
		roverY =roverY+ 10;
		console.log("Quando direcional baixo for pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	//colocar número nas posições do rover
	if(roverX >= )
	{
		roverX =roverX - 10;
		console.log("Quando direcional esquerda for pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	//colocar número nas posições do rover
	if(roverX <= )
	{
		roverX =roverX + 10;
		console.log("Quando direcional direita for pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		uploadrover();
   }
}

	