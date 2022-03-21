function getMainCriptos(){
    endpoint = 'live'
    symbols = 'BTC,ETH,BNB,DOGE'
    target = 'BRL'
    access_key = '7c85b4e91e2ee9c69ed4de29f7dc13ad';

$.ajax({
    url: 'http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key + '&symbols=' + symbols + '&target=' +target,    
    dataType: 'jsonp',
    success: function(json) {

        document.getElementById('txtValueBitcoin').innerText = "R$"+json.rates.BTC
        document.getElementById('txtValueEthereum').innerText = "R$"+json.rates.ETH
        document.getElementById('txtValueBnb').innerText = "R$"+json.rates.BNB
        document.getElementById('txtValueDogecoin').innerText = "R$"+json.rates.DOGE
        
    }
}); 
}

function searchForCripto(){
    var cripto = document.getElementById('txtSearchCripto').value.toString().toUpperCase();
    console.log(cripto);

    if(cripto == "" || cripto == null || cripto == undefined){
        return;
    }
    
    endpoint = 'live';
    target = 'BRL';
    access_key = '7c85b4e91e2ee9c69ed4de29f7dc13ad';

$.ajax({
    url: 'http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key + '&symbols=' + cripto + '&target=' +target,    
    dataType: 'jsonp',
    success: function(json) {


        document.getElementById('txtCriptoName').innerText = cripto;
        document.getElementById('txtCriptoValue').innerText = "R$ "+ json.rates[cripto];
        
    }
}); 
}