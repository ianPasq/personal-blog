from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from os import path

CORS()
db = SQLAlchemy()
DB_NAME = "database.db"
    
def blog_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'reallySecretKeyOrSomething'
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DB_NAME}"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.init_app(app)

    from .blogs import blogs

    app.register_blueprint(blogs, url_prefix="/")
     
    from .models import  User, Post, Comment
    
    
    create_database(app)
    
    
    def create_database(app):
        if not path.exists("website/" + DB_NAME):
            db.create_all(app=app)
            



