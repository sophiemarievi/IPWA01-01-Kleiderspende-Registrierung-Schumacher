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
	const ort = "50668 Köln";
	const datum = new Date().toLocaleDateString('de-DE');
	const zeit = new Date().toLocaleTimeString('de-DE');

	console.log(datum)

	if (geschlecht === "weiblich") {
		elem.innerHTML = `Liebe ${vorname}, deine Spende wurde erfolgreich registriert`;
	} else if (geschlecht === "männlich") {
		elem.innerHTML = `Lieber ${vorname}, deine Spende wurde erfolgreich registriert`;
	} else if (geschlecht === "divers") {
		elem.innerHTML = `Liebe*r ${vorname}, deine Spende wurde erfolgreich registriert`;
	}

	elem2.innerHTML = `Name: ${name} 
	Vorname: ${vorname} 
	Mail: ${mail} 
	Mobil/Telefon: ${telnr} 
	Abgegebene Kleidung: ${kleidung} 
	Gewünschtes Kriesengebiet: ${krisengebiet} 
	Spendenort: ${ort} 
	Datum: ${datum} 
	Uhrzeit: ${zeit}`;
})