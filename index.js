//Burger

(function () {
 const burgerItem = document.querySelector('.burger');
 const menu = document.querySelector('.naw_right');

 const menuClose = document.querySelector('.naw_right_close_link');
 menuClose.addEventListener('click', () => {
    menu.classList.remove('naw_right_active');
    menuClose.classList.remove('naw_right_close_link_active');
 });





 burgerItem.addEventListener('click', () => {
  var checkNaw = document.getElementById("check_naw");
  var checkNawClass = checkNaw.className;


  switch (checkNawClass) {
  case "naw_right":
    menu.classList.add('naw_right_active');
    menuClose.classList.add('naw_right_close_link_active');
    break;
  case "naw_right naw_right_active":
    menu.classList.remove('naw_right_active');
    menuClose.classList.remove('naw_right_close_link_active');
    break;
  default:
    console.log('non');
}

 });

}());