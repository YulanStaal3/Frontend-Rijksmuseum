# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Yulan Staal

  #### Je startniveau:
  LichtBlauw

  #### Je focus:
  Responsive
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
 https://www.rijksmuseum.nl/nl

  #### Screenshot(s) van de eerste pagina (small screen): 
  Home pagina
  <img src="readme-images/Rijks-Home.PNG" width="375px" alt="Home pagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  Collectie pagina
  <img src="readme-images/collectie.PNG" width="375px" alt="collectie pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Ik ben door de Rijksmuseum site gegaan en heb de screenreader hierop getest. Ik heb verschillende dingen getest. Zo heb ik gekeken wat er zou gebeuren als ik de voice over gewoon     zou laten voorlezen, ook heb ik geprobeerd om met mijn toetsenbord te navigeren en ook met behulp van mijn muis. Ik ben tot de volgende bevindingen gekomen:

  - Soms slechte of zelfs geen alt teksten biij images
  - Voiceover herhaalt vaak dingen
  - Met de tab kun je door de website navigeren, dit werkt niet overal even goed.
  - Goede hieracrhie van h1, h2 etc..

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/fed-breakdown-home-1.jpeg" width="375px" alt="breakdown van de hele pagina">
  <img src="readme-images/fed-breeakdown-home-2.jpeg" width="375px" alt="breakdown van de hele pagina">

  ### menu opengeklapt: 
  <img src="readme-images/Frontend-breakdownschetsen-03.png" width="375px" alt="breakdown van opengklapt menu">

  ### Collectie pagina: 
  <img src="readme-images/Frontend-breakdownschetsen-02.png" width="375px" alt="breakdown van collectie pagina">

</details>



## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Mijn h1 vergroot niet mee en blijft niet in het midden staan, ook snapik het menu niet. 


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Kyra                     | Pleuni            | Yulan                      | Tamara        |
  | ---                      | ---               | ---                        | ---           |
  | Flex of grid gebruiken   | :nth-of-type      | H1 in het midden krijgen   | en dan ik dat |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Ik weet nu hoe ik mijn h1 in het midden krijg
  - Gebruik maken van aria-label
  - Font maken met @font face

</details>




## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Snap niet hoe :nth of type werkt. En waarom er een h3 moet staan terwijl je die niet ziet.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Pleuni                       | Kyra                   | Yulan          | Tamara           |
  | ---                          | ---                    | ---            | ---              |
  | Wat ipv classes gebruiken    | 3 style css bestanden  | h3 verbergen   |                  |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Ik snap nu hoe je :nth-of-type gebruikt 
  - Visually hidden gebruiken om elemenen onzichtbaar maken --> mijn h3
  - 3 css bestanden maken, 1 voor debasis style: root, fonts etc en 2 losse voor beide pagina's

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen

  Ik heb deze test in week 4 gedaan. Ik ben nog niet klaar met mijn website. Mijn belangrijkste bevindingen voor nu, staan hieronder. Ik zal onder de bevingen foto's plaatsen van de WCAG checklist, als mijn site helemaal af is.
  
  - Verbeterde alt teksten bij de images.
  - Nog niet elke image heeft een ingevulde alt tekst
  - Screenreader leest alles op de goede volgorde voor
  - Goede hierarchie met h1, h2 etc
  - Snap alleen nog niet helemaal hoe je door de site 'tabt'
  - Ik heb nog geen light/ dark mode
  - Aria-labels voor buttons etc moet ik nog toevoegen
  - Het is me niet gelukt om video toe te voegen
  - Nog niet alle media query's staan erin

  <img src="readme-images/PDF-document-2.jpeg" width="375px" alt="WCAG checklist">
  <img src="readme-images/PDF-document-2-2.jpeg" width="375px" alt="WCAG checklist">

Na het afronden van mijn site:

- Elke button heeft een aria-label en staat in een button element
- Alle images een goed en duidelijk alt tekst gegeven
- Media query's gefixt waardoor je mijn site op elke scherm grootte kunt bekijken
- Light/ dark mode gemaakt
- Goed gebruikt gemaakt van customc properties




</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Extra uitleg voor grid nodig, ook voor media query wil ik veel met grid gaan werken voor onder andere mijn afbeeldingen. Ook heb ik behoefte aan extra uitleg voor de light/ dark mmode (mocht ik hier uberhaupt nog aan toekomen).


  ### Agenda voor meeting
  samen met je groepje opstellen
  
  | Kyra           | Pleuni                    | Yulan              | Tamara           |
  | ---            | ---                       | ---                | ---              |
  | Grid area      | Opstelling van slider     | Light/dark mode    | Afwezig          |
  | @media query   | Clamp font size           | Hoe werkt Grid     |                  |

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Weet nu hoe je light / dark mode toevoegt en hoe je daar buttons biij kunt maken
  - Duidelijker hoe media query's werken
  - Grid area in 1 regel ipv los grid-row-start grid-column-start etc. (Wel makkelijker voor mij om los uit te schrijven hihi)

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/sfeer.jpeg" width="375px" alt="Grid sfeer plaatje">
  <img src="readme-images/grid.PNG" width="375px" alt="Grid sfeer plaatje">
  <img src="readme-images/home.jpeg" width="375px" alt="Grid sfeer plaatje">


  ### Dit ging goed/Heb ik geleerd: 
  Ik heb over het algemeen enorm veel nieuwe kennis over CSS opgedaan, zo begrijp ik onder andere hoe je gebruik van een grid kunt maken en het werken met media query's. Ik was dit gehele vak erg onzeker en heb erg aan mezelf getwijfeld. Ik wist niet zeker of het me zou lukken om 2 pagina's te kunnen maken. Maar ik ben trots dat mijn beide pagina's staan en ook responsive goed werken. 

  <img src="readme-images/moeilijk.PNG" width="375px" alt="Grid sfeer plaatje">


  ### Dit was lastig/Is niet gelukt:
  Over het algemeen vond ik bijna alles wel lastig, ik had het meeste moeite met mijn hamburger menu. Helaas is het me ook niet gelukt om deze volledig na te kunnen maken. Op klein scherm klopt hij, maar zodra het scherm groter wordt hoort een deel van de tekst die in het menu staat, naar de nav bar te verplaatsen. Dit is me helaas niet gelukt. Ook vond ik het maken van één bepaalde sectie in mijn collectie pagina extreem lastig, dit gaat over de 6e sectie in mijn main met meerdere artikelen. Ik had een idee van hoe ik dit moest doen, maar puntje bij paaltje heb ik hier meerdere dagen op vast gelopen. Gelukkig is het uiteindelijk goed gekomen en heb ik het nog kunnen fixen!

  <img src="readme-images/menu.jpeg" width="375px" alt="menu bijna volledig">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. Buttons https://www.codecenter.nl/pr/tutorial/css/css3_buttons#:~:text=CSS%20buttons%20groeperen&text=Verwijder%20de%20marges%20door%20aan,plaats%20je%20deze%20naast%20elkaar.
  2. Flexbox https://codepen.io/YulanS/pen/XWvwbJQ?editors=1100
  3. Grid https://www.w3schools.com/cssref/pr_grid-area.php
  4. Hamburgermenu https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
  5. Grid https://codepen.io/YulanS/pen/bGXZOOL?editors=1100
  6. Grid https://www.w3schools.com/cssref/tryit.php?filename=trycss_grid-column-start
  7. Font face https://www.w3schools.com/cssref/atrule_font-face.php
  8. Font size https://www.geeksforgeeks.org/css-units-em-rem-px-vh-vw/
  9. Flexbox https://codepen.io/shooft/pen/xxozyVW?editors=1100
  10. Grid https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
  11. Light/dark mode https://codepen.io/shooft/pen/xxozyVW?editors=1100
  12. Toegankelijkheid https://www.a11yproject.com/posts/reviewing-a-design-for-accessibility/
  13. Toegankelijkheid https://www.a11yproject.com
  14. Light/dark mode https://dlo.mijnhva.nl/content/enforced/609316-FDMCI-2000FED121-DMCI-CMD-2425-1/FED%2024-25%20-%20Blok%202%20-%20Intro%20themes%20met%20has%20en%20lightdark.pdf

</details>
