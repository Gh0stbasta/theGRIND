from sqlite3 import connect
import json

bike_data_list = [
    {"id": 1, "brand": "Trek", "modelname": "Domane SL 7", "weight": 8.5, "cost": 4999.99, "img": "./assets/bikes/trekDomanSL7.jpg"},
    {"id": 2, "brand": "Specialized", "modelname": "Roubaix Pro", "weight": 7.8, "cost": 5999.99, "img": "./assets/bikes/specializedRoubaixPro.jpg"},
    {"id": 3, "brand": "Cannondale", "modelname": "Synapse Carbon", "weight": 8.2, "cost": 4500.00, "img": "./assets/bikes/cannondaleSynapseCarbon.png"},
    {"id": 4, "brand": "Giant", "modelname": "Defy Advanced", "weight": 8.0, "cost": 3200.00, "img": "./assets/bikes/giantDefyAdvanced.jpg"},
    {"id": 5, "brand": "Bianchi", "modelname": "Infinito CV", "weight": 7.9, "cost": 5300.00, "img": "./assets/bikes/bianchiInfinito.png"},
    {"id": 6, "brand": "Cervelo", "modelname": "R3", "weight": 7.6, "cost": 4800.00, "img": "./assets/bikes/cerveloR3.jpg"},
    {"id": 7, "brand": "Pinarello", "modelname": "Dogma F12", "weight": 7.4, "cost": 12000.00, "img": "./assets/bikes/pinarelloDogmaF12.jpg"},
    {"id": 8, "brand": "Scott", "modelname": "Addict RC", "weight": 7.5, "cost": 7000.00, "img": "./assets/bikes/scottAddict.jpg"},
    {"id": 9, "brand": "Colnago", "modelname": "C64", "weight": 7.3, "cost": 14000.00, "img": "./assets/bikes/colnagoC64.jpg"},
    {"id": 10, "brand": "Merida", "modelname": "Scultura", "weight": 7.7, "cost": 3500.00, "img": "./assets/bikes/meridaScultura.jpg"},
    {"id": 11, "brand": "Canyon", "modelname": "Ultimate CF SLX", "weight": 7.2, "cost": 6000.00, "img": "./assets/bikes/canyonUltimate.png"},
    {"id": 12, "brand": "Felt", "modelname": "FR Advanced", "weight": 7.8, "cost": 4500.00, "img": "./assets/bikes/feltFRAdvanced.jpg"},
    {"id": 13, "brand": "Orbea", "modelname": "Orca M20", "weight": 7.9, "cost": 4000.00, "img": "./assets/bikes/orbeaOrcaM20.jpg"},
    {"id": 14, "brand": "Wilier", "modelname": "Cento10NDR", "weight": 7.5, "cost": 8000.00, "img": "./assets/bikes/wilierCento10.png"},
    {"id": 15, "brand": "Lapierre", "modelname": "Xelius SL", "weight": 7.6, "cost": 5000.00, "img": "./assets/bikes/lapierreXelius.png"},
    {"id": 16, "brand": "Cube", "modelname": "Agree C:62", "weight": 7.8, "cost": 3000.00, "img": "./assets/bikes/cubeAgree.jpeg"},
    {"id": 17, "brand": "Ribble", "modelname": "Endurance SL", "weight": 7.7, "cost": 3500.00, "img": "./assets/bikes/ribbleEndurance.jpg"},
    {"id": 18, "brand": "Factor", "modelname": "O2 VAM", "weight": 7.4, "cost": 10000.00, "img": "./assets/bikes/factorO2.jpg"},
    {"id": 19, "brand": "BMC", "modelname": "Teammachine SLR01", "weight": 7.3, "cost": 11000.00, "img": "./assets/bikes/bmcTeammachine.jpg"},
    {"id": 20, "brand": "Look", "modelname": "785 Huez RS", "weight": 7.5, "cost": 9000.00, "img": "./assets/bikes/look785.png"}
]

conn = connect('db.sqlite3')
cursor = conn.cursor()

cursor.execute('DROP TABLE IF EXISTS bikes_bike')


cursor.execute('''
CREATE TABLE IF NOT EXISTS bikes_bike (
    id INTEGER PRIMARY KEY,
    brand TEXT,
    modelname TEXT,
    weight REAL,
    cost REAL,
    img TEXT
)
''')

for bike in bike_data_list:
    cursor.execute('''
    INSERT INTO bikes_bike (id, brand, modelname, weight, cost, img)
    VALUES (?, ?, ?, ?, ?, ?)
    ''', (bike['id'], bike['brand'], bike['modelname'], bike['weight'], bike['cost'], bike['img']))

conn.commit()
conn.close()