function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const isValid = Client.checkForName(formText)
    if (isValid) {
        const analyzeTextRequest = {
            txt: formText
        }
        fetch('http://localhost:8081/analyzeText', {
            method: "POST", credentials: "same-origin", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(analyzeTextRequest)
        }).then(res => res.json())
            .then(function (res) {
                document.getElementById('results').innerHTML = `
            <p>Subjectivity: ${res.subjectivity}</p>
            <p>First part of text: ${res.text}</p>
            `
            });
    }

}

export {handleSubmit}

