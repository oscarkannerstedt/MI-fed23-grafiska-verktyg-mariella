## Ett stort hej och välkomna önskar vi besättningen på M/S Olympia!

### Vad roligt att ni ska koda vår design.

Grundidén med vår design är att presentera en ny mobilapp (For Rest) för meditation, avslappning och yoga - med inspiration i japanskt skogsbad. 

Det är en one-pager så man kan scrolla sig ner hela vägen, men även med en meny uppe i headern så man lite snabbt kan ta sig till olika delar av sidan med **ankarlänkar**.  
Då detta är en prototyp för sidan är det i dagsläget en startsida och en kontaktsida som prioriteras, övriga menylänkar blir döda länkar (alternativt låt dem länka till kontaktsidan).

## Bilder och resurser
**Bilder och resurser ligger i assets-mappen i repot.**  
Sidan ska vara responsiv så det blir lite förändringar mellan mobil, tablet och desktop. Se designbilder för referens.

## Färgkoder
Mörkt grön är **#293f16**  
Ljust grön är **#d6e6bc**  
Ljust brun är **#e0D9C0**  
Mörkt brun är **#573e28**  
Mörkt blå är **#041c2c**  
Ljust grå är **#bbbdc0**  
Varmt gul är **#daa520** (Goldenrod)

## Teckensnitt
Teckensnitt för rubriker och underrubriker är **_Bellefair_**.  
**Observera** att ibland kan en del bokstäver i Bellefair se konstiga ut när storleken manipuleras - för att åtgärda detta behöver man i css ange >`font-weight: 400;` trots att fonten är statisk. 

För brödtext och citat används **_Josefine Sans_**.

## Övrigt
**Knapparna** ska ha ljust grå border i standardläge och mörkt blå border vid hover.  
Storleken är 120x40 och border 1, 1, 2, 2.  
Om inget skrivits in i inputfälten och ingen av checkboxarna är ikryssade ska skicka-knappen vara disabled.

**I menyn** skrivs menyalternativ/länkar med versaler i svart text.  
I desktop: När man hovrar över ett alternativ ska det bli undertruket med border bottom 3px samtidigt som färgen på text och border ändras till mörkt brun, och detta ska även ligga kvar när ett alternativ är valt så man enkelt ser vilken del av sidan som är aktiv.  
I mobil- och tabletversion _ändras_ menyn till en hamburgermeny som vecklas ut. Där används sekundärknapparna för menyalternativen med border som ändras vid hover state. Längst ner i menyn ska logon glida, uppdelad, från höger och vänster tills de kombinerats till en komplett logo. Dessutom ska färgerna i logon ändras i detta skede. Se designbild.

På startsidan finns en **box-text** där texten ska vara centrerad i höjd- och sidled. 

På kontaktsidan har rubriken och formuläret en **dropshadow** i svart i tablet- och desktopläge. Detta ska vara en dubbel dropshadow med både positiva och negativa värden.  
För mobilversion är det valfritt om man låter detta ligga kvar, men helst inte. 
I mobil och tablet blir kontaktsidan scrollbar.
Knapparna vid inputfälten är primärknapparna med färgbyte på border vid hover state.

**Bakgrundsbilden** ska vara fixed i alla format om möjligt (prioritera desktop).  
Den ska också ha ett filter för att ljusas upp en aning, detta kan eventuellt behöva göras i Photoshop eller liknande för att inte påverka child elements.

**Det ljusa lövet** på startsidan ska ha en liten animering så det rör sig på valfritt sätt (darrar, skakar, hoppar) och fungera som en pil som man kan klicka på för att skrolla sig uppåt eller nedåt på sidan (för tablet och desktop, uteslut för mobilversion).  

**De tre bilderna** på förstasidan ska länka till tänkta kanaler på YouTube och Spotify, samt visar hur appens förstasida ser ut i en telefon.  
Den mittersta, med appbilden, ska vid klick öka i storlek och få en skugga så det ser ut som att den lyfts från bakgrunden samtidigt som den börjar spela upp en ljudfil som anknyter till temat skog och avslappning. Det blir upp till teamet att hitta ett lämpligt ljudklipp som är royaltyfritt. Vid ett andra klick ska ljudet stängas av igen och bilden återgå till normalläget.  
De andra bilderna får gärna länka till förstasida på YouTube respektive Spotify.

**Footer** med copyright-texten ska finnas i nederkant i alla versioner. Variationer beroende på plattform framgår i designen.  
Knappar för att länka till App Store och Google Play ligger i mobilversion fixed så de hamnar nere i footern, i tablet- och desktopversion ligger de ovanför footern.

**Cookie-text** är vit mot mörkt blå bakgrund i en oval som klickas bort med en knapp i ljust grå då den tydligt ska avvika från övrig design.

**Extra i mån av tid**
Som cursor pointer används lövet från logon med en drop shadow så det lyfts lite från underlaget. Detta ska ersätta den inbyggda pointern och det blir teamets uppgift att välja färger som fungerar mot allt klickbart. För användarvänlighet bör det finnas en switch där man kan välja om man vill ha standard pointer eller den anpassade. Teamet avgör var det är lämpligt att lägga switchen och hur den ska utformas.

**_Happy cruising!  
önskar besättningen på M/S Mariella_**
