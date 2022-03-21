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

function teste(){
    var div = document.createElement("div");
    var element = document.getElementById("idDivTeste");

    var htmlText = '';

    for(var i = 1 ; i < 10 ; i++){
        htmlText += '<div>' +
            '<p> teste </p>' +
            '<a href="https://www.google.com"> </a>' +
        '</div>';
    }


    div.innerHTML = htmlText;

    // div.innerHTML =
    //     '<div class="slideshow-container">\n' +
    //     '<div class="mySlides fade">\n' +
    //     '<div class="numbertext">1 / 3</div>\n' +
    //     '<img href="https://www.google.com/imgres?imgurl=https%3A%2F%2Flh3.googleusercontent.com%2FjUoaTIlBn5ibfQcND2n5OMD6Z7xoqNj-ShHlFR6QuLffLXD5pS8V2eNg1rGlrsRrnDkoQ28O8UHzqzBQKAGY4l1CS2NQSq2SkRScK6FOjl82jppyohK-&imgrefurl=https%3A%2F%2Fabout.google%2Fintl%2Fpt-BR%2Fproducts%2F&tbnid=JmnZ4ZR7mG7ynM&vet=12ahUKEwiRxKa8ztX2AhXmOLkGHUIHAqgQMygCegUIARDbAQ..i&docid=67HnV3vMjLT6nM&w=396&h=512&q=google&client=opera-gx&ved=2ahUKEwiRxKa8ztX2AhXmOLkGHUIHAqgQMygCegUIARDbAQ" style="width:100%">\n' +
    //     '<div class="text">Caption Text</div>\n' +
    //     '</div>\n';

    element.appendChild(div);
}

window.onload = function(){
    console.log('onLoad Noticias');
    //getNews();
    //teste();
}