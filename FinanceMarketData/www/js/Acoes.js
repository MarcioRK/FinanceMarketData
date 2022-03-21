var codigoAcao;
var valorAcao;
var divValor;


function getStock()
{
    document.getElementById("txtRespostaAcao").innerText = ""
    document.getElementById("txtRespostaValor").innerText = ""
    document.getElementById("txtRespostaVariacao").innerText = ""

    codigoAcao = document.getElementById('txtAcao').value;


    var keyValue = 'c8q02k2ad3icps1k1fjg';
    var url = 'https://finnhub.io/api/v1/quote?token=' + keyValue +'&symbol=' + codigoAcao;
    var request = new XMLHttpRequest();
    request.open('GET', url);
    // request.setRequestHeader('X-Finnhub-Token', keyValue);
    request.send();
    request.onload = function(){
        if (request.status === 200){
            var responseJson = JSON.parse(request.response);
            valorAcao = responseJson.c
            variacaoAcao = responseJson.d
            variacaoPercentual = responseJson.dp
            document.getElementById("txtRespostaAcao").innerText = codigoAcao
            document.getElementById("txtRespostaValor").innerText = valorAcao + " USD"
            
            if (variacaoAcao <= 0){
                document.getElementById("txtRespostaVariacao").innerText =variacaoAcao +
                " (" + variacaoPercentual + "%)";
                document.getElementById("txtRespostaVariacao").style.color = "red";
            }
            else{
                document.getElementById("txtRespostaVariacao").innerText =  "+" + variacaoAcao +
                " (" + variacaoPercentual + "%)";
                document.getElementById("txtRespostaVariacao").style.color = "green";
            }

            
        }
        else{
            console.log("Erro na Request");
        }
    }
}

