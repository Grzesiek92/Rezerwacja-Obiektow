Template.reservationShow.helpers({
    przeglad: function () {
        var username=Meteor.user().username;
        return Rezerwacje.find({ username:username }, {
            sort: {
                data: -1
            }, 
            limit : 10
        });
    }
});