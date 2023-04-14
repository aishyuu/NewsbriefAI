from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
	return 'This was from the flask server. HI OVER HERE!', 200

app.run(port=5000)