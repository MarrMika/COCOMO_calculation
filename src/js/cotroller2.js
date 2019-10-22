

function yesnoCheck() {
	var values = document.getElementById("type_estimetion");
        if (values[0].checked) {
            document.getElementById("early_design").style.display = "block";
        } else {
            document.getElementById("post_architecture").style.display = "block";
        }
}