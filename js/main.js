let nav = document.querySelector("#sitenav");
let btn = document.querySelector(".site-header__toggler");


btn.addEventListener("click", function() {
  btn.classList.toggle("change");

  if(nav.style.display == "block"){
    nav.style.display = "none"
  }else{
    nav.style.display = "block"
  }
});
