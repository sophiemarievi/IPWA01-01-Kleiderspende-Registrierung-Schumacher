
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


	const firstCharKleidung = kleidung.charAt(0);
	const kleidungCapitalized = kleidung.replace(firstCharKleidung, firstCharKleidung.toUpperCase());

	const firstCharKrisengebiet = krisengebiet.charAt(0);
	const krisengebietCapitalized = krisengebiet.replace(firstCharKrisengebiet, firstCharKrisengebiet.toUpperCase());


	if (geschlecht === "weiblich") {
		elem.innerHTML = `Liebe ${vorname}, herzlichen Dank für deine Spende! Deine Registrierung war erfolgreich. `;
	} else if (geschlecht === "männlich") {
		elem.innerHTML = `Lieber ${vorname}, herzlichen Dank für deine Spende! Deine Registrierung war erfolgreich.`;
	} else if (geschlecht === "divers") {
		elem.innerHTML = `Liebe*r ${vorname}, herzlichen Dank für deine Spende! Deine Registrierung war erfolgreich.`;
	}

	if (queryString.includes('plz')) {
		elem2.innerHTML = `<b>Name:</b> ${name} 
	<br><b>Vorname:</b> ${vorname} 
	<br><b>Mail:</b> ${mail}
	<br><b>Mobil/Telefon:</b> ${telnr}
	<br><b>Abzugebene Kleidung:</b> ${kleidungCapitalized} 
	<br><b>Gewünschtes Kriesengebiet:</b> ${krisengebietCapitalized} 
	<br><b>Abholadresse:</b> ${straße} ${hausnr}, ${plz} ${ort} 
	<br><b>Datum:</b> ${datum} 
	<br><b>Uhrzeit:</b> ${zeit}`;
	} else {
		if (mail == "" && telnr == "") {
			elem2.innerHTML = `<b>Name:</b> ${name} 
	<br><b>Vorname:</b> ${vorname} 
	<br><b>Mail:</b> Keine Angabe
	<br><b>Mobil/Telefon:</b> Keine Angabe
	<br><b>Abgegebene Kleidung:</b> ${kleidungCapitalized} 
	<br><b>Gewünschtes Kriesengebiet:</b> ${krisengebietCapitalized} 
	<br><b>Spendenort:</b> ${ortGS} 
	<br><b>Datum:</b> ${datum} 
	<br><b>Uhrzeit:</b> ${zeit}`;
		} else if (mail != "" && telnr == "") {
			elem2.innerHTML = `<b>Name:</b> ${name} <br> <b>Vorname:</b> ${vorname} 
<br> <b>Mail:</b> ${mail} 
<br> <b>Mobil/Telefon:</b> keine Angabe
<br> <b>Abgegebene Kleidung:</b> ${kleidungCapitalized} 
<br> <b>Gewünschtes Kriesengebiet:</b> ${krisengebietCapitalized} 
<br> <b>Spendenort:</b> ${ortGS} 
<br> <b>Datum:</b> ${datum} 
<br> <b>Uhrzeit:</b> ${zeit}`;
		} else if (mail == "" && telnr != "") {
			elem2.innerHTML = `<b>Name:</b> ${name} 
<br> <b>Vorname:</b> ${vorname} 
<br> <b>Mail:</b> keine Angabe
<br> <b>Mobil/Telefon:</b> ${telnr} 
<br> <b>Abgegebene Kleidung:</b> ${kleidungCapitalized} 
<br> <b>Gewünschtes Kriesengebiet:</b> ${krisengebietCapitalized} 
<br> <b>Spendenort:</b> ${ortGS} 
<br> <b>Datum:</b> ${datum} 
<br> <b>Uhrzeit:</b> ${zeit}`;
		} else {
			elem2.innerHTML = `<b>Name:</b> ${name} 
<br> <b>Vorname:</b> ${vorname} 
<br> <b>Mail:</b> ${mail} 
<br> <b>Mobil/Telefon:</b> ${telnr} 
<br> <b>Abgegebene Kleidung:</b> ${kleidungCapitalized} 
<br> <b>Gewünschtes Kriesengebiet:</b> ${krisengebietCapitalized} 
<br> <b>Spendenort:</b> ${ortGS} 
<br> <b>Datum:</b> ${datum} 
<br> <b>Uhrzeit:</b> ${zeit}`;
		}
	}
})

