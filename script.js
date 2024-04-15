function start(){
    //let difficult = document.getElementById('difficult');
    let difficult= 90;
    let result = document.getElementById('view_links');
    result.innerHTML="";
    document.getElementById('btn').innerHTML="";
    for (var i = 1; i <= difficult; i++){
        result.insertAdjacentHTML('beforeend',`<div class="result" id="${i}"><a href="javascript:miss()" id="a${i}"><img src="/OECU-Game/images/oecu.png" id="img${i}"></div>`);
        }

    for (var i = 1; i <= 1; i++){
        var random = Math.floor(Math.random() * difficult); //0から99
        let img = document.getElementById('img'+random);
        img.src = '/OECU-Game/images/chromecanary.png'
        document.getElementById('a'+random).setAttribute('href','javascript:clear()');
        startTime = Date.now();
    }

    for (var i = 1; i <= 10; i++){
    var random = Math.floor(Math.random() * difficult); //0から99
    let img = document.getElementById('img'+random);
    img.src = '/OECU-Game/images/chromium.png';
    }

    for (var i = 1; i <= 10; i++){
        var random = Math.floor(Math.random() * difficult); //0から99
        let img = document.getElementById('img'+random);
        img.src = '/OECU-Game/images/chromium.png';
        }
}

function miss(){
    alert('失敗です');
    location.reload();
}
function clear(){
    clearTime = Date.now() - startTime;
    alert(clearTime/1000 + '秒でクリア！');
    location.reload();
}