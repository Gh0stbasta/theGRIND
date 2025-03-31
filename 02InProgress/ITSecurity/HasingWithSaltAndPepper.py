import hashlib
import os

# 🔐 Generiert einen zufälligen Salt (hier: 16 Bytes)
def generate_salt(length=16):
    salt = os.urandom(length)
    print(f"Generated salt: {salt.hex()}")
    print(f"Generated salt: {salt}")
    return salt

# 🔐 Holt den geheimen Pepper (aus sicherer Quelle – z. B. Umgebungsvariable)
def get_secret_pepper():
    pepper = b'supersecretpepper123'  # In echt NICHT hardcoded!
    print(f"Using pepper: {pepper}")
    return pepper

# 🗄 Simulierte Datenbank
user_database = {}

# 🧾 Registrierung eines neuen Benutzers
def register_user(username, password):
    salt = generate_salt()  # Zufälligen Salt erzeugen
    pepper = get_secret_pepper()  # Geheimen Pepper holen

    # Passwort + Pepper + Salt → hash berechnen
    hashed_password = hashlib.sha256(password.encode() + pepper + salt).hexdigest()

    # Benutzername, Salt und Hash speichern
    user_database[username] = {
        'salt': salt,
        'hashed_password': hashed_password
    }
    print(f"Hashed password for {username}: {hashed_password}\n")

# 🔑 Login-Überprüfung
def verify_login(username, password):
    if username not in user_database:
        return False  # Benutzer existiert nicht

    # Salt & gespeicherten Hash abrufen
    salt = user_database[username]['salt']
    stored_hash = user_database[username]['hashed_password']
    pepper = get_secret_pepper()  # Pepper erneut abrufen

    # Hash neu berechnen mit eingegebenem Passwort
    computed_hash = hashlib.sha256(password.encode() + pepper + salt).hexdigest()

    # Vergleich: passt der berechnete Hash zum gespeicherten?
    return computed_hash == stored_hash

# 🖥 Konsolen-UI
def console_ui():
    while True:
        # Konsole leeren (plattformabhängig)
        print("\n--- Benutzerverwaltung ---")
        print("1. Benutzer registrieren")
        print("2. Login überprüfen")
        print("3. Beenden")
        choice = input("Wähle eine Option: ")

        if choice == "1":
            username = input("Benutzername: ")
            password = input("Passwort: ")
            if username in user_database:
                print("❌ Benutzername existiert bereits!")
            else:
                register_user(username, password)
                print("✅ Benutzer erfolgreich registriert!")

        elif choice == "2":
            username = input("Benutzername: ")
            password = input("Passwort: ")
            if verify_login(username, password):
                print("✅ Login erfolgreich!")
            else:
                print("❌ Login fehlgeschlagen!")

        elif choice == "3":
            print("Programm beendet.")
            break

        else:
            print("❌ Ungültige Auswahl!")

# Start der Konsolen-UI
if __name__ == "__main__":
    console_ui()
