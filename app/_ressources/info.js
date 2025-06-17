
// op on section
const welcome = document.getElementById('welcome'), insc = document.getElementById('insc'), connect = document.getElementById('connect'), ac = document.getElementById('accueil'), plan = document.getElementById('plan'), pub = document.getElementById('pub'), msg = document.getElementById('msg'), profile = document.getElementById('profile');


const vnom = document.getElementById('nom'), vprenom = document.getElementById('prenom'), vtel = document.getElementById('phone_number'), vemail = document.getElementById('email'), vpass = document.getElementById('pass');

// envoie des informations reçues 
function send_id() {
    const nom = vnom.value, prenom = vprenom.value, tel = vtel.value, e_mail = email.value, password = vpass.value; 
    if ('inscrit') {
        fetch("http://localhost:|n_port/user|", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ nom, prenom, tel, e_mail, password })
        })
        .then(response => response.json())
        .then(data => console.log("Données envoyées.\n Réponse du serveur : ", data));
    }
    // default 'connexion'
    else {
        fetch("http://localhost:|n_port/user|", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ tel, e_mail, password })
        })
        .then(response => response.json())
        .then(data => console.log("Informations envoyées.\n Réponse du serveur : ", data));
    }
}



/*
if (inscrit) {}
else () {}
*/
/*
function inscrit() {
    const nom = vnom.value, prenom = vprenom.value, tel = vtel.value, e_mail = email.value, password = vpass.value;
    profile.innerHTML = '<div class="profile"><div class="user_photo"> <img src="" alt="" height="120" width="120" style="border-radius: 50px; background-color: #3d3d3d"> </div><div id="user" class="user_id"><div class="user_names"> <strong>Nom Utilisateur :</strong> ${nom} + '' + ${prenom} </div><div class="hab_gonway"> <strong>Point de départ habituel :</strong> ${point_depart} </div><div class="chart"> <strong>Localisition :</strong> <br> ${chart}</div><div class="horora"> <strong>Horaires :</strong> </div><li> Départ : ${start_point} </li><li> Arrivée : ${cm_point} </li><details class="car_info"> Informations sur le véhicule <li> Marque : ${car_marq} </li><li> Modèle : ${model} </li><li> Nombre de places disponibles : ${car_free_place} </li></details></div></div>';
    await send_id();
}

function connexion() {
    await send_id();
}

function agree() {
    profile.innerHTML = '';
}
*/

function showAccueil() {
    ac.style.display = 'block';
    plan.style.display = 'none';
    pub.style.display = 'none';
    msg.style.display = 'none';
    profile.style.display = 'none';
}
function showPlan() {
    ac.style.display = 'none';
    plan.style.display = 'block';
    pub.style.display = 'none';
    msg.style.display = 'none';
    profile.style.display = 'none';
}
function showPub() {
    ac.style.display = 'none';
    plan.style.display = 'none';
    pub.style.display = 'block';
    msg.style.display = 'none';
    profile.style.display = 'none';
}
function showMsg() {
    ac.style.display = 'none';
    plan.style.display = 'none';
    pub.style.display = 'none';
    msg.style.display = 'block';
    profile.style.display = 'none';
}
function showProfile() {
    ac.style.display = 'none';
    plan.style.display = 'none';
    pub.style.display = 'none';
    msg.style.display = 'none';
    profile.style.display = 'block';
}


/*
function Shows() {
    for (show in []) {}
}
*/



/*
new Promise((resolve, reject) => {
    name: ''
})
*/
