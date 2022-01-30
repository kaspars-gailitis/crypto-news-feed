# Crypto news feed

A news feed with the latest crypto news. The news are updated periodically.

WIP:
- Live crypto currency values using external API
- Crypto value change since market open (24h period)
- News item filtering by region and language
- 3 commas API integration

### Project Code
Repo - [https://github.com/kaspars-gailitis/crypto-new-feed](https://github.com/kaspars-gailitis/crypto-new-feed)

### Working App
Website - [https://news.kasparsdev.eu](https://news.kasparsdev.eu)

### Recorded Video
Youtube - WIP

### Contact Info
- Discord - LameKai#9846
- Email - [gailitis.kaspars@gmail.com](mailto:gailitis.kaspars@gmail.com)

## Technical details

The front end is build using React and a simple backend is created using Flask.

### Running locally


1. Install virtualenv if you still haven't `python3 -m pip install virtualenv`
2. Create a virtualenv `virtualenv .virtualenv`
3. Initiate the virtualenv `source .virtualenv/bin/activate`.
4. Install the packages `pip install -r requirements.txt`.
5. `cp .local.env .env`
6. Run `flask run` in root directory.
7. Run `yarn start` to start FE.
8. Open `http://localhost:3000/` in your browser
9. *Some code modifiactions with ports and newsapi.org might be required*