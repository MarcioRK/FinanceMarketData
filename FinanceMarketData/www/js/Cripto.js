function getMainCriptos(){
    endpoint = 'live'
    symbols = 'BTC,ETH,BNB,DOGE'
    target = 'BRL'
    access_key = 'ee74e99b578f799d5c9a96e3618326dc';

    api_url = 'http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key + '&symbols=' + symbols + '&target=' + target

    const paramsObject = {
        url: api_url,
      };
      
    const url_proxy = new URL('https://api.allorigins.win/get');
    url_proxy.search = new URLSearchParams(paramsObject).toString();

$.ajax({
    url: url_proxy,    
    dataType: 'jsonp',
    success: function(json_without_format) {
        var json = JSON.parse(json_without_format.contents);
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
    access_key = 'ee74e99b578f799d5c9a96e3618326dc';

    api_url = 'http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key + '&symbols=' + cripto + '&target=' +target
    const paramsObject = {
        url: api_url,
      };
      
    const url_proxy = new URL('https://api.allorigins.win/get');
    url_proxy.search = new URLSearchParams(paramsObject).toString();

$.ajax({
    url: url_proxy,    
    dataType: 'jsonp',
    success: function(json_without_format) {

        var json = JSON.parse(json_without_format.contents);
        document.getElementById('txtCriptoName').innerText = cripto;
        document.getElementById('txtCriptoValue').innerText = "R$ "+ json.rates[cripto];
        
    }
}); 
}
