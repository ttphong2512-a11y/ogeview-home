const languages = [
    "vi",
    "en",
    "ja",
    "th",
    "id",
    "es",
    "pt",
    "fr",
    "ko",
    "zh-CN"
];


// Nhận ngôn ngữ người dùng

let userLang = localStorage.getItem("ogeview-lang");


if(!userLang){

    let browserLang = navigator.language || "vi";

    browserLang = browserLang.split("-")[0];


    userLang = languages.includes(browserLang)
        ? browserLang
        : "vi";


    localStorage.setItem(
        "ogeview-lang",
        userLang
    );

}



console.log(
    "Ngôn ngữ:",
    userLang
);



// Khu vực anime

const animeList =
document.querySelector(".anime-grid");



// Dữ liệu thử để kiểm tra giao diện

const anime = [

{
title:"Demon Slayer",
year:"2019",
type:"TV"
},

{
title:"One Piece",
year:"1999",
type:"TV"
},

{
title:"Jujutsu Kaisen",
year:"2020",
type:"TV"
}

];



function showAnime(){


animeList.innerHTML="";


anime.forEach(item=>{


let card=document.createElement("div");


card.innerHTML=`

<div style="
background:#171717;
padding:15px;
border-radius:15px;
">

<h3>${item.title}</h3>

<p>
${item.type} • ${item.year}
</p>

</div>

`;



animeList.appendChild(card);



});


}



showAnime();
