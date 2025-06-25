async function generateQuotation() {

    const access = configURL();

    await fetch(access.url, access.configAccess)
    .then(
        response => {
            return response.json(); 
        }
    )
    .then(
        data => {
            assignData(data[0]);
        }
    )
    .catch(
        error => {
            assignData(mockOutput()); 
        }
    )
}

function configURL() {

    const configAccess = {
        method: "GET",
    }

    const originalURL = "https://zenquotes.io/api/random";
    const URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(originalURL)}&timestamp=${new Date().getTime()}`; // Timestamp para gerar uma nova request

    return {
        configAccess: configAccess,
        url: URL
    }

}

function assignData(quote) {

    if (quote.q.includes("Too many requests.")) {
        quote = mockOutput();
    }

    selector().quoteElement.textContent = quote.q;
    selector().authorElement.textContent = quote.a;
}

function assignDataWhenError(error) {
    
    selector().quoteElement.textContent = "An error occurred... Click again in the button below!";
    selector().authorElement.textContent = "Author";
}

function selector() {
    return {
        quoteElement: document.querySelector(".quotation"),
        authorElement: document.querySelector(".author")
    }
}

function mockOutput() {
    const index = Math.floor(Math.random() * mock.length);
    return {
        q: mock[index].q,
        a: mock[index].a
    }
}