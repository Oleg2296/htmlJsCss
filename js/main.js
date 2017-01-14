function getE(id) {
    return document.getElementById(id);
}
getE('knopka1').onclick = function () {
    getE('changeText').style.display = "block";
    getE('changeStyleTxt').style.display = "none";
}
getE('knopka2').onclick = function () {
    getE('changeText').style.display = "none";
    getE('changeStyleTxt').style.display = "block";
}
getE('savebut').onclick = function () {
    getE('divOne').innerHTML = getE('texar').value;
}
var rad = document.querySelectorAll('.ratio');
for (var i = 0; i < rad.length; i++) {
    rad[i].onclick = function () {
        getE('divOne').style.fontSize = this.value + "pt";
    }
}
getE('selectTxtStyle').onchange = function () {
    for (var j = 0; getE('selectTxtStyle').children.length; j++) {
        if (getE('selectTxtStyle').children[j].selected) {
            getE('divOne').style.fontFamily = getE('selectTxtStyle').children[j].value;
        }
    }
}
var txtFon;
var onOf = true;
getE('textColor').onclick = function () {
    if (onOf) {
        getE('colTxt').style.display = "block";
        onOf = false;
    }
    else {
        getE('colTxt').style.display = "none";
        onOf = true;
    }
    txtFon = false;
}
getE('fonColor').onclick = function () {
    if (onOf) {
        getE('colTxt').style.display = "block";
        onOf = false;
    }
    else {
        getE('colTxt').style.display = "none";
        onOf = true;
    }
    txtFon = true;
}
var bixa = document.querySelectorAll('.bixa');
for (var i = 0; i < bixa.length; i++) {
    bixa[i].onclick = function () {
        if (txtFon) {
            getE('divOne').style.backgroundColor = this.style.backgroundColor;
        }
        else {
            getE('divOne').style.color = this.style.backgroundColor;
        }
    }
}
var bld = true;
getE('boldTxt').onclick = function () {
    if (bld) {
        getE('divOne').style.fontWeight = "bold";
        bld = false;
    }
    else {
        getE('divOne').style.fontWeight = "normal";
        bld = true;
    }
}
var krs = true;
getE('kursTxt').onclick = function () {
    if (krs) {
        getE('divOne').style.fontStyle = "italic";
        krs = false;
    }
    else {
        getE('divOne').style.fontStyle = "normal";
        krs = true;
    }
}
getE('addbut').onclick = function () {
    getE('main22').style.display = "block";
    getE('main11').style.display = "none";
}

getE('table').onclick = function () {
    getE('tablesp').style.display="block";
     getE('tablesp2').style.display="none";
}
getE('spisok').onclick = function () {
    getE('tablesp').style.display="none";
     getE('tablesp2').style.display="block";
}


   var val = document.querySelectorAll('.valids')
for(var sl=0; sl<val.length; sl++){
    val[sl].onblur=function(){
        if(isNaN(this.value)){
            this.style.border="1px solid red";
        }else{
            this.style.border="1px solid black";
        }
    }
}

getE('createTb').onclick = function () {
    var fol=true;
    for(var check=0; check<val.length; check++){
        if(isNaN(val[check].value)){
            fol=false;
            break;
        }
        }
    
    if(fol){
    var tbht = getE('tbHeight').value;
    var tbwd = getE('tbWidth').value;
    var brwidth = getE('bordWidth').value;
    var tbcolor;
    var poloscolor;
    for (var opt = 0; opt < getE('bordColor').children.length; opt++) {
        if (getE('bordColor').children[opt].selected) {
            poloscolor = getE('bordColor').children[opt].value;
        }
    }
    var polos;
    var tbstyle;
    for (var sel = 0; sel < getE('bordPoloska').children.length; sel++) {
        if (getE('bordPoloska').children[sel].selected) {
            polos = getE('bordPoloska').children[sel].value;
        }
    }
    var table = document.createElement("table");
    table.id = 'tableStyle';
    for (var i = 0; i < getE('rows').value; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < getE('cols').value; j++) {
            var td = document.createElement("td");
            td.style.height = tbht + "px";
            td.style.width = tbwd + "px";
            td.style.borderWidth = brwidth + "px";
            td.style.borderColor = poloscolor;
            td.style.borderStyle = polos;
            td.style.borderCollapse = "collapse";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    getE('invis').appendChild(table);
    getE('tableStyle').style.borderCollapse = "collapse";
    getE('tableStyle').style.borderStyle = tbstyle;
    getE('tableStyle').style.borderColor = polos;
    getE('tableStyle').style.borderWidth = getE('bordWidth').value + "px";
    getE('texar').value = getE('invis').innerHTML;
    getE('main22').style.display = "none";
    getE('main11').style.display = "block";
        }else{
        alert('Заповніть будьласка всі поля правильно!')
    }
}
var spisMark=true;
getE('numbor').onclick=function(){
    getE('typeMark').style.display="none";
    getE('typeMark1').style.display="block";
    spisMark=false;
}
getE('numbor2').onclick=function(){
    getE('typeMark').style.display="block";
    getE('typeMark1').style.display="none";
    spisMark=true;
}
getE('spblocksp').onclick=function(){
    var fol=true;
     if(isNaN(val[5].value))
            fol=false;
    if(fol){
    var el=getE('spelem').value;
    var mark;
    for (var ark = 0; ark < getE('typeMark').children.length; ark++) {
        if (getE('typeMark').children[ark].selected) {
            mark = getE('typeMark').children[ark].value;
        }
    }
        for (var ark1 = 0; ark1 < getE('typeMark1').children.length; ark1++) {
        if (getE('typeMark1').children[ark1].selected) {
            mark = getE('typeMark1').children[ark1].value;
        }
    }
        if(spisMark){
            var olik=document.createElement('ul');
        }else{
             var olik=document.createElement('ol');
        }
    
    olik.id="spisinv";
    olik.type=mark;
    for(var nn=0;nn<el; nn++){
        var li=document.createElement('li');
        olik.appendChild(li);
    }
    getE('invis2').appendChild(olik);
    getE('texar').value = getE('invis2').innerHTML;
    getE('main22').style.display = "none";
    getE('main11').style.display = "block";
    }else{
        alert('Заповніть будьласка всі поля правильно!')
    }
}

getE('passbut').onclick=function(){
    getE('passw').style.display="block";
    getE('potap').value="";
}
var pass=12345;
getE('okpass').onclick=function(){
    if(getE('potap').value==pass){
        getE('passw').style.display="none";
    }else{
        getE('potap').style.border="1px solid red";
        getE('potap').value="";
    }
}
   









