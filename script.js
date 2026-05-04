const places = [
{
title:"Giethoorn",
img:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
desc:"Pueblo sin carreteras, solo canales.",
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
desc:"Pueblo alpino hermoso.",
color:"#ddd6fe"
}
];

let index = 0;
const card = document.getElementById("card");

function load(){
    document.body.style.background = places[index].color;

    document.getElementById("img").src = places[index].img;
    document.getElementById("title").textContent = places[index].title;
    document.getElementById("titleBack").textContent = places[index].title;
    document.getElementById("desc").textContent = places[index].desc;
}

card.addEventListener("click", ()=>{
    card.classList.toggle("flipped");
});

/* next */
document.getElementById("next").onclick = ()=>{
    index = (index + 1) % places.length;
    card.classList.remove("flipped");
    load();
};

/* prev */
document.getElementById("prev").onclick = ()=>{
    index = (index - 1 + places.length) % places.length;
    card.classList.remove("flipped");
    load();
};

load(); 