
var button = document.getElementsByTagName('button');
button[0].onclick = display_result;
button[1].onclick = clear_text;
document.onload = function() {
document.getElementById('values').focus();
	};
	function convert_to_pounds(number_value)
	{
 
	return (number_value * 0.453592 );
	 }
function display_result() {
	 var kilograms = document.getElementById("values").value;
	 var result = convert_to_pounds(kilograms);
 
	 if (document.getElementById("values").value == '') {
	alert("Cannot be empty. Kindly type your value to convert.");
	document.getElementById('values').focus();
 
	}
	 else {
	 document.getElementById('result').innerHTML = kilograms + " pound(s) is equal to "
	+ result.toFixed(2) + " kilogram(s). ";
	 }
}
function clear_text() {
	 document.getElementById("values").value="";
	 document.getElementById("result").innerHTML="";
	 document.getElementById("values").focus();
}
function numberTo_Convert(evt) {
evt = (evt) ? evt : window.event;
var charCode = (evt.which) ? evt.which : evt.keyCode;
if (charCode > 31 && (charCode < 48 || charCode > 57)) {
return false;
}
return true;
}