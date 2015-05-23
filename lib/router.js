Router.map(function () {
    this.route('welp', {
        path: '/',
    });
    
    this.route('login', {
        path: '/login',
    });
    
    this.route('register', {
        path: '/registration',
    });
    
    this.route('home', {
        path: '/home',
    }),
    this.route('articleForm', {
        path: '/addarticle',
    }),
        this.route('reservationForm', {
        path: '/reservation',
    }),   
	this.route('reservationForm2', {
        path: '/reservation2',
    }),
    this.route('reservationShow', {
        path: '/showmyreservations',
    }),
          this.route('zarzadzaj', {
        path: '/zarzadzaj',
    })
});
