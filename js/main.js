(function(){var b=document.querySelector(".burger"),n=document.getElementById("nav");
b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
var y=document.getElementById("yr");if(y)y.textContent=new Date().getFullYear();
var lb=document.querySelector(".lb");if(lb){var li=lb.querySelector("img"),last;
document.querySelectorAll(".g").forEach(function(g){g.addEventListener("click",function(){var i=g.querySelector("img");if(!i)return;last=g;li.src=i.src;li.alt=i.alt;lb.hidden=false;lb.querySelector(".lbx").focus()})});
function c(){lb.hidden=true;if(last)last.focus()}lb.addEventListener("click",function(e){if(e.target!==li)c()});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!lb.hidden)c()})}
var f=document.getElementById("cf");if(f){var s=document.getElementById("fs");f.addEventListener("submit",function(e){
var a=f.getAttribute("action");if(f._gotcha&&f._gotcha.value){e.preventDefault();return}
if(a.indexOf("[")===0){e.preventDefault();var d=new FormData(f);
location.href="mailto:[EMAIL ADDRESS]?subject="+encodeURIComponent("Website enquiry: "+d.get("topic"))+"&body="+encodeURIComponent(d.get("message")+"\n\n"+d.get("name")+"\n"+d.get("email")+"\n"+d.get("phone"));
s.textContent="Opening your email app…";return}
e.preventDefault();s.textContent="Sending…";fetch(a,{method:"POST",body:new FormData(f),headers:{Accept:"application/json"}}).then(function(r){if(!r.ok)throw 0;f.reset();s.textContent="Thank you. We will reply as soon as we can."}).catch(function(){s.textContent="Sorry, that did not send. Please phone or email us instead."})})}})();
