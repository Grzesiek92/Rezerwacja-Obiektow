Template.zarzadzaj.helpers({
    przegladWszystkich: function () {
        return Rezerwacje.find({}, {
            sort: {
                data: -1
            }, 
            limit : 10
        });
    }
});