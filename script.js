function start(){
    //let difficult = document.getElementById('difficult');
    let difficult= 100;
    let result = document.getElementById('view_links');
    result.innerHTML="";
    document.getElementById('btn').innerHTML="";
    for (var i = 1; i <= difficult; i++){
        result.insertAdjacentHTML('beforeend',`<div class="result" id="${i}"><a href="javascript:miss()"><img src="/images/oecu.png"></a><div class="date"><p></p></div><div class="title"><br></div></div>`);
        }
    
    for (var i = 1; i <= 1; i++){
    var random = Math.floor(Math.random() * difficult); //0から99
    let change = document.getElementById( random);
    change.innerHTML = "";
    change.insertAdjacentHTML('beforeend',`<a href="javascript:clear()" class="chrome"><img src="/images/chrome.png"></a><div class="date"><p></p></div><div class="title"><br></div>`);
    startTime = Date.now();
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