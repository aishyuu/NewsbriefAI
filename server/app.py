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

def news_text_validation(news_text : str):
	if len(news_text) > 8147:
		char_over = news_text - 8147
		return news_text[char_over::]
	else:
		return news_text

			

@app.route('/api/query', methods=['POST'], strict_slashes=False)
def query():
	news_link = request.json
	article = Article(news_link)
	article.download()
	article.parse()
	article_text = news_text_validation(article.text)

	ai_response = openai.Completion.create(
		model="text-davinci-003",
		prompt=f"Summarize the following news article: `{article_text}`",
		max_tokens=2048,
		temperature=0
	)
	
	response = jsonify({'Response': article_text, 'ai_response':ai_response['choices'][0]['text']})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response
	

if __name__ == "__main__":
	app.run(debug=True)