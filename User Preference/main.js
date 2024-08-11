const selectFont=document.getElementById("selectFontSize")
const selectBg=document.getElementById("selectBackground")
const resetBtn=document.getElementById("resetBtn")
const mainTag=document.querySelector("main");





selectFont.addEventListener("change",(event)=>{
  
  mainTag.style.fontSize=event.target.value;
  localStorage.setItem("font",event.target.value)
})




selectBg.addEventListener("change",(event)=>{
  
  mainTag.style.backgroundColor=event.target.value;
  localStorage.setItem("bgcolor",event.target.value);
  
})


resetBtn.addEventListener("click",function(){
  
  localStorage.removeItem("font")
  localStorage.removeItem("bgcolor")
  
  selectFont.value="16px"
  selectBg.value="red"
  mainTag.style.fontSize="16px"
  mainTag.style.backgroundColor="red"
})


function initialValue(){
  // Tab to edit
  let bgcolor=localStorage.getItem("bgcolor")
  let font=localStorage.getItem("font");
  if(font){
    selectFont.value=font;
    mainTag.style.fontSize=font;
  }
  else{
selectFont.value="16px";
    mainTag.style.fontSize="16px";
  }
  
if(bgcolor){
    selectBg.value=bgcolor;
    mainTag.style.backgroundColor=bgcolor;
  }
  else{
selectBg.value="red"
    mainTag.style.backgroundColor="red";
  }
  }



initialValue();