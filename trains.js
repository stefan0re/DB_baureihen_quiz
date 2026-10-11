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
  {
    typeNumber: "185",
    image: "images/018_185.webp",
    info: `Blau, orange und kaum zu übersehen: Diese TRAXX fährt für raildox, ein privates Güterverkehrsunternehmen aus Thüringen.
Die Baureihe 185 wurde von Bombardier (heute Alstom) in Kassel gebaut und ist mit über 400 Exemplaren eine der häufigsten Güterloks in Deutschland.`,
  },
  {
    typeNumber: "648",
    image: "images/019_648.webp",
    info: `Ein Alstom Coradia LINT 41 der Bayerischen Regiobahn, allerdings weit weg von Bayern im Leipziger Hauptbahnhof.
    LINT steht übrigens für "Leichter Innovativer Nahverkehrs-Triebwagen".`,
  },
  {
    typeNumber: "612",
    image: "images/020_612.webp",
    info: `Der Regio hat Neigetechnik und kann sich in Kurven um bis zu 8 Grad zur Seite legen.
So sind auf kurvenreichen Strecken deutlich höhere Geschwindigkeiten möglich, sodass den Fahrgästen gerne mal schlecht wird.`,
  },
  {
    typeNumber: "642",
    image: "images/021_642.webp",
    info: `Der Siemens Desiro Classic ist ein zweiteiliger Dieseltriebwagen,.
Perfekt für den nichtelektrifizierten Betrieb in Thüringen.`,
  },
  {
    typeNumber: "648",
    image: "images/022_648.webp",
    info: `Diesmal die "Original"-Baureihe 648, hier als VT 210 der Elster-Saale-Bahn.
Die beiden Wagen stehen in der Mitte gemeinsam auf einem Drehgestell, dem sogenannten Jakobs-Drehgestell.
Zwei Dieselmotoren unter dem Wagenboden sorgen für den Antrieb.`,
  },
  {
    typeNumber: "189",
    image: "images/023_189.webp",
    info: `Der Siemens Eurosprinter ES 64 F4 ist eine Viersystemlok und kann unter Fahrleitungen in Deutschland, Österreich, Italien und den Niederlanden fahren.
Ganz schwarz lackiert wurden viele dieser Loks einst von MRCE vermietet.`,
  },
  {
    typeNumber: "192",
    image: "images/024_192.webp",
    info: `Ein Exemplar der Baureihe 192, diesmal in schlichtem Silber vom Lokvermieter Akiem.
Der Siemens Smartron ist ein vereinfachter Vectron: nur für Deutschland, dafür günstig und robust.`,
  },
  {
    typeNumber: "430",
    image: "images/025_430.webp",
    info: `Ein sechsteiliger Stadler FLIRT 3 der Bayerischen Regiobahn, unterwegs als RB54 nach Kufstein in Österreich.
FLIRT steht für "Flinker Leichter Innovativer Regional-Triebzug".
Auch hier steht eigentlich eine 1 davor, offiziell ist das die Baureihe 1430.`,
  },
  {
    typeNumber: "462",
    image: "images/025_462.webp",
    info: `Der Siemens Desiro HC ist ein ungewöhnlicher Mix: Die Endwagen sind einstöckig, die Mittelwagen doppelstöckig.
Mit bis zu 160 km/h bringt er Pendler nach München.`,
  },
  {
    typeNumber: "401",
    image: "images/026_401.webp",
    info: `Der Klassiker schlechthin: Der ICE 1 startete 1991 als erster ICE in den Regelbetrieb.
Zwei Triebköpfe der Baureihe 401 ziehen und schieben bis zu 14 Mittelwagen mit 280 km/h.`,
  },
  {
    typeNumber: "182",
    image: "images/027_182.webp",
    info: `Der "Taurus" von Siemens ist mit der ÖBB-Baureihe 1116 eng verwandt.
Ein Taurus hält bis heute den Geschwindigkeitsweltrekord für Elektrolokomotiven mit 357 km/h.`,
  },
  {
    typeNumber: "159",
    image: "images/028_159.webp",
    info: `Die Stadler Euro Dual ist eine echte Hybridlok: Unter Fahrleitung fährt sie elektrisch, auf Strecken ohne Draht springt ein großer Dieselmotor ein.
Gebaut wird sie bei Stadler in Valencia, Spanien.`,
  },
  {
    typeNumber: "146",
    image: "images/029_146.webp",
    info: `Eine 146 in Intercity-Lackierung.
Diese Loks ziehen die Doppelstock-Intercitys (IC 2) und werden dabei oft vom Steuerwagen am anderen Zugende ferngesteuert.
So muss die Lok am Endbahnhof nicht umsetzen.`,
  },
  {
    typeNumber: "280",
    image: "images/030_280.webp",
    info: `Diese Siemens Eurorunner ER 20 fährt für Beacon.
Mit ihr wird ein Doppelstock-Nahverkehrszug bespannt, das ist für eine Diesellok im Großstadtbahnhof eher selten. Ab nach Chemnitz.`,
  },
  {
    typeNumber: "114",
    image: "images/031_114.webp",
    info: `Die Baureihe 114 entstand aus der DR-Baureihe 212.
Mit 160 km/h war sie für den schnellen Personenverkehr gedacht.
Hier ist sie im Doppelpack mit einer 143 unterwegs.`,
  },
  {
    typeNumber: "143",
    image: "images/032_143.webp",
    info: `Die 143 im orange-weißen Look.
In dieser Farbe zogen die 143er jahrzehntelang S-Bahnen in Dresden, Leipzig, Halle und Rostock.
Mit über 600 gebauten Exemplaren war sie die häufigste Elektrolok der Deutschen Reichsbahn.`,
  },
  {
    typeNumber: "159",
    image: "images/033_159.webp",
    info: `Noch eine Stadler-Lok aus Valencia, diesmal die stärkere Euro9000 von FLEX.
Mit 9.000 kW Leistung und 500 kN Anfahrzugkraft, gehört sie zu den stärksten Loks Europas.
Für die letzte Meile ohne Oberleitung hat sie zusätzlich zwei Dieselmotoren an Bord.`,
  },
  {
    typeNumber: "185",
    image: "images/034_185.webp",
    info: `Eine TRAXX der Rail Cargo Group, der Güterverkehrssparte der Österreichischen Bundesbahnen.
Red Bull Gives You Gleise!`,
  },
  {
    typeNumber: "185",
    image: "images/035_185.webp",
    info: `Eine Baureihe 185, ganz klassisch in Verkehrsrot von DB Cargo.`,
  },
  {
    typeNumber: "101",
    image: "images/036_101.webp",
    info: `Die Baureihe 101 war lange das Zugtier der Intercity-Flotte und fährt bis zu 220 km/h.
Der erste IC fuhr 1971, inzwischen werden die 101er nach und nach ausgemustert`,
  },
  {
    typeNumber: "384",
    image: "images/037_384.webp",
    info: `Eine Lok der Tschechischen Bahnen (ČD).
Die Baureihe 384 ist ein besonders schneller Vectron: Durch eine geänderte Getriebeübersetzung schafft sie 230 km/h, so schnell war vorher kein Vectron.
Die ČD hat 50 Stück davon und setzt sie vor allem auf internationalen Zügen von Prag nach Berlin und Hamburg ein.`,
  },
  {
    typeNumber: "243",
    image: "images/038_243.webp",
    info: `Weinrot mit weißem Streifen, ganz im Stil der  Deutschen Reichsbahn.`,
  },
  {
    typeNumber: "193",
    image: "images/039_193.webp",
    info: `Ein Vectron von European Locomotive Leasing (ELL), dem größten Vermieter dieser Loks.`,
  },
  {
    typeNumber: "463",
    image: "images/040_463.webp",
    info: `Der Siemens Mireo ist das neue Gesicht der S-Bahn Mitteldeutschland.
Er ist leicht gebaut und gewinnt beim Bremsen Strom zurück, so verbraucht er deutlich weniger Energie.
Sogar Akku-Varianten gibt es, die auch ohne Oberleitung fahren können.`,
  },
  {
    typeNumber: "146",
    image: "images/041_146.webp",
    info: `Eine 146, mit Werbung für die Felsenbühne Rathen in der Sächsischen Schweiz.
Als RE30 bringt sie den Doppelstockzug nach Magdeburg.`,
  },
];
