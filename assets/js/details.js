const id=window.location.search.slice(4)
const body=document.querySelector("body")
fetch(`https://api.tvmaze.com/shows/${id}`)
.then(response=>response.json())
.then(movie=>{
    body.innerHTML+=`
    <h1>${movie.name}</h1>
    <img src="${movie.image.medium}" alt="${movie.name}">
    <p>${movie.genres}</p>
    <p>${movie.summary}</p>`
})
