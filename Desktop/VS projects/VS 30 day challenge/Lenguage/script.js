let hello = document.getElementById("welcome");
let text = document.getElementById("text");
let isGerman = true;

function welcome() {
    if (hello.innerHTML == "Welcome") {
        hello.innerHTML = "Willkommen";
    } else {
        hello.innerHTML = "Welcome";
    }
}

function translateText() {
    if (isGerman == true) {
        text.innerHTML = `<h3>Arbeitssuche in einem Restaurant</h3><br />
            <p>Arbeitssuche in einem Restaurant kann eine spannende und lohnende Erfahrung sein. Zunächst ist es
                wichtig, einen Lebenslauf zu erstellen, der Ihre bisherigen Erfahrungen und Qualifikationen hervorhebt.
                In vielen Restaurants ist Erfahrung in der Gastronomie von Vorteil, aber auch Quereinsteiger haben gute
                Chancen.</p><br />
            <p>Wenn Sie sich in einem Restaurant bewerben, sollten Sie bereit sein, flexible Arbeitszeiten zu
                akzeptieren, da Restaurants oft abends und am Wochenende geöffnet sind. Es kann auch nützlich sein,
                einige grundlegende Kenntnisse über die Speisekarte und die Art des Restaurants zu haben, in dem Sie
                arbeiten möchten. Ein gepflegtes Erscheinungsbild und ein freundliches Auftreten sind ebenfalls wichtig.
            </p><br />
            <p>Es gibt verschiedene Wege, um einen Job in einem Restaurant zu finden. Sie können direkt in den
                Restaurants nachfragen, Online-Jobbörsen nutzen oder sich an Arbeitsvermittlungen wenden. Oft werden in
                den Schaufenstern von Restaurants auch Stellenanzeigen ausgehängt.</p><br />
            <p>Während eines Vorstellungsgesprächs könnten Ihnen Fragen zu Ihren bisherigen Erfahrungen, Ihren
                Fähigkeiten im Umgang mit Kunden und Ihrer Verfügbarkeit gestellt werden. Seien Sie darauf vorbereitet,
                auch spontan Fragen zu beantworten und einen guten Eindruck zu hinterlassen.</p><br />
                <button onclick="translateText()">Übersetzen</button>
                `;
        isGerman = false;
    } else {
        text.innerHTML = `<h3>Searching for Work in a Restaurant</h3><br />
        <p>Searching for work in a restaurant can be an exciting and rewarding experience. First, it is important to create a resume that highlights your previous experiences and qualifications. Experience in the hospitality industry is advantageous in many restaurants, but career changers also have good chances.</p><br />
        <p>When applying to a restaurant, you should be prepared to accept flexible working hours, as restaurants are often open in the evenings and on weekends. It can also be helpful to have some basic knowledge of the menu and the type of restaurant you want to work in. A neat appearance and a friendly demeanor are also important.</p><br />
        <p>There are various ways to find a job in a restaurant. You can inquire directly at the restaurants, use online job portals, or contact employment agencies. Job advertisements are often posted in the windows of restaurants as well.</p><br />
        <p>During a job interview, you might be asked about your previous experiences, your skills in dealing with customers, and your availability. Be prepared to answer questions spontaneously and make a good impression.</p><br />
        <button onclick="translateText()">Translate</button>
                    `;
        isGerman = true;
    }
}
