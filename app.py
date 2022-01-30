from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin
from newsapi import NewsApiClient

app = Flask(__name__)
cors = CORS(app, origins=[
        "http://localhost:5000",
        "http://localhost:5001",
        "http://127.0.0.1:5001"
        "https://news.kasparsdev.eu"
    ])

@app.route("/api/articles")
def get_articles():
    newsapi = NewsApiClient("API_KEY")

    all_articles = newsapi.get_everything(q='cryptocurrency',
                                      language='en',
                                      sort_by='publishedAt',
                                      page_size=10)
    print(all_articles)

    return jsonify(all_articles)

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=8000, debug=True)