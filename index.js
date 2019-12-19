document.addEventListener("DOMContentLoaded", () => {
    let select = document.querySelector("select")
    let form = document.querySelector("#form")


    const fetch = async () => {
        try {
            let res = await axios.get(`https://ghibliapi.herokuapp.com/films/`)
            let movies = res.data
            movies.forEach(film => {
                // title

                //release year

                //description
            });

        }catch(error) {
            console.log("error")
        }
    }
    fetch()

    form.addEventListener("submit", (event) =>{
        event.preventDefault();
    })

})