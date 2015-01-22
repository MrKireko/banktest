$(document).ready(function(){
	/**if (window.File && window.FileReader && window.FileList && window.Blob) {
		var reader = new FileReader();
//		document.getElementById("test").innerText = "woooo";
		reader.onload = function(e){
			document.getElementById("test").innerText = reader.result;
		}
		reader.readAsText("test.txt");
	} else {
		alert('The File APIs are not fully supported in this browser.');
	}**/
    $("#test").click(function() {
        $.ajax({
            url : "http://mrkireko.github.io/banktest/test.txt",
            dataType: "text",
            success : function (data) {
                $("#test").html(data);
            }
        });
    });
});