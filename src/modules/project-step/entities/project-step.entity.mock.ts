import { IProjectStep, ProjectStep } from './project-step.entity';

export const projectStepEntityMock = [
  {
    id: 1,
    title: 'BRETTER ZUSCHNEIDEN',
    description:
      'Du benötigst Bretter aus 19mm Dreischichtplatte Fichte in folgenden Maßen:\n\nFür die Seiten: 2 Stück à 482x240mm\n' +
      '\n' +
      'Für den Deckel: 1 Stück à 762x240mm\n' +
      'Für den Boden: 1 Stück à 762x240mm\n' +
      'Für die Klappe: 1 Stück à 514x756mm\n' +
      'Die erste Maßangabe gibt dabei immer die Faserrichtung an.\n' +
      'Du kannst deine Bretter selbst zuschneiden oder den Zuschnittservice in deinem OBI Markt nutzen.\n',
    image: 'image1.png',
  },
  {
    id: 2,
    title: 'SEITEN VORBOHREN',
    description:
      'Wenn alle Bretter zugeschnitten sind, bohrst du zuerst deine Seitenteile (482mmx240mm) wie in der Skizze dargestellt vor. Nutze dafür einen 4mm Holzbohrer. Wir empfehlen dir als Unterlage eine alte Holzplatte, damit du Ausrisse auf der Rückseite vermeidest',
    image:
      'https://create.obi.de/dynamic/img/magnolia_assets/67f99bf701c8f9b9707bae92d497bb80.jpg',
  },
  {
    id: 3,
    title: 'BODEN UND DECKEL VORBOHREN',
    description:
      'Bohre deinen Boden und den Deckel (762mmx240mm) wie in der Skizze dargestellt mit dem 4mm Holzbohrer vor. Eines der Bretter nimmst du als Boden, in den du die Löcher für die Scharniere bohrst. Mit dem 35mm Forstnerbohrer bohrst du 12mm tief in dein Brett.\n' +
      '\n',
    image:
      'https://create.obi.de/dynamic/img/magnolia_assets/9258d0505dff3bf619b53d7d8185f32c.jpg',
  },
  {
    id: 4,
    title: 'KLAPPE VORBOHREN',
    description:
      'Für die Aussparungen der Scharniere bohrst du mit einem 35mm Forstnerbohrer 12mm tief in dein Holz. Das Loch für deinen Griff bohrst du mit deinem 4mm Holzbohrer vor.',
    image:
      'https://create.obi.de/dynamic/img/magnolia_assets/26e67623e82acbe9d6d263ce4556f5e7.jpg',
  },
  {
    id: 5,
    title: 'HOLZ SCHLEIFEN UND STREICHEN',
    description:
      'Grundlage für eine gute Oberfläche ist ein gründlicher Schliff. Nutze zum Beispiel einen Schleifschwamm. Fange mit einer groben Körnung (ca. 120) an und schleife mit einer feinen Körnung (ca. 180) nach.\n' +
      '\n' +
      'Anschließend solltest du das Holz streichen. Denn Holz braucht einen Schutz, damit es schön bleibt. Überlege dir zuerst, ob du die Maserung des Holzes behalten möchtest – dann empfehlen wir dir transparente Öle oder Lasuren. Alternativ kannst du es mit einem Lack deckend streichen. Für die passende Oberflächenbehandlung bietet dir dein OBI Markt ein großes Sortiment.\n' +
      '\n',
    image:
      'https://create.obi.de/dynamic/img/magnolia_assets/bcc3949d987866369b0853d7d577f683.jpg',
  },
];
