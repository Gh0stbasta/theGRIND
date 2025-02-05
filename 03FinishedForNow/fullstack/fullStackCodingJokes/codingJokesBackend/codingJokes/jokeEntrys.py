import sqlite3

jokeList = [
{
    "joke": "Why do programmers prefer dark mode?",
    "punchline": "Because light attracts bugs."
},
{
    "joke": "How many programmers does it take to change a light bulb?",
    "punchline": "None. It's a hardware problem."
},
{
    "joke": "Why do Java developers wear glasses?",
    "punchline": "Because they don't see sharp."
},
{
    "joke": "What is a programmer's favorite hangout place?",
    "punchline": "The Foo Bar."
},
{
    "joke": "Why do programmers hate nature?",
    "punchline": "It has too many bugs."
},
{
    "joke": "Why do Python programmers prefer snake_case?",
    "punchline": "Because they can't C."
},
{
    "joke": "What do you call a programmer from Finland?",
    "punchline": "Nerdic."
},
{
    "joke": "Why do programmers always mix up Christmas and Halloween?",
    "punchline": "Because Oct 31 == Dec 25."
},
{
    "joke": "How do you comfort a JavaScript bug?",
    "punchline": "You console it."
},
{
    "joke": "Why was the JavaScript developer sad?",
    "punchline": "Because he didn't know how to 'null' his feelings."
}
,
{
    "joke": "Why do programmers prefer using the dark mode?",
    "punchline": "Because the light attracts bugs."
},
{
    "joke": "What is a programmer's favorite type of music?",
    "punchline": "Algo-rhythm."
},
{
    "joke": "Why do programmers always mix up left and right?",
    "punchline": "Because they can't tell the difference between 0 and 1."
},
{
    "joke": "Why was the developer unhappy at their job?",
    "punchline": "They wanted arrays."
},
{
    "joke": "How do you know if a programmer is an extrovert?",
    "punchline": "They look at your shoes when they talk to you."
},
{
    "joke": "Why do programmers prefer iOS development?",
    "punchline": "Because they don't like dealing with Windows."
},
{
    "joke": "Why do programmers hate nature?",
    "punchline": "It has too many bugs."
},
{
    "joke": "Why do programmers prefer using the terminal?",
    "punchline": "Because they don't like windows."
},
{
    "joke": "Why do programmers prefer cats over dogs?",
    "punchline": "Because cats don't have a master."
},
{
    "joke": "Why do programmers prefer to work at night?",
    "punchline": "Because the code is quieter."
}
]

# Connect to the SQLite database
conn = sqlite3.connect('db.sqlite3')
cursor = conn.cursor()

# Create a table for jokes if it doesn't exist
cursor.execute('''
CREATE TABLE IF NOT EXISTS codingJokes_codingjoke (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    joke TEXT NOT NULL,
    punchline TEXT NOT NULL
)
''')

# Insert jokes into the table
for joke in jokeList:
    cursor.execute('''
    INSERT INTO codingJokes_codingjoke (joke, punchline) VALUES (?, ?)
    ''', (joke['joke'], joke['punchline']))

# Commit the changes and close the connection
conn.commit()
conn.close()