let d = document;
function newElement() {
	let but = d.createElement("BUTTON");
	let text = d.createTextNode("\u00D7");
	but.appendChild(text);
	but.onclick = function del(){
		li.style.display = "none";
	}
		let att = d.createAttribute("class");
		att.value = "delBtn";
		but.setAttributeNode(att);

///----------------------------------------
let but2 = d.createElement("BUTTON");
	let text2 = d.createTextNode("✓");
	but2.appendChild(text2);

	but2.onclick = function check(){
		let liAtt2 = d.createAttribute("class");
		liAtt2.value = "checked";
		li.setAttributeNode(liAtt2);
		but.style.display = "none";
		but2.style.display = "none";
}

let att2 = d.createAttribute("class");
		att2.value = "checkBtn";
		but2.setAttributeNode(att2);

//------------------------------------


	let li = d.createElement("LI");
		let liAtt = d.createAttribute("id");
		liAtt.value = "li-list";
		li.setAttributeNode(liAtt);

	let inputValue = d.getElementById("myInput").value;
  	let t = d.createTextNode(inputValue);
  		li.appendChild(t);
    	li.appendChild(but);
    	li.appendChild(but2);

  	if (inputValue === '') {
    	alert("You must write something!");
  	} else {
  		document.getElementById("myUL").appendChild(li);
  	}
  document.getElementById("myInput").value = "";

}
