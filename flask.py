from flask import Flask
from flask_mail import Mail, Message 
import os

app = Flask (_name_)

mail_settings = {
    "MAIL_SERVER": 'smpt.gmail.com',
    "MAIL_USE_TLS": False, #Transport Layer Security
    "MAIL_USE_SSL": True, #Secure Sockets Layer
    "MAIL_PORT": 465, #For using SSL
    "MAIL_USERNAME": 'me@alexaann.net',
    "MAIL_PASSWORD": C3llard00r,

}

app.config.update(mail_settings)
mail = Mail(app)


if _name_ == '_main_':
    with app.app_context():
        msg = Message(sender= app.config.get("MAIL_USERNAME"),
                        recipients= ["alexa@alexaann.net"])

        msg.subject = " Write Log"
        msg.body = """ This is your random reminder to log data for the day """

        mail.send(msg)