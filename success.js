
document.addEventListener("DOMContentLoaded", () => {

	// Get full query string from URL 
	const queryString = window.location.search;
	console.log(queryString);


	const urlParams = new URLSearchParams(queryString);
	console.log(urlParams);

	const geschlecht = urlParams.get('geschlecht');
	const name = urlParams.get('name');
	const vorname = urlParams.get('vorname');
	const mail = urlParams.get('mail');
	const telnr = urlParams.get('telnr');
	const kleidung = urlParams.get('kleidung');
	const krisengebiet = urlParams.get('krisengebiet');
	const ortGS = "50668 Köln";
	const straße = urlParams.get('straße');
	const hausnr = urlParams.get('hausnr');
	const plz = urlParams.get('plz');
	const ort = urlParams.get('ort');
	const datum = new Date().toLocaleDateString('de-DE');
	const zeit = new Date().toLocaleTimeString('de-DE');



	if (geschlecht === "weiblich") {
		elem.innerHTML = `Liebe ${vorname}, deine Spende wurde erfolgreich registriert.`;
	} else if (geschlecht === "männlich") {
		elem.innerHTML = `Lieber ${vorname}, deine Spende wurde erfolgreich registriert.`;
	} else if (geschlecht === "divers") {
		elem.innerHTML = `Liebe*r ${vorname}, deine Spende wurde erfolgreich registriert.`;
	}


	if (mail == null && telnr == null) {
		elem2.innerHTML = `Name: ${name} 
	<br>Vorname: ${vorname} 
	<br>Mail: Keine Angabe
	<br>Mobil/Telefon: Keine Angabe
	<br>Abgegebene Kleidung: ${kleidung} 
	<br>Gewünschtes Kriesengebiet: ${krisengebiet} 
	<br>Spendenort: ${ortGS} 
	<br>Datum: ${datum} 
	<br>Uhrzeit: ${zeit}`;
	} else if (mail != null && telnr == null) {
		elem2.innerHTML = `Name: ${name} <br> Vorname: ${vorname} 
<br> Mail: ${mail} 
<br> Mobil/Telefon: keine Angabe
<br> Abgegebene Kleidung: ${kleidung} 
<br> Gewünschtes Kriesengebiet: ${krisengebiet} 
<br> Spendenort: ${ortGS} 
<br> Datum: ${datum} 
<br> Uhrzeit: ${zeit}`;
	} else if (mail == null && telnr != null) {
		elem2.innerHTML = `Name: ${name} 
<br> Vorname: ${vorname} 
<br> Mail: keine Angabe
<br> Mobil/Telefon: ${telnr} 
<br> Abgegebene Kleidung: ${kleidung} 
<br> Gewünschtes Kriesengebiet: ${krisengebiet} 
<br> Spendenort: ${ortGS} 
<br> Datum: ${datum} 
<br> Uhrzeit: ${zeit}`;
	} else {
		elem2.innerHTML = `Name: ${name} 
<br> Vorname: ${vorname} 
<br> Mail: ${mail} 
<br> Mobil/Telefon: ${telnr} 
<br> Abgegebene Kleidung: ${kleidung} 
<br> Gewünschtes Kriesengebiet: ${krisengebiet} 
<br> Spendenort: ${ortGS} 
<br> Datum: ${datum} 
<br> Uhrzeit: ${zeit}`;
	}
})

