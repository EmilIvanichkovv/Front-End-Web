const fieldElement = document.getElementById("field");
const listElement = document.getElementById("task-list");
const counterElement = document.getElementsByClassName("counter")[0];
const filterAllElements = document.getElementById("filter-all-btn");
const filterActiveElements = document.getElementById("filter-active-btn");
const filterCompletedElements = document.getElementById("filter-completed-btn");



const updateCounter = () => {
    counterElement.innerText = `${listElement.querySelectorAll("li:not(.done)").length} left`;
}

// adding tasks
fieldElement.addEventListener("change", event => {
    const task = document.createElement("li");
    task.innerHTML = `
    <input type="checkbox"/>
    <span>${event.target.value}</span>
    <button class="delete-btn">x</button>
    `
    event.target.value= "";
    listElement.appendChild(task);

    updateCounter();
});

 listElement.addEventListener("input", event => {
     const checkboxElement = event.target;
    const spanElement = checkboxElement.parentElement.querySelector("span");
    // if(checkboxElement.checked) {
    //     spanElement.style.textDecoration = "line-through";
    // } 
    // else {
    //     spanElement.style.textDecoration = "initial";
    // }
    spanElement.classList.toggle("line-through", checkboxElement.checked);
    spanElement.parentElement.classList.toggle("done", checkboxElement.checked);

    updateCounter();
 });

 listElement.addEventListener("click", event => {
    const element = event.target;
    if(element.classList.contains("delete-btn")) {
        const listItemElement = element.parentElement;
        const list = listItemElement.parentElement;
        list.removeChild(listItemElement); 
        updateCounter();
    }
});

filterAllElements.addEventListener("click", event => {
    const listItems = listElement.querySelectorAll("li");
    listItems.forEach((el) => el.removeAttribute("hidden"))
});

filterActiveElements.addEventListener("click", event => {
    const listItems = listElement.querySelectorAll("li");
    listItems.forEach((el) => el.toggleAttribute("hidden", el.classList.contains("done")))
});

filterCompletedElements.addEventListener("click", event => {
    const listItems = listElement.querySelectorAll("li");
    listItems.forEach((el) => el.toggleAttribute("hidden", !el.classList.contains("done")))
});


