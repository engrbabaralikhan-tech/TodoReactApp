# This file is used to initialize the database and add some sample data. 
# It should be run once before starting the Flask app.

from api import db, app, Todo

with app.app_context():
    db.create_all()

    todo = Todo(content="Buy groceries")
    db.session.add(todo)
    todo = Todo(content="Buy dress")
    db.session.add(todo)
    db.session.commit()

    todos = Todo.query.all()
    # print all the todos
    for todo in todos:
        print(todo)