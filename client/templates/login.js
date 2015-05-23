Template.login.events = {
    'submit form': function (e) {
        e.preventDefault();
        var username = document.getElementById('inputLogin').value;
        var password = document.getElementById('inputPassword').value;
        Meteor.loginWithPassword(username,password);
        
        if (Meteor.userId() != 0)
            Router.go('home');
        else
            alert('Hola!. Zalogój sie.');
    }

}