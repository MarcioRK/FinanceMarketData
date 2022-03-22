function getNews(){
    //debugger
    var accessKey = '70c98bd0229f9ae406d832b2972cc1ec';
    var url = 'http://api.mediastack.com/v1/news?access_key=' + accessKey + '&languages=en,pt&limit=15';
    var request = new XMLHttpRequest();
    var htmlText = '';

    var div = document.createElement("div");
    var element = document.getElementById("idDivTeste");

    request.open('GET', url);
    request.send();
    request.onload = function(){
        if(request.status === 200){
            var response = JSON.parse(request.response);
            console.log("Responde => ", response);

            Object.entries(response.data).forEach(([key, value]) => {
                console.log('Value', value);

                htmlText +=
                '<div class="news">' +           
                    '<a href="' + value.url + '">' +
                        '<h2>' + value.title +'</h2>' +
                    '</a>' +

                    '<p>' +
                        value.description +
                    '</p>' +

                    '<p>' +
                        'fonte: ' + '<a href="' + value.published_at + '">' + value.published_at + '</a>' +
                    '</p>' +
                '</div>'+
                '<hr>';
            });

            div.innerHTML = htmlText;
            element.appendChild(div);

        } else {
            console.log("Erro ao processar a requisição");
        }
    }
}


window.onload = function(){
    console.log('onLoad Noticias');
    //getNews();
}