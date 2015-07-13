#!usr/bin/env python

import os
import newrelic.agent
from flask import Flask, redirect, render_template

"""
personal_website.py

"""

app = Flask(__name__)

@app.route('/')
def home(name=None):
    return render_template('index.html', name=name)

@app.route('/projects')
def projects(name=None):
    return render_template('projects.html', name=name)

@app.route('/contact')
def contact(name=None):
    return render_template('contact.html', name=name)

if __name__ == '__main__':
    newrelic.agent.initialize('newrelic.ini')
    port = os.environ.get('PORT', 5000)
    app.run(debug=False, host='0.0.0.0', port=port)
