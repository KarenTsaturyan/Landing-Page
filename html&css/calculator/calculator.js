const d = document;

function insert(num){
  d.getElementById('textview').value += num;
}
function del(){
  d.getElementById('textview').value = " ";
}
function answer(){
 d.getElementById('textview').value = eval(d.getElementById('textview').value)
}
function minusone() {
  let exp = d.getElementById('textview').value
  d.getElementById('textview').value = exp.substring(0,exp.length-1);
}
function sqrt(){
  d.getElementById('textview').value = Math.sqrt(+d.getElementById('textview').value)
}
function percent(n){
  d.getElementById('textview').value = eval(d.getElementById('textview').value+"/"+n)
}