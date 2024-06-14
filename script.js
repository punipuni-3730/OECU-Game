function start(){
    //let difficult = document.getElementById('difficult');
    let difficult= 120;
    let result = document.getElementById('view_links');
    result.innerHTML="";
    document.getElementById('btn').innerHTML="";
    for (var i = 1; i <= difficult; i++){
        result.insertAdjacentHTML('beforeend',`<div class="result" id="${i}"><a href="javascript:miss()" id="a${i}"><img src="/OECU-Game/images/chromecanary.png" id="img${i}"></a></div>`);
    }

    var random = Math.floor(Math.random() * difficult); //0から89
    let img = document.getElementById('img'+random);
    img.src = '/OECU-Game/images/oecu.png';
    document.getElementById('a'+random).setAttribute('href','javascript:clear()');
    startTime = Date.now();

    let usedIndexes = new Set([random]);
    for (var i = 1; i <= 50; i++){
        do {
            random = Math.floor(Math.random()*difficult);
        } while (usedIndexes.has(random));
        usedIndexes.add(random);
        img = document.getElementById('img'+random);
        img.src = '/OECU-Game/images/chromium.png';
    }
    for (var i = 1; i <= 50; i++){
        do {
            random = Math.floor(Math.random()*difficult);
        } while (usedIndexes.has(random));
        usedIndexes.add(random);
        img = document.getElementById('img'+random);
        img.src = '/OECU-Game/images/chrome.png';
    }
}


function miss(){
    alert('失敗です');
    location.reload();
}
function clear(){
    clearTime = (Date.now() - startTime)/1000;
    alert(clearTime+ '秒でクリア！');
    location.reload();
}