function fetchdata() {
fetch("https://jsonplaceholder.typicode.com/users")
.then (response =>
{
    if(!response.ok){
        throw Error("ERROR");
    }
return response.json();
})
.then(data =>{
    console.log(data);
    const html = data
        .map(user => {
        return `
        <div class = "user">
        <p>Name: ${user.name}</p>
        <p>E-mail: ${user.email}</p>
        <button type="button" 
        style = "
        "padding: 10;
    background-color: rgb(168, 165, 165); 
    border-color: rgb(14, 13, 13);
    text-shadow: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    letter-spacing: 0px;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    font-size: medium;
    transition: background-color 2.2s;
    transition-duration: 3s;
    font-weight: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-variant: small-caps;
    font-style: initial;
    font-variant-position: normal;
    text-anchor: middle;
    text-orientation: middle;
    text-emphasis-style: initial;
    -webkit-text-size-adjust: initial;
    width: 10%;
    text-decoration-color: rgb(168, 165, 165);
    border-radius: 40in;
        background-color="dark-blue" 
        text-color="black" ">Get User's Post</button>
        </div>
        `;
    })
    .join("");
    console.log(html) ;
    document.querySelector('#app').insertAdjacentHTML("afterbegin",html);
})
var page = document.getElementById('page')

    var name1= document.getElementById('catchPhrase')
    var post2= document.getElementById('bs')
    
//fetch post request
.catch(error => {
    console.log(error);
    
});
} 
fetchdata();