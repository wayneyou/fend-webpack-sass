const apiKey = '2fc35ac5705b02cd344cf81ccb07494f'
const cityID = 2172797
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?id='
const url = (baseURL + cityID + '&appid=' + apiKey)
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch(url)
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = res.main.temp
        })
}

export { handleSubmit }
