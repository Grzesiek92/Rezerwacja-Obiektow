Template.articleForm.events({
    'click #send': function () {
        var tytul = $('#tytul').val()
        var tresc = $('#opis').val()
        var data = Date();
        if (tytul.trim().length == 0)
            alert("Pole tytuł nie może być puste");
        else if (tresc.trim().length == 0)
            alert("Pole treść nie może być puste");
        else {
            Articles.insert({
                tytul: tytul,
                tresc: tresc,
                data: data
            });
            alert("Pomyślnie dodano ogłoszenie");
        }
    },
    'click #clear': function () {
        var tytul = $('#tytul')
        var tresc = $('#opis')
        tytul.val('')
        tresc.val('')
    }
});