import getpass  # Importieren des getpass-Moduls, um Passwörter sicher einzugeben, ohne sie auf dem Bildschirm anzuzeigen
import hashlib  # Importieren des hashlib-Moduls, um Hash-Operationen durchzuführen

def main():
    # Vordefinierter SHA-256-Hash für das Passwort "geheim"
    predefined_hash = hashlib.sha256("geheim".encode()).hexdigest()
    print(f"Vordefinierter Hash-Wert: {predefined_hash}")
    
    # Den Benutzer auffordern, ein Passwort sicher einzugeben
    password = getpass.getpass("Geben Sie Ihr Passwort ein: ")
    
    # Den SHA-256-Hash des eingegebenen Passworts berechnen
    password_hash = hashlib.sha256(password.encode()).hexdigest()

    # Den berechneten Hash mit dem vordefinierten Hash vergleichen
    if password_hash == predefined_hash:
        print("Passwort stimmt mit dem Hash überein.")  # Wenn die Hashes übereinstimmen, Erfolgsmeldung ausgeben
    else:
        print("Passwort stimmt nicht mit dem Hash überein.")  # Wenn die Hashes nicht übereinstimmen, Fehlermeldung ausgeben

# Einstiegspunkt des Skripts
if __name__ == "__main__":
    main()