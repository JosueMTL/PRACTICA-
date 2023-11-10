interface Character {
    id: number;
    nationality: string;
    firstName: string;
    lastName: string;
}
interface Character extends Array<Character>{}
const url = "http://localhost:8081/author";

async function fetchCharacters() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        displayCharacters(data);
    } catch (error) {
        console.error("Error fetching characters:", error);
    }
}

function displayCharacters(characters: Character) {
    const container = document.getElementById('characters-container');
    if (container) {
        characters.forEach(character => {
            container.innerHTML +=
                `<div class="characters-container">
                    <h2>${character.firstName} ${character.lastName}</h2>
                    <p>Nationality: ${character.nationality}</p>
                    <p>firstName: ${character.firstName}</p>
                    <p>lastName: ${character.lastName}</p>
                </div>`;
        });
    }
}

fetchCharacters();
