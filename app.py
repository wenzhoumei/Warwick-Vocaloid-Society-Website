from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/events")
def calendar():
    return render_template("events.html")

@app.route("/showcase")
def resources():
    return render_template("showcase.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/recyclable-boxes")
def recyclable_boxes():
    return render_template("recyclable-boxes.html")

@app.route("/")
def home():
    return redirect(url_for("about"))

if __name__ == '__main__':
    app.run(debug=True, port=8000, host='0.0.0.0')
