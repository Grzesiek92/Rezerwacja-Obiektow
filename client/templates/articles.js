Template.postList.helpers({
    posts: function () {
        return Articles.find({}, {
            sort: {
                data: -1
            }, 
            limit : 10
        });
    }
});