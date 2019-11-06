/*One Song test*/
var song1 = {
	"Song":"(Ghost) Riders in the Sky",
	"Artist": ["Johnny Cash"],
	"Genre":["Rockabilly", "Rock", "Country", "Classic country", "Pop"],
	"Released": 1979

}

/*ARRAY OF JSON OBJECTS*/
var jonset = [
{
	"Song":"(Ghost) Riders in the Sky",
	"Artist": ["Johnny Cash"],
	"Genre":["Rockabilly", "Rock", "Country", "Classic Country", "Pop"],
	"Released": 1979

},
{
	"Song":"If I Were a Carpenter",
	"Artist": ["Johnny Cash", "June Carter Cash", "Tim Hardin"],
	"Genre":["Country"],
	"Released": 1968

},
{
	"Song":"A Boy Named Sue",
	"Artist": ["Johnny Cash"],
	"Genre":["Country", "Talking Blues", "Comedy"],
	"Released": 1969

},
{
	"Song":"I Walk the Line",
	"Artist": ["Johnny Cash"],
	"Genre":["Country"],
	"Released": 1957

},
{
	"Song":"Jackson",
	"Artist": ["Johnny Cash", "June Carter"],
	"Genre":["Country"],
	"Released": 1967

},
{
	"Song":"Ring of Fire",
	"Artist": ["Johnny Cash"],
	"Genre":["Country"],
	"Released": 1963

},
{
	"Song":"Wayfaring Stranger",
	"Artist": ["Johnny Cash"],
	"Genre":["Country"],
	"Released": 2000

},
{
	"Song":"The Man Comes Around",
	"Artist": ["Johnny Cash"],
	"Genre":["Country", "Folk", "Gospel"],
	"Released": 2002

},
{
	"Song":"Cat's In the Cradle",
	"Artist": ["Johnny Cash"],
	"Genre":["Country"],
	"Released": 1989

},
{
	"Song":"Hurt",
	"Artist": ["Johnny Cash", "Nine Inch Nails"],
	"Genre":["Country", "Folk", "Classic Country"],
	"Released": 2002

}
]



/*FUNCTION CALLS___________________________________________________*/

var parsejon = parseJSON(jonset);
var genlist = gensort(parsejon);

printJSON(parsejon);


optionmake(genlist);

/*DETERMINE WHAT TO DISPLAY ON PAGE (CALLED BY FORM)*/
function displayThis() {
	clearit(parsejon);
	var picked = document.getElementById('genpick').value;
	if (picked == "All Genres"){
		printJSON(parsejon);
	} else {
	var short = gen_pick(parsejon, picked);
	printJSON(short);
	}
}

/*CLEAR OLD VALUES IN FORM FIELDS*/
function clearit (parsejon) {
		for (i =0; i <parsejon.length; i++) {
			 document.getElementById('song' + i).innerHTML = "";
			 for (j=0; j<parsejon[i].Artist.length;j++) {
			 	document.getElementById('rest' + i).innerHTML = "";
			 }
			 document.getElementById('rest' + i).innerHTML =  "";
			 for (k=0; k<parsejon[i].Genre.length;k++) {
			 	document.getElementById('rest' + i).innerHTML =  "";
			 }
			  document.getElementById('rest' + i).innerHTML =  "";
			 document.getElementById('rest' + i).innerHTML =  "";
			
	}
}

/*MAKE NEW ARRAY OF ONLY ONE SUBSET*/
function gen_pick(parsejon, picked) {
	var short = new Array;
	var s = 0;
	for(i = 0; i < parsejon.length; i++) {
		var has = parsejon[i].Genre.includes(picked);
		if (has) {
			short[s] =parsejon[i];
			s++;
		}
	}
	return short;
}
function AltPrint(genarr){
	for (i =0; i <parsejon.length; i++) {
			 document.getElementById('test').innerHTML +=   parsejon[i].Song;
			 for (j=0; j<parsejon[i].Artist.length;j++) {
			 	document.getElementById('test').innerHTML += "-" + parsejon[i].Artist[j] + "-";
			 }
			 document.getElementById('test').innerHTML +=  "<br>";
			 for (k=0; k<parsejon[i].Genre.length;k++) {
			 	document.getElementById('test').innerHTML +=  "-" +parsejon[i].Genre[k] + "-";
			 }
			  document.getElementById('test').innerHTML +=  "<br>";
			 document.getElementById('test').innerHTML +=  parsejon[i].Released;
		
}
}

/*MAKE SMALLER ARRAY OF ONLY ONE GENRE*/


/*STRINGING JSON DATA*/
function setstringer(jonset) {
    var strungarr = new Array
    document.getElementById('des_ser').innerHTML += "Serialized display of data:" + "<br>"
    for(i = 0; i < jonset.length; i++) {
    	strungarr[i] = JSON.stringify(jonset[i]);
		document.getElementById('des_ser').innerHTML += strungarr[i] + "<br>";
 
	}
	return strungarr;
}

/*PARSING JONSET*/
function parseJSON (jonset) {
	var stringjon = new Array;
	var parsejon = new Array;
	stringjon = setstringer(jonset);
		for (i =0; i <stringjon.length; i++) {
			 parsejon[i] = JSON.parse(stringjon[i])
	}
	return parsejon;
}

/*PRINT OUT VALUES OF PARSED JSON ON PAGE*/
function printJSON (parsejon) {
		for (i =0; i <parsejon.length; i++) {
			 document.getElementById('song' + i).innerHTML +=   parsejon[i].Song;
			 for (j=0; j<parsejon[i].Artist.length;j++) {
			 	document.getElementById('rest' + i).innerHTML += "-" + parsejon[i].Artist[j] + "-";
			 }
			 document.getElementById('rest' + i).innerHTML +=  "<br>";
			 for (k=0; k<parsejon[i].Genre.length;k++) {
			 	document.getElementById('rest' + i).innerHTML +=  "-" +parsejon[i].Genre[k] + "-";
			 }
			  document.getElementById('rest' + i).innerHTML +=  "<br>";
			 document.getElementById('rest' + i).innerHTML +=  parsejon[i].Released;
			
	}
}

/*CREATE ARRAY OF GENRES*/

function gensort (parsejon) {
	var genlist = new Array;
	var gencount =0;

	for (i = 0; i<parsejon.length; i++){

		for (j=0; j<parsejon[i].Genre.length;j++) {
			var isin = genlist.includes(parsejon[i].Genre[j]);

			if (!isin) {
				genlist[gencount] = parsejon[i].Genre[j];
				gencount++;
			}
		}
	}

	return genlist;
}

/*DISPLAY GENRES AS OPTIONS*/
function optionmake(genlist){
	var allgenre = document.createElement("option");
	allgenre.text = "All Genres";
	allgenre.value = "All Genres";
	var selectall = document.getElementById("genpick");
	selectall.appendChild(allgenre);	

	for (i =0; i<genlist.length; i++){
	var option = document.createElement("option");
	option.text = genlist[i];
	option.value = genlist[i];
	var select = document.getElementById("genpick");
	select.appendChild(option);	
	}
}
