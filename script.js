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

// Lấy ngôn ngữ trình duyệt
let lang = navigator.language || "vi";

if (!languages.includes(lang)) {
  lang = lang.split("-")[0];
}

if (!languages.includes(lang)) {
  lang = "en";
}

// Tải file ngôn ngữ
async function loadLanguage() {
  const res = await fetch(`lang/${lang}.json`);
  const text = await res.json();

  document.getElementById("siteName").textContent = text.site_name;

  document.getElementById("popularTitle").textContent = text.popular;

  document.getElementById("searchInput").placeholder = text.search;

  document.getElementById("language").innerHTML =
    "🌐 " + lang.toUpperCase();
}

loadLanguage();
