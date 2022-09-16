from flask import Flask
from data import datamanager
from flask import abort

app = Flask(__name__)

# heimasvæðið (landing page)
@app.route("/")
def hello_world():
    return "<h1>Velkomin</h1><h4>Ks Seríur</h4>"


# þarfnast líklega ekki skýringa
@app.route("/about")
def about_page():
    return "<h1>About Page!</h1>"


# Sækir allar seríur sem eru á skrá. 
@app.route("/series")
def series_page():
    db = datamanager.DB()
    series = db.all_series()
    return series


# Sækir seríu sem er með ákveð'ið id
@app.route("/series/single/<id>")
def single_series_page(id):
    db = datamanager.DB()
    single = db.single_series(id)
    return single

# Sækir leikara
@app.route("/series/search/<actor>")
def single_series_search(actor):
    db = datamanager.DB()
    single = db.search_actor(actor)
    if single == None:
        return abort(404)
    else:
        return single


