const places = [
{
title:"Giethoorn, Países Bajos",
img:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
desc:"Un pueblo sin carreteras donde todo se mueve en bote por canales."
},
{
title:"Chefchaouen, Marruecos",
img:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
desc:"Ciudad azul escondida en las montañas del Rif."
},
{
title:"Isla Socotra, Yemen",
img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
desc:"Paisajes únicos que parecen de otro planeta."
},
{
title:"Huacachina, Perú",
img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470",
desc:"Oasis natural rodeado de dunas en el desierto."
},
{
title:"Hallstatt, Austria",
img:"https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
desc:"Pueblo alpino entre lago y montañas."
}
];

let index = 0;
const card = document.getElementById("card");

function load(){
    document.getElementById("img").src = places[index].img;
    document.getElementById("title").textContent = places[index].title;
    document.getElementById("titleBack").textContent = places[index].title;
    document.getElementById("desc").textContent = places[index].desc;
}

card.addEventListener("click", ()=>{
    card.classList.toggle("flipped");
});

function nextPlace(){
    index = (index + 1) % places.length;
    card.classList.remove("flipped");
    load();

    const btn = document.querySelector(".btn");
    btn.classList.add("clicked");
    setTimeout(()=>btn.classList.remove("clicked"),200);
}

load();