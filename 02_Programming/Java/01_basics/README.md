# **Java Building Blocks**



## **Introduction**

Programmeertalen zijn gemaakt met speciale syntax - specifieke instructies die de programmeertaal (Java) begrijpt. De syntax van Java is niet makkelijk om te leren. Toch is het heel goed om deze taal als eerste te leren voor back-end developers. 

Veel dingen die programmeertalen soms zelf bepalen moet je in Java namelijk expliciet uitschrijven. Door hierbij stil te staan en erover na te denken krijg je dus een beter inzicht in belangrijke principes van back-end programming.

De eerste stap in het leren van een nieuwe taal leren is het überhaupt aan de praat krijgen. Standaard hiervoor is om een “Hello World” opdracht te maken. Laten we dit als eerste gelijk proberen!

Maak een nieuw project aan in je IDE en gebruik de onderstaande code. Je hoeft je nu nog niet druk te maken om wat de tekst in dit voorbeeld allemaal betekent:

![image](images/image24.png)

Als je op een van de 2 “play buttons” drukt, hoort je terminal het volgende te tonen:

![image](images/image12.png)

Gefeliciteerd! Je hebt net een Java applicatie gerund. Vanaf nu volgt dan het echte werk  ;) 



# **Inhoud**



## **Java Basics**

1. Oriëntatie
2. Variables & Datatypes
3. Modifiers & more
4. Scope, methods & Constructors
5. Arrays & Lists
6. Loops & Conditions



## **Java Zoo**



## **Java Object Oriented**

1. Encapsulation
2. Inheritance & Polymorphism
3. Abstraction & Interfaces



# **1 Oriëntatie**

Zo goed als alle voorbeelden / tutorials gebruiken **System.out.println()** om iets na te bootsen. Dit print een line in de “standaard output” van je systeem - de terminal. Daarmee maakt het veel dingen wat overzichtelijker. Zo kan je gewoon “hier verwijdert het systeem een student uit de database” printen in plaats van gelijk over databases te moeten leren.

Ook de **public static void main(string[] args)** zal je in elk project terugzien - dit is de zogeheten “main method” die draait als je je applicatie opstart. Het zal je goed doen om de afkortingen voor deze twee goed uit je hoofd te leren - in IntelliJ zijn dit respectievelijk “sout” en “psvm”.

In deze handout zal je veel uitgedaagd worden om zelf onderzoek te doen naar bepaalde concepten of begrippen. Ook dit vinden wij een heel belangrijke skill. Natuurlijk krijg je nog wel heel wat uitleg en hulp - ook bij het vinden van goede bronnen.

Iedereen leert natuurlijk op zijn of haar eigen manier, dus wij hebben hieronder een kort lijstje van Boeken, Websites en Youtube-kanalen die wij erg sterk vinden. Het staat je vrij om andere bronnen te gebruiken!



## **Boeken:**

Er zijn natuurlijk heel veel boeken geschreven over Java. Wij raden sterk aan om minstens één van de twee volgende boeken te kopen:

* **OCP Study Guide -** OCP staat voor Oracle Certified Professional. Oracle is de maker van Java, dus dit certificaat is een goede om naartoe te werken. Het is wel een lastig geschreven boek, maar tegelijkertijd ook ontzettend uitgebreid.
* **Head first! Java** - staat bekend als een van de meest beginners vriendelijke boeken over Java. Heeft ook een hele reeks aan andere boeken over aanliggende onderwerpen.



## **Websites:**

* Aanraders qua websites (naast [de officiële documentatie](https://docs.oracle.com/en/java/)) zijn **[javatpoint](https://www.javatpoint.com/java-tutorial)** en **[w3schools](https://www.w3schools.com/java/default.asp)**. Ook sterk zijn **[tutorialspoint](https://www.tutorialspoint.com/java/index.htm)** en **[geeksforgeeks](https://www.geeksforgeeks.org/java/)**.



## **Youtube-kanalen:**

* Het allerbeste youtube-kanaal om Java van te leren is **Coding With John**. Daar vind je ontzettend veel filmpjes over aparte onderwerpen en ook enkele tutorials. [Dit filmpje](https://www.youtube.com/watch?v=drQK8ciCAjY) is een goede om mee te beginnen, maar bijna al het geüploade materiaal is het kijken wel waard en ook ontzettend beginners vriendelijk!



# **Opdracht Oriëntatie**

Java heeft veel aparte termen en begrippen. Je coach gaat hier natuurlijk uitleg over geven, maar het is belangrijk om ook zelf een beeld te vormen. Doe zelf onderzoek naar de volgende termen en beschrijf **in 1 zin** het high-level concept. Bespreek dit met je groepje als iedereen dit heeft gedaan.

* Object
* Class
* Package
* Constructor
* Field
* Method
* Parameter
* public static void main(string[] args)



# **2 Variables en Operators**



## **Datatypes**

Stel dat we een applicatie bouwen waarbij een gebruiker wordt gekoppeld aan een baan. Je hebt dan informatie nodig zoals naam, opleiding, leeftijd etc. Al deze stukjes informatie worden bewaard in **variables**. Een variabele kan je vergelijken met een doos met een bepaalde inhoud (_value_). Het label (_naam_) op de doos (_variabele_) geeft aan wat er in zit (_value_).

Dit zijn drie voorbeelden van variabelen met de namen ‘_name_’, ‘_education_’ en ‘_age_’. In deze variabelen zitten respectievelijk de waarden (values) _Jan Java_, _20_ en _false_.

![image](images/image18.png)

In Java geven we specifiek aan wat voor soort informatie er wordt opgeslagen in een variabele. Deze verwijzing wordt een data type genoemd. Java kent **Primitive data types** en **Non-primitive data types** (hier later meer over). De data types die in het voorbeeld hierboven worden gebruikt zijn **_String_**, **_int_** en **_boolean_**.

Wanneer we een data type toekennen aan een variabele of enkel aangeven dat een bepaalde variabele bestaat, wordt dit een **variabele declaratie** genoemd. Bij een variabele declaratie worden het datatype en de naam gespecificeerd (zonder dat hier nog een waarde aan wordt toegekend):

![image](images/image25.png)



## **Naamgeving**

Bij het aanmaken van variabelen is het heel belangrijk dat je goed let op de naamgeving. Wees daar heel specifiek in. Zie de volgende voorbeelden van twee personen met verschillende functies, waarbij de één Designer is en de ander een Developer.

Slechte naamgeving:

![image](images/image29.png)

Betere naamgeving:

![image](images/image11.png)



## **Variable Manipulation**

De waarde van een variabele kan je aanpassen en controleren op veel verschillende manieren. Dit doe je met **operators**. We zetten de verschillende soorten op een rijtje:



## **Arithmetic Operators**

Java kent vijf **Arithmetic operators** waarmee we de waarden van een variabele kunnen manipuleren. Vier ervan ben je wellicht al mee bekend: ‘+’, ‘-’, ‘*’ en ‘/’. De laatste zal je misschien nog niet kennen - dat is **de modulo operator %**



## **Unary Operators**

**Unary operators** worden gebruikt om de waarde van een operand te manipuleren. Een operand is een variabele/getal waarop een bepaalde berekening/bewerking kan worden uitgevoerd. Bij **a + 1** is zowel **a** als **1** een operand.

Unary houdt in dat er maar één waarde gebruikt wordt. Er zijn 5 verschillende Unary operators, waarvan de volgende vier belangrijk zijn om te onthouden

* stel x = 10. **minus** keert een waarde om: x = -x maakt x dus gelijk aan -10
* stel x = true. **not** draait een boolean om: x = !x maakt x false.
* **increment** en **decrement** veranderen een getalwaarde met respectievelijk 1 meer en 1 minder.



## **Compound Assignment Operators**

Het komt vaak voor dat je de waarde van een variabele moet veranderen. Dit kan je doen met behulp van de arithmetic operators zoals je eerder hebt geleerd. De syntax hiervoor kan echter nog korter met de **Compound Assignment operator**.

Deze operator doet twee dingen in één keer: Het voert een arithmetic operation uit en wijst opnieuw een waarde toe.



## **Relational, Equality & Logical Operators**

Java kent **Relational Operators** voor numerieke datatypes die _boolean_ (_true_ of _false_) vergelijkingen maken. Een statement dat gebruik maakt van deze operator resulteert in een boolean. Deze operators zijn:

* >	groter dan
* &lt;	kleiner dan
* >=	groter of gelijk aan
* &lt;=	kleiner of gelijk aan

Er bestaan ook **equality operators** die vergelijken of twee variabelen gelijk zijn aan elkaar of juist niet. Deze zijn:

* ==	gelijk aan
* !=	niet gelijk aan

Tenslotte heb je ook de **logical operators**: && en ||. Daarmee kan je meerdere relational operators combineren

* a > 5 && a &lt; 5 	a moet groter EN kleiner dan 5 zijn - dus altijd false
* a > 5 || a &lt; 5		a moet groter OF kleiner dan 5 zijn - dus altijd true



## **String Concatenation**

Hierboven heb je geleerd over de **+** operator. Diezelfde operator kan ook gebruikt worden om _Strings_ met elkaar te verbinden. Dit heet **String concatenation**. Oefen hier zelf ook mee! 

![image](images/image27.png)



# **Opdrachten Variables & Operators**

Primitive datatypes kent in totaal acht soorten: boolean, char en zes verschillende soorten getallen. Onderzoek de acht verschillende primitives en de non-primitive String datatypes nu eerst zelf voordat je verder gaat.

**byte** en **short** zijn vrij niche in gebruik, maar goed weten wanneer je welke van de andere vier wil gebruiken is belangrijk!

**Opdracht 1** - Wanneer gebruik je een **int,** **long, double** of **float**?

Non-primitive datatypes herken je aan het feit dat ze beginnen met een hoofdletter. Naast String maak je non-primitive datatypes zelf via de classes die je code gebruikt.

**Opdracht 2** - Probeer een String en een int bij elkaar op te tellen en print het resultaat in je console.

Stel, je moet een IT-systeem bouwen voor een gekke-katten-man die zijn katten bij wil houden. Gebruik hiervoor een nieuwe class - hoe je deze noemt mag je zelf bepalen, maar voor het gemak noemen wij onze katten-man **Ben**

Ben adopteert alle straatkatten die hij ziet. Daar mogen we hem absoluut niet in beperken!

**Opdracht 3** - Geef Ben een ‘_numberOfCats_’ met een waarde van 10. Print deze waarde in je console.

**Opdracht 4** - Ben besluit opeens om nog 5 katten in huis te halen. Pas de waarde aan en print deze in je console.

De dierenbescherming grijpt gelukkig in en zegt: “Voor zo’n huis is 4 katten het maximum!”. 

**Opdracht 5** - Print ‘_numberOfCats_’ % 4 in je terminal. Hoeveel katten houdt Ben over?

Neem de volgende code over:

![image](images/image9.png)


**Opdracht 6** - Vervang het bovenstaande teken ‘&lt;’ door alle vijf van de andere relational en equality operators, en print alle zes de resultaten in je console.

**Opdracht 7 - Strictly Typed**

Er wordt in IT onderscheid gemaakt tussen programmeertalen die **Strictly/Strongly Typed** zijn, en talen die **Loosely/Weakly Typed** zijn. Java is Strictly Typed - dit betekent dat je bij elke variabele in Java een datatype moet declareren. Bij Loosely Typed programmeertalen zoals JavaScript hoeft dit niet.

1. Wat is een voordeel van Strict Typing?
2. Wat is een voordeel van Weak Typing?



# **3 Modifiers & More**



## **Access Control Modifiers**

Java gebruikt zogenaamde **modifiers** om bepaalde eigenschappen van stukjes code te veranderen. Deze zijn te verdelen in **Access Control Modifiers** en **Non-Access Modifiers**.

De **Access Control Modifiers** zijn heel belangrijk om te begrijpen - die geven namelijk aan welke onderdelen van je applicatie van het betreffende stukje code gebruik mogen maken.



## **Non-Access Modifiers**

Zoals bij de vorige opdracht vermeld stond, zijn er ook enkele **Non-Access Modifiers**. Het grootste deel hiervan hoef je nog niet te kennen, maar de volgende twee wel:

* _Static_
* _Final_



## **.equals()**

Bij de voorgaande opdracht heb je gezien dat je equality operators kan toepassen op int data types. Dit kan je echter ook toepassen op een String. Een andere methode met een soortgelijke uitvoering, is de built-in method **.equals()**.

Een String is een object. Wanneer je objecten met elkaar wil vergelijken, is het sterk aangeraden om .equals() te gebruiken.

Het volgende voorbeeld laat zien, hoe we .equals() kunnen toepassen op het object String:

![image](images/image14.png)



## **String Methods**

De String class heeft een aantal zogeheten methods waarmee je data kan manipuleren. Om String te gebruiken, hoef je niks te importeren! Dat komt doordat het een onderdeel is van de java.lang package. Dat is de enige ingebouwde package die standaard bij elk project zit - andere ingebouwde packages moet je dus **wel** importeren!

Enkele String methods die veel worden gebruikt, zijn:

* _concat()_
* _indexOf()_
* _charAt()_
* _substring()_
* _toUpperCase()_
* _toLowerCase()_



# **Opdrachten Modifiers & More**

Als je onzeker bent over het antwoord van 1 van de vragen, bespreek het dan met je groepje. Komen jullie er samen niet uit? Vraag het dan aan je coach!

**Opdracht 1** - Noem de vier verschillende Access Control Modifiers en geef bij elke een korte beschrijving.

**Opdracht 2** - Kan je uitleggen waar je static en final voor zou gebruiken? En wat is het voordeel ervan als je dit doet?

**Opdracht 3** - Wanneer gebruik je .equals() en wanneer gebruik je ==?



# **4 Scope, methods en Constructors**



## **Scope & variable types**

Een ander woord voor **scope** is bereik. Een scope bepaalt de begrenzing van een variabele - tot hoever een variabele toegankelijk is. Als je een variabele buiten zijn scope gebruikt wordt, zal je code deze niet herkennen en dus ook niet werken. 

Scope wordt aangegeven met curly braces: **{  }**. Zie het voorbeeld hieronder:

![image](images/image17.png)

Java maakt onderscheid tussen 3 soorten scope voor variables:

* **Local** variables
* **Instance** variables
* **Class** variables (ook wel **Static** variables genoemd)

Wat voor soort variabele je gebruikt hangt (onder andere) af van de plek waar je hem declareert.  

* Local variables worden in een method aangemaakt en alleen daar gebruikt.
* Instance en Class/Static variables worden in de class scope aangemaakt.



## **Methods**

Je hebt eerder al opgezocht wat een object is. Een object (ook wel een instance genoemd) bevat een _field_ (state) en een **_method_**(gedrag). Fields bestaan uit data types die je eerder hebt onderzocht - nu gaan we methods wat nader bekijken.

Methods hebben naast een scope vaak ook een **return value**. Dit kan je zien als het antwoord op je vraag - meeste vragen hebben een antwoord, maar niet allemaal! Met de return waarde kan een method informatie uit zijn eigen scope “doorgeven” aan de scope erbuiten.

Net als variables kunnen methods gebruik maken van een aantal modifiers. Daarnaast **moet** elke non-Constructor method een return type aangeven. Zie het voorbeeld hieronder:

![image](images/image28.png)

Als een method geen return type heeft, is deze waarde _void_.



## **Parameters and Arguments**

Een method kan ook waardes accepteren waar een bepaalde taak op wordt uitgevoerd. Zo’n waarde heet een **parameter**.

![image](images/image19.png)

Een parameter kun je zien als een placeholder voor de actuele waarde die je doorgeeft aan een method. Deze actuele waarde wordt dan een **argument **genoemd.

![image](images/image31.png)

In het voorbeeld hierboven is de ‘someSeats’ het argument dat gebruikt wordt door de _reserveSeats()_ method.



## **Constructors**

Om een object te creëren (ook wel **class instantiëren** genoemd), heb je een **constructor** nodig. Dit is een speciale method die je aan het volgende kan herkennen:

* heeft altijd dezelfde naam als de class
* heeft geen return type
* begint als enige method met een hoofdletter

De code die je in een constructor zet, wordt uitgevoerd als er een nieuw object wordt aangemaakt. Zie het voorbeeld hieronder:

![image](images/image4.png)

![image](images/image21.png)

“Hello Person!” is natuurlijk een beetje onpersoonlijk. Als je hallo zegt tegen iemand (in dit geval Ben) wil je natuurlijk graag de naam erbij gebruiken. Met bovenstaande code lukt dit niet. Wil je zo’n effect in je code hebben, dan bereik je dat met het keyword **this!**



## **Who this?**

De **this** keyword wordt gebruikt in een method of een constructor en verwijst naar het huidige object. Het volgende voorbeeld laat zien wanneer er verwezen wordt naar de local variabele en wanneer naar de instance variabele:

![image](images/image16.png)



# **Opdrachten Scopes, methods & Constructors**

**Opdracht 1 **- Maak een nieuwe class Car en geef deze een field ‘_color’_. Zorg ervoor dat Car een constructor heeft die de kleur van je auto toewijst.

**Opdracht 2** - Print een Car object in de terminal.

Als het goed is, krijg je het volgende te zien als resultaat (in je eigen IDE heb je waarschijnlijk een andere code die volgt na _@_):

![image](images/image6.png)

Het eerste gedeelte "Car" verwijst naar de class, en het gedeelte "@65ab7765" verwijst naar de locatie van het object in je computergeheugen. Dit wordt ook wel het **memory address** genoemd.

**Opdracht 3** - Geef je Car een nieuwe method printColor() die de kleur van de auto in de terminal print en voer deze in je main() method uit.

_Sommige_ mensen geven hun auto ook een naam, maar meeste mensen doen dit niet. Als je zoiets wil bereiken moet je de method **overloaden**.

_Method overloading_ houdt in dat je een 2e method met dezelfde naam maakt - het onderscheid maak je door een verschil in parameters.

**Opdracht 4** - Overload je constructor. Geef als extra parameter de String ‘_name_’ voor je auto. Maak vervolgens 2 auto’s aan in je main() - eentje met en eentje zonder naam.

Als je een nieuwe auto maakt zonder kleur of naam krijg je nu een error. Als je zelf geen constructor aanmaakt, doet Java dat namelijk automatisch voor je. Deze constructor heeft geen argumenten en doet verder niks - de zogeheten **no-args constructor**.

Wanneer je je eigen constructors aanmaakt zal Java dit dus niet doen. 

**Opdracht 5** - Maak een derde constructor zonder argumenten. Zorg ervoor dat je auto’s een standaard kleur krijgen als deze niet is meegegeven. Maak nu een derde auto aan in je main() op deze manier, en print van alle drie je auto’s de kleur in je terminal.

Bij opdracht 2 heb je gezien dat er iets raars uitkomt als je een auto in de terminal print. Maar wat nou als je op dat punt liever een simpele tekst met bijvoorbeeld de kleur wil printen? Het antwoord zit in het gebruiken van een toString() method.

**Opdracht 6** - Geef je Car class een method toString() met een **return value** “Dit is een &lt;kleur> auto”.

**Opdracht 7** - Voer de toString() method van een auto uit in je main() en print het resultaat in je terminal. Print daarnaast ook het hele auto object. 



# **5 Lists & Arrays**

Even terug naar Ben, onze favoriete katten-verzamelaar. Eerder hebben we bijgehouden hoeveel dat er nou precies waren, maar nu willen we ze graag allemaal een naam geven. Een aparte field maken voor elke kat is natuurlijk overdreven, maar hoe pak je dat dan wel aan?

Daarvoor bestaan er in Java meerdere manieren om data in een soort lijst of collectie te groeperen. We beginnen met de belangrijkste twee; **Arrays & ArrayLists**



## **Arrays**

Je hebt geleerd dat je individuele stukjes data kan bewaren in een variabele. Maar wat gebeurt er als je een groep/lijst van data wil bewaren? Een lijst van studenten in een klas is hier een goed voorbeeld van. Om dit te doen kan je gebruik maken van een **array**. Je kan een array makkelijk herkennen aan de brackets: **[ ]**.

Een array is een lijst met een **vooraf bepaalde hoeveelheid** waarden, allemaal van hetzelfde data type. Dat klinkt misschien onhandig, maar door deze limitaties kan Java ontzettend efficiënt zijn in het gebruik van computer-geheugen.

Om toegang te krijgen tot een bepaald element in een array, gebruik je hiervoor **index**. De index is een getal dat aangeeft op welke plek in het array een bepaald item staat. Iedere index correspondeert met een element in een array en begint altijd op **0**.

![image](images/image8.png)

Dit is een voorbeeld van hoe je Arrays kan initialiseren (zie regel 3):

![image](images/image22.png)

Om toegang te krijgen tot een bepaald element in een array gebruik je de brackets [ ] zoals dat te zien is op regel 4 in het voorbeeld. 



## **Multi-dimensional Array**

Met Java kan je ook gebruik maken van arrays in arrays. Java noemt deze multi-dimensional Arrays. Dit ziet er als volgt uit:

![image](images/image2.png)



## **ArrayList**

Je kan de grootte van een Java Array dus niet aanpassen - en dus ook geen items toevoegen of verwijderen uit de lijst. Als je dit wel wil doen, moet je gebruik maken van een **_ArrayList_**. 

Voordat je een ArrayList kan gebruiken, moet je dat eerst in je eigen code aangeven. Dit doe je door de ArrayList code te importeren. 

Voorbeeld van een ArrayList:

![image](images/image35.png)

Je importeert de code van een ArrayList dus uit de _java.util_ package.



# **Opdrachten Lists & Arrays**

**Opdracht 1** - Maak een String[] _cats_ met vier katten. Print alle vier de katten in je terminal.

**Opdracht 2** - Print de lengte van _cats_.

**Opdracht 3** - Sorteer _cats_ in één binnenkat en drie buitenkatten met een multi-dimensional array _sortedCats_, en print vervolgens de lengte van _sortedCats_.

**Opdracht 4** - Maak nu een **ArrayList&lt;String>** cats met vier katten.

**Opdracht 5** - Je verhuist naar de binnenstad en moet helaas afscheid nemen van je drie buitenkatten. Pas dit toe in je cats ArrayList.

**Opdracht 6** - Als je de hoeveelheid items in een ArrayList wil weten, moet je de method size() gebruiken. Print cats.size() in de terminal.

Misschien vraag je je af waarom een ArrayList niet gewoon een length property kan gebruiken. Dit komt omdat een ArrayList met een bepaalde standaard-grootte wordt aangemaakt - als deze maat wordt overschreden groeit je ArrayList automatisch.

**Opdracht 7** - Wat is deze standaardmaat van een ArrayList en hoeveel groeit deze als hij eroverheen gaat?

Je kan ook zelf de begin-maat van een ArrayList aangeven. Dit is een goede manier om je code efficiënter te maken.

**Opdracht 8** - Verander de begin-grootte van je ArrayList cats naar vier.



# **6 Loops & Conditions**

Een **Loop** is een tool waarmee hetzelfde codeblok herhaald wordt totdat er aan een bepaalde conditie is voldaan. Een loop kan je vergelijken met een rotonde. Je rijdt de rotonde op en rijdt er pas af wanneer dat nodig is.

Maar hoe weet je code dan wanneer dat nodig is? Dat doe je door een bepaalde **conditie** uit te schrijven. Dit zijn fundamentele manieren om beslissingen te maken die in elke programmeertaal (bijna) hetzelfde werken.


## **Conditions**

Conditions zijn er in meerdere soorten, maar het grootste onderscheid wordt gemaakt tussen variaties van **if/else** en **switch/case**. Goed gebruik van **relational, equality & logical operators** is bij beide soorten essentieel.


## **If/Else**

Deze vorm van condities zijn vrij goed te vertalen naar gesproken voorwaarden, maar net als in het echt zijn er een aantal variaties van:



1. Als (conditie) dan (actie)
2. Als (conditie) dan (actie)
    * Anders (actie)
3. Als (conditie) dan (actie)
    * Anders als (conditie) dan (actie)
        * Anders (actie)

Of anders gezegd: 



1. _if(...)_
2. _if(...) else_
3. _if(...) else if(...) else_

Je kan zoveel _else if()_ gebruiken als je wil, en ook het gebruik van een laatste onvoorwaardelijke else optie is niet verplicht. Bijvoorbeeld:

![image](images/image33.png)



## **Switch/Case**

Je kan je misschien voorstellen dat een if/else if/else if etc. al snel erg uit de hand kan lopen. Daarom kan je ook de Switch/Case optie gebruiken. Hierbij heb je maar 1 conditie in de Switch, en worden alle mogelijke uitkomsten vervolgens vergeleken.

Een voorbeeld van een switch/case kan je hieronder zien:

![image](images/image15.png)

Naast de “case” bestaat er dus ook een “default” optie. Deze kan je vergelijken met de “else” in een if/else blok. Toch zijn deze niet helemaal hetzelfde!

Als je het bovenstaande voorbeeld namaakt, zal je namelijk iets aparts opvallen - zowel de eerste case als de default worden **allebei** in je console geprint. Een switch/case stopt niet als er een “match” gevonden is - hij gaat uit zichzelf door met elke case die van toepassing is, en dus ook de default!

Als je dit niet wil hebben, moet je gebruikmaken van het **break** keyword. Zie hieronder:

![image](images/image13.png)



## **Loops**

Ook loops zijn er in verschillende vormen en maten. Net zoals bij conditions lijken deze soorten vrij veel op elkaar, maar toch hebben ze elk een eigen toepassing.

Java kent drie typen loops:

* **while** loops
* **for** loops
* **for-each** loops

We behandelen ze een voor een.



## **while & do … while**

Een **while loop** voert taken voor een onbepaalde tijd uit, zolang de conditie als “true” wordt gelezen. Als je deze conditie nooit verandert kan je programma dus vastraken in een zogeheten _infinite loop_! Zie hieronder:

![image](images/image10.png)

Als je een loop wil stoppen, kan je dit op twee  manieren doen; je kan zorgen dat je conditie uiteindelijk vanzelf false wordt, of je kan zelf het keyword break gebruiken, net als bij conditions!

Tenslotte is er ook nog de **do…while** loop. Deze voert ongeacht de conditie het code block een keer uit, en kijkt daarna of hij het herhaalt aan de hand van de conditie. Zie een voorbeeld met een break hieronder:

![image](images/image30.png)



## **for**

Een **for loop** is goed om te gebruiken als je van tevoren weet hoe vaak je de code wil draaien. Voor een for loop heb je 3 statements nodig. Kijk naar onderstaande voorbeeld en probeer eerst zelf te begrijpen wat er gebeurt:

![image](images/image7.png)

Om een for loop te maken heb je dus 3 statements nodig. In dit voorbeeld zijn die statements als volgt:

* int i = 0;
* i &lt; 10;
* i++

Het eerste statement wordt uitgevoerd voordat de loop begint. **i** staat hier voor **iterator** - standaard begint deze op nul, maar je kan dit ook op een andere waarde laten beginnen.

De tweede statement wordt _**voor** elke iteratie_ van de loop gecontroleerd - is het true, dan wordt het uitgevoerd.

De derde statement wordt _**na** elke iteratie_ van de loop uitgevoerd - i++ is hierbij vrij standaard, maar je kan bijvoorbeeld ook i– doen als je juist van een hoog getal aftelt.



## **for-each**

Een **for-each loop** gaat door elk item in o.a. Arrays & ArrayLists heen en doet iets met elk individueel item. Daarvoor heeft het natuurlijk ook een naam nodig om naar die aparte items te verwijzen. Zie hieronder:

![image](images/image34.png)

Hierbij is cats dus het array waar de for-each loop doorheen gaat. De individuele items/katten heten in elke iteratie van de loop ‘_couch\_destroyer_’.

Vaak zie je hier een ietwat lastigere ‘enkelvoud : meervoud’ combinatie. In dit geval zou dat dan ‘String cat : cats’ zijn.



# **Opdrachten Loops & Conditions**

**Opdracht 1** - If/Else of Switch/Case?

Maak een “int amount = 27;” en toets deze met een if/else blok. 

1. Als het getal deelbaar is door 3, print dit in je console.

Je kan ook een if statement in een ander if statement stoppen. Dit heet een nested if statement.

2. Als het getal deelbaar is door 3, gebruik dan een nested if statement om te meten of het getal NIET deelbaar is door 2.

Je kan in plaats van een nested if statement ook de logical operators gebruiken, om in de eerste conditie 2 voorwaarden te stellen ipv 1.

3. Herschrijf de vorige opdracht met de && operator in plaats van een nested if.

Een else if(...) of else schrijven is dus optioneel. Het is wel belangrijk dat je de volgorde hiervan goed snapt.

4. Breid de vorige opdracht uit met een else if (amount &lt; 30) die dit in je console print, en een else die ook iets naar keuze in je console print. Kom je ooit bij deze else uit?
5. Maak de vorige opdracht na als een Switch/Case. Waarom lukt dit niet goed?

Een switch/case is dus niet perfect geschikt voor sommige use cases, zoals wiskundige vergelijkingen (amount &lt; 30) en nested if statements. 

Daar staat tegenover dat een switch/case veel sneller is dan een groot if/else if/else blok, en dus ook de voorkeur heeft wanneer je dit WEL kan doen.

6. Maak een switch/case die een String dayOfTheWeek leest, en een leuke message in de terminal print als dayOfTheWeek gelijk is aan zaterdag of zondag.
7. Wat gebeurt er als je case “Friday”: zonder break voor een andere case zet?
8. Maak een aparte case voor maandagen en een default voor alle andere dagen in de week. Probeer je switch/case vervolgens met elke dag van de week!

**Opdracht 2** - PEMDAS practice

Een foutje bij conditionals zit in een klein hoekje - daarom is het heel belangrijk dat je goed bekend bent met de volgorde en voorwaarden van conditions.

Bij het voorbeeld hieronder staan een aantal ingewikkelde _expressions_. Lees onderstaande code goed door en **schrijf eerst je verwachtingen op** voordat je verder gaat:

![image](images/image23.png)

1. Wat komt er uit bij elke van deze drie variabelen?
2. Voldoet dit voor elke aan je verwachtingen?
3. Beschrijf voor elke van de drie **in mensentaal** wat er precies in de conditie staat, en in welke volgorde dit geëvalueerd wordt.

**Opdracht 3** - Basic Loops

We beginnen met while loops:

1. Wat gebeurt er met een loop als je “while (true) { /* code */ }” gebruikt?

En gaan verder met for loops:

2. Gebruik een for loop om 1 t/m 10 in je terminal te printen.

Het keyword break heb je eerder gezien bij condities. Deze is ook bij loops te gebruiken op dezelfde manier. Daarnaast is er nog een vergelijkbaar keyword die je bij een loop kan inzetten - **continue**

3. Print alle even getallen onder de 10 in je terminal. Maak hierbij gebruik van _continue_.

Je kan loops net als conditions in elkaar nesten. Let wel op dat dit een groot effect kan hebben op de snelheid van je programma!

4. Bouw een nieuwe for loop om je bestaande for loop heen. Zorg dat deze buitenste loop 3 keer wordt uitgevoerd.

Nu wordt er driemaal 1 t/m 10 in je terminal geprint.

5. Zorg ervoor dat dit eerst 1 t/m 10 is als vanouds, vervolgens het dubbele en tenslotte het viervoudige. Anders gezegd moet het volgende geprint worden:
    * 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    * 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
    * 4, 8, 12, 16, 20, 24, 28, 32, 36, 40

**Opdracht 4** - Advanced Loops

Nu gaan we als oefening de fibonacci-reeks namaken. Begin met een ArrayList en voeg de eerste 2 getallen toe (0 en 1).

1. Gebruik een for-loop om de eerste 50 getallen van deze reeks aan de ArrayList toe te voegen. Print vervolgens deze 50 getallen een voor een in je terminal.

Je kan loops ook gebruiken om sorteer-methodes toe te passen. Er zijn natuurlijk talloze manieren om een array te sorteren - wij gaan nu oefenen met de zogeheten _[bubblesort](https://nl.wikipedia.org/wiki/Bubblesort)_.

2. Begin met het Array {2, 7, 5, 10, 4, 9, 3, 1, 8, 6} en sorteer deze met bubblesort. Print daarna je array in de terminal om dit te controleren. Zie het visuele voorbeeld hieronder:

![image](images/image26.gif)



# **Java Zoo**

Nu gaan we een realistisch dierentuin-systeem nabouwen. Gebruik voor deze opdracht net als bij de CSS eindopdracht een aparte branch! Ook hierbij is een pull request met review van een peer verplicht.

Het systeem van de dierentuin gaat het volgende bijhouden:

* Een lijst met alle dieren in de dierentuin
* Hoeveel dagen het systeem al draait
* De naam van elk dier
* De omgeving van elke diersoort.
* Hoeveel dagen geleden het dier voor het laatst gevoerd is?
* Per dag een nieuwe lijst met dieren die gevoerd moeten worden.

Gebruik de volgende classes:

* Bird
    * Vogels worden 1x per 2 dagen gevoerd.
* Reptile
    * Reptielen worden 1x per week gevoerd.
* Cat
    * Katten worden dagelijks gevoerd.
* Zoo - je Zoo class heeft de volgende methods
    * _add()_ - voegt een dier aan de dierentuin toe
    * _remove()_ - haalt een dier uit de dierentuin weg
    * _display()_ - toont alle dieren in de dierentuin
    * _newDay()_ - doet het volgende:
        * Print in de terminal hoeveel dagen het systeem al draait
        * Voegt een nieuwe Bird toe aan je Zoo.
        * Print de dieren die vandaag gevoerd moeten worden



## **Bonus - Animal Birthdays**

Een echt systeem moet natuurlijk goed de datum bijhouden. Als je deze opdracht extra uitdagend wil maken, moet je dit zelf ook kunnen. Onderzoek daarvoor eerst de LocalDate class. De documentatie ervan kan je [hier](https://docs.oracle.com/javase/8/docs/api/java/time/LocalDate.html) vinden.

Zorg nu voor het volgende:

* Elk dier heeft een eigen verjaardag als LocalDate
* De dierentuin houdt de dagen ook bij via een LocalDate.
* Een nieuwe method _getBirthdays()_ die een LocalDate als parameter neemt en de jarige dieren van die dag in de terminal print.
    * Als er geen dieren jarig zijn, wordt dit ook geprint.
* De _newDay()_ method roept nu ook elke dag de _getBirthdays()_ method aan
* Voer in je _main()_ method _getBirthdays()_ uit voor elke verjaardag van de dieren in je dierentuin.



# **Java Object Oriented**

De belangrijkste concepten die elke OOP-taal gebruikt worden ook wel de **Four Pillars of Object Oriented Programming** genoemd. Het gaat dan over de volgende principes:

* **Encapsulation**
* **Inheritance**
* **Polymorphism**
* **Abstraction**

Ook Java implementeert deze principes natuurlijk. Wat deze principes precies inhouden en hoe Java hiermee omgaat gaan we nu onderzoeken. 

# **1 Encapsulation**

**Encapsulation** is het idee dat elk Object verantwoordelijk is voor zijn eigen data. Dit soort scheiding van verantwoordelijkheid maakt het makkelijker om na te gaan wanneer er iets aan een Object veranderd wordt.

Java gebruikt Encapsulation door middel van **private variables** en **Getters/Setters**. Dit houdt in dat de variabelen van een Object alleen gelezen of veranderd kunnen worden door methods van datzelfde Object. Deze methods worden dus **_getters_** en **_setters_** genoemd.

Het gebruik van getters en setters is niet verplicht, maar wordt dus eigenlijk wel verwacht van elke Java developer. Dit komt omdat het bepaalde fouten kan helpen voorkomen.



# **Opdrachten Encapsulation**

Het gebruik van getters/setters is standaard voor elke class. Maar snap je ook waarom?

**Opdracht 1** - Maak een class Person en een class EncapsulatedPerson, beiden met fields name en age. Demonstreer vervolgens in je main() method een voordeel van EncapsulatedPerson ten opzichte van Person.

Getters/Setters maken is dus net als een constructor maken iets wat je erg vaak gaat doen

**Opdracht 2** - Zoek en gebruik de shortcuts voor getters/setters en een constructor in je IDE



# **2&3 Inheritance & Polymorphism**



## **Inheritance - Subclasses en Superclasses**

Bij de opdracht van de dierentuin heb je veel code herhaaldelijk geschreven - alle Classes die je voor dieren gebruikt hebben bijvoorbeeld een naam nodig. Drie keer dezelfde code uitschrijven schendt natuurlijk het **DRY** principe - **Don’t Repeat Yourself**!

Om dit soort situaties makkelijker te maken is Inheritance uitgevonden. Je bent dit bij HTML/CSS al een beetje tegengekomen, maar OOP talen zoals Java nemen dit super serieus.

Java doet dit via **subclasses** en **superclasses**. Dat ziet er als volgt uit

Hiermee geef je dus aan dat je class Bear een _subclass_ is van je class Animal. Andersom heet dit een **_superclass_** - Animal is hier dus een _superclass_ van Bear.

Net zoals bij HTML de child elementen bepaalde properties overnemen van de parent, nemen de subclasses methods en fields over van de superclass. Hoe dit precies in zijn werk gaat gaan we in de volgende opdracht verder op in.



## **Polymorphism - Overriding & Overloading**

_Polymorphism_ betekent dat een Object of method meerdere dingen tegelijkertijd kan zijn. Een beer heeft beren-gedrag en beren-informatie, maar kan zich tegelijkertijd ook als een "standaard" dier laten behandelen.

Ook bij methods heb je polymorphism - **_method overloading_** heb je eerder al gebruikt om meerdere constructors aan te maken. Dit kan je ook buiten constructors toepassen - zie het voorbeeld hieronder:

![image](images/image3.png)

Weer een ander voorbeeld van polymorphism is **_method overriding_**. Dit houdt in dat je een method van een superclass anders gebruikt in de subclass.



# **Opdrachten Inheritance & Polymorphism**

We gaan een systeem maken voor een bos vol met dieren. Deze dieren doen allemaal hetzelfde - eten, vechten, en slapen. Hoe ze dat doen verschilt natuurlijk per diersoort!

**Opdracht 1** - Forest Animals

Maak een class ForestAnimal met het volgende:

* feed() method.
* fight(ForestAnimal enemy) method.
* sleep() method. 
* de boolean fields wounded = false en dead = false
* een constructor die “An animal has entered the forest” in je console print.

Alleen wat output in je console is al voldoende om te beginnen.

**Opdracht 2** - Bearly sleeping

Beren zijn natuurlijk niet zoals normale bosdieren - ze komen in 2 soorten (black of grizzly), eten soms andere bosdieren en houden soms een winterslaap.

1. Maak een nieuwe class Bear als subclass van ForestAnimal. Geef je subclass een String type.

Nu heeft je Bear class ook een constructor nodig. Je kan dit net zo uitschrijven als je bij de  ForestAnimal constructor hebt gedaan, maar dat is dan alweer niet volgens het DRY principe.

Je kan ook **_super()_** gebruiken. Super verwijst naar de superclass - super() verwijst dan ook altijd naar de constructor van de superclass.

2. Maak een constructor voor je class Bear. Deze moet de variabele type als parameter gebruiken.

Beren slapen anders dan het gemiddelde bosdier - namelijk gemiddeld vier uur in plaats van acht. Daarnaast  

3. Override de sleep() method in je Bear class.
4. Maak een nieuwe ForestAnimal carebear = new Bear(“Grizzly”); in je main method. Laat je beer vervolgens slapen met diens sleep() method. Welke method zie je?

**Opdracht 3** - Ik zag 2 beren instantiëren

Hiervoor heb je geleerd hoe je een Bear kan aanmaken met type ForestAnimal. Nu gaan we het nog lastiger maken. Begin met het overnemen van onderstaande voorbeeld:

![image](images/image1.png)

1. Maak een String type = “critter” bij je ForestAnimal.
2. Maak een method printType() op je Bear class die zowel de eigen type als de super type print.

Hiermee kan je zien dat elke Bear dus ook nog weet dat het een ForestAnimal is, met de bijbehorende fields. IS-A Bear && IS-A ForestAnimal -> polymorphism!

Ook de method sleep() die je in de Bear class override zou je met super.sleep() kunnen aanroepen! Let op dat super alleen vanuit de Bear class gebruikt kan worden hiervoor!

Een term die je bij het overriden en overloaden vaker tegen kan komen is de method signature.

3. Zoek op wat een method signature precies betekent.



# **4 Abstraction - Abstract Classes & Interfaces**

**Abstraction** is het opzettelijk weglaten van concrete details. Net zoals je in een korte ochtendvergadering niet alles van je collega’s wil weten, is het voor een computer ook handig om de details soms te laten totdat ze nodig zijn. **_Als je code abstract maakt, beschrijf je dus alleen WAT er gebeurt, en niet HOE het gebeurt._**



## **Abstract Classes**

Het keyword **abstract** wordt gebruikt gebruikt om aan te geven dat een method of class abstract is. Een abstract class kan je niet instantiëren. Zodra een method in een class abstract is, is de hele class abstract.

Je vraagt je misschien af waarom dit wenselijk is. Stel dat je je ForestAnimal class naar veel meer dieren extend - alle mogelijke dieren in het bos. Het werkt dan misschien heel goed als een soort template, maar je wil eigenlijk nooit een puur ForestAnimal object aanmaken - het behoort altijd wel tot een diersoort van een van je subclasses.

Daarnaast laat het ook de details over aan elke class zelf. Met een abstract method sleep() hoef je dan niet meer een “standaard slaaptijd” aan te geven. je geeft dan aan dat elke subclass van ForestAnimal een method _sleep()_ zal hebben - hoe lang ze slapen mag elke class dan zelf bepalen.



## **Interfaces**

**Abstraction** kan je dus zien als een soort contract tussen een abstract superclass en een subclass. De superclass daarbij geeft aan welke regels de subclass zich aan moet houden.

Soms wil je dat je class zich aan meerdere verschillende contracten kan houden. Met alleen de superclass is dit een probleem - Java laat maar 1 superclass per subclass toe, en daarmee dus eigenlijk 1 set regels per superclass.

Om dit op te lossen maakt Java gebruik van **_Interfaces_**. Net zoals je het gebruik van een superclass aangeeft met het keyword _extends_, geef je het gebruik van een interface aan met het keyword _implements_. Dit ziet er zo uit:

![image](images/image36.png)

Elke class die nu Carnivore implementeert houdt zich aan de regels - ze **moeten** een eigen versie van Carnivore implementeren.  Dat kan er bijvoorbeeld zo uitzien:

![image](images/image32.png)

Een class geeft aan dat het een interface gebruikt met het keyword **implements:**

![image](images/image20.png)


Interfaces zitten overal en worden ook heel erg veel gebruikt als type. Een van de bekendste is de List Interface. Alle classes die zichzelf “List” mogen noemen kunnen bijvoorbeeld de methods _add()_, _get()_, _remove()_ en _size()_ gebruiken.

Er zijn natuurlijk veel onderwerpen die we behandelen in deze periode, maar Interfaces zijn wel heel erg cruciaal. Zorg dat je ze goed snapt - dat zal je in de toekomst veel helpen.



# **Opdrachten Abstraction**

**Opdracht 1** - Implementing

1. Maak je ForestAnimal class abstract door de method sleep() abstract te maken.
2. Maak een nieuwe class Wolf die ForestAnimal extend.

Hoeveel een wolf slaapt is afhankelijk van zijn energieniveau - bij hogere energie slaapt hij korter, als hij weinig eet slaapt hij langer.

3. Geef je ForestAnimal class een int energy. Implementeer de sleep() method zodat deze field met energieniveau van je wolf er invloed op heeft.
4. Zorg ervoor dat je Wolf een feed() method heeft die een int energy returned.

**Opdracht 2** - Interfacing the Forest

1. Een bos heeft natuurlijk ook herten en konijnen! Maak daar classes voor.

Je wil misschien een categorie maken voor dit soort dieren - zodat je weet of het een prooidier is of niet. Je kan misschien een class ForestPrey als subclass van ForestAnimal en superclass van konijn/hert maken, maar dat is niet futureproof. Volgende week wil je baas namelijk de Salmon met superclass Fish aan het ecosysteem toevoegen, zodat de beren die ook kunnen eten!

2. Maak een interface Prey en twee subclasses van ForestAnimal die dit interface implementeren, zoals Rabbit en Deer.

Misschien verwacht je dat prooidieren kunnen vluchten:

3. Geef je Prey interface een method runsForItsLife() en implementeer dit bij je Prey classes.

Nu kan je er op rekenen dat een Prey zich altijd zo zal gedragen! Maar wat nou als elke Prey class hetzelfde gaat doen? Dan zit je alsnog dezelfde code meerdere keren uit te schrijven! Om dit te voorkomen kan je default interface methods gebruiken.

4. Maak een interface Carnivore. Geef je Carnivore EN Prey interface een method getName().
5. Zorg ervoor dat je interface Carnivore een default method hunt(Prey prey) heeft. Deze default method print de naam van het roofdier EN de naam van de prooi, met wat passende tekst ertussenin.

Tot slot zijn er nog 2 belangrijke concepten om te onderzoeken m.b.t. Interfaces:

1. Een Interface heeft meestal geen fields, maar het kan wel - onder voorwaarden. Wat voor modifiers **moet** een interface field hebben?
2. Wat is een **_marker interface_**? Geef hier een voorbeeld van.