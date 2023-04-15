from flask import Flask
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/testing', methods=['GET'])
def testing():
	response = jsonify({'Response': 'Goofy Goober'})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response
	

if __name__ == "__main__":
	app.run(debug=True)