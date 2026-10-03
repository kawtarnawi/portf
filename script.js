const body=document.body;
const header=document.getElementById('header');
const navMenu=document.getElementById('nav-menu');
const navToggle=document.getElementById('nav-toggle');
const navClose=document.getElementById('nav-close');
const navLinks=document.querySelectorAll('.nav__link');
const themeButton=document.getElementById('theme-button');
const scrollUp=document.getElementById('scroll-up');

navToggle?.addEventListener('click',()=>navMenu.classList.add('show'));
navClose?.addEventListener('click',()=>navMenu.classList.remove('show'));
navLinks.forEach(link=>link.addEventListener('click',()=>navMenu.classList.remove('show')));

const savedTheme=localStorage.getItem('kawtar-theme');
if(savedTheme==='light') body.classList.add('light');
function updateThemeIcon(){themeButton.innerHTML=body.classList.contains('light')?'<i class="ri-sun-line"></i>':'<i class="ri-moon-line"></i>'}
updateThemeIcon();
themeButton.addEventListener('click',()=>{body.classList.toggle('light');localStorage.setItem('kawtar-theme',body.classList.contains('light')?'light':'dark');updateThemeIcon()});

function onScroll(){header.classList.toggle('scrolled',window.scrollY>20);scrollUp.classList.toggle('show',window.scrollY>500);const sections=[...document.querySelectorAll('section[id]')];let current='home';sections.forEach(section=>{if(window.scrollY>=section.offsetTop-160)current=section.id});navLinks.forEach(a=>a.classList.toggle('active-link',a.getAttribute('href')==='#'+current))}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
scrollUp.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const projects={
 eresultat:{number:'01 / CASE STUDY',title:'E-Résultat',description:'Une interface web conçue pendant mon stage d’observation à la DSI du CHU Hassan II de Fès pour structurer le parcours d’envoi des résultats d’analyses médicales aux patients.',role:'Frontend / UI',stack:'HTML · CSS · JavaScript',focus:'Healthcare workflow',story:'J’ai travaillé sur la partie frontend : structure des écrans, navigation, tableaux, formulaires, recherche et présentation des modules Tableau de bord, Patients, Analyses, Envoi des résultats et Historique. Le prototype utilise des données fictives et une fausse authentification pour démontrer le parcours utilisateur. Le backend et la base de données sont prévus comme étape suivante.',link:'https://e-resultat.vercel.app'},
 quizmaster:{number:'02 / CASE STUDY',title:'QuizMaster',description:'Projet académique réalisé en groupe de quatre pour concevoir une plateforme de quiz interactive.',role:'Admin + Student UI',stack:'HTML · CSS · Vanilla JS',focus:'Interactive UI',story:'J’ai pris en charge les parties Admin et Étudiant, en travaillant sur des vues sémantiques en HTML5, leur mise en forme CSS et les interactions avec JavaScript natif. Le projet m’a surtout permis de pratiquer la structuration d’interfaces et la logique côté navigateur.',link:'#work'},
 dashboard:{number:'03 / CASE STUDY',title:'Data Dashboard',description:'Projet Python orienté données autour de fichiers CSV et d’une base MySQL.',role:'Data / Python',stack:'Python · MySQL · Matplotlib',focus:'Analysis & visualization',story:'Le workflow part de données de commandes pour les charger, les préparer, les analyser puis produire des visualisations. Le projet m’a permis de relier programmation Python, SQL et représentation graphique des données.',link:'#work'}
};
const modal=document.getElementById('project-modal');
const modalFields={number:document.getElementById('modal-number'),title:document.getElementById('modal-title'),description:document.getElementById('modal-description'),role:document.getElementById('modal-role'),stack:document.getElementById('modal-stack'),focus:document.getElementById('modal-focus'),story:document.getElementById('modal-story'),link:document.getElementById('modal-link')};
function openModal(key){const p=projects[key];if(!p)return;Object.keys(modalFields).forEach(k=>{if(k==='link')modalFields[k].href=p.link;else modalFields[k].textContent=p[k]});modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('[data-modal]').forEach(btn=>btn.addEventListener('click',()=>openModal(btn.dataset.modal)));
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

const form=document.getElementById('contact-form');
form.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('form-name').value;const email=document.getElementById('form-email').value;const message=document.getElementById('form-message').value;const subject=encodeURIComponent('Contact depuis le portfolio — '+name);const bodyText=encodeURIComponent(`Bonjour Kawtar,\n\n${message}\n\nMon email : ${email}`);window.location.href=`mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${bodyText}`});

const dot=document.querySelector('.cursor-dot');const ring=document.querySelector('.cursor-ring');window.addEventListener('mousemove',e=>{dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px';ring.style.left=e.clientX+'px';ring.style.top=e.clientY+'px'});document.querySelectorAll('a,button,.project').forEach(el=>{el.addEventListener('mouseenter',()=>ring.classList.add('big'));el.addEventListener('mouseleave',()=>ring.classList.remove('big'))});
