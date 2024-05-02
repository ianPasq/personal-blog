from flask import redirect, render_template, Blueprint, flash, url_for, request, jsonify
from __init__ import app, db
from models import Post, User, Comment
from flask_login import login_required, current_user


blogs = Blueprint("blogs", __name__)

@blogs.route("/")
@blogs.route("/home")
@login_required
def home():
    posts = Post.query.all()
    return render_template("index.html", user=current_user, posts=posts)   
    
    
@app.route("/create_posts", methods=["GET", "POST"])
def create_post(): 
    if request.method == "POST":
        post_title = request.form['post_title']
        post_content = request.form['post_content']
        if not post_title:
            flash("you must have something written", category='error')
        else:
            post = Post(post_content=post_content, post_title=post_title, author=current_user.id)
            db.session.add(post)
            db.session.commit()
            flash('post created!', category='success')
            return redirect(url_for('blogs.home'))
    return render_template('create_post.html', user=current_user)
    
@app.route("/update", methods=["PUT"])
def update_post():
    pass

@app.route("/delete", methods=["DELETE"])
def delete_post():
    pass


    

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        
        
    app.run(debug=True)