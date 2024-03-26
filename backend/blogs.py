from flask import request, jsonify, Blueprint
from auth import db, Post 
from __init__ import app




@app.route("/posts", methods=["GET"])
def get_posts():
    pass
    
    
@app.post("/posts", methods=["POST"])
def create_post():
    if request.method == "POST":
        post_title = request.form['name']
        post_content = request.form['email']
        
        my_data = Post(post_title, post_content)
        db.session.add(my_data)
        db.session.commit()
        return


    

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        
        
    app.run(debug=True)