const TRAINS = [
  {
    typeNumber: "233",
    image: "images/001_233.webp",
    info: `Ein kerniger 12 Zylinder Dieselmotor treibt diese Lokomotive an.
Im Leerlauf können wie in Modernen Autos mehrere Zylinder abgeschaltet werden, um Kraftstoff zu sparen.`,
  },
  {
    typeNumber: "346",
    image: "images/002_346.webp",
    info: `Schon über 60 Jahre alt, erfüllt die Baureihe 346 immer noch ihren Dienst im Güterverkehr.
Vor 1992 war sie unter der Bezeichnung Baureihe 106 bekannt.`,
  },
  {
    typeNumber: "232",
    image: "images/003_232.webp",
    info: `Die "Ludmilla" wurde ursprünglich für die weiten, dünn besiedelten Strecken der Sowjetunion entwickelt.
Mit gut 3.000 PS ist sie eine echte Kraftmaschine und gilt als eine der stärksten Diesellokomotiven Europas.`,
  },
  {
    typeNumber: "151",
    image: "images/004_151.webp",
    info: `Die Baureihe 151 wurde speziell für den schweren Erz- und Kohleverkehr entwickelt.
Aufgrund ihres Alters und der Umstellung auf modernere Mehrsystemloks wird sie heute zunehmend ausgemustert und ist daher nur noch selten im Einsatz zu sehen.
Mehr als 8000 PS sprechnen für sich!`,
  },
  {
    typeNumber: "193",
    image: "images/005_193.webp",
    info: `Die von Siemens hergestellte Vectron-Lokomotive hat ihren Heimathafen in Nürnberg.
Die meisten Exemplare haben eine Werbeaufschrift, daher sind sie auch bei schnellen Zugdurchfahrten gut zu erkennen.`,
  },
  {
    typeNumber: "155",
    image: "images/006_155.webp",
    info: `Ein seltenes Exemplar da die Baureihe 155 eigentlich seit 2020 von der DB Cargo ausgemustert wurde.
Die ähnlichkeit zur Baureihe 151 ist nicht zufällig, beide Loks stammen aus der gleichen Zeit, nur auf unterschiedlichen Seiten der Mauer.`,
  },
  {
    typeNumber: "187",
    image: "images/007_187.webp",
    info: `Die Baureihe 187 ist eine moderne Mehrsystem-Elektrolokomotive aus der TRAXX-Familie, die für den grenzüberschreitenden Güterverkehr entwickelt wurde.
Sie steht für den Generationswechsel bei DB Cargo und ersetzt schrittweise ältere Baureihen durch höhere Effizienz und internationale Einsatzfähigkeit.`,
  },
  {
    typeNumber: "155",
    image: "images/008_155.webp",
    info: `Ein weiteres Exemplar der Baureihe 155, exotische Baureihen gehören scheinbar zum Alltag am Bahnhof Jena-Göschwitz.`,
  },
  {
    typeNumber: "285",
    image: "images/009_285.webp",
    info: `Die Baureihe 285 gilt als flexible Ergänzung zu elektrischen TRAXX-Loks, da sie auch auf nicht elektrifizierten Strecken zuverlässig eingesetzt werden kann.
Unverzichtbar im Thüringer Güterverkehr!`,
  },
  {
    typeNumber: "253",
    image: "images/010_253.webp",
    info: `Die Siemens ER20 ist eine vierachsige dieselelektrische Lokomotive der mittleren Leistungsklasse aus der Eurorunner-Familie von Siemens.
In Deutschland wurde sie zunächst als Baureihe 253 geführt und steht im Fahrzeugeinstellungsregister nun als Baureihe 223 daher wahrscheinlich wirklich schwer zu finden! 😉`,
  },
  {
    typeNumber: "192",
    image: "images/011_192.webp",
    info: `Mit 83 Tonnen ist die Baureihe 192 eine echte Erscheinung auf den Gleisen.
Die hohe Traktionskraft macht sie besonders geeignet für den schweren Güterverkehr.
160 km/h Höchstgeschwindigkeit sind für eine Güterlok beachtlich!`,
  },
  {
    typeNumber: "147",
    image: "images/012_147.webp",
    info: `Die Baureihe 147 sieht man häufig im als Zugmaschine für IC-Doppelstockwagen.
Sie baut technisch stark auf dem Güterzug-TRAXX auf, wurde aber für höhere Geschwindigkeiten und leiseren Lauf zur Nutzung im Personenverkehr optimiert.`,
  },
  {
    typeNumber: "185",
    image: "images/013_185.webp",
    info: `Ein echtes Arbeitstier, heute vor allem im Einsatz bei privaten Anbietern.
Je nach Einsatzland war die Lok mit speziellen Ausrüstungspaketen, etwa für Skandinavien oder die Schweiz, bestellbar.`,
  },
  {
    typeNumber: "241",
    image: "images/014_241.webp",
    info: `Der Name des Betreibers ist Programm: STARK!
Die erste Lok für die Deutsche Reichsbahn wurde auf der Leipziger Frühjahrsmesse 1970 noch als V 300 001 ausgestellt, während sie bei ihrer Indienststellung zur Erprobung bei der VES-M in Halle, genau wie die weiteren 1970 ausgelieferten Maschinen, die computergerechte Baureihenbezeichnung 130 erhielt.
Die ersten Lokomotiven erhielt das Bahnbetriebswerk Leipzig Hbf Süd.
Gesichtet wurde diese Rarität in Halle-Neustadt.`,
  },
  {
    typeNumber: "223",
    image: "images/015_223.webp",
    info: `Diesmal wirklich eine Baureihe 223.
Ende der 1990er Jahre wurde der Personen- und Güterverkehr auf den nicht elektrifizierten Strecken der Österreichischen Bundesbahnen (ÖBB) überwiegend mit Fahrzeugen aus den 1960er und 1970er Jahren betrieben.
Zur Erneuerung der Fahrzeugflotte bestellten sie die Baureihe 223, um die Reihen 2043/2143 und 2050 zu ersetzen.
Auf der nicht elektrifizierten Strecke zwischen Chemnitz und Leipzig wurde diese Lok genutzt.`,
  },
  {
    typeNumber: "146",
    image: "images/016_146.webp",
    info: `Von Leipzig nach Norddeich Mole, ganz ohne Kohle, mit Schaffner Ole.`,
  },
  {
    typeNumber: "641",
    image: "images/017_641.webp",
    info: `Zum Schluss noch eine französische-deutsche Komposition, auch Walfisch genannt.
Die Fahrzeuge sind mit Scharfenbergkupplungen ausgerüstet. Bis zu drei Triebwagen sind in Mehrfachsteuerung fahrbar.
Die sechszylindrigen Motoren mit Reiheneinspritzpumpe und Direkteinspritzung stammen von MAN, das Strömungsgetriebe von Voith.`,
  },
];
