if (Obiekty.find().count() === 0) {
    Obiekty.insert({
        nr: 1,
        typ: 'Orlik',
        stan: 'gotowy'
    });
    Obiekty.insert({
        nr: 2,
        typ: 'Silownia',
        stan: 'gotowy'
    });
    Obiekty.insert({
        nr: 3,
        typ: 'Basen',
        stan: 'gotowy'
    });
    Obiekty.insert({
        nr: 4,
        typ: 'Sala',
        stan: 'gotowy'
    });

};