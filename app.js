const games = [
  { id:"g1", title: "Renk Avcıları", duration: "5", place: "ev", material: "yok", skill: "Dikkat + Dil", steps: ["Baba bir renk söyler.", "Çocuk odada o renkten 3 şey bulur.", "Her bulduğu eşyanın adını söyler."], safety: "Koşmadan oynayın, kaygan zemine dikkat edin." },
  { id:"g2", title: "Yastık Adası", duration: "15", place: "ev", material: "var", skill: "Denge + Motor", steps: ["Yere 4-5 yastık koyun.", "Yastıklara basarak karşıya geçme oyunu oynayın.", "Son turda geri geri geçmeyi deneyin."], safety: "Yastıkları sabit tutun, sert köşelerden uzak oynayın." },
  { id:"g3", title: "Hayvan Taklidi", duration: "5", place: "ev", material: "yok", skill: "Hayal Gücü + Konuşma", steps: ["Baba bir hayvan seçsin.", "Sesini ve yürüyüşünü taklit etsin.", "Çocuk tahmin edip sırayı alsın."], safety: "Zıplamalarda mesafeyi koruyun." },
  { id:"g4", title: "Mini Hazine", duration: "15", place: "ev", material: "var", skill: "Problem Çözme", steps: ["Küçük bir oyuncağı saklayın.", "3 küçük ipucu verin.", "Bulunca roller değişsin."], safety: "Küçük parça yutma riski olan nesne kullanmayın." },
  { id:"g5", title: "Balon Havada", duration: "5", place: "ev", material: "var", skill: "Koordinasyon", steps: ["Bir balon şişirin.", "Yere düşürmeden sırayla dokunun.", "10 sayıya ulaşmayı hedefleyin."], safety: "Patlayan balon parçalarını hemen toplayın." },
  { id:"g6", title: "Parkta Çizgi Takip", duration: "15", place: "disari", material: "yok", skill: "Denge", steps: ["Kaldırım çizgisini seçin.", "Çizginin üstünde yavaş yürüyün.", "Sonunda çak (high-five) ile bitirin."], safety: "Yol kenarında değil, güvenli alanda oynayın." },
  { id:"g7", title: "Ağaç Dedektifi", duration: "30", place: "disari", material: "yok", skill: "Gözlem + Kelime", steps: ["3 farklı yaprak bulun.", "Renk ve şekil farklarını konuşun.", "En büyüğünü seçip isim verin."], safety: "Yabani bitkilere dokunmadan oynayın." },
  { id:"g8", title: "Top Yuvarlama Yarışı", duration: "15", place: "disari", material: "var", skill: "Motor + Sırayla Oynama", steps: ["Başlangıç ve bitiş noktası belirleyin.", "Topu yuvarlayarak bitişe götürün.", "Her turda farklı stil deneyin."], safety: "Etraf boşken oynayın, araç yolundan uzak durun." },
  { id:"g9", title: "Sihirli Komut", duration: "5", place: "ev", material: "yok", skill: "Dinleme + Odak", steps: ["Baba komut verir: zıpla, dön, alkışla.", "Çocuk sadece 'sihirli komut' ile başlayanları yapsın.", "Hata olursa gülerek tekrar edin."], safety: "Dar alanda zıplamayı kısa tutun." },
  { id:"g10", title: "Kumanda Saklama", duration: "5", place: "ev", material: "yok", skill: "Bulma + Mizah", steps: ["Kumandayı güvenli bir yere saklayın.", "Sıcak-soğuk ipucuyla buldurun.", "Bulunca çocuk babayı saklasın."], safety: "Elektronik eşyaları düşürmeyin." },
  { id:"g11", title: "Taş Topla, Say", duration: "15", place: "disari", material: "yok", skill: "Sayma + İnce Motor", steps: ["10 küçük taş toplayın.", "Boyuta göre sıralayın.", "Birlikte sayıp geri bırakın."], safety: "Kirli elleri oyun sonrası yıkayın." },
  { id:"g12", title: "Kutudan Garaj", duration: "30", place: "ev", material: "var", skill: "Yaratıcılık", steps: ["Boş kutularla mini garaj kurun.", "Arabalara park numarası verin.", "Park görevi oyunu oynayın."], safety: "Keskin karton kenarlarını bantlayın." },
  { id:"g13", title: "Gölge Yakalamaca", duration: "15", place: "disari", material: "yok", skill: "Hareket + Refleks", steps: ["Güneşli bir alana geçin.", "Baba çocuğun gölgesine basmaya çalışsın.", "Sonra roller değişsin."], safety: "Düşmeye karşı çimlik bir alanda oynayın." },
  { id:"g14", title: "Heykel Ol!", duration: "5", place: "ev", material: "var", skill: "Kontrol + Dinleme", steps: ["Telefondan hareketli bir müzik açın.", "Beraber dans edin.", "Müzik durunca komik bir pozda donup kalın."], safety: "Kaygan çoraplarla oynamayın." },
  { id:"g15", title: "Uçan Tüy", duration: "5", place: "ev", material: "var", skill: "Nefes Kontrolü", steps: ["Havaya bir kuş tüyü veya küçük peçete atın.", "Sırayla üfleyerek yere düşmesini engelleyin.", "Kim daha çok havada tutacak sayın."], safety: "Baş dönmesine karşı nefesi çok zorlamayın." },
  { id:"g16", title: "Kör Ebe Baba", duration: "15", place: "ev", material: "yok", skill: "Ses Yönü Bulma", steps: ["Babanın gözünü hafifçe bağlayın veya kapatsın.", "Çocuk 'Buradayım baba!' diye seslensin.", "Baba yavaşça emekleyerek çocuğu bulsun (Gıdıklama ile biter)."], safety: "Ortada sivri sehpa olmadığından emin olun." },
  { id:"g17", title: "Marketçilik", duration: "30", place: "ev", material: "var", skill: "Sosyal + Dil", steps: ["5-6 oyuncağı kanepeye dizin.", "Çocuk marketçi, baba müşteri olsun.", "Hayali paralarla alışveriş yapın."], safety: "Küçük bozuk paralar yerine kağıt/hayali para kullanın." },
  { id:"g18", title: "Dev Adımları", duration: "5", place: "disari", material: "yok", skill: "Kaba Motor", steps: ["Parkta bir hedef belirleyin.", "Sadece devasa adımlar atarak hedefe ulaşmaya çalışın.", "Sonra 'karınca adımları' ile geri dönün."], safety: "Esneme hareketlerini abartıp incitmeyin." },
  { id:"g19", title: "Bant Çizgisinde Denge", duration: "15", place: "ev", material: "var", skill: "Denge", steps: ["Halıya renkli bir kağıt bandı düz çizin.", "Sadece bandın üstüne basarak yürüyün.", "Bandın dışında kalan 'suya düşer'."], safety: "İz bırakmayan kağıt bant kullanın." },
  { id:"g20", title: "Gökyüzü Ressamı", duration: "15", place: "disari", material: "yok", skill: "Hayal Gücü", steps: ["Çimlere sırt üstü uzanın.", "Bulutlara bakıp neye benzediklerini söyleyin.", "Bulutlardan bir hikaye oluşturun."], safety: "Güneşe direkt bakmamaya dikkat edin." },
  { id:"g21", title: "Sırtına Ne Çizdim?", duration: "5", place: "ev", material: "yok", skill: "Duyu + Tahmin", steps: ["Çocuk babanın sırtına parmağıyla bir şekil çizsin (Güneş, ev, top vb).", "Baba tahmin etsin.", "Bulamazsa ipucu isteyip roller değişsin."], safety: "Tırnakla çok bastırmadan ve nazikçe çizin." },
  { id:"g22", title: "Patpat Bateri", duration: "15", place: "ev", material: "var", skill: "Ritim", steps: ["Farklı boylarda plastik kapları ters çevirin.", "Tahta kaşıklarla kaplarda ritim tutun.", "Baba çalsın, çocuk dans etsin."], safety: "Sesten rahatsız olacak saatlerde oynamamaya özen gösterin." },
  { id:"g23", title: "Tünelden Geçiş", duration: "15", place: "ev", material: "yok", skill: "Motor", steps: ["Baba elleri ve ayakları üzerinde köprü olsun.", "Çocuk altından emekleyerek geçsin.", "Geçerken kapı birden kapanabilir (Baba sarılabilir)."], safety: "Babanın belini zorlamayacak sürede tutun." },
  { id:"g24", title: "Karşılıklı Top Atma", duration: "15", place: "disari", material: "var", skill: "El-Göz Koordinasyonu", steps: ["Büyük yumuşak bir top alın.", "1 metre mesafeden birbirinize atın.", "Her tutuşta bir adım geriye gidin."], safety: "Sert toplar yerine sünger/plastik top tercih edin." },
  { id:"g25", title: "Sihirli Kutu", duration: "15", place: "ev", material: "var", skill: "Dokunma Duyusu", steps: ["Bir kutuya 3 farklı nesne koyun (Pamuk, oyuncak araba, lego).", "Çocuk bakmadan elini sokup ne olduğunu tahmin etsin.", "Bildiğinde nesneyle 1 dakika oynasın."], safety: "Kutunun içine kesici, delici veya kirli nesneler koymayın." },
  { id:"g26", title: "Çorap Basketbolu", duration: "15", place: "ev", material: "var", skill: "Nişan Alma", steps: ["Temiz çorapları top yapın.", "Boş bir çamaşır sepetini hedefe koyun.", "Farklı mesafelerden basket atmaya çalışın."], safety: "Sepeti devrilmeyecek bir yere sabitleyin." },
  { id:"g27", title: "Hayvan Kurtarma", duration: "30", place: "ev", material: "var", skill: "İnce Motor", steps: ["Plastik hayvanları kağıt bantla yere hafifçe yapıştırın.", "Çocuk bantları dikkatlice söküp hayvanları kurtarsın.", "Kurtardığı her hayvana bir doktor gibi baksın."], safety: "Çocuğun boyayı sökmemesi için zemine dikkat edin." },
  { id:"g28", title: "Minder Kulesi", duration: "15", place: "ev", material: "var", skill: "Odak + Hedef", steps: ["Minderleri ve yastıkları üst üste dizin.", "3 metre geriden yumuşak bir top veya çorapla kuleyi devirmeye çalışın.", "En hızlı yıkan kazanır."], safety: "Cam eşyaların olmadığı bir cephede oynayın." },
  { id:"g29", title: "Yüz İfadeleri", duration: "5", place: "ev", material: "yok", skill: "Duygular", steps: ["Baba bir duygu söyler (Örn: Çok yemiş ayı).", "İkisi de yüzüyle ve bedeniyle taklit eder.", "En komik yapan turu kazanır."], safety: "Kendinizi kasmadan doğal oynayın." },
  { id:"g30", title: "Define Haritası", duration: "30", place: "ev", material: "var", skill: "Yön Bulma", steps: ["Odanın kaba bir haritasını beyaz kağıda çizin.", "Oyuncağı saklayıp haritada yerine çarpı koyun.", "Çocuk haritaya bakarak defineyi bulsun."], safety: "Eşyaların altını karıştırırken dikkatli olun." },
  { id:"g31", title: "Sıcak Lava", duration: "15", place: "ev", material: "var", skill: "Kaba Motor", steps: ["'Halı sıcak lava!' deyin.", "Sadece minderlere ve belirlediğiniz güvenli bölgelere basarak odadan çıkmaya çalışın.", "Suya düşeni gıdıklayın."], safety: "Minderlerin kaymaması için halı üstünde bırakın." },
  { id:"g32", title: "Gölge Tiyatrosu", duration: "15", place: "ev", material: "var", skill: "Hayal Gücü", steps: ["Işıkları kapatın, telefon fenerini duvara yansıtın.", "Ellerinizle kurt, kuş gibi gölgeler yapın.", "Kendi gölge hikayenizi uydurun."], safety: "Gözlere feneri tutmamaya dikkat edin." },
  { id:"g33", title: "Karınca Yolu", duration: "15", place: "disari", material: "yok", skill: "Gözlem", steps: ["Yerde giden büyük bir karınca seçin.", "Çok yaklaşmadan onu takip edin.", "Evinin neresi olduğunu tahmin etmeye çalışın."], safety: "Böceklere veya karıncalara zarar vermeyin." },
  { id:"g34", title: "Kuş Türküleri", duration: "15", place: "disari", material: "yok", skill: "Dinleme Odaklanma", steps: ["Parkta bir banka oturun ve gözleri kapatın.", "1 dakika boyunca sadece kuşları dinleyin.", "Gözleri açıp kaç farklı kuş sesi duyduğunuzu konuşun."], safety: "Sessizliği oyunun bir parçası yapın." },
  { id:"g35", title: "Saklı Renk Mavi", duration: "5", place: "disari", material: "yok", skill: "Hızlı Tarama", steps: ["10'dan geriye doğru sayın.", "Bu sürede etraftaki 3 tane mavi(veya başka renk) nesne bulun.", "Sonra sırayı ve rengi değiştirin."], safety: "Yola veya tehlikeli yerlere koşmayın." },
  { id:"g36", title: "Su Damlası Yarışı", duration: "15", place: "ev", material: "var", skill: "El Konsantrasyonu", steps: ["Plastik bir tepsiye veya kalın kitaba su damlatın.", "Tepsiyi eğerek damlayı bitiş çizgisine ilk götüren kazanır."], safety: "Suyu halıya dökmemeye dikkat edin." },
  { id:"g37", title: "Sihirli Dokunuş", duration: "5", place: "ev", material: "yok", skill: "Hafıza + Komedi", steps: ["Çocuğun burnuna dokunursan kedi sesi, kulağına dokunursan köpek sesi çıkarma kuralı koyun.", "Hızlı hızlı dokunarak şaşırtmaya çalışın."], safety: "Sadece nazikçe dokunun." },
  { id:"g38", title: "Gece Uçuşu", duration: "5", place: "ev", material: "yok", skill: "Bağ Kurma", steps: ["Çocuğu kucağına (uçak gibi gövdesinden) al.", "Motor sesi çıkararak evin odalarında uçur.", "Her odada yatağa veya yumuşak koltuğa 'iniş' yap."], safety: "Beli zorlamamaya ve yavaş uçurmaya özen gösterin." },
  { id:"g39", title: "Görünmez İp", duration: "5", place: "ev", material: "yok", skill: "Rol Yapma", steps: ["Baba elinde görünmez bir ip çeker gibi yapsın.", "Çocuk göbeğinden o ipe bağlıymış gibi ona doğru çekilsin.", "İp kopmuş gibi yapılıp yere düşülebilir."], safety: "Sert zeminlerde fazla yuvarlanmayın." },
  { id:"g40", title: "Engelli Parkur", duration: "15", place: "ev", material: "var", skill: "Çeviklik", steps: ["Sandalye altı, yastık üstü, koltuk etrafı gibi 3 istasyonlu parkur kurun.", "Süre tutarak kimin en hızlı bitireceğine bakın.", "Her turda parkura bir zorluk daha ekleyin."], safety: "Keskin masa köşelerinden uzağa kurun." },
  { id:"g41", title: "Buz Küpü Eriyene Kadar", duration: "15", place: "ev", material: "var", skill: "Sabır + Isı", steps: ["Elinize veya tabağa küçük bir buz küpü alın.", "Buz tamamen eriyene kadar sırayla birbirinize masal anlatın veya şarkı söyleyin."], safety: "Buz elde çok üşürse el değiştirtin." },
  { id:"g42", title: "Denge Kaşığı", duration: "15", place: "ev", material: "var", skill: "Motor Denge", steps: ["Tahta kaşığın içine pinpon topu veya küçük bir muz koyun.", "Düşürmeden koridoru geçmeye çalışın.", "Düşüren başa döner."], safety: "Düşen yiyecekse tekrar yıkamadan yemeyin." },
  { id:"g43", title: "Çılgın Dansçılar", duration: "15", place: "ev", material: "var", skill: "Denge + Ritim", steps: ["Hareketli bir disko müziği açın.", "İkiniz de başının üstüne kalın bir kitap koysun.", "Kitabı düşürmeden en uzun süre ritim tutan kazanır."], safety: "Sert kitapların ayaklara düşmemesine dikkat edin." },
  { id:"g44", title: "Yaprak Peşinde", duration: "15", place: "disari", material: "yok", skill: "Refleks", steps: ["Ağaçtan düşmekte olan (veya rüzgarda uçan) bir yaprak gözünüze kestirin.", "Yaprak yere değmeden onu havada yakalamaya çalışın.", "Kim en çok yakalarsa madalya onun."], safety: "Kalabalık alanlarda koşarken etrafa dikkat edin." },
  { id:"g45", title: "Geri Geri Yarış", duration: "5", place: "ev", material: "yok", skill: "Vücut Farkındalığı", steps: ["Sadece tek bir kural var: Hedefe geri geri yürüyerek gidilecek.", "'Mutfaktaki masaya git, ama sadece geri geri!'", "Arkaya bakmadan hislerle yürümeye çalışın."], safety: "Yerde oyuncak takılma riski olmamalıdır." },
  { id:"g46", title: "Dedektif Büyüteci", duration: "15", place: "ev", material: "var", skill: "İnceleme", steps: ["Büyük bir kağıttan rulo yapın, bu 'büyüteç' olsun.", "Duvardaki en ufak lekeyi veya minik bir karıncayı inceleyin.", "Gördüğünüz absürt detayları abartarak anlatın."], safety: "Gözü çok uzun süre kapalı zorlamayın." },
  { id:"g47", title: "Cee-e Saklambaç", duration: "5", place: "ev", material: "var", skill: "Eğlence", steps: ["Baba büyük bir battaniye altına tamamen saklansın.", "İçeriden 'Oğlum nerede?' diye sorsun.", "Çocuk battaniyeyi açtığında 'Cee-e' yapıp onu gıdıklasın."], safety: "Havasız kalmamak için kısa tutun." },
];

let favorites = JSON.parse(localStorage.getItem("babaOgle4YasFavs")) || [];

const titleEl = document.getElementById("gameTitle");
const durationEl = document.getElementById("durationBadge");
const placeEl = document.getElementById("placeBadge");
const materialEl = document.getElementById("materialBadge");
const skillEl = document.getElementById("gameSkill");
const stepsEl = document.getElementById("gameSteps");
const safetyEl = document.getElementById("gameSafety");
const cardEl = document.getElementById("gameCard");
const favBtn = document.getElementById("favBtn");

let currentGameId = null;

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
  const favFilter = document.getElementById("favoriteFilter").value;

  return games.filter((g) => {
    if (duration !== "all" && g.duration !== duration) return false;
    if (place !== "all" && g.place !== place) return false;
    if (material !== "all" && g.material !== material) return false;
    if (easyMode && !(g.duration === "5" && g.material === "yok")) return false;
    if (favFilter === "fav" && !favorites.includes(g.id)) return false;
    return true;
  });
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function fireConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff8a2a', '#0ea5b8', '#ff6b6b']
  });
}

function toggleFavorite() {
  if (!currentGameId) return;
  const index = favorites.indexOf(currentGameId);
  if (index === -1) {
    favorites.push(currentGameId);
    favBtn.classList.add("active");
    favBtn.textContent = "⭐";
  } else {
    favorites.splice(index, 1);
    favBtn.classList.remove("active");
    favBtn.textContent = "🤍";
  }
  localStorage.setItem("babaOgle4YasFavs", JSON.stringify(favorites));
}

function renderGame(game) {
  currentGameId = game.id;
  
  // Animasyon tetikleme (Reflow)
  cardEl.classList.remove("animate-pop");
  void cardEl.offsetWidth; 

  titleEl.textContent = game.title;
  durationEl.textContent = game.duration + " dk";
  placeEl.textContent = labelPlace(game.place);
  materialEl.textContent = labelMaterial(game.material);
  skillEl.textContent = "Beceri: " + game.skill;
  safetyEl.textContent = "Güvenlik notu: " + game.safety;
  
  if (favorites.includes(game.id)) {
    favBtn.classList.add("active");
    favBtn.textContent = "⭐";
  } else {
    favBtn.classList.remove("active");
    favBtn.textContent = "🤍";
  }

  stepsEl.innerHTML = "";
  game.steps.forEach((s) => {
    const li = document.createElement("li");
    li.textContent = s;
    stepsEl.appendChild(li);
  });

  // Animasyonu tekrar başlat
  cardEl.classList.add("animate-pop");
  
  // Pop sound
  const pop = new Audio('data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq/');
  pop.play().catch(e => console.log('Audio requires user interaction first:', e));

  // Confetti
  fireConfetti();
}

function showRandom(easyMode = false) {
  const filtered = getFilteredGames(easyMode);
  if (!filtered.length) {
    cardEl.classList.remove("animate-pop");
    void cardEl.offsetWidth; 

    currentGameId = null;
    titleEl.textContent = "Bu filtrede oyun bulamadım 😅";
    skillEl.textContent = "Beceri: Filtreleri biraz gevşet";
    durationEl.textContent = "--";
    placeEl.textContent = "--";
    materialEl.textContent = "--";
    stepsEl.innerHTML = "<li>Süre veya ortam filtresini değiştirip tekrar deneyin.</li>";
    safetyEl.textContent = "Güvenlik notu: Çocuğun konforuna göre ilerle.";
    favBtn.textContent = "🤍";
    favBtn.classList.remove("active");
    
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
document.getElementById("favoriteFilter").addEventListener("change", () => showRandom(false));
favBtn.addEventListener("click", toggleFavorite);

showRandom(false);
