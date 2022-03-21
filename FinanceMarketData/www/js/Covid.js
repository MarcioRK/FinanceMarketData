function getProvinceCountryList()
{
    select = document.getElementById('cboEstadosPaises');

    var url = 'https://coronavirus.m.pipedream.net/';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onload = function(){
        if (request.status === 200){
            select.options[0].innerHTML = "Selecione a Provícia - País"
            var responseJson = JSON.parse(request.response);
            for (var i = 0; i<=responseJson.rawData.length; i++){
                try {
                    if (responseJson.rawData[i].Combined_Key != undefined){
                        var opt = document.createElement('option');
                        opt.value = responseJson.rawData[i].Combined_Key;
                        opt.innerHTML = responseJson.rawData[i].Combined_Key;
                        select.appendChild(opt);
                    }      
                } catch (error) {
                    console.log("Erro")
                }
            }
        }
    }
}

function getCovidDataBasedOnCountry(){
        estadoPaisSelecionado= document.getElementById("cboEstadosPaises").value;
        txtCasosTotais = document.getElementById("txtCasosTotais");
        txtTotalObitos = document.getElementById("txtTotalObito");
        txtTaxaIncidencia = document.getElementById("txtTaxaIncidencia");
        txtTaxaobito = document.getElementById("txtTaxaObito");

        var url = 'https://coronavirus.m.pipedream.net/';
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.send();
        txtCasosTotais.innerText = "Loading..."
        txtTotalObitos.innerText = "Loading..."
        txtTaxaIncidencia.innerText = "Loading..."
        txtTaxaobito.innerText = "Loading..."
        request.onload = function(){
            if (request.status === 200){
                var responseJson = JSON.parse(request.response);
                for (var i = 0; i<=responseJson.rawData.length; i++){
                    try {
                        console.log(estadoPaisSelecionado)
                        if (responseJson.rawData[i].Combined_Key == estadoPaisSelecionado){
                            txtCasosTotais.innerText = responseJson.rawData[i].Confirmed;
                            txtTotalObitos.innerText = responseJson.rawData[i].Deaths;
                            txtTaxaIncidencia.innerText = responseJson.rawData[i].Incident_Rate;
                            txtTaxaobito.innerText = responseJson.rawData[i].Case_Fatality_Ratio;
                            break;
                        }      
                    } catch (error) {
                    }
                }
            }
        }

}

window.onload = function() {
    getProvinceCountryList();
  };