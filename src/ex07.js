window.addEventListener("load", (event) => {
    document.querySelector('#idActionP1').addEventListener('click', actionP1);
    document.querySelector('#idActionP2').addEventListener('click', actionP2);
    document.querySelector('#idActionP3').addEventListener('click', actionP3);
    document.querySelector('#idActionP4').addEventListener('click', actionP4);
    document.querySelector('#idActionP5').addEventListener('click', actionP5);
});

// ---------------------------------------------------------------------------

function afficherObjet(resultat) {
    const container = document.getElementById("output");
    container.innerHTML = JSON.stringify(resultat, null, 3);
}

// ---------------------------------------------------------------------------

function actionP1() {

    // Mettre la main sur le tableau HTML où l'on devra injecter les lignes
    const tableElem = document.getElementById('tableNotes');

    // Ch'tite méthode pratique pour rajouter injecter les lignes nécessaires au tableau HTML
    const display = (examens, tableauHTML) => {
        examens.forEach(examen => {
            const ligne = document.createElement('tr');
            ligne.appendChild(document.createElement('td')).textContent = examen.name;
            ligne.appendChild(document.createElement('td')).textContent = examen.points;
            ligne.appendChild(document.createElement('td')).textContent = examen.note;
            tableauHTML.appendChild(ligne);
        });
    }

    // -----------------------------------------------------------------------------
    //
    //               )        (                 ) (           (         (
    //            ( /(   *   ))\ )        (  ( /( )\ )        )\ )  (   )\ )
    //      (   ( )\())` )  /(()/((       )\ )\()|()/(  (    (()/(  )\ (()/(
    //      )\  )((_)\  ( )(_))(_))\    (((_|(_)\ /(_)) )\    /(_)|((_) /(_))
    //     ((_)((_)((_)(_(_()|_))((_)   )\___ ((_|_))_ ((_)  (_)) )\___(_))
    //     __   _____ _____ ___ ___    ___ ___  ___  ___   ___ ___ ___   _
    //     \ \ / / _ \_   _| _ \ __|  / __/ _ \|   \| __| |_ _/ __|_ _| | |
    //      \ V / (_) || | |   / _|  | (_| (_) | |) | _|   | | (__ | |  |_|
    //       \_/ \___/ |_| |_|_\___|  \___\___/|___/|___| |___\___|___| (_)
    //
    // ----------------------------------------------------------------------------

    // Créer une copie avec la note fédérale en plus
    const examensAvecNotes = [{ name: 'Ducobu', points: 2, note: 1.0001 }];

    // Afficher
    display(examensAvecNotes, tableElem);
}

// ---------------------------------------------------------------------------

function actionP2() {
}

// ---------------------------------------------------------------------------

function actionP3() {
}

// ---------------------------------------------------------------------------

function actionP4() {
}

// ---------------------------------------------------------------------------

function actionP5() {
}

