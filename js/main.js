// Portfolio – Noham Baghdad
var IMGS={
 "p1": [
  "images/projets/artisan-accueil.jpg",
  "images/projets/artisan-equipe.jpg",
  "images/projets/artisan-realisations.jpg",
  "images/projets/artisan-baguette.jpg",
  "images/projets/artisan-partenaires.jpg",
  "images/projets/artisan-tarifs.jpg",
  "images/projets/artisan-contact.jpg"
 ],
 "p2": [
  "images/projets/cinema-accueil.jpg",
  "images/projets/cinema-films.jpg",
  "images/projets/cinema-realisateurs.jpg",
  "images/projets/cinema-connexion.jpg",
  "images/projets/cinema-insertion.jpg"
 ],
 "p3": [
  "images/projets/simon-simon.jpg"
 ]
};
document.querySelectorAll(".car").forEach(function(c){
 var a=IMGS[c.dataset.k],i=0,img=c.querySelector("img"),d=c.querySelector(".dots");
 if(a.length<2)c.classList.add("one");
 a.forEach(function(){d.appendChild(document.createElement("i"))});
 function show(n){i=(n+a.length)%a.length;img.src=a[i];[].forEach.call(d.children,function(e,j){e.classList.toggle("on",j===i)})}
 c.querySelector(".pv").onclick=function(){show(i-1)};
 c.querySelector(".nx").onclick=function(){show(i+1)};
  img.onclick=function(){LB.a=a;LB.sync=show;lbShow(i);lb.classList.toggle("one",a.length<2);lb.hidden=false;document.body.style.overflow="hidden"};
 show(0);
});
var lb=document.getElementById("lb"),LB={a:[],sync:null};
function lbShow(n){var m=LB.a.length;n=(n+m)%m;LB.i=n;lb.querySelector("img").src=LB.a[n];lb.querySelector(".lc").textContent=(n+1)+" / "+m;if(LB.sync)LB.sync(n)}
function lbClose(){lb.hidden=true;document.body.style.overflow=""}
lb.querySelector(".x").onclick=lbClose;
lb.querySelector(".lp").onclick=function(){lbShow(LB.i-1)};
lb.querySelector(".ln").onclick=function(){lbShow(LB.i+1)};
lb.onclick=function(e){if(e.target===lb)lbClose()};
document.addEventListener("keydown",function(e){if(lb.hidden)return;if(e.key==="Escape")lbClose();if(e.key==="ArrowLeft")lbShow(LB.i-1);if(e.key==="ArrowRight")lbShow(LB.i+1)});

var T={
en:{home:"Home",about:"About Me",projects:"Projects",contact:"Contact",title:"Web developer",
intro:"Second-year student in the BUT MMI (Multimedia and Internet Professions) Bachelor's degree, a 3-year programme, in Saint-Lô, France.",
aboutTxt:"Passionate about coding since I first started in secondary school, my goal today is to keep developing my skills, solve problems, build projects and take pride in the finished result.",
soft:"Soft skills",tech:"Technologies",software:"Software",img:"Project preview",p1t:"Artisan Website",p2t:"Cinema's Website",top:"Back to top"},
fr:{home:"Accueil",about:"À propos",projects:"Projets",contact:"Contact",title:"Développeur web",
intro:"Étudiant en deuxième année de BUT MMI (Métiers du Multimédia et de l'Internet), un diplôme en 3 ans, à Saint-Lô, en France.",
aboutTxt:"Passionné de code depuis mes débuts au collège, mon objectif aujourd'hui est de continuer à développer mes compétences, résoudre des problèmes, construire des projets et être fier du résultat final.",
soft:"Savoir-être",tech:"Technologies",software:"Logiciels",img:"Aperçu du projet",p1t:"Site d'artisan",p2t:"Site de cinéma",top:"Retour en haut",
p1:"Ce site était mon premier vrai projet en HTML, CSS et PHP. L'objectif était de créer un site pour un artisan en appliquant tout ce que nous avions appris pendant notre premier semestre. J'ai utilisé HTML et CSS pour le front-end, et PHP pour générer le contenu répétitif, comme les produits vendus par l'artisan et les tableaux d'informations sur les produits. Ce projet a été un tournant : il m'a beaucoup appris sur la programmation et a confirmé ma passion pour le back-end et l'optimisation.",
p2:"Le site du cinéma est l'un de mes plus gros projets à ce jour. Je l'ai réalisé en HTML, CSS, JavaScript, PHP et SQL. L'objectif était de créer un site connecté à une base de données, dans laquelle je pouvais récupérer des données pour les afficher et où les utilisateurs pouvaient en ajouter. Le projet comprend aussi un système d'authentification basé sur les sessions. Grâce à ce projet, j'ai appris à structurer et sécuriser un site, et à bien utiliser les formulaires.",
p3:"Bien que ce ne soit pas l'un de mes plus gros projets, je le considère comme l'un des plus importants. Je l'ai réalisé principalement en JavaScript, avec un peu de HTML et de CSS. L'objectif était de recréer le jeu Simon avec addEventListener, setTimeout et setInterval. Grâce à cet exercice, j'ai appris à séparer et organiser mes fonctions pour garder un code plus simple et plus facile à maintenir."}};
var EN0={};
document.querySelectorAll("[data-i18n]").forEach(function(e){EN0[e.dataset.i18n]=EN0[e.dataset.i18n]||e.textContent;});
for(var k in EN0)if(!T.en[k])T.en[k]=EN0[k];Object.assign(T.fr,{"legal": "Mentions légales", "msgT": "Envoyez-moi un message", "cIntro": "Mon profil ou un projet vous intéresse ? Envoyez-moi un message, je vous répondrai dès que possible.", "fName": "Nom", "fMail": "E-mail", "fMsg": "Message", "fSend": "Envoyer", "fNote": "Votre application de messagerie va s'ouvrir avec le message prêt à être envoyé.", "cInfo": "Coordonnées", "cLocL": "Localisation :", "cLoc": "Saint-Lô, France", "back": "← Retour à l'accueil", "l1t": "Éditeur du site", "l1": "Ce portfolio personnel est édité par Noham Baghdad, étudiant en BUT MMI (Métiers du Multimédia et de l'Internet), à Saint-Lô, France. Directeur de la publication : Noham Baghdad.", "l2t": "Hébergement", "l2": "Hébergeur : GitHub Pages, exploité par GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis (pages.github.com).", "l3t": "Propriété intellectuelle", "l3": "Les textes, la mise en page et le code de ce site sont l'œuvre de Noham Baghdad. Les projets présentés ont été réalisés dans un cadre scolaire ; les images et logos de tiers appartiennent à leurs propriétaires respectifs. Toute reproduction sans autorisation est interdite.", "l4t": "Données personnelles", "l4": "Ce site n'utilise ni outil de suivi ni cookie de mesure d'audience. Vos choix de langue et de thème sont enregistrés uniquement dans votre navigateur. Le formulaire de contact n'envoie rien à un serveur : il ouvre votre messagerie, et votre message ne m'arrive que si vous l'envoyez. Vous pouvez demander l'accès, la rectification ou la suppression de nos échanges en écrivant à l'adresse ci-dessus (droits RGPD).", "l5t": "Responsabilité", "l5": "Je m'efforce de garder les informations de ce site exactes, mais je ne peux pas garantir qu'elles soient complètes ou à jour. Je ne suis pas responsable du contenu des sites externes vers lesquels ce site renvoie.", "phName": "Votre nom", "phMail": "vous@exemple.com", "phMsg": "Votre message…"});Object.assign(T.en,{"phName": "Your name", "phMail": "you@example.com", "phMsg": "Your message…"});
var root=document.documentElement;
function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
function set(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function setLang(l){
 document.querySelectorAll("[data-i18n]").forEach(function(e){var t=T[l][e.dataset.i18n];if(t)e.textContent=t;});
 document.querySelectorAll("[data-ph]").forEach(function(e){e.placeholder=T[l][e.dataset.ph]||""});root.lang=l;document.getElementById("lt").textContent=l==="en"?"FR":"EN";set("lang",l);
}
function isDark(){var t=root.dataset.theme;return t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches}
function setTheme(t){root.dataset.theme=t;set("theme",t);}
var l=get("lang")||((navigator.language||"en").slice(0,2)==="fr"?"fr":"en");
setLang(l);
setTheme(get("theme")||(isDark()?"dark":"light"));
document.getElementById("lang").onclick=function(){setLang(root.lang==="en"?"fr":"en")};
document.getElementById("theme").onclick=function(){setTheme(isDark()?"light":"dark")};
var EMAIL="noham.baghdad@gmail.com";
document.querySelectorAll(".mail:not([href])").forEach(function(a){a.textContent=EMAIL;a.href="mailto:"+EMAIL});
function go(v,sc){["home","contact","legal"].forEach(function(x){document.getElementById("v-"+x).hidden=x!==v});
 var el=sc&&document.getElementById(sc);if(el)el.scrollIntoView({behavior:"smooth"});else window.scrollTo({top:0});}
document.addEventListener("click",function(e){var a=e.target.closest("[data-view]");if(!a)return;e.preventDefault();go(a.dataset.view,a.dataset.scroll)});
document.getElementById("cf").onsubmit=function(e){e.preventDefault();var f=e.target;
 var body=f.msg.value+"\n\n— "+f.nm.value+" ("+f.em.value+")";
 var a=document.createElement("a");a.href="mailto:"+EMAIL+"?subject="+encodeURIComponent("Portfolio — "+f.nm.value)+"&body="+encodeURIComponent(body);a.click();};
