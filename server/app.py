from flask import Flask, jsonify, request
from flask_cors import CORS
from newspaper import Article, fulltext
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/api/query', methods=['POST'], strict_slashes=False)
def testing():
	news_link = request.json
	article = Article(news_link)
	article.download()
	article.parse()
	article_text = article.text
	response = jsonify({'Response': article_text})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response
	

if __name__ == "__main__":
	app.run(debug=True)