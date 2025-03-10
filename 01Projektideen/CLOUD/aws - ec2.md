# Projekt: Node.js Webanwendung auf EC2

## Schritte

1. Erstelle eine neue EC2-Instanz.
2. Wähle ein Amazon Linux 2 AMI (oder ein anderes bevorzugtes AMI).
3. Konfiguriere die Sicherheitsgruppe, um HTTP (Port 80) und SSH (Port 22) zuzulassen.
4. Starte die EC2-Instanz.
5. Verbinde dich per SSH mit der EC2-Instanz.
6. Aktualisiere die Paketliste und installiere Node.js und npm.
7. Erstelle ein neues Verzeichnis für die Node.js-Anwendung.
8. Initialisiere ein neues Node.js-Projekt mit `npm init`.
9. Installiere Express.js mit `npm install express`.
10. Erstelle eine einfache Express.js-Anwendung.
11. Teste die Anwendung lokal auf der EC2-Instanz.
12. Konfiguriere die Anwendung, um auf Port 80 zu lauschen.
13. Erstelle ein Systemd-Servicedatei, um die Node.js-Anwendung als Dienst zu starten.
14. Starte und aktiviere den neuen Dienst.
15. Teste den Zugriff auf die Node.js-Anwendung über die öffentliche IP-Adresse der EC2-Instanz.
16. Konfiguriere eine benutzerdefinierte Domain für die Anwendung.
17. Aktualisiere die DNS-Einstellungen deiner Domain, um auf die EC2-Instanz zu verweisen.
18. Teste den Zugriff auf die Anwendung über die benutzerdefinierte Domain.
19. Überwache die EC2-Instanz und die Node.js-Anwendung mit CloudWatch.
20. Dokumentiere den gesamten Prozess und die Konfigurationen.


# Projekt: Django Webanwendung auf EC2

## Schritte

1. Erstelle eine neue EC2-Instanz.
2. Wähle ein Amazon Linux 2 AMI (oder ein anderes bevorzugtes AMI).
3. Konfiguriere die Sicherheitsgruppe, um HTTP (Port 80) und SSH (Port 22) zuzulassen.
4. Starte die EC2-Instanz.
5. Verbinde dich per SSH mit der EC2-Instanz.
6. Aktualisiere die Paketliste und installiere Python3 und pip.
7. Erstelle ein neues Verzeichnis für die Django-Anwendung.
8. Installiere Django mit `pip install django`.
9. Erstelle ein neues Django-Projekt mit `django-admin startproject myproject`.
10. Konfiguriere die Django-Einstellungen (z.B. ALLOWED_HOSTS).
11. Migriere die Datenbank mit `python manage.py migrate`.
12. Erstelle einen Superuser mit `python manage.py createsuperuser`.
13. Teste die Anwendung lokal auf der EC2-Instanz mit `python manage.py runserver 0.0.0.0:8000`.
14. Installiere und konfiguriere Gunicorn als WSGI-Server.
15. Erstelle eine Systemd-Servicedatei, um Gunicorn als Dienst zu starten.
16. Installiere und konfiguriere Nginx als Reverse Proxy.
17. Konfiguriere Nginx, um Anfragen an Gunicorn weiterzuleiten.
18. Starte und aktiviere die Nginx- und Gunicorn-Dienste.
19. Teste den Zugriff auf die Django-Anwendung über die öffentliche IP-Adresse der EC2-Instanz.
20. Dokumentiere den gesamten Prozess und die Konfigurationen.


### Ab hier müsste man das ganze noch mal anprompten a lá
gib mir ein übungsprojekt in 20 schritten, um (thema hier einfügen) zu lernen


# Projekt: MariaDB auf EC2

# Projekt: LAMP-Stack auf EC2

# Next.js-Anwendung auf EC2

# Jenkins CI/CD-Server auf EC2

# Docker-Container auf EC2