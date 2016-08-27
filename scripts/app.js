let app = Sammy('#contentWrap', function() {

    this.get('#/', function() {
        this.$element()
            .load('templates/welcome-user.html');
    });
    this.get('#/Sign-in', function() {
        this.$element()
            .load('templates/sign-in.html');
    });
    this.get('#/Register', function() {
        this.$element()
            .load('templates/register.html');
    });
});

app.run('#/');