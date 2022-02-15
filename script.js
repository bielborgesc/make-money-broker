const showAlert = () => {
    let alertPlaceholder = $('#liveAlertPlaceholder')
    let alertTrigger = $('#liveAlertBtn')

    function alert(message, type) {
        let wrapper = document.createElement('div');
        wrapper.innerHTML = '<div class="alert my-alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

        alertPlaceholder.append(wrapper);
    }

    if (alertTrigger) {
        alertTrigger.click( () => {
            alert("Congratulations, your form has not been submitted. One day we'll fix this.", 'success');
        })
    }

}

const createCurrencyCard = (obj) => {
    Object.keys(obj).forEach((item) => {
        $("#currency").append(`<div class="card container-product-card-currency">
                                <div class="card-body my-card-product">
                                    <img src="https://images.pexels.com/photos/259191/pexels-photo-259191.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" class="img-card-product">
                                    <h4 class="card-title m-0">${item}</h4>
                                    <p class="card-text">${obj[item]}</p>
                                </div>
                            </div>`)
        
    });
}

const createCryptocurrencyCard = (arr) => {
    arr.forEach(elem => {
            $("#cryptocurrency").append(` <div class="card container-product-card-cryptocurrency">
                                        <div class="card-body my-card-product">
                                            <img src=${elem.icon} class="mb-3 crypto-img">
                                            <h4 class="card-title mb-3">${elem.name}</h4>
                                            <p class="card-text">${elem.symbol}</p>
                                            <p class="card-text">${elem.price}</p>
                                            <p class="card-text">${elem.volume} units</p>
                                        </div>
                                    </div>`)
            
    })
}

const collectCoins =  async () => {    
    const currency = await fetch("https://freecurrencyapi.net/api/v2/latest?apikey=0e1e4a30-8e6a-11ec-b6bc-853478e8683d")
        .then(response => response.json())
        .then(data => data.data)
    createCurrencyCard(currency)
    const cryptocurrencies = await fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=100")
        .then(response => response.json())
        .then(data => data.coins)
        createCryptocurrencyCard(cryptocurrencies)

    
}
showAlert();
collectCoins();
