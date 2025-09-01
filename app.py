from flask import Flask, request, redirect
from flask_mail import Mail, Message
import os

app = Flask(__name__)

# Setup Flask-Mail with Gmail (use environment variables or hardcode for testing)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = os.environ.get("sharma2004praveen@gmail.com")  # e.g., your Gmail
app.config['MAIL_PASSWORD'] = os.environ.get("praveensclicks")  # your App Password
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

# ADD THIS: Define the recipient email (yours)
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get("EMAIL_USER")  # Recommended
app.config['MAIL_RECIPIENT'] = "sharma2004praveen@gmail.com"  # Your email address to receive contact messages

mail = Mail(app)

@app.route("/")
def home():
    return open("index.html").read()

@app.route("/contact", methods=["POST"])
def contact():
    name = request.form["name"]
    email = request.form["email"]
    message = request.form["message"]

    msg = Message(
        subject=f"New Contact from {name}",
        sender=app.config['MAIL_DEFAULT_SENDER'],
        recipients=[app.config['MAIL_RECIPIENT']],
        body=f"From: {name} <{email}>\n\nMessage:\n{message}"
    )

    mail.send(msg)
    return redirect("/")
    
if __name__ == "__main__":
    app.run(debug=True)
