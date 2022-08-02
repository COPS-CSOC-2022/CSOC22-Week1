function display(a){
    document.getElementById("scrn").value+=a;
}
function clearAll(){
    document.getElementById("scrn").value="";
}
let s="";
function calculate(){
    s+=document.getElementById("scrn").value;
    s+='=';
    document.getElementById("scrn").value=eval(document.getElementById("scrn").value);
    s+=document.getElementById("scrn").value;
    s+='\n';
}
function cut(){
    let a=document.getElementById("scrn").value;
    document.getElementById("scrn").value=a.slice(0,a.length-1)
}
let d=0;
function sinD(angleDegrees) {
    return Math.sin(angleDegrees*Math.PI/180);
};
function cosD(angleDegrees) {
    return Math.cos(angleDegrees*Math.PI/180);
};
function tanD(angleDegrees) {
    return Math.tan(angleDegrees*Math.PI/180);
};
function sin(a){
    if(d===1)return sinD(a);
    else {
        return Math.sin(a);
    }
}
function cos(a){
    if(d===1)return cosD(a);
    else return Math.cos(a);
}
function tan(a){
    if(d===1)return tanD(a);
    else return Math.tan(a);
}
function change(){
    if(d==1){
        d=0;
        document.getElementById("btn1").value="deg";
    }
    else {
        d=1;
        document.getElementById("btn1").value="rad";
    }
}
function history(){
    document.getElementById("his").innerHTML=s;
}

