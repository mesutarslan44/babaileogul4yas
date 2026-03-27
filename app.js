const games = [
  { title: "Renk Avcıları", duration: "5", place: "ev", material: "yok", skill: "Dikkat + Dil", steps: ["Baba bir renk söyler.", "Çocuk odada o renkten 3 şey bulur.", "Her bulduğu eşyanın adını söyler."], safety: "Koşmadan oynayın, kaygan zemine dikkat edin." },
  { title: "Yastık Adası", duration: "15", place: "ev", material: "var", skill: "Denge + Motor", steps: ["Yere 4-5 yastık koyun.", "Yastıklara basarak karşıya geçme oyunu oynayın.", "Son turda geri geri geçmeyi deneyin."], safety: "Yastıkları sabit tutun, sert köşelerden uzak oynayın." },
  { title: "Hayvan Taklidi", duration: "5", place: "ev", material: "yok", skill: "Hayal Gücü + Konuşma", steps: ["Baba bir hayvan seçsin.", "Sesini ve yürüyüşünü taklit etsin.", "Çocuk tahmin edip sırayı alsın."], safety: "Zıplamalarda mesafeyi koruyun." },
  { title: "Mini Hazine", duration: "15", place: "ev", material: "var", skill: "Problem Çözme", steps: ["Küçük bir oyuncağı saklayın.", "3 küçük ipucu verin.", "Bulunca roller değişsin."], safety: "Küçük parça yutma riski olan nesne kullanmayın." },
  { title: "Balon Havada", duration: "5", place: "ev", material: "var", skill: "Koordinasyon", steps: ["Bir balon şişirin.", "Yere düşürmeden sırayla dokunun.", "10 sayıya ulaşmayı hedefleyin."], safety: "Patlayan balon parçalarını hemen toplayın." },
  { title: "Parkta Çizgi Takip", duration: "15", place: "disari", material: "yok", skill: "Denge", steps: ["Kaldırım çizgisini seçin.", "Çizginin üstünde yavaş yürüyün.", "Sonunda çak (high-five) ile bitirin."], safety: "Yol kenarında değil, güvenli alanda oynayın." },
  { title: "Ağaç Dedektifi", duration: "30", place: "disari", material: "yok", skill: "Gözlem + Kelime", steps: ["3 farklı yaprak bulun.", "Renk ve şekil farklarını konuşun.", "En büyüğünü seçip isim verin."], safety: "Yabani bitkilere dokunmadan oynayın." },
  { title: "Top Yuvarlama Yarışı", duration: "15", place: "disari", material: "var", skill: "Motor + Sırayla Oynama", steps: ["Başlangıç ve bitiş noktası belirleyin.", "Topu yuvarlayarak bitişe götürün.", "Her turda farklı stil deneyin."], safety: "Etraf boşken oynayın, araç yolundan uzak durun." },
  { title: "Sihirli Komut", duration: "5", place: "ev", material: "yok", skill: "Dinleme + Odak", steps: ["Baba komut verir: zıpla, dön, alkışla.", "Çocuk sadece 'sihirli komut' ile başlayanları yapsın.", "Hata olursa gülerek tekrar edin."], safety: "Dar alanda zıplamayı kısa tutun." },
  { title: "Kumanda Saklama", duration: "5", place: "ev", material: "yok", skill: "Bulma + Mizah", steps: ["Kumandayı güvenli bir yere saklayın.", "Sıcak-soğuk ipucuyla buldurun.", "Bulunca çocuk babayı saklasın."], safety: "Elektronik eşyaları düşürmeyin." },
  { title: "Taş Topla, Say", duration: "15", place: "disari", material: "yok", skill: "Sayma + İnce Motor", steps: ["10 küçük taş toplayın.", "Boyuta göre sıralayın.", "Birlikte sayıp geri bırakın."], safety: "Kirli elleri oyun sonrası yıkayın." },
  { title: "Kutudan Garaj", duration: "30", place: "ev", material: "var", skill: "Yaratıcılık", steps: ["Boş kutularla mini garaj kurun.", "Arabalara park numarası verin.", "Park görevi oyunu oynayın."], safety: "Keskin karton kenarlarını bantlayın." },
  { title: "Gölge Yakalamaca", duration: "15", place: "disari", material: "yok", skill: "Hareket + Refleks", steps: ["Güneşli bir alana geçin.", "Baba çocuğun gölgesine basmaya çalışsın.", "Sonra roller değişsin."], safety: "Düşmeye karşı çimlik bir alanda oynayın." },
  { title: "Heykel Ol!", duration: "5", place: "ev", material: "var", skill: "Kontrol + Dinleme", steps: ["Telefondan hareketli bir müzik açın.", "Beraber dans edin.", "Müzik durunca komik bir pozda donup kalın."], safety: "Kaygan çoraplarla oynamayın." },
  { title: "Uçan Tüy", duration: "5", place: "ev", material: "var", skill: "Nefes Kontrolü", steps: ["Havaya bir kuş tüyü veya küçük peçete atın.", "Sırayla üfleyerek yere düşmesini engelleyin.", "Kim daha çok havada tutacak sayın."], safety: "Baş dönmesine karşı nefesi çok zorlamayın." },
  { title: "Kör Ebe Baba", duration: "15", place: "ev", material: "yok", skill: "Ses Yönü Bulma", steps: ["Babanın gözünü hafifçe bağlayın veya kapatsın.", "Çocuk 'Buradayım baba!' diye seslensin.", "Baba yavaşça emekleyerek çocuğu bulsun (Gıdıklama ile biter)."], safety: "Ortada sivri sehpa olmadığından emin olun." },
  { title: "Marketçilik", duration: "30", place: "ev", material: "var", skill: "Sosyal + Dil", steps: ["5-6 oyuncağı kanepeye dizin.", "Çocuk marketçi, baba müşteri olsun.", "Hayali paralarla alışveriş yapın."], safety: "Küçük bozuk paralar yerine kağıt/hayali para kullanın." },
  { title: "Dev Adımları", duration: "5", place: "disari", material: "yok", skill: "Kaba Motor", steps: ["Parkta bir hedef belirleyin.", "Sadece devasa adımlar atarak hedefe ulaşmaya çalışın.", "Sonra 'karınca adımları' ile geri dönün."], safety: "Esneme hareketlerini abartıp incitmeyin." },
  { title: "Bant Çizgisinde Denge", duration: "15", place: "ev", material: "var", skill: "Denge", steps: ["Halıya renkli bir kağıt bandı düz çizin.", "Sadece bandın üstüne basarak yürüyün.", "Bandın dışında kalan 'suya düşer'."], safety: "İz bırakmayan kağıt bant kullanın." },
  { title: "Gökyüzü Ressamı", duration: "15", place: "disari", material: "yok", skill: "Hayal Gücü", steps: ["Çimlere sırt üstü uzanın.", "Bulutlara bakıp neye benzediklerini söyleyin.", "Bulutlardan bir hikaye oluşturun."], safety: "Güneşe direkt bakmamaya dikkat edin." },
  { title: "Sırtına Ne Çizdim?", duration: "5", place: "ev", material: "yok", skill: "Duyu + Tahmin", steps: ["Çocuk babanın sırtına parmağıyla bir şekil çizsin (Güneş, ev, top vb).", "Baba tahmin etsin.", "Bulamazsa ipucu isteyip roller değişsin."], safety: "Tırnakla çok bastırmadan ve nazikçe çizin." },
  { title: "Patpat Bateri", duration: "15", place: "ev", material: "var", skill: "Ritim", steps: ["Farklı boylarda plastik kapları ters çevirin.", "Tahta kaşıklarla kaplarda ritim tutun.", "Baba çalsın, çocuk dans etsin."], safety: "Sesten rahatsız olacak saatlerde oynamamaya özen gösterin." },
  { title: "Tünelden Geçiş", duration: "15", place: "ev", material: "yok", skill: "Motor", steps: ["Baba elleri ve ayakları üzerinde köprü olsun.", "Çocuk altından emekleyerek geçsin.", "Geçerken kapı birden kapanabilir (Baba sarılabilir)."], safety: "Babanın belini zorlamayacak sürede tutun." },
  { title: "Karşılıklı Top Atma", duration: "15", place: "disari", material: "var", skill: "El-Göz Koordinasyonu", steps: ["Büyük yumuşak bir top alın.", "1 metre mesafeden birbirinize atın.", "Her tutuşta bir adım geriye gidin."], safety: "Sert toplar yerine sünger/plastik top tercih edin." },
  { title: "Sihirli Kutu", duration: "15", place: "ev", material: "var", skill: "Dokunma Duyusu", steps: ["Bir kutuya 3 farklı nesne koyun (Pamuk, oyuncak araba, lego).", "Çocuk bakmadan elini sokup ne olduğunu tahmin etsin.", "Bildiğinde nesneyle 1 dakika oynasın."], safety: "Kutunun içine kesici, delici veya kirli nesneler koymayın." },
  { title: "Çorap Basketbolu", duration: "15", place: "ev", material: "var", skill: "Nişan Alma", steps: ["Temiz çorapları top yapın.", "Boş bir çamaşır sepetini hedefe koyun.", "Farklı mesafelerden basket atmaya çalışın."], safety: "Sepeti devrilmeyecek bir yere sabitleyin." },
  { title: "Hayvan Kurtarma", duration: "30", place: "ev", material: "var", skill: "İnce Motor", steps: ["Plastik hayvanları kağıt bantla yere hafifçe yapıştırın.", "Çocuk bantları dikkatlice söküp hayvanları kurtarsın.", "Kurtardığı her hayvana bir doktor gibi baksın."], safety: "Çocuğun boyayı sökmemesi için zemine dikkat edin." }
];

const titleEl = document.getElementById("gameTitle");
const durationEl = document.getElementById("durationBadge");
const placeEl = document.getElementById("placeBadge");
const materialEl = document.getElementById("materialBadge");
const skillEl = document.getElementById("gameSkill");
const stepsEl = document.getElementById("gameSteps");
const safetyEl = document.getElementById("gameSafety");
const cardEl = document.getElementById("gameCard");

function labelPlace(place) {
  return place === "disari" ? "Dışarı" : "Ev içi";
}

function labelMaterial(material) {
  return material === "var" ? "Malzemeli" : "Malzemesiz";
}

function getFilteredGames(easyMode) {
  const duration = document.getElementById("durationFilter").value;
  const place = document.getElementById("placeFilter").value;
  const material = document.getElementById("materialFilter").value;

  return games.filter((g) => {
    if (duration !== "all" && g.duration !== duration) return false;
    if (place !== "all" && g.place !== place) return false;
    if (material !== "all" && g.material !== material) return false;
    if (easyMode && !(g.duration === "5" && g.material === "yok")) return false;
    return true;
  });
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function renderGame(game) {
  // Animasyon tetikleme (Reflow)
  cardEl.classList.remove("animate-pop");
  void cardEl.offsetWidth; 

  titleEl.textContent = game.title;
  durationEl.textContent = game.duration + " dk";
  placeEl.textContent = labelPlace(game.place);
  materialEl.textContent = labelMaterial(game.material);
  skillEl.textContent = "Beceri: " + game.skill;
  safetyEl.textContent = "Güvenlik notu: " + game.safety;
  
  stepsEl.innerHTML = "";
  game.steps.forEach((s) => {
    const li = document.createElement("li");
    li.textContent = s;
    stepsEl.appendChild(li);
  });

  // Animasyonu tekrar başlat
  cardEl.classList.add("animate-pop");
}

function showRandom(easyMode = false) {
  const filtered = getFilteredGames(easyMode);
  if (!filtered.length) {
    cardEl.classList.remove("animate-pop");
    void cardEl.offsetWidth; 

    titleEl.textContent = "Bu filtrede oyun bulamadım 😅";
    skillEl.textContent = "Beceri: Filtreleri biraz gevşet";
    durationEl.textContent = "--";
    placeEl.textContent = "--";
    materialEl.textContent = "--";
    stepsEl.innerHTML = "<li>Süre veya ortam filtresini değiştirip tekrar deneyin.</li>";
    safetyEl.textContent = "Güvenlik notu: Çocuğun konforuna göre ilerle.";
    
    cardEl.classList.add("animate-pop");
    return;
  }
  renderGame(pickRandom(filtered));
}

document.getElementById("randomBtn").addEventListener("click", () => showRandom(false));
document.getElementById("easyModeBtn").addEventListener("click", () => showRandom(true));
document.getElementById("durationFilter").addEventListener("change", () => showRandom(false));
document.getElementById("placeFilter").addEventListener("change", () => showRandom(false));
document.getElementById("materialFilter").addEventListener("change", () => showRandom(false));

showRandom(false);
