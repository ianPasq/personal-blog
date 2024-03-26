from __init__ import bcrypt
from flask import Flask, Blueprint, render_template, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import wtforms, FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError 
from flask_login import UserMixin ,login_user, LoginManager, login_required, logout_user, current_user
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


db = SQLAlchemy(app)


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    post_title = db.Column(db.String(120), nullable=False)
    post_content = db.Column(db.Text, nullable=False)
    #created_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    #author_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    
    
    def to_json(self):
        return {
            "id": self.id,
            "postTitle": self.post_title,
            "postContent": self.post_content,
            "content": self.post_content
        }

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), nullable=False, unique=True)
    password = db.Column(db.String(80), nullable=False)





auth = Blueprint('auth', __name__)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

class RegistrationForm(FlaskForm):
    username = StringField(validators = [InputRequired(), Length(
        min=8, max=30)], render_kw={"placeholder" :"Username"})

    password = StringField(validators = [InputRequired(), Length(
        min=8, max=20)], render_kw={"placeholder" :"Password"})
    
    submit = SubmitField("Register")
    
    def val_username(self, username):
        existing_user_username = User.query.filter_by(username=username.data).first()
        if existing_user_username:
            raise ValidationError("user already exists. Please choose a different name")
    
class LoginForm(FlaskForm):
    username = StringField(validators = [InputRequired(), Length(
        min=8, max=30)], render_kw={"placeholder" :"Username"})

    password = StringField(validators = [InputRequired(), Length(
        min=8, max=20)], render_kw={"placeholder" :"Password"})
    
    submit = SubmitField("login")
    
    
class Auth():
    @auth.route('/login', methods=["GET", "POST"])
    def login():
        form = LoginForm()
        
        if form.validate_on_submit():
            user = User.query.filter_by(username=form.username.data).first()
            if user:
                if bcrypt.check_password_hash(user.password, form.password.data):
                    login_user(user)
                    return redirect(url_for('dashboard'))
        return render_template('login.react', form=form)

    @auth.route('/sign_up', methods=["GET", "POST"])
    def sign_up():
        form = RegistrationForm()
        
        if form.validate_on_submit():
            hashed_password = bcrypt.generate_password_hash(form.password.data)
            new_user = User(username=form.username.data, password=hashed_password)
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for('login'))
            
    @auth.route('/logout', methods=['GET', 'POST'])
    @login_required
    def logout():
        logout_user()
        return redirect(url_for('login'))        