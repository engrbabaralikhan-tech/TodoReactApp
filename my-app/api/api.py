from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"
db = SQLAlchemy(app)

class Todo (db.Model):
    id = db. Column(db.Integer, primary_key=True)
    content = db. Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id} {self.content}'

def todo_serializer(todo):
    return {
        'id': todo.id,
        'content': todo.content
    }


@app.route("/api", methods=['GET'])
def index():
    todos = Todo.query.all()
    return jsonify([*map(todo_serializer, todos)])

@app.route("/api/create", methods=['POST'])
def create():
    print(request)
    print(request.data)
    print(request.get_json())
    request_data = json.loads(request.data)
    print(request_data)
    todo = Todo(content=request_data['content'])

    db.session.add(todo)
    db.session.commit()

    return {'201': 'todo created successfully'}

@app.route("/api/<int:id>", methods=['GET'])
def show(id):
    todo = Todo.query.filter_by(id=id).first()
    if todo:
        return jsonify(todo_serializer(todo))
    else:
        return {'404': 'todo not found'}

@app.route("/api/<int:id>", methods=['DELETE'])
def delete(id):
    todo = Todo.query.filter_by(id=id).first()
    if todo:
        db.session.delete(todo)
        db.session.commit()
        return {'204': 'todo deleted successfully'}
    else:
        return {'404': 'todo not found'}
    
# def delete(id):
#     request_data = json.loads(request.data)
#     todo = Todo.query.filter_by(id=request_data['id']).delete()
#     if todo:
#         db.session.commit()
#         return {'204': 'todo deleted successfully'}
#     else:
#         return {'404': 'todo not found'}




if __name__ == "__main__":
    app.run(debug=True)