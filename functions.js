const addButton = document.getElementById("add");

let checkStateCompleted;
let checkStateActive;

addButton.onclick = function(){

    const inputValue = document.getElementById("text").value;
    

    if(inputValue===""){

        alert("Enter a new task");

        return false;
    }

    checkStateActive = true;

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

        tagP.style.opacity = "0.3";    

        checkStateCompleted=false;

        newDiv.setAttribute("class", "filterDoneTask");

    }

    const allTasks = document.getElementById("allTasks");

    allTasks.onclick = function(){

        const sectionDone = document.querySelectorAll(".filterDoneTask");
        const sectionActive = document.querySelectorAll(".addSection");

            for (let i = 0; i < sectionDone.length; i++){

                sectionDone[i].style.opacity = "10";

                for (let i = 0; i < sectionActive.length; i++){

                    sectionActive[i].style.opacity = "10";
        
                }
            }
   
  }

    const activeTasks = document.getElementById("activeTasks");

    activeTasks.onclick = function(){

    

    if(checkStateCompleted===false){

        const sectionDone = document.querySelectorAll(".filterDoneTask");
        const sectionActive = document.querySelectorAll(".addSection");

        for (let i = 0; i < sectionDone.length; i++){

            sectionDone[i].style.opacity = "0";

            for (let i = 0; i < sectionActive.length; i++){

                sectionActive[i].style.opacity = "10";
    
            }
        }
    }
  }

  const completedTasks = document.getElementById("completedTasks");

  completedTasks.onclick = function(){    


    if(checkStateActive===true){

        const sectionDone = document.querySelectorAll(".filterDoneTask");
        const sectionActive = document.querySelectorAll(".addSection");

        for (let i = 0; i < sectionDone.length; i++){

            sectionDone[i].style.opacity = "10";

            for (let i = 0; i < sectionActive.length; i++){

                sectionActive[i].style.opacity = "0";
    
            }

        }
    }
  }

  const clearDoneTasks = document.getElementById("clearDoneTasks");

  clearDoneTasks.onclick = function(){

    const sectionDone = document.querySelectorAll(".filterDoneTask");

    for (let i = 0; i < sectionDone.length; i++){

        sectionDone[i].remove();

    }
  }

}

const openNav = document.getElementById("openBtn");

openNav.onclick = function(){

    const mySidebar = document.getElementById("mySidebar");

    setTimeout(()=>{

        const option = document.querySelectorAll(".option");

        for (let i = 0; i < option.length; i++){

            option[i].style.opacity = "10";
        }

        },600);

    mySidebar.style.width = "350px";


}

    const closeBtn = document.getElementById("closeBtn");

    closeBtn.onclick = function(){
    
        const mySidebar = document.getElementById("mySidebar");

        const option = document.querySelectorAll(".option");

            for (let i = 0; i < option.length; i++){

                option[i].style.opacity = "0";
            }

            setTimeout(()=>{mySidebar.style.width = "0";},1000)

  }