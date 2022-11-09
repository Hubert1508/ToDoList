const addButton = document.getElementById("add");

let allQuantity = 0;
let activeQuentity = 0;
let completedQuantity = 0;


const result = document.getElementById("result");
result.style.color = "white";

addButton.onclick = function(){

    const inputValue = document.getElementById("text").value;

    if(inputValue===""){

        alert("Wpisz nowe zadanie");

        return false;
    }

    allQuantity++;
    activeQuentity++;

    const newDiv = document.createElement("div");

    newDiv.setAttribute("class", "addSection");

    const tagH = document.createElement("h1");

    const tagP = document.createElement("p");

    newDiv.appendChild(tagH);
    newDiv.appendChild(tagP);

    

    // Create a text node:
    const createNewText = document.createTextNode(inputValue);

    tagP.appendChild(createNewText);
    tagP.setAttribute("class", "jobDone");

    const createTask = document.createTextNode("Task");
    
    // Append text node to the element:
    tagH.appendChild(createTask);
    
    // Append the p element to the body:

    const root = document.querySelector("#root");
    
    root.appendChild(newDiv);

    document.querySelector("#text").value = "";

    tagP.onclick = function(){

        tagP.style.textDecoration = "line-through";
        tagP.removeAttribute("class", "jobDone");
        newDiv.style.opacity = "0.3";    
        activeQuentity--;
        completedQuantity++;
    }
}

const openNav = document.getElementById("openBtn");

openNav.onclick = function(){

    setTimeout(()=>{

        const option = document.querySelectorAll(".option");

        for (let i = 0; i < option.length; i++){

            option[i].style.opacity = "10";
        }

        },700);

    document.getElementById("mySidebar").style.width = "350px";


}

    const closeBtn = document.getElementById("closeBtn");

    closeBtn.onclick = function(){

    const option = document.querySelectorAll(".option");

        for (let i = 0; i < option.length; i++){

            option[i].style.opacity = "0";
        }

        document.getElementById("mySidebar").style.width = "0";

  }

  const allTasks = document.getElementById("allTasks");

  allTasks.onclick = function(){

    result.innerHTML = allQuantity;

    setTimeout(() => {
        result.innerHTML=""
    }, 2000);
  }

  const activeTasks = document.getElementById("activeTasks");

  activeTasks.onclick = function(){

    result.innerHTML = activeQuentity;

    setTimeout(() => {
        result.innerHTML=""
    }, 2000);

  }

  const completedTasks = document.getElementById("completedTasks");

  completedTasks.onclick = function(){

    result.innerHTML = completedQuantity;

    setTimeout(() => {
        result.innerHTML=""
    }, 2000)

  }