    /* Constants for bricks */
var NUM_ROWS = 8;
var BRICK_TOP_OFFSET = 10;
var BRICK_SPACING = 2;
var NUM_BRICKS_PER_ROW = 10;
var BRICK_HEIGHT = 10;
var SPACE_FOR_BRICKS = getWidth() - (NUM_BRICKS_PER_ROW + 1) * BRICK_SPACING;
var BRICK_WIDTH = SPACE_FOR_BRICKS / NUM_BRICKS_PER_ROW;

/* Constants for ball and paddle */
var PADDLE_WIDTH = 80;
var PADDLE_HEIGHT = 15;
var PADDLE_OFFSET = 10;
var randX = Randomizer.nextInt(3,6);
var randY = Randomizer.nextInt(3,6);
var dx = randX;
var dy = -randY;


var BALL_RADIUS = 15;
var paddle = new Rectangle(PADDLE_WIDTH, PADDLE_HEIGHT);
var ball = new Circle(BALL_RADIUS);
ball.setPosition(getWidth()/2,getHeight()-100);
add(paddle);
var a = 2;
var counter = 0;
var speed = Randomizer.nextInt(2,8);


function start(){
	setTimer(ballMove,1);
	mouseMoveMethod(paddleMove);
	setBricks();
	for(var i = 0; i < 10; i++){
        var a = a+BRICK_WIDTH;
    }
    
}

function ballMove(){
    ball.move(dx,dy);
    add(ball);
    if(ball.getX() + BALL_RADIUS > getWidth()){
        dx = -dx;
    }
    if(ball.getX()-BALL_RADIUS<0){
        dx = -dx;
    }
    if(ball.getY()-BALL_RADIUS<0){
        dy=-dy;
    }
    if(ball.getY()+BALL_RADIUS>getHeight()){
        stopTimer(ballMove);
        var loseMessage = new Text("You're garbage pleb");
        loseMessage.setPosition(getWidth()/2-100,getHeight()/2);
        loseMessage.setColor(Color.red);
        add(loseMessage);
    }
    
    
    var elem = getElementAt(ball.getX(), ball.getY()+BALL_RADIUS);
    if(elem === paddle){
        dy = -Math.abs(dy);
    }
    
    var elem2 = getElementAt(ball.getX(), ball.getY()-BALL_RADIUS);
    if(elem2 !== null){
        dy = -dy;
        remove(elem2);
        counter++;
    }
    
    if(counter===80){
        stopTimer(ballMove);
        var winText = new Text("You are a wiiiiiner");
        winText.setPosition(getWidth()/2-100,getHeight()/2);
        winText.setColor(Color.green);
        add(winText);
    }
}

function paddleMove(e){
    paddle.setPosition(e.getX()-PADDLE_WIDTH/2,getHeight()-PADDLE_OFFSET-PADDLE_HEIGHT);
    
}

function setBricks(){
    for(var i = 0; i < 12;i++){
        var redBricks = new Rectangle(BRICK_WIDTH,BRICK_HEIGHT);
        redBricks.setPosition(BRICK_SPACING+i*40-81, BRICK_TOP_OFFSET);
        redBricks.setColor(Color.red);
        add(redBricks);
        var redBricks = new Rectangle(BRICK_WIDTH, BRICK_HEIGHT);
        redBricks.setPosition(BRICK_SPACING+i*40-81,BRICK_TOP_OFFSET*2+2);
        redBricks.setColor(Color.red);
        add(redBricks);
    }
    
    for(var i = 0; i < 12;i++){
        var orangeBricks = new Rectangle(BRICK_WIDTH,BRICK_HEIGHT);
        orangeBricks.setPosition(BRICK_SPACING+i*40-81, BRICK_TOP_OFFSET*3+2*2);
        orangeBricks.setColor(Color.orange);
        add(orangeBricks);
        var orangeBricks = new Rectangle(BRICK_WIDTH, BRICK_HEIGHT);
        orangeBricks.setPosition(BRICK_SPACING+i*40-81,BRICK_TOP_OFFSET*4+2*3);
        orangeBricks.setColor(Color.orange);
        add(orangeBricks);
    }
    
    for(var i = 0; i < 12;i++){
        var greenBricks = new Rectangle(BRICK_WIDTH,BRICK_HEIGHT);
        greenBricks.setPosition(BRICK_SPACING+i*40-81, BRICK_TOP_OFFSET*5+2*4);
        greenBricks.setColor(Color.green);
        add(greenBricks);
        var greenBricks = new Rectangle(BRICK_WIDTH, BRICK_HEIGHT);
        greenBricks.setPosition(BRICK_SPACING+i*40-81,BRICK_TOP_OFFSET*6+2*5);
        greenBricks.setColor(Color.green);
        add(greenBricks);
    }
    
    for(var i = 0; i < 12;i++){
        var blueBricks = new Rectangle(BRICK_WIDTH,BRICK_HEIGHT);
        blueBricks.setPosition(BRICK_SPACING+i*40-81, BRICK_TOP_OFFSET*7+2*6);
        blueBricks.setColor(Color.blue);
        add(blueBricks);
        var blueBricks = new Rectangle(BRICK_WIDTH, BRICK_HEIGHT);
        blueBricks.setPosition(BRICK_SPACING+i*40-81,BRICK_TOP_OFFSET*8+2*7);
        blueBricks.setColor(Color.blue);
        add(blueBricks);
    }
}


