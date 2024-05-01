from flask import request, jsonify
from __init__ import app, db
from models import Post



    
    
    
@app.route("/create_posts", methods=["GET", "POST"])
def create_post(): 
    if request.method == "POST":
        post_title = request.form['name']
        post_content = request.form['email']
        if not post_title:
            error = "you must have a title"
        
        my_data = Post(post_title, post_content)
        db.session.add(my_data)
        db.session.commit()
        return
    
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