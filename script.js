const submitButton = document.getElementById("submitButton");
const removeButton = document.getElementById("removeButton");

submitButton.addEventListener("click", addContent);
removeButton.addEventListener("click", removeContent);

function addContent() {
    const text = document.getElementById("textInput").value;
    const result = document.getElementById("result");

    result.innerHTML += `<li>${text}</li>`;
}

function removeContent() {
    const parent = document.getElementById("result");
    parent.removeChild(parent.lastElementChild);
}

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



async function  fetchData() {
    console.log(123)
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const json = await data.json();
    console.log(json)

    const titleList = document.getElementById("titleList")
    for(let i=0; i<json.length; i++){
        titleList.innerHTML += `<h3>${json[i].title}</h3>`
    }
}

fetchData()