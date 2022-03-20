function getStock()
{
    codigoAcao = document.getElementById('txtAcao').value;
    var lblCodigo = document.getElementById('lblCodigoAcao')
    var lblValorAcao = document.getElementById('lblValorAcao')

    var url = 'https://cors-anywhere.herokuapp.com/https://finnhub.io/api/v1/quote?symbol=' + codigoAcao;
    var request = new XMLHttpRequest();
    var keyValue = 'c8q02k2ad3icps1k1fjg';
    request.open('GET', url);
    request.setRequestHeader('X-Finnhub-Token', keyValue);
    request.send();
    request.onload = function(){
        var responseJson = JSON.parse(request.response);
        console.log(responseJson.c);
        lblCodigo.innerHTML = String(codigoAcao)
        lblValorAcao.innerHTML = "R$ " + responseJson.c;
    }
}

