# Projekt: Website Hosting mit S3 und CloudFront

## Schritte

1. Erstelle einen neuen S3-Bucket.
2. Konfiguriere den S3-Bucket für statisches Website-Hosting.
3. Lade deine statischen Website-Dateien in den S3-Bucket hoch.
4. Stelle sicher, dass die Dateien öffentlich zugänglich sind.
5. Teste den Zugriff auf die Website über die S3-Bucket-URL.
6. Erstelle eine neue CloudFront-Distribution.
7. Konfiguriere die CloudFront-Distribution mit dem S3-Bucket als Origin.
8. Konfiguriere die Cache-Einstellungen für die CloudFront-Distribution.
9. Erstelle ein SSL-Zertifikat mit AWS Certificate Manager (ACM).
10. Füge das SSL-Zertifikat zur CloudFront-Distribution hinzu.
11. Konfiguriere benutzerdefinierte Fehlerseiten in CloudFront.
12. Teste den Zugriff auf die Website über die CloudFront-URL.
13. Konfiguriere eine benutzerdefinierte Domain für die Website.
14. Aktualisiere die DNS-Einstellungen deiner Domain, um auf CloudFront zu verweisen.
15. Teste den Zugriff auf die Website über die benutzerdefinierte Domain.
16. Überprüfe die CloudFront-Statistiken und -Protokolle.
17. Konfiguriere automatische Invalidationen für CloudFront.
18. Füge Sicherheitsheader zur CloudFront-Distribution hinzu.
19. Teste die Website auf verschiedenen Geräten und Browsern.
20. Dokumentiere den gesamten Prozess und die Konfigurationen.

# Projekt: Serverless Webanwendung mit AWS Lambda und API Gateway

## Schritte

1. Erstelle eine neue Lambda-Funktion.
2. Schreibe den Code für die Lambda-Funktion (z.B. eine einfache REST-API).
3. Teste die Lambda-Funktion in der AWS-Konsole.
4. Erstelle eine neue API in API Gateway.
5. Konfiguriere eine neue Ressource und Methode in API Gateway.
6. Verknüpfe die Methode mit der Lambda-Funktion.
7. Konfiguriere die Methodensicherheit (z.B. API-Schlüssel).
8. Teste die API in der API Gateway-Konsole.
9. Erstelle eine neue DynamoDB-Tabelle.
10. Füge Berechtigungen für DynamoDB-Zugriff zur Lambda-Funktion hinzu.
11. Aktualisiere den Lambda-Code, um Daten in DynamoDB zu speichern.
12. Teste die aktualisierte Lambda-Funktion.
13. Aktualisiere die API Gateway-Konfiguration, um die neuen Lambda-Änderungen zu nutzen.
14. Teste die API erneut.
15. Erstelle eine neue Benutzeroberfläche (z.B. HTML/JavaScript) für die API.
16. Hoste die Benutzeroberfläche in einem S3-Bucket.
17. Konfiguriere CORS in API Gateway.
18. Teste die gesamte Anwendung (Frontend und Backend).
19. Überwache die Lambda-Funktion mit CloudWatch.
20. Dokumentiere den gesamten Prozess und die Konfigurationen.

# Projekt: Automatisierte Backups mit AWS Lambda und S3

## Schritte

1. Erstelle einen neuen S3-Bucket für Backups.
2. Erstelle eine neue Lambda-Funktion.
3. Schreibe den Code für die Lambda-Funktion (z.B. Kopieren von Dateien/Datenbanken).
4. Teste die Lambda-Funktion in der AWS-Konsole.
5. Erstelle eine neue CloudWatch-Event-Regel.
6. Konfiguriere die CloudWatch-Event-Regel, um die Lambda-Funktion regelmäßig auszuführen.
7. Teste die CloudWatch-Event-Regel.
8. Füge Berechtigungen für S3-Zugriff zur Lambda-Funktion hinzu.
9. Aktualisiere den Lambda-Code, um Daten in den S3-Bucket zu kopieren.
10. Teste die aktualisierte Lambda-Funktion.
11. Überprüfe die Backups im S3-Bucket.
12. Konfiguriere Lebenszyklusrichtlinien für den S3-Bucket.
13. Teste die Lebenszyklusrichtlinien.
14. Überwache die Lambda-Funktion mit CloudWatch.
15. Konfiguriere Alarme für Fehler in der Lambda-Funktion.
16. Teste die Alarme.
17. Erstelle eine Wiederherstellungsstrategie für die Backups.
18. Teste die Wiederherstellungsstrategie.
19. Dokumentiere den gesamten Prozess und die Konfigurationen.
20. Führe regelmäßige Überprüfungen der Backups durch.

# Projekt: Echtzeit-Datenverarbeitung mit Kinesis

## Schritte

1. Erstelle einen neuen Kinesis-Datenstream.
2. Konfiguriere die Shard-Anzahl für den Datenstream.
3. Erstelle eine neue Lambda-Funktion.
4. Schreibe den Code für die Lambda-Funktion (z.B. Verarbeitung von Daten).
5. Teste die Lambda-Funktion in der AWS-Konsole.
6. Erstelle eine neue Kinesis-Stream-Auslöser für die Lambda-Funktion.
7. Teste den Kinesis-Stream-Auslöser.
8. Erstelle eine neue DynamoDB-Tabelle.
9. Füge Berechtigungen für DynamoDB-Zugriff zur Lambda-Funktion hinzu.
10. Aktualisiere den Lambda-Code, um Daten in DynamoDB zu speichern.
11. Teste die aktualisierte Lambda-Funktion.
12. Erstelle eine neue Kinesis Data Firehose.
13. Konfiguriere die Firehose, um Daten in einen S3-Bucket zu liefern.
14. Teste die Kinesis Data Firehose.
15. Überwache den Kinesis-Datenstream mit CloudWatch.
16. Konfiguriere Alarme für den Kinesis-Datenstream.
17. Teste die Alarme.
18. Erstelle eine Visualisierung der verarbeiteten Daten (z.B. mit QuickSight).
19. Teste die Visualisierung.
20. Dokumentiere den gesamten Prozess und die Konfigurationen.

# Projekt: CI/CD-Pipeline mit AWS CodePipeline

## Schritte

1. Erstelle ein neues CodeCommit-Repository.
2. Füge deinen Anwendungscode zum CodeCommit-Repository hinzu.
3. Erstelle ein neues CodeBuild-Projekt.
4. Konfiguriere die Buildspec-Datei für das CodeBuild-Projekt.
5. Teste das CodeBuild-Projekt.
6. Erstelle eine neue CodePipeline.
7. Füge eine Quelle (CodeCommit) zur Pipeline hinzu.
8. Füge eine Build-Phase (CodeBuild) zur Pipeline hinzu.
9. Teste die Pipeline bis zur Build-Phase.
10. Erstelle eine neue CodeDeploy-Anwendung.
11. Konfiguriere die Bereitstellungsgruppe für die CodeDeploy-Anwendung.
12. Füge eine Bereitstellungsphase (CodeDeploy) zur Pipeline hinzu.
13. Teste die gesamte Pipeline.
14. Konfiguriere automatische Tests in der Pipeline.
15. Teste die automatischen Tests.
16. Konfiguriere Benachrichtigungen für Pipeline-Fehler.
17. Teste die Benachrichtigungen.
18. Überwache die Pipeline mit CloudWatch.
19. Konfiguriere Alarme für die Pipeline.
20. Dokumentiere den gesamten Prozess und die Konfigurationen.

# Projekt: Virtuelles privates Netzwerk (VPN) mit VPC

## Schritte

1. Erstelle eine neue VPC.
2. Erstelle öffentliche und private Subnetze in der VPC.
3. Konfiguriere Routing-Tabellen für die Subnetze.
4. Erstelle eine neue Internet-Gateway und verbinde es mit der VPC.
5. Konfiguriere die Routing-Tabelle des öffentlichen Subnetzes für das Internet-Gateway.
6. Erstelle eine neue NAT-Gateway und verbinde es mit dem öffentlichen Subnetz.
7. Konfiguriere die Routing-Tabelle des privaten Subnetzes für das NAT-Gateway.
8. Erstelle eine neue Sicherheitsgruppe für die VPC.
9. Konfiguriere die Sicherheitsgruppe für eingehenden und ausgehenden Datenverkehr.
10. Erstelle eine neue EC2-Instanz im öffentlichen Subnetz.
11. Teste den Zugriff auf die EC2-Instanz über das Internet.
12. Erstelle eine neue EC2-Instanz im privaten Subnetz.
13. Teste den Zugriff auf die EC2-Instanz im privaten Subnetz über das NAT-Gateway.
14. Erstelle eine neue VPN-Verbindung.
15. Konfiguriere die VPN-Verbindung mit deinem lokalen Netzwerk.
16. Teste die VPN-Verbindung.
17. Überwache die VPN-Verbindung mit CloudWatch.
18. Konfiguriere Alarme für die VPN-Verbindung.
19. Teste die Alarme.
20. Dokumentiere den gesamten Prozess und die Konfigurationen.

# Projekt: Machine Learning Modell mit SageMaker

## Schritte

1. Erstelle ein neues SageMaker-Notebook-Instance.
2. Starte die Notebook-Instance.
3. Erstelle ein neues Jupyter-Notebook in der Notebook-Instance.
4. Importiere die benötigten Bibliotheken (z.B. pandas, numpy, sklearn).
5. Lade und bereite die Daten für das Training vor.
6. Erstelle ein Machine Learning Modell (z.B. ein einfaches lineares Regressionsmodell).
7. Trainiere das Modell mit den vorbereiteten Daten.
8. Evaluieren Sie die Leistung des Modells.
9. Speichere das trainierte Modell.
10. Erstelle ein neues SageMaker-Training-Job.
11. Konfiguriere den Training-Job mit dem gespeicherten Modell und den Daten.
12. Starte den Training-Job.
13. Überwache den Training-Job mit CloudWatch.
14. Erstelle ein neues SageMaker-Endpoint.
15. Bereitstelle das trainierte Modell als Endpoint.
16. Teste den Endpoint mit neuen Daten.
17. Erstelle eine einfache Benutzeroberfläche, um Vorhersagen zu treffen.
18. Hoste die Benutzeroberfläche in einem S3-Bucket.
19. Teste die gesamte Anwendung (Frontend und Backend).
20. Dokumentiere den gesamten Prozess und die Konfigurationen.
