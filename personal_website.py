#!usr/bin/env python

import os
from flask import Flask, redirect, render_template

"""
personal_website.py

"""

app = Flask(__name__)

@app.route('/')
def home(name=None):
    return render_template('index.html', name=name)

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
