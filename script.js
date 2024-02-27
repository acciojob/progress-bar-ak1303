//your JS code here. If required.
let circles = document.querySelectorAll('.circle');
let lines = document.querySelectorAll('.line');

let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let index=0;
prevBtn.addEventListener('click',(e)=>{
	if(index>0){
		circles[index].classList.remove('active');
		lines[index-1].classList.remove('active');
		index--;
		updateButtonStates();
	}
});
nextBtn.addEventListener('click',(e)=>{
	if(index+1<circles.length){
		circles[index+1].classList.add('active');
		lines[index].classList.add('active'); 
		index++;
		updateButtonStates();
	}
});
function updateButtonStates() {
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === circles.length - 1;
}
updateButtonStates();




