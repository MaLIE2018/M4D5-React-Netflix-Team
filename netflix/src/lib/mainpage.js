import * as api from '../js/modules/api.js';

let searchField = document.querySelector("#searchField")


window.onload = async() => {

    let SearchContainer = document.getElementById("searchContainer")


    // searchField.addEventListener("onkeyup", function() {
    //         console.log("test")
    //         filterResults(this.value)
    //     })
        // Searchfield
    SearchContainer.addEventListener("click", () => {
            setTimeout(function() {
                document.getElementById("searchField").focus()
            }, 20)
            SearchContainer.classList.toggle("border")
            SearchContainer.classList.toggle("border-white")
            SearchContainer.classList.toggle("input-hidden")
            SearchContainer.classList.toggle("input-expanded")

        })
        // Dropdown menu navbar
    let dropdownContainer = document.getElementById("SearchDropDown")
        // let dropdownToggle = document.getElementsByClassName("dropdown-toggle")
    dropdownContainer.addEventListener("mouseover", (event) => {
        let dropdown = document.getElementById("dropDown")
        dropdown.classList.add("show")
        dropdownContainer.classList.add("show")
    })

    dropdownContainer.addEventListener("mouseleave", (event) => {
        let dropdown = document.getElementById("dropDown")
        dropdown.classList.remove("show")
        dropdownContainer.classList.remove("show")
    })
}