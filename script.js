const places = [
{
title:"Giethoorn, Países Bajos",
img:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
desc:"Un pueblo completamente sin carreteras. La vida se mueve en botes por canales. Es conocido como la ‘Venecia del norte’ por su tranquilidad y paisaje único."
},
{
title:"Chefchaouen, Marruecos",
img:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
desc:"Ciudad pintada completamente de azul. Sus calles, paredes y escaleras crean un ambiente único en las montañas del Rif."
},
{
title:"Isla Socotra, Yemen",
img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
desc:"Una isla con especies únicas en el mundo. Sus árboles parecen de otro planeta y su paisaje es casi extraterrestre."
},
{
title:"Huacachina, Perú",
img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470",
desc:"Un oasis natural rodeado de enormes dunas de arena. Es uno de los pocos oasis naturales en Sudamérica."
},
{
title:"Hallstatt, Austria",
img:"https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
desc:"Pueblo alpino entre lago y montañas. Es considerado uno de los pueblos más bellos del mundo."
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

/* flip */
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