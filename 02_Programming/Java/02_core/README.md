# **Java Core**



## **Introductie**

Deze handout bestaat uit 5 hoofdstukken. Het eerste hoofdstuk zal verder ingaan op een vrij brede verzameling aan verschillende onderwerpen. Dit hoofdstuk heeft zelf geen opdrachten, maar je zal delen ervan wel in de opdrachten van latere hoofdstukken tegenkomen.

Als tweede van de drie modules over Java zal dit document minder directe uitleg bevatten. Hier en daar zullen we nog wel naar wat goede uitleg linken, maar er wordt ook wel een grotere mate van verantwoordelijkheid van de deelnemer verwacht. 

Staat er een term die je nog niet kent dik of schuingedrukt? Zoek het zelf ook even op. Staat er een voorbeeld? Maak het zelf ook even na. 

En wat gaan we dan precies in deze “Core” handout behandelen? Dat kan je hieronder bij de inhoudsopgave bekijken.




# **Inhoud**

1. Built-in tricks & other bits
    * Data types… again?
    * Common Built-in Classes
    * Type Casting
    * varargs
    * Nested/Inner Classes
2. Errors & Exceptions
3. Collections & Generics
4. Functional Java
    * Functional interfaces
    * Lambda Expressions
    * Stream API
5. Enums & Annotations




# **1. Built-in tricks & other bits**



## **Data Types… again?**

Je hebt eerder geleerd dat Java twee categorieën data types kent: **Primitive data types** en **Non-primitive data types**. Het kernverschil is dat primitive data types ingebouwd/voorgedefinieerd zijn in de taal zelf - non-primitives zijn gemaakt door programmeurs. 

Als je zelf een class aanmaakt, is dat een **User-defined data type**. Er zijn ook non-primitives die niet user-defined zijn. Veel hiervan heb je stiekem al zitten gebruiken, zoals String, Array, ArrayList en misschien zelfs Object!

Je kan een non-primitive datatype herkennen aan de hoofdletter aan het begin - **_alleen primitive datatypes beginnen met een kleine letter_**. Non-primitive data types worden ook wel _reference variables_ of _object references_ genoemd. 

Soms zie je toch een _Boolean_ of _Integer_ gebruikt worden ipv _boolean_ of _int_. Dit zijn zogeheten **Wrapper Classes**! Deze classes voegen wat extra functionaliteit toe aan de variabelen via ingebouwde methods. 

![img](images/image32.png)

Moet je dan altijd een wrapper class gebruiken ipv een primitive? Nee, want Java’s compiler zet automatisch jouw primitives om naar de bijbehorende wrapper class  Dit proces wordt ook wel _autoboxing_ genoemd.

De makers van Java hebben dus al veel werk verzet om jou van ingebouwde classes te voorzien! Maar daar staat tegenover dat Java veel van dit soort ingebouwde onderdelen heeft, en deze al meer dan 20 jaar aan het uitbreiden is. Dat maakt het natuurlijk een uitdaging om te leren.

Je zal vaak een nieuw onderdeel van Java pas voor het eerst onderzoeken en/of gebruiken op het moment dat je het nodig hebt. Daarom is het heel belangrijk om jezelf wegwijs te maken met online resources met uitleg, of nog beter - de officiële documentatie.



## **Common Built-in Classes**

Java heeft veel ingebouwde packages en classes. Al deze voorverpakte onderdelen hebben een eigen _use case_. Soms komen er in latere versies van Java betere oplossingen uit voor dezelfde use case! 

Daarom categoriseren wij deze classes per use case/probleem dat ze op willen lossen. We kijken hieronder even naar het volgende;

* User Input (in de terminal)
* File Input/Output
* Date/Time
* Timers


### **User Input**

Hiervoor gebruik je de Scanner class. Een goede tip bij het gebruiken van de Scanner is om **_hem altijd dicht te doen als je klaar bent!_** Hiervoor kan je de method _close()_ gebruiken. [Hier](https://www.youtube.com/watch?v=bI7kQq9cjmQ) is een goed filmpje met uitleg over deze class.


### **File Input/Output**

Hiervoor zijn veel verschillende oplossingen. 

* Eerst had je alleen de _java.io_ package met diens **File** class. Deze miste wat functionaliteit, maar wordt desondanks nog steeds gebruikt.
* In een latere versie volgde de _java.nio_ package. Dit staat voor “New File I/O”.
* Een derde update voegde meer classes aan deze package toe.

Zo zie je dat ook Oracle (de maker van Java) soms aan minder dan ideale naamgeving / version control doet. Al deze packages en verschillende classes zijn best veel om te benoemen, maar de makkelijkste / beste in gebruik zijn **_BufferedReader_** en **_FileReader_** voor input, en **_BufferedWriter_** en **_FileWriter_** voor output. [Hier](https://www.youtube.com/watch?v=ScUJx4aWRi0) een goed filmpje met uitleg.


### **Date/Time**

Oudere versies van Java gebruikten de Date, Calendar en Timezone classes uit de java.util package - deze moet je wel enigszins kennen omdat je ze nog best wel eens tegen kan komen.

Sinds Java 8 bestaat er een betere oplossing, via de java.util.time package. Deze heeft een stuk meer classes; _LocalDate_, _LocalTime_, _OffsetDateTime_, _ZonedDateTime_ en nog veel meer. Gelukkig zijn ze stuk voor stuk niet zo heel lastig om te leren - vooral **_LocalDate_** en varianten ervan verwachten wij dat je tegen zal komen.


### **Timers**


De _java.util_ package heeft ook een Timer class. Deze Timer class maakt gebruik van een TimerTask class die code na een bepaalde lengte van tijd kan uitvoeren. 



## **Type Casting**

Type casting is het veranderen van de datatype van een variabele. Dit kan je doen op 2 manieren die allemaal lekker verwarrende namen gebruiken voor dezelfde 2 dingen.

* Widening of Implicit Type Casting 
* Narrowing of Explicit Type Casting


### **Implicit/Widening Type Casting**

Dit wordt ook wel **Downcasting** genoemd. Het is impliciet omdat je dit eigenlijk al hebt gezien - bij het hoofdstuk over Polymorphisme. Zie het voorbeeld hieronder:

![img](images/image12.png)


### **Explicit/Narrowing Type Casting**

Dit wordt ook wel **Upcasting** genoemd. Expliciet omdat je het echt zelf moet doen. Dit ziet er als volgt uit: 

![img](images/image1.png)

Downcasting kan je meestal zonder problemen doen, maar upcasten moet je mee oppassen. Niet alleen kan je hiermee onbedoeld afronden zoals in het voorbeeld hierboven, maar je kan ook makkelijk je applicatie mee crashen. Dit ga je in een later hoofdstuk meer onderzoeken.

Er zijn nog 2 onderwerpen die we in dit hoofdstuk behandelen: **_varargs_** en **_Nested Classes_**. Dit zijn allebei vrij weinig gebruikte onderdelen, maar het kan goed zijn dat je deze in complexere code wel eens ziet staan. Daarom gaan we ze wel benoemen 



## **Varargs**

Stel: je wil 2, 3 of 4 argumenten aan een method doorgeven om te printen. Je kan de method meerdere keren overloaden - een versie met 2, een versie met 3, een versie met 4.

Dit is natuurlijk helemaal niet schaalbaar, en leidt tot ontzettend veel code voor iets vrij simpels. Dit kan ook anders met **_varargs_**. Varargs is een afkorting voor _variable arguments_. 

![img](images/image17.png)

Toch zal je varargs in het echt niet veel tegenkomen. Ze komen met een hele eigen set aan problemen, terwijl er voor dit soort situaties ook andere oplossingen bestaan - “_int[] nums_” of “_ArrayList&lt;Integer> nums_” bijvoorbeeld.



## **Nested/Inner Classes**

Je kan in Java ook classes nesten in andere classes. De use case hiervoor is vrij niche, dus je hoeft niet veel tijd te besteden aan het leren hiervan, maar je zal het hier en daar wel tegenkomen. 

Deze classes komen in 4 verschillende soorten:

* Inner Class
* Static Inner Class
* Local/Method Inner Class
* Anonymous Inner Class

De eerste 3 zijn “standaard” classes, maar dan gedeclareerd op een “abnormale” plek:

* In een andere class
* In een andere class, maar dan static (dus gedeeld met alle Objects van die class)
* In een method van een andere class

Deze drie hoef je niet verder te onderzoeken. De laatste (**_Anonymous Inner Class_**) heeft een use case die je misschien iets sneller wel zal tegenkomen; je kan er “on the spot” een class mee extenden of interface mee implementeren. Als je een class echt maar 1x in je code gebruikt, dan is dit wat makkelijker dan een hele eigen class ervoor aan te maken.

Wil je hier alsnog meer over weten? Dan is [dit geeksforgeeks artikel](https://www.geeksforgeeks.org/inner-class-java/?ref=lbp) een goede plek om te beginnen.




# **2. Errors & Exceptions**

Soms gebeurt er in je code iets onverwachts. Dit komt altijd door een van drie redenen:

* **Syntax error** - je hebt code verkeerd geschreven 
* **Logica error** - je hebt code goed geschreven, maar de uitvoering leidt tot een onbedoeld resultaat
* **Runtime error** - er crashte iets in je code tijdens de uitvoering

Java geeft je tools om hiermee om te gaan: **_Errors & Exceptions_**. Dit zijn Objects die inheriten van Throwable, en beiden weer veel subclasses hebben. Het kan verwarrend zijn, maar probeer goed op te letten wanneer er gepraat wordt over de _Error class_ en errors in het algemeen.

Dit is een <span style="text-decoration:underline;">versimpeld</span> diagram van de hiërarchie:

![img](images/image24.png)

Zoals in het diagram te zien is, is _Throwable_ class de root class in de hiërarchie. Die vertakt zich vervolgens in twee subclasses: **Error** en **Exception**. 

In Java (en veel andere programmeertalen) worden errors & exceptions gethrowt en gecatcht. Door iets zelf te _throwen_ wordt de keyword **_throw_** gebruikt. Terwijl bij een method die een bepaald soort throwt de keyword **_throws_** wordt gebruikt. Zie het voorbeeld hieronder:

![img](images/image16.png)

Je kan een method dus errors laten throwen - dan wordt het een probleem voor de code die de method oproept. Je kan je method dit ook zelf laten oplossen - dat leer je verderop bij **_Exception Handling_**. Voordat je weet hoe je iets kan oplossen is het namelijk wel handig om te weten welk probleem je aan het oplossen bent 😉



## **Types of Errors & Exceptions**

**_Errors_** (de class) zijn bijna altijd veroorzaakt door problemen met het systeem. Zo leidt een gebrek aan hardware resources voor je JVM tot een VirtualMachineError. Daaromheen plannen is nagenoeg onmogelijk, dus de meeste code besteedt bijna geen aandacht aan Errors (de class).

**_Exceptions_** daarentegen zijn wel iets om rekening mee te houden. Deze is te verdelen in 2 categorieën: **_checked_** en **_unchecked_** exceptions.

* **Checked exceptions** - Dit zijn exceptions die door de compiler worden gechecked. Ze worden daarom ook wel _compile time_ exceptions genoemd.Dit soort exceptions moet je wel nog steeds oplossen! Maar omdat je IDE en compiler erbij helpen, hoef je je er niet heel veel zorgen over te maken.

* **Unchecked exceptions** - Dit zijn exceptions die **_niet_** door de compiler worden gechecked en vinden plaats bij het runnen van de applicatie. Ze worden daarom _runtime exceptions_ genoemd. DIt soort exceptions worden veroorzaakt door fouten van de programmeur!

[Hier](https://www.youtube.com/watch?v=bCPClyGsVhc) een goed filmpje van Coding With John met uitleg erover.



### **Unchecked Exceptions**

Dit zijn de class **_RuntimeException_** en alle subclasses van RuntimeException. De volgende Exceptions zijn goed om te onderzoeken:

* ArithmeticException
* ClassCastException
* IllegalArgumentException
* IndexOutOfBoundsException
* NullPointerException

Er bestaat een goede uitdrukking over runtime exceptions: “If it is a runtime exception, it is your fault!”. Deze problemen in code vermijden is een belangrijk verschil tussen Java Developers en goede/ervaren Java Developers. De beste manier om het te leren is natuurlijk om de fout zelf ook te maken!


### **Checked Exceptions**

Alle Exception classes die **geen** _RuntimeException_ zijn, zijn dus checked exceptions - bijvoorbeeld de **IOException**. Omdat je deze problemen snel opmerkt, is het de moeite niet waard om heel veel over de verschillende checked exceptions in te lezen. Dat kan je laten voor wanneer je compiler of IDE aan je hoofd gaan zeuren. 😉



## **Exception Handling**

Zoals je het misschien door hebt zijn exceptions heel onwenselijk. Je hebt eerder gezien hoe een method het probleem kan “doorgeven” naar een andere method via het keyword throws. 

Maar op een gegeven moment moet het probleem toch worden opgelost - hoe doe je dat dan? In Java (en ook in veel andere talen) gebruik je daarvoor een **_try/catch block_**.

Zo’n try/catch block heeft Java in 3 soorten:

* try/catch
* try/catch/finally 
* try-with-resources


### **try/catch**

BIj deze benadering is het zo dat na iedere **_try_** block een **_catch_** block volgt. _catch_ wordt altijd samen gebruikt met _try_. Je kan ook meerdere catch blocks gebruiken, elke voor aparte errors. De syntax ziet er als volgt uit:

![img](images/image13.png)


Let goed op de details in dit voorbeeld - er zitten een paar goede methods om te onthouden tussen. Als je goed oplet kan je er ook zien dat het throwen van exceptions (en errors) ervoor zorgt dat je code onderbroken wordt. Maak dit na en controleer het zelf.


### **try/catch/finally**

Een **_finally_** block is een alternatief voor een catch block. Deze wordt altijd uitgevoerd, zelfs als er eerder in je code een error plaats vindt. Je mag een finally block ook combineren met 1 of meerdere catch blocks. Als je een try block gebruikt, moet je wel altijd minimaal 1 catch of finally block gebruiken.

Een vrij compleet voorbeeld: 

![img](images/image29.png)

Dit soort code is een ook een voorbeeld voor de _use case_ van een finally block: resources zoals een Scanner goed sluiten, of een laatste taak uitvoeren na je exception handling.

Maar als je goed oplet zie je in het voorbeeld ook weer een probleem: als je onverhoopt een error genereert in je finally block, kan je niet garanderen dat je resources gesloten worden. En dat is soms wel echt belangrijk om te doen!

Daarvoor bestaat er nog een laatste manier om met Exceptions om te gaan - **_try-with-resources_**. Deze laat je je resources als argumenten meegeven aan je try block, zodat ze gegarandeerd gesloten weer worden.

[Hier](youtube.com/watch?v=1XAfapkBQjk) een goed filmpje van Coding with John over Exception Handling.




# **Opdrachten Errors & Exceptions**

**Opdracht 1** - Exceptional Theory

Je hebt in de voorbeelden gezien dat een try block meerdere catch blocks kan hebben. 

1. Wat is de volgorde waarin deze blocks uitgevoerd worden?
2. Kan een enkele exception verschillende catch blocks laten uitvoeren?
3. Maak onderstaande code na en leg uit wat er mis aan is:

![img](images/image6.png)

**Opdracht 2** - Exceptional Custom Practice

Je kan ook je eigen custom Exception subclasses aanmaken. Hiermee kan je met een duidelijke naam aangeven wat er mis is gegaan, zodat andere delen van je programma dit beter kunnen begrijpen.

Denk aan een WrongFileNameException of een PlayerDisconnectException - als je aan de naam kan raden wat er is mis gegaan, maakt dat achteraf onderzoeken vele malen makkelijker.

Maak een BadTutorialException om te gebruiken bij latere opdrachten

**Opdracht 3** - Exceptional Quizzing

Voor deze opdracht gaan we de **_Scanner_**, **_BufferedFileWriter_** en **_FileWriter_** gebruiken. Als je deze niet kent, onderzoek ze dan nu eerst zelf.

1. Maak een class Quiz. Deze class vraagt bij een start() of de main() method om een aantal spelers die mee gaan doen, en vervolgens voor elke speler om de naam. Hou de namen van de spelers bij in een List.
2. Als er meer dan 5 spelers mee willen doen, moet je code een IllegalArgumentsException throwen!

Zorg dat je de exceptions goed catched en de Scanner goed met close() afhandelt!

3. Maak een Question class die de vraag en een lijst met 4 goede antwoorden bijhoudt.
4. Zorg dat je Quiz class een multiple-choice vraag in de terminal kan printen. Vervolgens moet de Quiz om input vragen per speler, en aan het einde van de ronde melden wie er gelijk had.
5. Maak een class Logger die de namen en antwoorden van de spelers van elke Quiz bij kan houden, en sla deze na het spelen van een Quiz hiermee op in een file.

Vergeet opnieuw niet om je resources te closen en je exceptions te handlen!




# **3. Collections & Generics**



## **Collections**

Een Collection is een Java interface. Dit interface heeft geen directe implementatie, maar wel heel veel subinterfaces die wel implementaties hebben - soms hebben ze zelfs weer een eigen subinterface.

Daarom wordt er ook wel gesproken over het Collections framework - een verzameling interfaces en classes dus. Bij dit framework horen zelfs een paar interfaces en classes die **niet** de Collection interface extenden. Deze dienen alsnog hetzelfde doel; Objects in collecties groeperen.

Hieronder zie je een bijna complete weergave van het Collections Framework:

![img](images/image7.jpg)

Waarom zijn er zo veel verschillende classes en variaties van collecties? Omdat ze allemaal een net iets andere _use case_ hebben.

Zo heb je de ArrayList hiervoor al veel gebruikt - maar in sommige gevallen is de LinkedList veel beter! Goed weten wanneer je welke **_data structure_** moet gebruiken is dus een heel belangrijk deel van Java, en eigenlijk ook bij programmeren in het algemeen.

Er zijn zelfs data structures die geen directe implementatie in Java hebben! Theoretische vragen hierover zie je vaak terug tijdens het sollicitatieproces voor back-end posities.

De data structures die we in dit hoofdstuk nader gaan onderzoeken zijn als volgt:

* List
* Queue
* Stack
* Set
* Map


### **List**

Een lijst is nog steeds een collectie en heeft alle methods van de Collection interface. In een List heeft de data een volgorde; daarom heeft elk Object in een lijst een _index_. Je kan deze index gebruiken om elementen op een specifieke plek te verwijderen, veranderen of toe te voegen

De standaard gebruikte implementatie is de **ArrayList**.


### **Queue**

Een _queue_ is een collectie met een volgorde, maar anders dan een List heeft een Queue geen index. Een queue is standaard **_FIFO - First In, First Out_**. Je kan een element alleen achteraan toevoegen en vooraan verwijderen. De **_dequeue_** interface kan zowel vooraan als achteraan toevoegen en verwijderen. 

De standaard gebruikte implementatie is de **LinkedList**. Dit is dus zowel een (de)queue als een lijst.


### **Stack**

Waar een queue standaard FIFO is, is een _stack_ het omgekeerde - **Last In, First Out**. Je kan het zien als een stapel borden:

![img](images/image21.png)


### **Set**

Een **_Set_** is een verzameling unieke waardes - je kan dus niet iets toevoegen aan een Set als het er al in zit. Als je dit wel probeert krijg je geen error, maar je code zal alsnog niets veranderen. De standaard gebruikte implementatie van een Set is de **_HashSet_**:

![img](images/image25.png)


### **Map**

Een **_Map_** is een verzameling van “Key-Value pairs”. Dit is vergelijkbaar aan een normaal Object met fields, maar dan efficiënter. **Let op** - de Map interface is geen subinterface van Collection! De standaard gebruikte implementatie van een Map is de **_HashMap_**:

![img](images/image26.png)



## **Generics**

Stel: je maakt een class ListSorter die allerlei lijsten gaat sorteren. Als die lijsten verschillende datatypes hebben, hoe ga je daar dan mee om?

* Je kan een aparte method maken voor elke datatype die je wil gebruiken
* Je kan je method een Object als parameter laten gebruiken. Elke class inherit van Object, dus elke instantie is in Java (ook) het datatype Object.

Een aparte method voor elk datatype is natuurlijk heel slecht schaalbaar. Maar als je de returnwaarde wil gebruiken, is Object soms veel te algemeen en niet wenselijk. Hoe ga je hier dan wel mee om?

Om dit probleem op te lossen heeft Java **_Generics & Wildcards_** geïntroduceerd. Dit zijn een soort “catch-all” datatypes. De simpelste van dit soort types is de **_wildcard type_**:

![img](images/image15.png)

Maar wat als je het type ergens in de method wil gebruiken? Bijvoorbeeld een item uit een lijst returnen:

![img](images/image19.png)

Let goed op de &lt;T> in de _method signature_ - dat is niet de return type! Dat zie je in het onderstaande voorbeeld:

![img](images/image30.png)


### **Bounded Generics**

Je kan zelfs specificeren dat je Generic Type bepaalde voorwaarden heeft. Zoiets heet dan een **_Bounded Generic_**:

![img](images/image20.png)

Verder uitgewerkt:

![img](images/image3.png)




# **Opdrachten Collections & Generics**

Voor de onderzoeksvragen - stel af met je groepje dat je deze vragen bespreekt als iedereen ze heeft behandeld. Is er geen consensus? Vraag het aan de coach!

**Opdracht 1** - Onderzoek de ArrayList en de LinkedList. 

Wat is het voordeel van een LinkedList gebruiken?

Wat is het voordeel van een ArrayList gebruiken?

**Opdracht 2** - Onderzoek de HashSet en de TreeSet

Wat kan een HashSet wel en de TreeSet niet?

Wat heeft een TreeSet wel en een HashSet niet?

**Opdracht 3** - Generic Letters

Je ziet bij Generics vaak dezelfde namen gebruikt worden; R, T, E, K en V. Zoek op waar deze letters voor staan.

De letters U en W worden soms ook nog gebruikt, maar dat is alleen omdat ze volgen op T en V.

**Opdracht 4** - Type Erasure

Java is zeer backwards compatible, dus je code met Generics moet ook werken op oude versies van de JVM (die geen Generics kennen). Hiervoor maakt de Java Compiler gebruik van **_Type Erasure_**. Dit verandert generics en wildcards in een ander type class.

Waarin verandert een Wildcard Type?

**Bonus Opdracht** - Stack met 2 Queues

Maak een eigen class Stack met methods add() en remove(). Gebruik 2 Queue classes.




# **4. Functional Java**



## **Functional Interfaces**

In Java zijn er veel interfaces die maar 1 ding doen - er is vaak maar 1 abstract method. Als er bij een Interface sprake is van een **_SAM (Single Abstract Method)_** wordt dat een **_Functional Interface_** genoemd. 

Een Interface met een enkele abstract method klinkt misschien als een makkelijk klein onderdeel, maar ze kunnen nog steeds behoorlijk van elkaar verschillen:

* Een verschil in parameters of return types van de SAM.
* Een verschil in naam van de SAM.
* Een verschil in default of static methods op de Functional Interface.

Dit betekent dat er heel wat verschillende Functional Interfaces zijn om te kennen. 

De vier meest gebruikte zijn als volgt:

* Function
* Supplier
* Consumer
* Predicate


### **Function**

De Function interface representeert een functie waaraan je een argument meegeeft en een return waarde uit krijgt. 


### **Supplier**

De Supplier interface kun je gebruiken wanneer je een return waarde wil genereren zonder dat je daar een argument bij gebruikt.


### **Consumer**

De Consumer interface doet precies het tegenovergestelde van de Supplier interface. Je geeft daar een argument aan mee, maar het heeft geen return waarde.


### **Predicate**

De Predicate interface lijkt op de Function interface, met 1 verschil: hij returned alleen een boolean ipv een waarde naar keuze.

Elk van deze interfaces heeft een eigen _method signature_.


### **Implementing Functional Interfaces**

Het gebruiken van dit soort interfaces doe je soms maar 1x in je programma - dan moet je een hele class implementeren, instantiëren en aanroepen om een enkele method te gebruiken. Zelfs voor Java standaarden is dat ontzettend veel boilerplate.

Gelukkig kan het veel makkelijker. Weinig gebruikt maar wel benoemenswaardig is de Anonymous Inner Class oplossing:

![img](images/image10.png)


Hiermee implementeer je de Predicate interface en maak je tegelijkertijd een instantie ervan aan. Maar dit kan nog simpeler met een nog betere oplossing; de **Lambda Expression**:

![img](images/image5.png)



## **Lambda Expressions**

Een lambda expression is in wezen een **anonymous method**. Lambdas zijn een heel ingewikkeld onderwerp, en er zijn veel kleine details die weer leiden tot net andere syntax:

* Met of zonder (haakjes) om de argumenten heen
* Met of zonder {curly brackets} om de body heen
* Met of zonder return statement / meerdere regels

Ze lijken hierin sterk op Arrow Functions uit JavaScript, mocht je die kennen. Een goede youtube tutorial die al deze variatie in syntax laat zien kan je [hier](youtube.com/watch?v=tj5sLSFjVj4) vinden.

Nog een voorbeeld van een Lambda Expression, dit keer bij een **_for-each method_**:

![img](images/image9.png)

De syntax is misschien verwarrend, maar het is wel heel efficiënt geschreven.

De reden dat de _System.out.println(num)_ hierboven gehighlight is, is omdat de IDE het graag wil omzetten naar de meest efficiënte variant van een lambda - de **_method reference_**.

Als je lambda alleen de argumenten direct doorgeeft aan een bestaande method, kan je die dus ook anders schrijven. Dat ziet er zo uit:

![img](images/image31.png)



## **Stream API**

In het vorige hoofdstuk heb je de **foreach method** gezien. **Let op** - dit is wat anders dan een for-each loop! De foreach method is namelijk een onderdeel van de **_Stream API_**.

Dit is een verzameling interfaces die je bepaalde methods laat gebruiken - methods die je misschien aan een meer functional programming stijl doen denken. Het zijn natuurlijk nog steeds interfaces - je kan de methods dus alleen toepassen op classes die ze implementeren. 

Waarmee kan je de Stream API dan gebruiken? Meestal zal je het gebruiken bij een Collection of File I/O. Een voorbeeld daarvan is dus ArrayList.foreach().

Bij het toepassen van stream wordt er gebruikgemaakt van een pipeline/keten van methods/operations. De operations die er bestaan binnen stream zijn **Non-terminal/Intermediate operations** en **Terminal operations**.

![img](images/image4.png)

**Intermediate Operations** zijn dus methods die zelf ook weer een Stream returnen, terwijl Terminal Operations alleen aan het einde uitgevoerd kunnen worden. 

Een **Terminal Operation** hoeft niet eens een return value te hebben - de foreach() method die je eerder hebt gezien heeft er geen! 

Vaak zijn Streams geschreven met een eigen regel voor elke operatie. Bijvoorbeeld:

![img](images/image11.png)

Maar het bovenstaande kan je toch ook met een for loop bereiken? Waar is de Stream API dan goed voor?

Een for loop is efficiënter wanneer je te maken heb met relatief weinig data (zoals hierboven). Het voordeel van de Stream is vooral een makkelijk te begrijpen syntax. Met de Stream API kan je beter de aparte operaties van elkaar scheiden in je code.

Bij grote hoeveelheid data kan de Stream API ook echt beter zijn qua performance. De voorwaarde hiervoor is dat je een multi-threaded Stream gebruikt - de ParallelStream. Hier ga je later meer over leren.

Een goede resource om te gaan gebruiken op je huidige kennisniveau is Baeldung - zij hebben [hier](https://www.baeldung.com/foreach-java) een goed artikel over dit onderwerp.

[Hier](https://www.youtube.com/watch?v=t1-YZ6bF-g0) kan je een heel goed filmpje vinden over de Stream API, inclusief veel voorbeelden van veelgebruikte methods.




# **Opdrachten Functional Java**

**Opdracht 1** - Functional Interface Methods

Een Functional Interface kan je gebruiken door in je code de method aan te roepen. In het onderstaande voorbeeld zie je die van de **_Predicate_** interface - **_test()_**

![img](images/image5.png)

Wat zijn de namen van de methods van de **_Function_**, **_Consumer_** en **_Supplier_** interfaces?

**Opdracht 2** - Lambda Rules

Wanneer moet je een return statement, brackets en haakjes toevoegen bij een lambda? Wanneer mag je ze weglaten?

**Opdracht 3** - Mapping and Collecting Streams

Wat is het verschil tussen de Stream methods **_.map()_** en **_.collect()_**?

**Opdracht 4** - Random Person Generator

Maak een class Person met de fields String name, int yearOfBirth, List&lt;String> sports. 

Maak een lijst met 10 verschillende hobbies, en doe hetzelfde voor namen. Laat je Person constructor het volgende doen:

* Random een yearOfBirth van 18-65 en een
* Random gekozen aantal 1-5 hobbies, die ook random gekozen worden.
* Random naam

Maak een lijst met 100 random personen. Stream deze lijst, filter op leeftijd boven de 50, laat ze allemaal hun naam in de console printen, en print vervolgens hun gecombineerde leeftijd.




# **5. Enums & Annotations**

Enums en Annotations zijn beiden een speciale soort “class” die je in Java kan gebruiken. Ze zijn beiden niet heel ingewikkeld, en ook niet even essentieel als de vorige 2 hoofdstukken. Desondanks zal het goed gebruiken tot betere code leiden - daarom zal je beiden ook vaak tegenkomen in code van anderen.



## **Enums**

Een enum is een speciale “class” bestaande uit een groep van _constants_. Constants zijn variabelen die niet veranderen, zoals _final_ variabelen. Dit kan je goed gebruiken voor dagen in de week, of maten van T-shirts. Bijvoorbeeld:

![img](images/image28.png)

Om een enum te creëren gebruik je de **_enum_** keyword in plaats van **_class_**. De constants worden binnen de curly brackets gescheiden door komma's. **Let op** - het is standaard dat de constants <span style="text-decoration:underline;">altijd</span> met hoofdletters worden geschreven.

Je kan een Enum ook waardes geven. Bijvoorbeeld:

![img](images/image14.png)

Is het gelijk duidelijk dat height en waist centimeter-waardes zijn? Het is belangrijk om altijd na te denken over ideale/betere naamgeving!

Je kan deze waardes op de volgende manier gebruiken:

![img](images/image18.png)

**Let op** - je maakt dus nooit gebruik van een **_new_** keyword hiervoor. Elke enum van een bepaalde soort heeft altijd dezelfde waarde, dus er is ook geen nut aan meerdere instanties.

In theorie zou je deze waarden ook kunnen veranderen, maar meestal wil je dat liever niet. Daarom is het een goede practice om enum fields altijd **_final_** te maken.

Een enum kan als “eigen class” worden gebruikt maar kan zich ook bevinden in een andere class - bijvoorbeeld een class _Shirt_ met nested enum _Size_.

Zoals je inmiddels misschien al verwacht - [hier](https://www.youtube.com/watch?v=wq9SJb8VeyM) een goede uitleg van Coding With John



## **Built-in Annotations**

Annotations zijn een speciale “interface” die je aan je code kan toevoegen. Het is vergelijkbaar aan een _marker interface_ - een soort indicatie voor de rest van je code dat er bepaalde voorwaarden wel/niet gelden.

Er zijn ingebouwde annotations die je kan gebruiken, en annotations die je zelf kan maken. We behandelen eerst de meestgebruikte ingebouwde annotations:


### **_@Override_**

Dit is een **_marker annotation_** - dat betekent dat het geen data bevat. Wat het wel doet, is je compiler waarschuwing laten geven als je het op een method zet die niet een overridden method is. Dit helpt met het voorkomen van fouten.


### **_@FunctionalInterface_**

Dit is ook een _marker annotation_. Je weet inmiddels dat een Functional Interface maar 1 abstract method kan hebben - met meer is het dus geen Functional Interface. Als je deze annotation op een interface zet, terwijl het geen Functional Interface is, geeft je compiler een warning. Kleine moeite voor een behulpzame controle.


### **_@Deprecated_**

Deze annotation is **geen** marker annotation - het _kan_ namelijk **wel** data bevatten. In dit geval gaat het om een String en een boolean - je ziet ze beiden in het voorbeeld hieronder:

![img](images/image22.png)

**Let op** - sommige Annotations hebben waarden die je verplicht in moet vullen. Bij _@Deprecated_ hoeft dat niet - since en forRemoval zijn optioneel.


### **_@SuppressWarnings_**

Annotations kunnen ook een “value” property hebben. Als er geen andere verplichte waarden gebruikt worden kan je deze gebruiken zonder “value =”. Bij @SuppressWarnings is dit het geval. 

Zie hieronder twee compiler warnings die je met deze Annotation voorkomt:

![img](images/image2.png)

Probeer dit zelf na te maken en de annotations te veranderen / verwijderen. Kijk vervolgens of je compiler warnings in je IDE kan zien. 



## **Creating Annotations**

Custom Annotations aanmaken is iets wat je als beginnende developer echt niet binnenkort zal doen, dus misschien lijkt dit onderwerp niet interessant. Maar je gaat wel heel veel custom Annotations gebruiken - zodra je met Spring gaat werken.

Daarom gaan wij er ook kort doorheen, zodat jij in ieder geval weet hoe Annotations gemaakt worden.  De naamgeving en hoe je properties moet instellen is makkelijk genoeg te onderzoeken en begrijpen, dus dat detail laten we voor het gemak wel even weg.

We benoemen wel nog even kort de lastige kant van je eigen Annotations maken; de andere Annotations die je daar weer op moet zetten.

![img](images/image8.jpg)


### **_@Target_**

De eerste van twee verplichte annotations. De value bepaalt waar je jouw Annotation kan gaan plaatsen.


### **_@Retention_**

De tweede verplichte annotation. Deze geeft aan hoe lang de Annotation door de JVM onthouden wordt. Meestal is dit **_@Retention(RetentionPolicy.RUNTIME)_**

Er zijn ook nog optionele Annotations voor Annotations, zoals **_@Documented_**, **_@Inherited_** en **_@Repeatable_**, maar de naam is voor die drie wel vanzelfsprekend genoeg.

Hier kan je nog een goede video met uitleg over Annotations vinden.




# **Opdrachten Enums & Annotations**

**Opdracht 1** - Enum values

1. Creëer een enum _Weekday_ met de constanten _MONDAY, TUESDAY, _etc_._
2. Creëer in de enum een boolean _isWorkday_. Zorg ervoor dat al je dagen een bijpassende true/false waarden krijgen.
3. Gebruik je enum om het volgende in je terminal te printen:

![img](images/image27.png)

**Opdracht 2** - What makes a good enumeration?

Bij de Random Person opdracht in het vorige hoofdstuk heb je hobbies en namen gebruikt.

* Zijn dit een goede optie om in een enum te gebruiken? 
    * Waarom wel/niet?
* Is het een goed idee om je enum values final te maken? 
    * Waarom wel/niet?

**Opdracht 3** - Enum Examples

Onderzoek de volgende [Card](https://docs.oracle.com/javase/tutorial/java/javaOO/examples/Card.java) en [Deck](https://docs.oracle.com/javase/tutorial/java/javaOO/examples/Deck.java) classes. Er wordt ook een onbekend keyword gebruikt - **assert**. Je kan deze weglaten; het is voor deze opdracht niet nodig. Toch benieuwd? [Hier](https://www.baeldung.com/java-assert) alsnog een goede uitleg.

Maak de classes na, en verbeter ze daarna door enums te gebruiken.

**Opdracht 4** - Enumerated Annotations

Hieronder nog een voorbeeld van een custom annotation:

![img](images/image23.png)

De waarden van @Target en @Retention zijn beiden enums. Wat houden de verschillende waarden van RetentionPolicy in?

1. Maak vervolgens een eigen custom annotation @Buggy. Geef deze een passende RetentionPolicy en alle mogelijke Target values (tegelijkertijd).

Bugs hebben vaak een priority en severity. Voor deze waarden worden bepaalde getallen gebruikt. Zoek op welke dit zijn.

2. Maak twee enums _BugPriority_ en _BugSeverity_ met gepaaste namen en final int values.
3. Geef je custom annotatie @Buggy een int _Priority_ en int _Severity_. 

Nu kan je je eigen annotation gebruiken om bugs in je code te noteren, en kunnen andere delen van code dit automatisch uitlezen!