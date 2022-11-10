const addButton = document.getElementById("add");

let checkState = true;

addButton.onclick = function(){

    const inputValue = document.getElementById("text").value;

    if(inputValue===""){

        alert("Enter a new task");

        return false;
    }

    const newDiv = document.createElement("div");

    newDiv.setAttribute("class", "addSection");

    const tagH = document.createElement("h1");

    const tagP = document.createElement("p");

    const closeBtn = document.createElement("a");

    newDiv.appendChild(tagH);
    newDiv.appendChild(tagP);
    newDiv.appendChild(closeBtn);
    
    closeBtn.innerHTML = "x";
    closeBtn.setAttribute("class", "closebtn")
    closeBtn.style.visibility = "hidden";

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
        tagP.style.opacity = "0.3";    
        closeBtn.style.visibility = "visible";
    }

    closeBtn.onclick = function(){
        newDiv.remove();
    }
}

const openNav = document.getElementById("openBtn");

openNav.onclick = function(){

    setTimeout(()=>{

        const option = document.querySelectorAll(".option");

        for (let i = 0; i < option.length; i++){

            option[i].style.opacity = "10";
        }

        },600);

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

   
  }

  const activeTasks = document.getElementById("activeTasks");

  activeTasks.onclick = function(){

    
  }

  const completedTasks = document.getElementById("completedTasks");

  completedTasks.onclick = function(){

   

  }