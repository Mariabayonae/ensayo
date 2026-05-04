const places = [
{
title:"Giethoorn",
img:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
desc:"Pueblo sin carreteras. Todo se mueve en botes por canales. Es conocido como la Venecia del norte.",
},
{
title:"Chefchaouen",
img:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
desc:"Ciudad azul en Marruecos. Sus calles están pintadas completamente en tonos azules.",
},
{
title:"Socotra",
img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
desc:"Isla con paisajes irreales y especies únicas en el mundo.",
},
{
title:"Huacachina",
img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470",
desc:"Oasis natural en medio del desierto peruano rodeado de dunas gigantes.",
},
{
title:"Hallstatt",
img:"https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
desc:"Pueblo alpino entre lago y montañas considerado uno de los más bellos del mundo.",
}
];

let index = 0;

const card = document.getElementById("card");

function load(){
    const p = places[index];

    document.getElementById("img").src = p.img;
    document.getElementById("title").textContent = p.title;
    document.getElementById("titleBack").textContent = p.title;
    document.getElementById("desc").textContent = p.desc;
}

/* flip */
card.addEventListener("click", ()=>{
    card.classList.toggle("flipped");
});

/* next */
document.getElementById("next").onclick = ()=>{
    index++;

    if(index === places.length){
        showGallery();
        return;
    }

    card.classList.remove("flipped");
    load();
};

/* prev */
document.getElementById("prev").onclick = ()=>{
    if(index > 0){
        index--;
        card.classList.remove("flipped");
        load();
    }
};

/* GALERÍA FINAL GRANDE Y CENTRADA */
function showGallery(){
    document.getElementById("app").style.display = "none";

    const g = document.getElementById("gallery");
    g.style.display = "flex";

    places.forEach(p=>{
        const div = document.createElement("div");
        div.className = "small";
        div.innerHTML = `<img src="${p.img}" style="width:100%;height:100%;object-fit:cover;">`;
        g.appendChild(div);
    });
}

load();