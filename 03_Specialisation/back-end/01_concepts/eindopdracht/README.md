# **Fishgrounds**

Nij deze opdracht ga je via multi-threading verschillende vissen tegen elkaar laten racen.

Je hebt al een template set-up aan java classes meegekregen - die zitten in de src folder.

Vereisten:
* Maak in de Race.start() method een ExecutorService die met Thread Safety een race laat afspelen. Hoe snel een vis zwemt hangt af van diens snelheid, maar verschilt ook enigszins per race!
* De scores moeten de naam + race-tijd per vis in de terminal printen **wanneer de laatste vis gefinisht is**!
* Gebruik Singleton Pattern om van de Race class een Singleton te maken. Je kan maar 1 Race tegelijk draaien en wil dat ook garanderen in je code!
* Maak van het eindresultaat een UML-diagram. Deze mag je tekenen of maken via een online tool (bijv. LucidChart). Upload een screenshot met de opdracht mee.

Bonus:
* Maak een tweede soort Fish naast Goldfish die iets sneller / langzamer zwemt.
* Maak gebruik van de Hatchery class met Factory Pattern om de vissen automatisch (op een aparte thread+timer) te laten spawnen.
