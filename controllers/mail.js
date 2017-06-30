var mailgun = require('mailgun-js')({apiKey: "dfsf", domain: 'chillisoftware.net'});

var mailController = function(mailgun) {
    var self = this;

    return {
        contact: function(userData) {
            var emailData = {
                from: 'website@chillisoftware.net',
                to: 'jmalczak@gmail.com',
                subject: 'Contact from chillisoftware.net',
                html: 'Contact details:<br /><br />' + userData.message + '<br /><br />' + 'Name: ' + userData.name + '<br />Phone: ' + userData.phone + '<br />Email: ' + userData.email
            };

            mailgun.messages().send(emailData);
        }
    };
}

module.exports = new mailController(mailgun);
