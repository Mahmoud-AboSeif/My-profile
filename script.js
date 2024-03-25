let btnn = document.querySelector(".up");
window.onscroll = function(){
//   console.log(this.scrollY)
// }
 if(this.scrollY >= 1500) {
  btnn.classList.add("show");
 }else{
  btnn.classList.remove("show");
 }
//  this.scrollY >= 500? span.classList.add("show"):span.classList.remove("show");
};
btnn.onclick= function(){
 window.scrollTo({
   top:0,
   behavior:'smooth',
 })
}