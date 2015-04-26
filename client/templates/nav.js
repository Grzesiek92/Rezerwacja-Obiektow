Template.nav.helpers({
    isWorker: function () {
        if (Meteor.user().profile.typ == "pracownik" || Meteor.user().profile.typ == "admin")
            return true;
        else
            return false;
    },
    isClient: function () {
        if (Meteor.user().profile.typ == "klient")
            return true;
        else
            return false;
    },
    login: function () {
        var id = Meteor.user()._id;
        return Users.findOne({
            _id: id
        });
    }
});

Template.nav.events({
    'click #logout': function (e) {
        e.preventDefault();
        Meteor.logout();
        Router.go('welp');
    }
});