from __init__ import db


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    post_title = db.Column(db.String(120), nullable=False)
    post_content = db.Column(db.Text, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "postTitle": self.post_title,
            "postContent": self.post_content,
            "content": self.post_content
        }

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), nullable=False, unique=True)
    password = db.Column(db.String(80), nullable=False)