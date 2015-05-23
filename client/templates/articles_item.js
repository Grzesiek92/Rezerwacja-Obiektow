Template.postItem.helpers({
    del: function () {
        if (Meteor.user().typ == "admin")
            return true;
        else
            return false;
    }

});
Template.postItem.events({
    'click #del': function () {
            Articles.remove(this._id);
    }
});