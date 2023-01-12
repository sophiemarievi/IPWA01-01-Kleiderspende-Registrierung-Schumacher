
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

function onSend() {
	const queryString = window.location.search
	console.log(queryString)

	const urlParams = new URLSearchParams(queryString);
	console.log(urlParams)

	const geschlecht = urlParams.get('geschlecht')
	const name = urlParams.get('name')
	const vorname = urlParams.get('vorname')
	const mail = urlParams.get('mail')
	const telnr = urlParams.get('telnr')
	const kleidung = urlParams.get('kleidung')
	const kriesengebiet = urlParams.get('kriesengebiet')
}




/*
function registrationGeschäftsstelle() {
	let geschlecht = document.getElementById("formDonationGeschlecht").value;
	let name = document.getElementById("formDonationName").value;
	let vorname = document.getElementById("formDonationVorname").value;
	let mail = document.getElementById("formDonationMail").value;
	let telnr = document.getElementById("formDonationTelefon").value;
	let kleidung = document.getElementById("formDonationKleidung").value;
	let kriesengebiet = document.getElementById("formDonationKriesengebiet").value;

	if (geschlecht = "weiblich") {
		alert(`Liebe ${vorname}, deine Spende wurde erfolgreich registriert`);
	} else if (geschlecht = "männlich") {
		alert(`Lieber ${vorname}, deine Spende wurde erfolgreich registriert`);
	} else if (geschlecht = "divers") {
		alert(`Liebe*r ${vorname}, deine Spende wurde erfolgreich registriert`);
	}
}

function myFunction() {
	let x = document.getElementById("myForm");
	let txt = "";
	let i;
	for (i = 0; i < x.length; i++) {
		txt = txt + x.elements[i].value + "<br>";
	}
	document.getElementById("elem").innerHTML = txt;
}


const person1 = {
	gender: document.getElementById("formDonationGeschlecht").value,
	lastName: document.getElementById("formDonationName").value,
	firstName: document.getElementById("formDonationVorname").value,
	mail: document.getElementById("formDonationMail").value,
	phoneNr: document.getElementById("formDonationTelefon").value,
	kleidung: document.getElementById("formDonationKleidung").value,
	kriesengebiet: document.getElementById("formDonationKriesengebiet").value,
}

const person2 = {
	gender: document.getElementById("formDonation2Geschlecht").value,
	lastName: document.getElementById("formDonation2Name").value,
	firstName: document.getElementById("formDonation2Vorname").value,
	mail: document.getElementById("formDonation2Mail").value,
	phoneNr: document.getElementById("formDonation2Telefon").value,
	street: document.getElementById("formDonation2Straße").value,
	housNr: document.getElementById("formDonation2Hausnr").value,
	zip: document.getElementById("formDonationPlz").value,
	location: document.getElementById("formDonation2Ort").value,
	kleidung: documen.getElementById("formDonation2Kleidung").value,
	kriesengebiet: document.getElementById("formDonation2Kriesengebiet").value,
}

console.log(person1);
*/

