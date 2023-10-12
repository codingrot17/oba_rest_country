"use strict";

//https://restcountries.com/v3.1/name/{name}
function displayCountry(data) {
    const markup =`
        <div class="container-figure">
            <img class="figure-image" alt="" src="${data.flags.png}">
            <div class="figure-content">
                <h5 class="figure-name">${data.name}</h5>
                <span class="figure-info">
                    <ul>
                        <li>
                            <p class="tag">capital:</p>
                            <p class="info">${data.capital}</p>
                        </li>
                        <li>
                            <p class="tag">Population</p>
                            <p class="info">${data.population}</p>
                        </li>
                        <li>
                            <p class="tag">Language:</p>
                            <p class="info">${data.languages[0].name}</p>
                        </li>
                        <li>
                            <p class="tag">Currency:</p>
                            <p class="info">${data.currencies[0].name}</p>
                        </li>
                        <li>
                            <p class="tag">Region:</p>
                            <p class="info">${data.region}</p>
                        </li>
                    </ul>
                </span>
            </div>
        </div> 
    `;

    document.querySelector('.container').insertAdjacentHTML('afterbegin', markup)
}



function fetchCountry(country) {
    fetch(`https://restcountries.com/v2/name/${country}`).then
    ((response) => {
        return response.json();
    }).then((data) => {
        const [country] = data;
        console.log(country);
        displayCountry(country)
    })

}
fetchCountry('nigeria');
fetchCountry('usa');
fetchCountry('peru');
fetchCountry('britain');
fetchCountry('france');
