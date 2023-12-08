const iB = document.getElementById("input-box");
const lC = document.getElementById("l-c");

function addTask(){
    if (iB.value ==='') {
        alert("Task's can't be empty!!!");
    } else {
        let li=document.createElement("li");
        li.innerHTML=iB.value;
        lC.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    iB.value="";
    saveData();
}
lC.addEventListener("click",function(m){
    if (m.target.tagName==="LI") {
        m.target.classList.toggle("checked");
        saveData();
    } else if(m.target.tagName==="SPAN"){
        m.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",lC.innerHTML);
}
function showTask(){
    lC.innerHTML= localStorage.getItem("data");
}
showTask();