document.body.innerHTML = `
<button id="open_modal" onclick ="OpenClose()"> Choose your skin </button>
	<div id="openModal" class="modal">
		<div class="modal-dialog">
		  <div class="modal-content">
			<div class="modal-header">
			  <h3 class="modal-title">Choose your skin</h3>
			  <button id="closefunc" class="close" onclick = "OpenClose();">×</button>
			</div>
			<div class="modal-body">    
			  <div class="choose-box" id = "chooseBox">
			  <p>MALE</p>
			  <div class="choose-box-man">
					<div class="first-man" id="firstMan"> <img src="img/1.png" alt="first-man"">  </div>
					<div class="second-man"><img src="img/2.png" alt="second-man"> </div>
					<div class="third-man"><img src="img/3.png" alt="third-man">  </div>
					<div class="forth-man"><img src="img/4.png" alt="forth-man">  </div>
				</div>
				<p>FEMALE</p>
				<div class="choose-box-wooman">
					<div class="first-wooman"> <img src="img/(1).png" alt="first-wooman"> </div>
					<div class="second-wooman"><img src="img/(2).png" alt="second-wooman"> </div>
					<div class="third-wooman"><img src="img/(3).png" alt="third-wooman"> </div>
					<div class="forth-wooman"><img src="img/(4).png" alt="forth-wooman"></div>
			  </div>  
			</div> 
			</div>
		  </div>
		</div>
	  </div>

  	<div>
		<div class="content">
		<div class = "game"> 
	  	<div class="avatar" id="user"><img src="img/user.png" id ="check" alt="avatar"></div> 
		  <div class="user_info">
		  <div class="name" id="name-player">Your nickname: </div>
		  <div class="scores" id="score1">Your score: 0</div>
		  <div class="card" id="card-player">Current number of points:</div>
		  </div>
		</div>
   
	  	<div class="user_button">
	  	<div class="vs"> <img src="img/vs.png" alt="vs">  </div>
      <div class="game_btn"> <button class="avatarpl" id="avatarpl" onClick="rand();">PLAY</button>
      <button class="avatarpl" id="avatarpl" onClick="resetGame();">RESET</button>
		</div>
    </div>
	
	  <div class="bot">  
		  <div class="computer"> <img src="img/pc.png" alt="computer"></div>
      <div class="bot_info"> 
		  <div class="name" id="name-bot">Bot</div>
		  <div class="scores" id="score2">Bot score: 0</div>
		  <div class="card" id="card-bot">Current number of points:</div>
	  </div></div>
	  </div>
	</div>

 `
//========================MODAL===================================//
var openModal = document.getElementById('openModal');
openModal.style.display = 'none'
function OpenClose(){
 
  if(openModal.style.display === 'none'){
    openModal.style.display = 'block';
  }
    else{
      openModal.style.display = 'none';
    }
  }

  const replace = document.getElementById('user')
  const   select = document.getElementById('firstMan');
  select.onclick = function(){
    replace.innerHTML = " <img src='img/1.png'>";
  }
  const select1 = document.querySelector(".second-man");
  select1.onclick = function(){
  replace.innerHTML = " <img src='img/2.png'>"
  }
  const select2 = document.querySelector(".third-man");
  select2.onclick = function(){
  replace.innerHTML = " <img src='img/3.png'>"
  }
  const select3 = document.querySelector(".forth-man");
  select3.onclick = function(){
  replace.innerHTML = " <img src='img/4.png'>"
  }
  const select4 = document.querySelector(".first-wooman");
  select4.onclick = function(){
  replace.innerHTML = " <img src='img/(1).png'>"
  }
  const select5 = document.querySelector(".second-wooman");
  select5.onclick = function(){
  replace.innerHTML = " <img src='img/(2).png'>"
  }
  const select6 = document.querySelector(".third-wooman");
  select6.onclick = function(){
  replace.innerHTML = " <img src='img/(3).png'>"
  }
  const select7 = document.querySelector(".forth-wooman");
  select7.onclick = function(){
  replace.innerHTML = " <img src='img/(4).png'>";
  }
//========================GAME===================================//

  var playerName = prompt('Enter your nickname', '');
  if(playerName == ""){
    playerName = "#noname"
  }
document.getElementById('name-player').innerHTML = "Your nickname: " + playerName;

var counterPlayer = 0;
var counterBot = 0;

var guessSubmit = document.getElementById('avatarpl');

function setGameOver() {
  guessSubmit.disabled = true;
}

function resetGame(){
 guessSubmit.disabled = false;
 document.getElementById('score1').innerHTML = "Your score: 0";
 document.getElementById('score2').innerHTML = "Bot score: 0";
 counterPlayer = 0;
 counterBot = 0;
 document.getElementById('card-player').innerHTML = "Current number of points: ";
 document.getElementById('card-bot').innerHTML = "Current number of points: ";
}

function rand(){
    var player1 = document.getElementById("card-player").innerHTML = "Current number of points:" +Math.floor(Math.random() * 10);
  var player2 = document.getElementById("card-bot").innerHTML = "Current number of points:" + Math.floor(Math.random() * 10);

  if(player1 > player2){
    counterPlayer++;
    document.getElementById("score1").innerHTML = "Your score:" + counterPlayer;
    }
  if(player1 < player2){
    counterBot++;
    document.getElementById("score2").innerHTML ="Bot score: " + counterBot;
  }
  if(counterPlayer == 3){
      alert("player won");
      setGameOver();
  }
  if(counterBot == 3){
    alert('bot won!');
    setGameOver();
  }
}
