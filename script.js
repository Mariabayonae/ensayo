const places = [
{
title:"Giethoorn",
img:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
desc:"Pueblo sin carreteras. Todo se mueve en canales y botes. Conocido como la Venecia del norte."
},
{
title:"Chefchaouen",
img:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
desc:"Ciudad azul en Marruecos. Cada calle está pintada en tonos azules únicos."
},
{
title:"Socotra",
img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
desc:"Isla con paisajes irreales y árboles que no existen en otro lugar del mundo."
},
{
title:"Huacachina",
img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470",
desc:"Oasis natural rodeado de dunas gigantes en medio del desierto peruano."
},
{
title:"Hallstatt",
img:"https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
desc:"Pueblo alpino entre lago y montañas considerado uno de los más bellos del mundo."
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

document.getElementById("next").onclick = ()=>{
    index = (index + 1) % places.length;
    card.classList.remove("flipped");
    load();
};

document.getElementById("prev").onclick = ()=>{
    index = (index - 1 + places.length) % places.length;
    card.classList.remove("flipped");
    load();
};

load();