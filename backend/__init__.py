from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
db = SQLAlchemy(app)

from .blogs import blogs

app.register_blueprint(blogs, url_prefix="/")

app.config['SECRET_KEY'] = 'reallySecretKeyOrSomething'
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


