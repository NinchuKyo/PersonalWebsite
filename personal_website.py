#!usr/bin/env python

import os
import newrelic.agent
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return '<h1>Hello, World!<h1>'

if __name__ == '__main__':
    newrelic.agent.initialize('newrelic.ini')
    port = os.environ.get('PORT', 5000)
    app.run(debug=False, host='0.0.0.0', port=port)
