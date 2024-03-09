const btnDiv = document.createElement('div');
document.body.appendChild(btnDiv);
btnDiv.classList.add('btnDiv');

const inpBtn = document.createElement("button"); //creating grid button
btnDiv.appendChild(inpBtn);
inpBtn.textContent = "Grid?";
inpBtn.style.background = "brown";

const resetBtn = document.createElement("button"); //creating reset button
btnDiv.appendChild(resetBtn);
resetBtn.textContent = "Reset";

const container = document.createElement("div"); //creating container div
document.body.appendChild(container);
container.classList.add("container");


inpBtn.addEventListener('click', ()=>{
    let promp1 = prompt("Enter numbers of rows & columns (grid number): ");
    //let promp2 = prompt("Enter numbers of columnss: ");

    container.textContent = "";  
    if(parseInt(promp1)<=64) {
        for (let i = 1; i <= parseInt(promp1); i++) {
          const rowDiv = document.createElement("div");
          rowDiv.classList.add("rows");
          container.appendChild(rowDiv);
          for (let j = 1; j <= parseInt(promp1); j++) {
            const div = document.createElement("div");
            div.classList.add("container-item");
            rowDiv.appendChild(div);
          }
        }
    }
    else{
        container.textContent = "Grid limit 64!";
    }
    const divs = document.querySelectorAll(".container-item"); //creating hover effects on divs
    divs.forEach((item) => {
      item.addEventListener("mouseover", () => {
        item.style.cssText = "background: blue";
      });
    });
    resetBtn.addEventListener("click", () => { //reset btn function
      divs.forEach((item) => {
        item.style.cssText = "background: rgb(238, 255, 90)";
      });
    });
})




