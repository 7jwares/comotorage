
# Insertion des users dans une base de données

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://user:password@localhost/my_dbase"
db = SQLAlchemy(app)

# création d'une table Utilisateur
class Utilisateur(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nom = db.Column(db.String(100), unique = True, nullable = False)
    prenom = db.Column(db.String(100), unique = True , nullable = False)
    age = db.Column(db.Integer)
    tel = db.Column(db.Integer)

@app.route("/utilisateur", methods=["POST"])
def ajouter_utilisateur():
    data = request.json
    utilisateur = Utilisateur(nom=data["nom"], age=data["age"])
    db.session.add(utilisateur)
    db.session.commit()
    return jsonify({"message": "Utilisateur ajouté !"})

if __name__ == "__main__":
    app.run(debug=True)


# récupérer les informations utilisateurs pour une analyse ( matching )
# accès direct aux informations de la base de données ( connection )





# Analise des données avec python : matching

def calc_score():
    comm = set()


