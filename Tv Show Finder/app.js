const forms = document.querySelector('#searchinform')
const dcontainer = document.querySelector('#boii')
forms.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchterm = forms.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchterm}`)
    makeimages(res.data)
    forms.elements.query.value = "";
})
const makeimages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement("img");
            img.src = result.show.image.medium;
            dcontainer.append(img)
        }
        
    }
}