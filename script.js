
document.body.innerHTML = `
<button id="open_modal"> Open </button>
	<div id="openModal" class="modal">
		<div class="modal-dialog">
		  <div class="modal-content">
			<div class="modal-header">
			  <h3 class="modal-title">Оберіть вашу стать</h3>
			  <button id="closefunc" class="close" onclick = "close();">×</button>
			</div>
			<div class="modal-body">    
			  <div class="choose-box" id = "chooseBox">
			  <p>Чоловіча</p>
			  <div class="choose-box-man">
					<div class="first-man" id="firstMan"> <img src="img/1.png" alt="">  </div>
					<div class="second-man"><img src="img/2.png" alt=""> </div>
					<div class="third-man"><img src="img/3.png" alt="">  </div>
					<div class="forth-man"><img src="img/4.png" alt="">  </div>
				</div>
				<p>Жіноча</p>
				<div class="choose-box-wooman">
					<div class="first-wooman"> <img src="img/(1).png" alt="">  </div>
					<div class="second-wooman"><img src="img/(2).png" alt="">  </div>
					<div class="third-wooman"><img src="img/(3).png" alt="">  </div>
					<div class="forth-wooman"><img src="img/(4).png" alt=""></div>
			  </div>  
			</div> 
			</div>
		  </div>
		</div>
	  </div>
	  <div class="content">
	<div class="user" id = "user"><img src="img/user.png" alt=""></div>
	<div class="vs"> <img src="img/vs.png" alt=""></div>
	<div class="computer"> <img src="img/pc.png" alt=""></div>
	</div>`

var openModal = document.getElementById('openModal');
var open_modal = document.getElementById('open_modal');
open_modal.onclick = function(){
  var actualDisplay = getComputedStyle(openModal).display;
  if (actualDisplay == 'none') {
    openModal.style.display = 'flex';
  } else {
    openModal.style.display = 'block';
    openModal.innerText += '.';
  }
}

function close(){
  openModal.style.display = "none";
}


var closefunc = document.getElementById('closefunc');
closefunc.onСlick = function(){

  openModal.style.display = 'none';
  var actualDisplay = getComputedStyle(openModal).display;
  openModal.style.opacity ="0";
  openModal.style.opacity == "0";
  if (actualDisplay == 'flex') {
    openModal.style.display = 'none';
  } else {
    openModal.style.display == 'flex'; 
    openModal.style.display == 'none';
}
}





  const replace = document.getElementById('user')
  const   select = document.getElementById('firstMan');
  select.onclick = function(){
  replace.innerHTML = " <img src='img/1.png'>"
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
