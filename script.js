function start(){
    //let difficult = document.getElementById('difficult');
    let difficult= 100;
    let result = document.getElementById('view_links');
    result.innerHTML="";
    document.getElementById('btn').innerHTML="";
    for (var i = 1; i <= difficult; i++){
        result.insertAdjacentHTML('beforeend',`<div class="result" id="${i}"><a href="javascript:miss()"><img src="/OECU-Game/images/oecu.png"></a><div class="date"><p></p></div><div class="title"><br></div></div>`);
        }
    for (var i = 1; i <= 40; i++){
    var random = Math.floor(Math.random() * difficult); //0から99
    let change = document.getElementById( random);
    change.innerHTML = "";
    change.insertAdjacentHTML('beforeend',`<a href="javascript:miss()"><img src="/OECU-Game/images/chromium.png"></a><div class="date"><p></p></div><div class="title"><br></div>`);
    }
    for (var i = 1; i <= 1; i++){
    var random = Math.floor(Math.random() * difficult); //0から99
    let change = document.getElementById( random);
    change.innerHTML = "";
    change.insertAdjacentHTML('beforeend',`<a href="javascript:clear()" class="chrome"><img src="/OECU-Game/images/chrome.png"></a><div class="date"><p></p></div><div class="title"><br></div>`);
    startTime = Date.now();
    var pass;
    for (var i = 1; i <= difficult; i++){
        let id = document.getElementById(i);
        let classname = id.className;
        if ("chrome" == classname){
            pass = pass + 1;
        }
        if(pass == 0){
            start();
        }
    }
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