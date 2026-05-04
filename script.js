const places = [
{
title:"Giethoorn",
img:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
desc:"Pueblo sin carreteras donde todo se mueve en canales.",
color:"#dbeafe"
},
{
title:"Chefchaouen",
img:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
desc:"Ciudad azul en Marruecos.",
color:"#c7d2fe"
},
{
title:"Socotra",
img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
desc:"Paisajes únicos del mundo.",
color:"#fde68a"
},
{
title:"Huacachina",
img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470",
desc:"Oasis en el desierto.",
color:"#fed7aa"
},
{
title:"Hallstatt",
img:"https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
desc:"Pueblo alpino.",
color:"#ddd6fe"
}
];

let index = 0;
const card = document.getElementById("card");

function load(){
    const p = places[index];

    document.body.style.background = p.color;

    document.getElementById("img").src = p.img;
    document.getElementById("title").textContent = p.title;
    document.getElementById("titleBack").textContent = p.title;
    document.getElementById("desc").textContent = p.desc;
}

card.addEventListener("click", ()=>{
    card.classList.toggle("flipped");
});

document.getElementById("next").onclick = ()=>{
    index = (index + 1) % places.length;
    card.classList.remove("flipped");
    load();

    flash("next");
};

document.getElementById("prev").onclick = ()=>{
    index = (index - 1 + places.length) % places.length;
    card.classList.remove("flipped");
    load();

    flash("prev");
};

function flash(id){
    const b = document.getElementById(id);
    b.classList.add("clicked");
    setTimeout(()=>b.classList.remove("clicked"),200);
}

load();