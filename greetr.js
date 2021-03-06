(function(global, $) {
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };
  var supportedLanguages = ['en', 'es'];
  var greetings = {
    en: 'Hello',
    es: 'Holla'
  };
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };
  var logMessages = {
    en: 'Logged in',
    es: 'Logged in es'
  };
  Greetr.prototype = {
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },
    validate: function() {
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw 'Invalid language';
      }
    },
    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },
    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },
    greet: function(formal) {
      var msg;

      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }

      return this;
    },
    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }

      return this;
    },
    setLang: function(lang) {
      this.language = lang;
      this.validate();

      return this;
    },
    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw 'no jQuery found';
      }
      if (!selector) {
        throw 'missing jQury selector';
      }
      var msg = 'sasamba';
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      $(selector).html(msg);

      return this;
    }
  };
  Greetr.init = function(firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
    self.validate();
  };
  Greetr.init.prototype = Greetr.prototype;
  global.g$ = global.Greetr = Greetr;
})(window, jQuery);
