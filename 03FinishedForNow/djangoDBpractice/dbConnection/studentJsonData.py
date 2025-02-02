import sqlite3

studentJsonData = [
{
    "name": "John",
    "last_name": "Doe",
    "age": 21
}
,
{
    "name": "Jane",
    "last_name": "Smith",
    "age": 22
},
{
    "name": "Alice",
    "last_name": "Johnson",
    "age": 23
},
{
    "name": "Bob",
    "last_name": "Brown",
    "age": 24
},
{
    "name": "Charlie",
    "last_name": "Davis",
    "age": 25
},
{
    "name": "David",
    "last_name": "Wilson",
    "age": 26
},
{
    "name": "Eve",
    "last_name": "Moore",
    "age": 27
},
{
    "name": "Frank",
    "last_name": "Taylor",
    "age": 28
},
{
    "name": "Grace",
    "last_name": "Anderson",
    "age": 29
},
{
    "name": "Hank",
    "last_name": "Thomas",
    "age": 30
},
{
    "name": "Ivy",
    "last_name": "Jackson",
    "age": 31
},
{
    "name": "Jack",
    "last_name": "White",
    "age": 32
},
{
    "name": "Karen",
    "last_name": "Harris",
    "age": 33
},
{
    "name": "Leo",
    "last_name": "Martin",
    "age": 34
},
{
    "name": "Mia",
    "last_name": "Thompson",
    "age": 35
},
{
    "name": "Nina",
    "last_name": "Garcia",
    "age": 36
},
{
    "name": "Oscar",
    "last_name": "Martinez",
    "age": 37
},
{
    "name": "Paul",
    "last_name": "Robinson",
    "age": 38
},
{
    "name": "Quinn",
    "last_name": "Clark",
    "age": 39
},
{
    "name": "Rachel",
    "last_name": "Rodriguez",
    "age": 40
},
{
    "name": "Sam",
    "last_name": "Lewis",
    "age": 41
},
{
    "name": "Tina",
    "last_name": "Lee",
    "age": 42
},
{
    "name": "Uma",
    "last_name": "Walker",
    "age": 43
},
{
    "name": "Victor",
    "last_name": "Hall",
    "age": 44
},
{
    "name": "Wendy",
    "last_name": "Allen",
    "age": 45
},
{
    "name": "Xander",
    "last_name": "Young",
    "age": 46
},
{
    "name": "Yara",
    "last_name": "King",
    "age": 47
},
{
    "name": "Zane",
    "last_name": "Wright",
    "age": 48
},
{
    "name": "Amy",
    "last_name": "Lopez",
    "age": 49
},
{
    "name": "Brian",
    "last_name": "Hill",
    "age": 50
},
{
    "name": "Cathy",
    "last_name": "Scott",
    "age": 51
}
]

# # Connect to the SQLite database (or create it if it doesn't exist)
# conn = sqlite3.connect('db.sqlite3')
# cursor = conn.cursor()

# # Create the student table if it doesn't exist
# cursor.execute('''
# CREATE TABLE IF NOT EXISTS dbConnection_student (
#     id INTEGER PRIMARY KEY AUTOINCREMENT,
#     name TEXT NOT NULL,
#     last_name TEXT NOT NULL,
#     age INTEGER NOT NULL
# )
# ''')

# # Insert the student data into the student table
# for student in studentJsonData:
#     cursor.execute('''
#     INSERT INTO dbConnection_student (name, last_name, age) VALUES (?, ?, ?)
#     ''', (student['name'], student['last_name'], student['age']))

# # Commit the transaction
# conn.commit()

# # Close the connection
# conn.close()