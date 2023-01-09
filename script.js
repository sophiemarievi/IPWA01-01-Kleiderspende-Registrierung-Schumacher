
function validPlz() {
	let plz = document.getElementById("form2DonationPlz");
	if (plz < 50000 || plz > 50999) {
		alert("Leider fahren wir nicht in dein Gebiet.");
	}
}

let plz = document.getElementById("form2DonationPlz");
plz.onblur = validPlz;