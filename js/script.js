// traer con fetch los datos de la API. https://rickandmortyapi.com/api/character/?page=1. ---> ok
//capturar el espacio en el html para poner los personajes. ---> ok
//crear un html dentro con un bucle para traer los 20 personajes. ---> ok
//poner las css para que esten uno al lado del otro.

//hacer funcionar los botones.

const urlHomepage = "https://rickandmortyapi.com/api/character/?page="

let page = 1

const characterList = document.getElementById("character-list")
const prevButton = document.getElementById("prev-page")
const nextButton = document.getElementById("next-page")

const getCharacters = () => {
    characterList.innerHTML = ""
    fetch(`${urlHomepage}${page}`)
    .then(response => response.json())
    .then((data) => {
        let characters = data.results;
        characters.forEach((character) => {
            const template = 
            `
            <li>
            <img src=${character.image} alt=${character.name} />
            <h2><span>Name:</span> ${character.name}</h2>
            <p><span>Spacies:</span> ${character.species}</p>
            </li>
            `
            characterList.innerHTML += template
        });
    })   
} 


prevButton.addEventListener("click",() => {
    page--
    getCharacters()
})

nextButton.addEventListener("click", () => {
    page++
    getCharacters()
})

getCharacters()



/*------> otro metodo


const changePage = (clickValue) => {
    click value
    getCharacters()
}

---->otra cosuca que no estaba en mi mente
<---- antes va characterList.HTML   

if (page === 1) {
prevBotton.disabled = true
prevBotton.classList.add("disabled")
} else {
 }   

 ---->despues va el fetch
*/