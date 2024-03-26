from flask import Flask
from flask_bcrypt import Bcrypt

class Create():
    def create_app():
        app = Flask(__name__)
        app.config['SECRET_KEY'] = 'reallySecretKeyOrSomething'
        
        from .auth import auth
        bcrypt = Bcrypt(app)
        app.register_blueprint(auth, url_prefix="/")
        app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
        app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


        return app

