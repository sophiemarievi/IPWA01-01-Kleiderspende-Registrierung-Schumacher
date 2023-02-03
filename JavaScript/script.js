
function validPlz() {
	let plz = document.getElementById("form2DonationPlz").value;
	if (plz.length < 5) {
		alert("Deine Postleizahl ist zu kurz");
	} else if (plz.length > 5) {
		alert("Deine Postleizahl ist zu lang");
	} else if (plz < 50000 || plz > 50999) {
		alert("Leider fahren wir nicht in dein Gebiet.");
	}
}

let eingabePlz = document.getElementById("form2DonationPlz");
eingabePlz.onblur = validPlz;

