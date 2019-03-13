function startDataUpload() {
alert ("start data upload");
var name = document.getElementById("name").value;
var surname = document.getElementById("surname").value;
var moduletitle = document.getElementById("moduletitle").value;
var postString = "name="+ name +"&surname="+surname+"&moduletitle="+moduletitle;
alert (postString);
}