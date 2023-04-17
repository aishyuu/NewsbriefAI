from flask import Flask
from flask import jsonify
from flask_cors import CORS
from newspaper import Article
from newspaper import fulltext

app = Flask(__name__)
CORS(app)

@app.route('/testing', methods=['GET'])
def testing():
	url = 'https://www.washingtonpost.com/business/2023/04/16/economy-recession-fears/'
	article = Article(url)
	article.download()
	article.parse()
	test = article.text
	response = jsonify({'Response': test})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response
	

if __name__ == "__main__":
	app.run(debug=True)