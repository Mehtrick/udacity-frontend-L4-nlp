function checkForName(inputText) {
    if (inputText.length===0 || inputText.trim().length===0){
        alert("Please insert a text")
        return false;
    }
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
    return true;
}

export { checkForName }
