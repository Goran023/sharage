if (localStorage.getItem('red') === null) {
	var red = [];
	red.push('brstola', ' ime', 'prezime', 'telefon', ' email', 'datum', 'sat');
	red.toString();
	localStorage.setItem('red', red);
} else {
	res = localStorage.getItem('red');
	var red = res.split(',');
}
var string = window.location.href;
var getit = new Array();
getit = string.split('?');
niz = unescape(getit[1]);
sto = niz.slice(3, 4);
window.onload = function what() {
	document.getElementById('brojstola').innerHTML = ' sto br. ' + sto;
};
document.getElementById('rezervacija').addEventListener('submit', hvala);

function capitalize(form) {
	value = form.value;
	if (value == '') {
		return;
	} else {
		velikoslovo = '';
		value = value.split(' ');
		for (var i = 0; i < value.length; i++) {
			velikoslovo += value[i].substring(0, 1).toUpperCase() + value[i].substring(1, value[i].length) + ' ';
		}
		form.value = velikoslovo;
	}
}
function vreme() {
	const check = document.getElementById('datum').value;
	if (check == '') {
		document.getElementById('datum').focus();
		document.getElementById('sat').placeholder = 'Odaberite datum prvo';
	} else document.getElementById('vreme').style.display = 'block';
}
function sati() {
	document.getElementById('vreme').style.display = 'none';
}
function upis(form) {
	const brstola = sto;
	const ime = document.getElementById('ime').value;
	const prezime = document.getElementById('prezime').value;
	const telefon = document.getElementById('telefon').value;
	const email = document.getElementById('email').value;
	const datum = document.getElementById('datum').value;
	const sat = document.getElementById('sat').value;
	red.push(brstola, ime, prezime, telefon, email, datum, sat);
	red.toString();
	localStorage.setItem('red', red);
}
function hvala() {
	const ime = document.getElementById('ime').value;
	const prezime = document.getElementById('prezime').value;
	var string = 'HVALA ' + ime + ' ' + prezime + ' ';
	var str = string.split('');
	var el = document.getElementById('naslov');
	el.innerHTML = '';
	(function animate() {
		str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
		var running = setTimeout(animate, 70);
	})();
	setTimeout("location.href = 'index.html';", 2000);
}

function disable() {
	enable();
	var date = document.getElementById('datum').value;
	for (i = 0; i < red.length; i = i + 7) {
		if (red[i] == sto) {
			if (red[i + 5] == date) {
				switch (red[i + 6]) {
					case '08:00':
						document.getElementById('s08').disabled = true;
						document.getElementById('s08').className = 'btn btn-danger';
						break;
					case '09:00':
						document.getElementById('s09').disabled = true;
						document.getElementById('s09').className = 'btn btn-danger';
						break;
					case '10:00':
						document.getElementById('s10').disabled = true;
						document.getElementById('s10').className = 'btn btn-danger';
						break;
					case '11:00':
						document.getElementById('s11').disabled = true;
						document.getElementById('s11').className = 'btn btn-danger';
						break;
					case '12:00':
						document.getElementById('s12').disabled = true;
						document.getElementById('s12').className = 'btn btn-danger';
						break;
					case '13:00':
						document.getElementById('s13').disabled = true;
						document.getElementById('s13').className = 'btn btn-danger';
						break;
					case '14:00':
						document.getElementById('s14').disabled = true;
						document.getElementById('s14').className = 'btn btn-danger';
						break;
					case '15:00':
						document.getElementById('s15').disabled = true;
						document.getElementById('s15').className = 'btn btn-danger';
						break;
					case '16:00':
						document.getElementById('s16').disabled = true;
						document.getElementById('s16').className = 'btn btn-danger';
						break;
					case '17:00':
						document.getElementById('s17').disabled = true;
						document.getElementById('s17').className = 'btn btn-danger';
						break;
					case '18:00':
						document.getElementById('s18').disabled = true;
						document.getElementById('s18').className = 'btn btn-danger';
						break;
					case '19:00':
						document.getElementById('s19').disabled = true;
						document.getElementById('s19').className = 'btn btn-danger';
						break;
					case '20:00':
						document.getElementById('s20').disabled = true;
						document.getElementById('s20').className = 'btn btn-danger';
						break;
					case '21:00':
						document.getElementById('s21').disabled = true;
						document.getElementById('s21').className = 'btn btn-danger';
						break;
					case '22:00':
						document.getElementById('s22').disabled = true;
						document.getElementById('s22').className = 'btn btn-danger';
						break;
				}
			}
		}
	}
}
function enable() {
	document.getElementById('s08').disabled = false;
	document.getElementById('s08').className = 'btn btn-outline-warning';
	document.getElementById('s09').disabled = false;
	document.getElementById('s09').className = 'btn btn-outline-warning';
	document.getElementById('s10').disabled = false;
	document.getElementById('s10').className = 'btn btn-outline-warning';
	document.getElementById('s11').disabled = false;
	document.getElementById('s11').className = 'btn btn-outline-warning';
	document.getElementById('s12').disabled = false;
	document.getElementById('s12').className = 'btn btn-outline-warning';
	document.getElementById('s13').disabled = false;
	document.getElementById('s13').className = 'btn btn-outline-warning';
	document.getElementById('s14').disabled = false;
	document.getElementById('s14').className = 'btn btn-outline-warning';
	document.getElementById('s15').disabled = false;
	document.getElementById('s15').className = 'btn btn-outline-warning';
	document.getElementById('s16').disabled = false;
	document.getElementById('s16').className = 'btn btn-outline-warning';
	document.getElementById('s17').disabled = false;
	document.getElementById('s17').className = 'btn btn-outline-warning';
	document.getElementById('s18').disabled = false;
	document.getElementById('s18').className = 'btn btn-outline-warning';
	document.getElementById('s19').disabled = false;
	document.getElementById('s19').className = 'btn btn-outline-warning';
	document.getElementById('s20').disabled = false;
	document.getElementById('s20').className = 'btn btn-outline-warning';
	document.getElementById('s21').disabled = false;
	document.getElementById('s21').className = 'btn btn-outline-warning';
	document.getElementById('s22').disabled = false;
	document.getElementById('s22').className = 'btn btn-outline-warning';
}

function sakrijRezervaciju() {
	document.getElementById('bg_mask').style.visibility = 'hidden'; // sakrivam background mask i front layer
	document.getElementById('frontlayer').style.visibility = 'hidden';
}
function dosubmit(salji) {
	var sto = salji.id;
	alert(sto);
	document.getElementById('rezervacija').action = 'rezervacija.html?' + sto;
	window.event.returnValue = true;
}
function prikaziRezervaciju() {
	document.getElementById('bg_mask').style.visibility = 'visible';
	document.getElementById('frontlayer').style.visibility = 'visible';
}
