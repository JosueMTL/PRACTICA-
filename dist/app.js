"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = "http://localhost:8081/author";
function fetchCharacters() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            const data = yield response.json();
            console.log(data);
            displayCharacters(data);
        }
        catch (error) {
            console.error("Error fetching characters:", error);
        }
    });
}
function displayCharacters(characters) {
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
