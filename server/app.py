from flask import Flask, jsonify, request
from flask_cors import CORS
from newspaper import Article, fulltext
from dotenv import load_dotenv
import os
import openai

load_dotenv()
openai.api_key = os.environ['OPENAI_API_KEY']

app = Flask(__name__)
CORS(app)

@app.route('/api/query', methods=['POST'], strict_slashes=False)
def testing():
	news_link = request.json
	article = Article(news_link)
	article.download()
	article.parse()
	article_text = article.text

	ai_response = openai.Completion.create(
		model="text-davinci-003",
		prompt="Say this is a test",
		max_tokens=7,
		temperature=0
	)
	
	response = jsonify({'Response': article_text, 'ai_response':ai_response['choices'][0]['text']})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response
	

if __name__ == "__main__":
	app.run(debug=True)