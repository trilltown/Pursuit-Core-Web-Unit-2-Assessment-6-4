document.addEventListener("DOMContentLoaded", () => {
    let select = document.querySelector("select")
    let form = document.querySelector("#form")
    let ul = document.querySelector("#ul")
    let submit = document.querySelector("#submit")
    let userInput = document.querySelector("#userInput")
    let movieDiv1 = document.querySelector("#movieDiv1")
    let movieDiv2 = document.querySelector("#movieDiv2")
    let movieDiv3 = document.querySelector("#movieDiv3")
    let movieData = []
    
    const filmFetch = async () => {
        try {
            let res = await axios.get(`https://ghibliapi.herokuapp.com/films/`)
            let movies = res.data
            
            movies.forEach(film => {
                let h3 = document.createElement("h3")
                h3.innerText = film.title

                let h4 = document.createElement("h4")
                h4.innerText = film.description

                let h5 = document.createElement("h5")
                h5.innerText = film.release_date
                
                movieDiv1.appendChild(h3)
                movieDiv2.appendChild(h4)
                movieDiv3.appendChild(h5)


                //description
            });

        }catch(error) {
            console.log("error")
        }
    }
    filmFetch()

    const selectFeature = () => {
        let output = [];
        for(let i = 1; i <= 20; i++) {
            let option = document.createElement("option") 
            option.innerText = i;
            option.value = i;
            select.appendChild(option)            
        }
    }
    selectFeature()

    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        let li = document.createElement("li")
        li.innerText = ``  
        ul.appendChild(h7)
    })

})