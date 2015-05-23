Template.reservationForm2.helpers({
    obiekt : function () {
        return Obiekty.find();
    }
});
Template.reservationForm2.rendered = function () {
    $('#my-datepicker').daterangepicker({
        singleDatePicker: true,
        format: 'DD/MM/YYYY',
        startDate: moment().format('DD/MM/YYYY'),
        endDate: moment().format('DD/MM/YYYY')
    });
}
Template.reservationForm2.events({
    'click #rezerwuj': function () {
        var obiekt = $('#NrObiektu').val();
        var data = $('#my-datepicker').val();
        var godzina = $('#time').val();
        var username=Meteor.user().username;
        var rezerwacja = Rezerwacje.findOne({
            nrobiektu: obiekt,
            data: data,
            godzina: godzina
        })
        if (obiekt == 0)
            alert("Wybierz Obiekt");
        else if (data == '')
            alert("Wybierz date");
        else if (godzina == "Wybierz Godzinę")
            alert("Wybierz Godzinę")
        else if (rezerwacja == undefined) {
            Rezerwacje.insert({
                nrobiektu: obiekt,
                data: data,
                godzina: godzina,
                username:username
            });
            alert('Rezerwacja obiektu przebiegła, pomyślnie obiekt : '+obiekt+' godzina :'+ godzina+ ' data : '+data);
        } else {

            alert("Obiekt " + obiekt + " jest juz zarezerwowany w dniu " + data + " o godzinie " + godzina + ". Prosimy wybrać inny obiekt, bądź inne parametry czasowe")
        }
    }
});
