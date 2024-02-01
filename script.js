// function init(){
//     const search = document.getElementsByClassName("searchbar")[0].value;
//     console.log(search);
// }

document.onkeydown = (event) => {
    if (event.key === "Enter") {
        const search = document.getElementsByClassName("searchbar")[0].value;
        console.log(search);
    }
}