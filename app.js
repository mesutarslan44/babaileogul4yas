const games = [
  { 
    id:"g1", title: "Renk Avcıları 🎨", duration: "5", place: "ev", material: "yok", skill: "Dikkat + Dil Gelişimi", 
    steps: ["Oyuna başlamak için baba odadaki etrafta olan bir rengi seçip söyler. Örneğin: 'Kırmızı!'", "Çocuğunuzun hevesle odada o renge sahip tam 3 farklı eşyayı bulup onlara dokunması gerekir.", "Dokunduğu her eşyanın ne olduğunu yüksek sesle söylemelidir (Örn: 'Kırmızı yastık!'). Ardından renk seçme sırası çocuğa geçer."], 
    safety: "Heyecanla koşarken kaymamak için ayağında kaydırmaz çorap olduğundan veya halı üstünde olduğunuzdan emin olun." 
  },
  { 
    id:"g2", title: "Yastık Adası 🏝️", duration: "15", place: "ev", material: "var", skill: "Denge + Kaba Motor", 
    steps: ["Odadaki bütün yumuşak yastıkları ve minderleri yere aralıklı olarak dizerek 'adalar' oluşturun.", "Yerdeki boş alanların 'timsahlı su' olduğunu hayal edin. Çocuğunuz sadece yastıklara basarak odanın bir ucundan diğerine geçmeye çalışsın.", "Zorluğu artırmak için adaların arasını biraz daha açabilir veya sekerek gitmesini isteyebilirsiniz."], 
    safety: "Yastıkların zemin üzerinde kayıp düşmeye sebep olmaması için altlarına halı denk gelmesine dikkat edin." 
  },
  { 
    id:"g3", title: "Hayvan Taklidi 🦁", duration: "5", place: "ev", material: "yok", skill: "Hayal Gücü + İfade", 
    steps: ["Baba aklından bir hayvan seçer ve onun çıkardığı sesi, yürüme şeklini taklit etmeye başlar.", "Çocuk gülerek bu hayvanın ne olduğunu tahmin etmeye çalışır.", "Doğru bildiğinde sıra çocuğa geçer; bu sefer o kendi seçtiği hayvanı canlandırır ve baba bulmaya çalışır."], 
    safety: "Maymun veya kurbağa gibi zıplamalı taklitlerde etraftaki eşyalara çarpmamaya özen gösterin." 
  },
  { 
    id:"g4", title: "Mini Hazine Avı 💎", duration: "15", place: "ev", material: "var", skill: "Problem Çözme + Dinleme", 
    steps: ["Çocuğunuz gözlerini kapatırken, onun çok sevdiği küçük bir oyuncağı veya nesneyi odanın bir yerine saklayın.", "Ona hazineye ulaşması için 3 tane basit ipucu verin (Örn: 'Yumuşak bir şeyin altında', 'Rengi mavi olan bir eşyaya çok yakın').", "Çocuk hazineyi ararken ona 'Sıcak!' (yaklaştın) veya 'Soğuk!' (uzaklaştın) diyerek yönlendirin."], 
    safety: "Hazineyi çocuğun boyunun yetişemeyeceği veya tırmanması gerekecek tehlikeli raflara saklamayın." 
  },
  { 
    id:"g5", title: "Balon Havada 🎈", duration: "5", place: "ev", material: "var", skill: "El-Göz Koordinasyonu", 
    steps: ["Orta boy bir balonu şişirip bağlayın.", "Balonu havaya fırlatın ve sırayla elinizle hafifçe vurarak yere düşürmemeye çalışın.", "Birlikte saymaya başlayın, hedefiniz balonu yere değdirmeden 10 veya 20 kere havada tutmak olsun!"], 
    safety: "Eğer balon patlarsa küçük parçalarını çocuğun ağzına atmaması için anında toplayıp çöpe atın." 
  },
  { 
    id:"g6", title: "Parkta Çizgi Takip 🛤️", duration: "15", place: "disari", material: "yok", skill: "Denge Odaklanması", 
    steps: ["Dışarıda veya parkta yerde belirgin bir kaldırım taşı çizgisi veya boyalı bir alan bulun.", "Kolları yana açarak bir ip cambazı gibi sadece o çizginin üzerinde yürümeye çalışın.", "Çizginin sonuna ilk düşmeden ulaşan kişiyle kocaman bir çak (high-five) yapın!"], 
    safety: "Çizginin araç yoluna veya bisiklet yoluna yakın olmadığından emin olun, güvenli park yollarını seçin." 
  },
  { 
    id:"g7", title: "Ağaç Dedektifi 🌳", duration: "30", place: "disari", material: "yok", skill: "Gözlem + Doğa Sevgisi", 
    steps: ["Parkta dolaşırken yerlerden veya güvenli dallardan 3 tamamen farklı yaprak bulun.", "Yere oturup bu yaprakları yan yana koyun; renkleri, damarları ve şekilleri üzerine sohbet edin.", "Çocuğunuzdan bu yapraklara komik isimler takmasını isteyin (Örn: 'Sivri burun yaprak', 'Tırtıklı dede')."], 
    safety: "Bilmediğiniz veya dikenli, zehirli olabilecek yabani bitkilere çıplak elle dokunmamaya özen gösterin." 
  },
  { 
    id:"g8", title: "Top Yuvarlama Yarışı ⚽", duration: "15", place: "disari", material: "var", skill: "Motor Becerileri", 
    steps: ["Çimlerde veya geniş bir alanda başlangıç ve bitiş için iki tane ağaç veya taş belirleyin.", "Yumuşak veya orta boy bir topu sadece ellerinizle iterek (yuvarlayarak) bitiş çizgisine götürmeye yarışın.", "Bir sonraki turda topu sadece ayak içiyle veya dizlerle itme kuralı getirerek zorlaştırın."], 
    safety: "Etrafınızda koşuşan diğer çocuklara çarpmamak için boş alanları tercih edin." 
  },
  { 
    id:"g9", title: "Sihirli Komut 🎇", duration: "5", place: "ev", material: "yok", skill: "Dinleme + Odaklanma", 
    steps: ["Baba arka arkaya eğlenceli komutlar verir: 'Zıpla!', 'Kendi etrafında dön!', 'Alkışla!'", "Fakat bir kural vardır: Sadece baba cümleye 'Sihirli komut:' diye başlarsa o hakaret yapılacaktır.", "Eğer baba 'Sihirli komut' demeden 'Zıpla' derse ve çocuk zıplarsa, çocuk yanar ve sıra ona geçer."], 
    safety: "Çocuğun hızlı hareket ederken kafasını vurmaması için ortamın yeterince geniş olduğuna emin olun." 
  },
  { 
    id:"g10", title: "Kumanda Saklambaç 📺", duration: "5", place: "ev", material: "yok", skill: "Mizah + Görme", 
    steps: ["Evin televizyon kumandasını veya sık kullanılan zararsız bir eşyayı çocuk odada yokken saklayın.", "Çocuğu odaya çağırın ve sadece 'Sıcak' (yaklaştın) veya 'Soğuk' (uzaklaştın) diyerek kumandayı buldurun.", "Kumandayı bulduğunda havalı bir kutlama yapın, ardından saklama sırasını ona verin."], 
    safety: "Sakladığınız eşyanın kırılabilecek veya çocuğun üstüne düşebilecek bir rafta olmamasına dikkat edin." 
  },
  { 
    id:"g11", title: "Taş Topla ve Say 🪨", duration: "15", place: "disari", material: "yok", skill: "Matematik + İnce Motor", 
    steps: ["Parktayken çocuğunuzdan birbirinden farklı boyut ve renklerde 10 tane küçük taş toplamasını isteyin.", "Taşları bir bankın üstüne koyun. Önce onları en küçükten en büyüğe doğru sıraya dizin.", "Sonra taşları tek tek sesli bir şekilde sayarak kutuya veya doğaya geri fırlatın."], 
    safety: "Çocuğunuzun taşları ağzına götürmemesine ve oyun bitince ellerini güzelce yıkamasına dikkat edin." 
  },
  { 
    id:"g12", title: "Kutudan Garaj 📦", duration: "30", place: "ev", material: "var", skill: "Yaratıcılık + Rol Yapma", 
    steps: ["Evdeki boş karton ayakkabı veya kargo kutularını alın. Kapı kısımlarını keserek açık bir garaj yapın.", "Çocuğunuzun oyuncak arabalarını getirmesini isteyin. Arabalara veya kutunun üstüne kalemle numaralar yazın.", "Sonra 'Kırmızı araba 2 numaralı garaja park etsin lütfen!' gibi direktiflerle bir otopark oyunu kurun."], 
    safety: "Kutuları keserken bıçak ve makası sadece siz kullanın, keskin karton kenarlarını bantla yumuşatın." 
  },
  { id:"g13", title: "Gölge Yakalamaca 🏃", duration: "15", place: "disari", material: "yok", skill: "Hareket + Refleks", steps: ["Güneşli, zemini düz bir parka çıkın. Kendi gölgelerinizi inceleyin.", "Baba, çocuğunun yere düşen gölgesine basmaya (onu yakalamaya) çalışsın, çocuk ise gölgesini kaçırsın.", "Birkaç dakika sonra dinlenin ve yakalayıcı rolünü çocuğunuza verin."], safety: "Beton zemin yerine düşme ihtimaline karşı çim veya yumuşak zeminli alanları tercih edin." },
  { id:"g14", title: "Heykel Ol! 🗿", duration: "5", place: "ev", material: "var", skill: "Vücut Kontrolü + Ritim", steps: ["Telefondan çocuğunuzun en sevdiği hareketli ve neşeli çocuk şarkısını açın.", "Müzik çalarken odanın içinde çılgınca ve özgürce dans edin.", "Müziği aniden durdurun! O an hangi hareketteyseniz taş kesilmiş bir 'heykel' gibi hareketsiz kalmalı ve birbirinizi güldürmelisiniz."], safety: "Dans ederken ayağınızda kaygan zemin çorabı olmamasına özen gösterin." },
  { id:"g15", title: "Uçan Tüy Üfleme 🪶", duration: "5", place: "ev", material: "var", skill: "Nefes Kontrolü", steps: ["Hafif bir kuş tüyü veya kare şeklinde kesilmiş küçük bir peçete parçasını hazırlayın.", "Kağıdı havaya atın ve sırayla alttan yukarı doğru üfleyerek yere düşmesini engelleyin.", "Kim daha çok nefesiyle onu havada tutarsa o turu kazanmış olur."], safety: "Çocuğun arka arkaya çok sert üfleyip başının dönmemesi için aralarda dinlenmesine izin verin." },
  { id:"g16", title: "Kör Ebe Baba 🙈", duration: "15", place: "ev", material: "yok", skill: "Ses Yönü Bulma", steps: ["Baba elleriyle gözlerini tamamen kapatsın (veya ince bir atkı taksın) ve yere diz çöksün.", "Çocuk odanın içinde yavaşça dolaşıp 'Buradayım baba, yakala!' diyerek ses çıkarsın.", "Baba sadece sese doğru emekleyerek yumuşak hareketlerle çocuğu bulmaya çalışsın. Bulunca kocaman gıdıklasın!"], safety: "Ortada sivri sehpa, düşebilecek eşya veya ayağa takılacak oyuncak olmadığından emin olun." },
  { id:"g17", title: "Ev Marketçiliği 🛒", duration: "30", place: "ev", material: "var", skill: "Sosyal Etkileşim + Dil", steps: ["Koltuğun veya halının üzerine 5-6 tane favori oyuncağı veya mutfaktaki zararsız kutuları dizin.", "Çocuğunuz dükkan sahibi olsun, siz ise hayali bir sepetle gelen müşteri olun.", "Küçük kağıtlardan hayali paralar yapın. 'İyi günler, bu ayıcık kaç lira acaba?' diyerek alışveriş sohbeti başlatın."], safety: "Düzgün sayamadığı için moralini bozmayın, 4 yaşındaki bir çocuk için '3 lira' ile '100 lira' aynı şeydir, gülüp geçin." },
  { id:"g18", title: "Dev Adımları 🦖", duration: "5", place: "disari", material: "yok", skill: "Kaba Motor + Hayal", steps: ["Parktayken kendinize bir hedef seçin (Örn: 'Şu büyük ağacın yanına gidelim').", "Ama oraya sadece kocaman açılmış 'Dev Dinozor' adımlarıyla yürüyerek gitme kuralı koyun.", "Ağaca ulaştıktan sonra dönüşte 'Minik Karınca' adımlarıyla piti piti geri dönün."], safety: "Dışarıda zıplarken veya adım atarken bileklerinizi fazla zorlayıp burkmamaya dikkat edin." },
  { id:"g19", title: "Bant Çizgisinde Denge ⚖️", duration: "15", place: "ev", material: "var", skill: "Odaklanma + Denge", steps: ["Halıya veya koridora renkli bir kağıt bandı düz veya hafif zikzaklı şekillerde yapıştırın.", "Oluşturduğunuz bu bant yolundan taşmadan, ayak uçlarıyla dikkatlice yürüyerek sonuna ulaşmaya çalışın.", "Bandın dışında kalan halı kısmı 'sıcak lav' olsun, dışına basan oyuna baştan başlasın."], safety: "Zemine zarar vermeyen ve 쉽게 sökülebilen iz bırakmaz kağıt maskeleme bandı kullanın." },
  { id:"g20", title: "Gökyüzü Ressamı ☁️", duration: "15", place: "disari", material: "yok", skill: "Hayal Gücü + Soyut Düşünme", steps: ["Güzel bir havada parkta çimlere sırt üstü yan yana rahatça uzanın.", "Gökyüzündeki bulutları izleyin ve birbirinize 'Şu bulut sence neye benziyor?' diye sorun.", "Bulduğunuz şekillerden (Örn: Bir köpek, bir araba) kısa bir masal uydurarak hikayeyi tamamlayın."], safety: "Güneşe doğrudan bakmamaya çok dikkat edin, bulutları izlerken gölgelik bir açıda durun." },
  { id:"g21", title: "Sırtına Ne Çizdim? ✍️", duration: "5", place: "ev", material: "yok", skill: "Dokunma Duyusu + Tahmin", steps: ["Baba yere yüz üstü uzanır veya bağdaş kurar, çocuk babanın sırtına işaret parmağıyla kocaman bir şekil çizer (Güneş, ev, kalp, top vb).", "Baba sırtında hissettiği bu dokunuşların ne olduğunu tahmin etmeye çalışır.", "Bulamazsa çocuktan küçük bir ipucu ister. Daha sonra roller değişir ve baba çizer, çocuk bilir."], safety: "Çizerken tırnakla veya çok sert bastırmadan, sadece yumuşak parmak dokunuşuyla çizim yapılmasını sağlayın." },
  { id:"g22", title: "Patpat Bateri Müzisyeni 🥁", duration: "15", place: "ev", material: "var", skill: "Ritim Algısı", steps: ["Mutfaktan boy boy kırılmayan plastik saklama kapları veya tencereleri alın.", "Onları halının üzerine ters çevirip dizin. Elinize iki tane tahta veya plastik kaşık alın.", "Baba bir ritim tutturur (Güm-güm-çat!), çocuk da elindeki kaşıklarla aynı ritmi taklit etmeye (baterist olmaya) çalışır."], safety: "Komşuları rahatsız etmemek adına akşam geç saatlerde oynamamaya özen gösterin." },
  { id:"g23", title: "Kurtarıcı Tünel 🚇", duration: "15", place: "ev", material: "yok", skill: "Esneklik + Motor", steps: ["Baba yere ellerinin ve ayaklarının üzerinde durarak vücudundan uzun bir 'köprü/tünel' oluşturur.", "Çocuğun bu tünelin altından sürünerek veya emekleyerek diğer tarafa geçmesi gerekir.", "Geçiş sırasında tünel bazen 'yıkılıyormuş' gibi yapıp hafifçe çocuğa doğru inerek onu gıdıklar ve güldürür."], safety: "Babanın beli ağrıyorsa bu pozisyonda uzun süre beklememeli, tüneli kısa tutmalıdır." },
  { id:"g24", title: "Geri Geri Atış 🥎", duration: "15", place: "disari", material: "var", skill: "El-Göz Koordinasyonu", steps: ["Elinize yumuşak, orta büyüklükte bir top alın.", "Birbirinize 1-2 adım mesafede durup topu yavaşça birbirinize atıp tutun.", "Her başarılı tutuşta ikiniz de yarım adım kadar geriye gidin. Bakalım topu düşürmeden aranızdaki mesafeyi ne kadar açabileceksiniz!"], safety: "Market veya araba yoluna kaçma ihtimaline karşı kapalı ve boş park alanlarında oynayın." },
  { id:"g25", title: "Sihirli Kutu 🎁", duration: "15", place: "ev", material: "var", skill: "Dokunarak Tanıma", steps: ["Boş bir ayakkabı kutusunun içine çocuğun görmeyeceği şekilde 3-4 farklı eşya koyun (Mandal, silgi, küçük araba, pamuk).", "Çocuk gözünü kapatarak veya kutunun kapağını çok az aralayarak sadece elini içeri sokar.", "Nesnelere sadece dokunarak ne olduklarını tahmin etmeye çalışır. Her doğru tahminde alkışlayın."], safety: "Kutunun içine kesinlikle iğne, makas, sivri uçlu takı gibi tehlikeli nesneler koymayın." },
  { id:"g26", title: "Çorap Basketbolu 🏀", duration: "15", place: "ev", material: "var", skill: "Nişan Alma + Güç Ayarı", steps: ["Temiz çorapları iç içe katlayarak 5-6 tane yumuşak 'çorap topu' elde edin.", "Odanın bir köşesine boş bir çamaşır sepeti veya geniş bir kutu koyun.", "Farklı mesafelere yastıklar koyarak (kolay, orta, zor durakları) buralardan sepete basket atmaya çalışın."], safety: "Sepeti devrildiğinde etraftaki biblo veya eşyaları kırmayacak güvenli bir duvar dibine hizalayın." },
  { id:"g27", title: "Hayvan Kurtarma Operasyonu 🚑", duration: "30", place: "ev", material: "var", skill: "İnce Motor + Şefkat", steps: ["Çocuğun plastik hayvan oyuncaklarını (dinazor, aslan vb.) kağıt maskeleme bandıyla yere veya masaya hafifçe yapıştırın.", "Ona hayvanların biraz sıkıştığını ve nazik bir 'kurtarıcıya' ihtiyaçları olduğunu söyleyin.", "Çocuk küçük parmaklarıyla bantları dikkatlice söküp hayvanları tek tek kurtarsın ve hepsine geçmiş olsun desin."], safety: "Boyayı sökme ihtimaline karşı yapışkanı çok kuvvetli koli bandı değil, kağıt bant kullanın." },
  { id:"g28", title: "Minder Kulesi Yıkımı 🏰", duration: "15", place: "ev", material: "var", skill: "Odaklanma + Hedef", steps: ["Odadaki bütün minderleri, yumuşak pelüş oyuncakları ve yastıkları üst üste dizerek kocaman bir kule inşa edin.", "Çocuğunuzla elinize yumuşak bir top veya çorap topu alıp kuleye yaklaşık 3 adım uzakta durun.", "Sırayla topları fırlatarak kocaman kuleyi kimin daha görkemli bir şekilde devireceği üzerine yarışın."], safety: "Kulenin devrileceği hizada vazoların, televizyonun veya sert objelerin olmamasına özen gösterin." },
  { id:"g29", title: "Yüz İfadeleri Ustası 🎭", duration: "5", place: "ev", material: "yok", skill: "Duygu Tanıma + Empati", steps: ["Baba komik veya belirgin bir duygu söyler. Örneğin: 'Şimdi çok çok ekşi bir limon yemiş gibi yapalım!'", "Hem baba hem çocuk yüzlerini büzerek o ifadeyi taklit eder.", "'Oyuncaklarını paylaşmayan sinirli bir ayı', 'Hediyesini yeni gören mutlu çocuk' gibi farklı duygu durumlarını canlandırın."], safety: "Tamamen serbest olun, çocuğun mimiklerini yargılamadan sadece onunla birlikte eğlenin." },
  { id:"g30", title: "Oda Define Haritası 🗺️", duration: "30", place: "ev", material: "var", skill: "Yön Bulma + Görsel Algı", steps: ["Beyaz bir kağıda bulunduğunuz odanın kuşbakışı kaba bir haritasını çizin (Dikdörtgen oda, şurada koltuk, burada TV).", "Çocuk görmeden odanın bir köşesine tatlı bir sürpriz (kraker, oyuncak) saklayın ve haritada o noktaya kocaman bir X işareti koyun.", "Haritayı çocuğun eline verin ve kağıttan yola çıkarak odayı keşfedip defineyi bulmasını izleyin."], safety: "Defineyi ararken çekmeceleri veya ağır mobilyaların arkasını eşelemeyeceği zemin düzeyinde yerler seçin." },
  { id:"g31", title: "Sıcak Lava Macerası 🌋", duration: "15", place: "ev", material: "var", skill: "Kaba Motor + Denge", steps: ["Aniden bağırın: 'Dikkat! Halı çok sıcak bir lavaya dönüştü, yere basmak yasak!'", "Odadaki halıya basmadan, sadece belirlediğiniz koltuk, yastık ve ufak kilim adacıklarına basarak odadan çıkış kapısına ulaşın.", "Lava (halıya) ayağı deyen kişi 'Yandım!' diyerek başa dönsün veya ufak bir gıdıklanma cezası alsın."], safety: "Minderlerin veya kilimlerin çocuğun atladığı sırada kaygan zeminde kayıp düşürmemesi için önlem alın." },
  { id:"g32", title: "Gölge Tiyatrosu Gece Gösterisi 🦇", duration: "15", place: "ev", material: "var", skill: "Hayal Gücü + Hikaye Anlatma", steps: ["Akşam olunca odanın tüm ışıklarını kapatın. Telefonunuzun fenerini açık ve düz bir duvara yansıtacak şekilde sabitleyin.", "Işığın önüne ellerinizi sokarak parmaklarınızla uçan bir kuş, havlayan bir köpek veya konuşan adam gölgeleri yapın.", "Gölgeleri konuşturarak interaktif ve komik bir uyku öncesi hikayesi uydurun."], safety: "Fenerin parlak ışığına çocuğunuzun veya sizin doğrudan bakmamasına dikkat edin." },
  { id:"g33", title: "Karınca Yolu Dedektifleri 🐜", duration: "15", place: "disari", material: "yok", skill: "Gözlem + Doğa Farkındalığı", steps: ["Parkta yerde telaşla yürüyen tek bir karınca veya böcek keşfedin.", "Onu hiç rahatsız etmeden, biraz uzaktan eğilerek sırayla takip etmeye başlayın.", "Acaba yuvası nerede, nereye koşuyor, yolda nelerle karşılaşıyor diye tahminler yürütüp doğayı gözlemleyin."], safety: "Karıncaya veya böceklere zarar vermemesi gerektiğini ve onların evlerine gitmeye çalıştığını çocuğa anlatın." },
  { id:"g34", title: "Kuş Türküleri Dinletisi 🐦", duration: "15", place: "disari", material: "yok", skill: "İşitsel Odaklanma + Sakinlik", steps: ["Ağaçlık bir parkta bir banka yan yana oturun. Çocuğunuzdan gözlerini kapatmasını isteyin.", "Tam 1 dakika boyunca hiç konuşmadan etraftaki kuş ve doğa seslerini dinleyin.", "Gözlerini açtığında, 'Sence uzaktaki kuş mu daha güzel ötüyordu, yoksa ağaçtaki mi?' diye sorup işittikleri üzerine sohbet edin."], safety: "Bu oyun aynı zamanda hareketli geçen bir park sürecinin ardından çocuğu sakinleştirmek için mükemmel bir soğuma tekniğidir." },
  { id:"g35", title: "Saklı Renk Şampiyonu 🏆", duration: "5", place: "disari", material: "yok", skill: "Hızlı Tarama + Odak", steps: ["Açık alandayken aniden bir renk belirleyin (Örn: 'Sarının peşindeyiz!').", "Hem siz hem o etrafa bakınarak ortamdaki 'sarı' renge sahip (çiçek, tabela, araba vs.) eşyaları kim daha hızlı bulup işaret edecek diye yarışın.", "3 tane sarı eşya bulduğunuzda 'Kırmızı' gibi farklı bir renge geçerek oyuna devam edin."], safety: "Etraftaki nesneleri bulurken aniden yola veya bisiklet yoluna fırlamadığından emin olun." },
  { id:"g36", title: "Su Damlası Labirenti 💧", duration: "15", place: "ev", material: "var", skill: "Konsantrasyon + El-Göz Uyumu", steps: ["Düz plastik bir tepsi alın. Üzerine parmağınızla birkaç büyük su damlası bırakın.", "Tepsiyi her iki yanından tutun ve hafifçe sağa, sola, öne eğerek su damlasını tepsiden taşırmadan köşeden köşeye götürmeye çalışın.", "Sonra tepsiyi çocuğa verip aynı taşıma işlemini sadece bilek hareketleriyle yapıp yapamayacağını izleyin."], safety: "Su yere damlarsa kayma tehlikesi yaratmamak için oyunu halı kaplı alanda veya hemen bir bezle silerek oynayın." },
  { id:"g37", title: "Sihirli Dokunuş Müzisyeni 🎶", duration: "5", place: "ev", material: "yok", skill: "Hafıza + Komedi", steps: ["Çocuğunuza vücudunun düğmeler olduğunu söyleyin: Burnuna basarsanız kedi ('Miyav'), kulağına basarsanız korna ('Düt düt') sesi çıkaracağını belirtin.", "Siz dokundukça o sesleri çıkarsın. Sonra siz hızlanın, aynı anda burnuna ve kulağına dokunup komik krizler yaratın.", "Ardından kuralı değiştirin ve rolleri değişerek çocuğun size dokunup sizi konuşturmasını isteyin."], safety: "Dokunuşları çocuğun canını yakmayacak, sadece işaret parmağının ucuyla edilen minik dokunuşlar şeklinde tutun." },
  { id:"g38", title: "Gece Uçuşu Pilotu ✈️", duration: "5", place: "ev", material: "yok", skill: "Bağ Kurma + Mutluluk", steps: ["Çocuğunuzu sağlam bir şekilde gövdesinden (veya kollarının altından) kavrayarak kucağınıza alın.", "Kendinizi bir uçağın pilotu, onu da uçak gibi hayal ederek motor sesleri (Vuuuuv!) çıkarın.", "Evin farklı odalarına 'uçarak' seyahat edin. 'Şimdi mutfak havalimanına iniş yapıyoruz!' diyerek yavaşça koltuklara indirin."], safety: "Baba olarak kendi belinizi zorlamayacak şekilde ağırlık dengesini kurun, ani sarsıntılardan kaçının." },
  { id:"g39", title: "Görünmez İp Çekmece 🧵", duration: "5", place: "ev", material: "yok", skill: "Rol Yapma (Pandomim)", steps: ["Baba elinde kalın, görünmez bir halat varmış gibi yapar ve kollarını zorlanıyormuşçasına çeker.", "Çocuğunuza bu görünmez ipin onun göbeğine bağlı olduğunu, siz çektikçe pıt pıt size doğru gelmesi gerektiğini söyleyin.", "En sonunda ip kopmuş gibi yaparak ikiniz de geriye doğru koltuklara abartılı bir şekilde düşün."], safety: "Düşme taklidi yaparken arka tarafta sert sehpa veya oyuncak kutusu olup olmadığını muhakkak kontrol edin." },
  { id:"g40", title: "Ev İçi Engelli Parkur 🏁", duration: "15", place: "ev", material: "var", skill: "Çeviklik + Planlama", steps: ["Odadaki eşyaları kullanarak 3 aşamalı bir komando parkuru kurun.", "Kuralı koyun: Önce sandalyenin altından sürün, sonra koltuk minderinin etrafında bir tur dön, en son mavi yastığın üstünden atla!", "Telefon kronometresiyle süreyi tutun. 'Rekorunu kırdın! 14 saniyede bitirdin!' diyerek onu inanılmaz motive edin."], safety: "Koşma alanlarında halı kaydırmazlarının sağlam olduğundan ve cam masa gibi tehlikelerden uzak durulduğundan emin olun." },
  { id:"g41", title: "Buz Küpü Eriyene Kadar 🧊", duration: "15", place: "ev", material: "var", skill: "Sabır + Isı Farkındalığı", steps: ["Buzluktan küçük bir buz küpü alıp minik bir tabağın içine veya doğrudan çocuğun avucuna koyun.", "Çocuğa buzun kendi kendine tamamen suya dönüşene kadar (eriyene kadar) birlikte bekleyeceğinizi söyleyin.", "Beklerken erime süreci üzerine basit bilim sohbeti yapın veya buz eriyene kadar sırayla karşılıklı şarkı söyleyin."], safety: "Buz çocuğun avucunu çok üşütürse el yakmasını (soğuk yanığı) engellemek için hemen tabağa almanızı tavsiye ederiz." },
  { id:"g42", title: "Denge Kaşığı Şampiyonası 🥚", duration: "15", place: "ev", material: "var", skill: "İnce Motor + Sabır", steps: ["Mutfaktan iki tane tahta veya plastik kaşık alın. İçlerine düşmeyecek ama hafif yuvarlak olan küçük birer limon, ceviz veya pinpon topu yerleştirin.", "Kaşığı sadece sapından tutarak koridorun başından sonuna kadar düşürmeden yürüme yarışı yapın.", "Topu düşüren başlanıç noktasına geri dönsün. Amacınız hızlı olmak değil, dengede kalabilmek!"], safety: "Taze yumurta kullanmak yerine plastik top kullanın ki kırıldığında ortalığı temizleme stresi yaşamayın." },
  { id:"g43", title: "Çılgın Dansçılar Kitabı 🕺", duration: "15", place: "ev", material: "var", skill: "Denge + Postür", steps: ["Neşeli, zıplamalı ve ritmik bir disko müziği açın.", "İkinizin de başının tam üstüne kalın birer hikaye veya masal kitabı koyun (Ellerle tutmak yasak).", "Amaç müziğin ritmine kapılıp dans ederken kafadaki kitabı en uzun süre yere düşürmemektir. Düşüren dans ederek izlemeye devam eder."], safety: "Seçeceğiniz kitabın sert kapaklı büyük ciltli ve ağır olmamasına, düşerse ayağı acıtmayacak yumuşaklıkta olmasına dikkat edin." },
  { id:"g44", title: "Yaprak Peşinde Pırpır 🍂", duration: "15", place: "disari", material: "yok", skill: "Refleks + Zamanlama", steps: ["Rüzgarlı bir sonbahar/bahar gününde ağaçtan kopup yere süzülen bir yaprağı gözünüze kestirin.", "Çocuğunuzla birlikte bu yaprak tamamen yere değmeden önce onu havada yakalamaya çalışın.", "Havada yakaladığınız her yaprak için 'Yaşasın, bir puan!' diye sevinin ve sayıyı artırın."], safety: "Ağaçlara bakarak koşarken yerde takılabileceğiniz taş, dal kökü gibi engellere dikkat edin." },
  { id:"g45", title: "Geri Geri Yürüme Yarışı 🦀", duration: "5", place: "ev", material: "yok", skill: "Vücut Farkındalığı + Mekan", steps: ["Oyunun tek kuralı var: Belirlediğiniz hedefe sadece arkanıza baka baka, geri geri yürüyerek gidilecek.", "'Mutfak tezgahına git, ama bedenini hiç döndürmeden tamamen geri geri yengeç gibi git!' komutunu verin.", "Yolda birbirinize tatlı tatlı çarparak komik anlar yaratabilirsiniz, ancak geri yürümek zihnini çok geliştirecektir."], safety: "Çocuğun geri yürürken çarpabileceği, bel hizasındaki komodin veya açık çekmece olmadığından mutlaka emin olun." },
  { id:"g46", title: "Dedektif Büyüteci 🔍", duration: "15", place: "ev", material: "var", skill: "Küçük Detayları İnceleme", steps: ["A4 boyutunda bir kağıdı rulo yapıp bantlayın ve 'İşte bu bizim devasa büyütecimiz' deyin.", "Bu kağıt dürbünün bir ucunu gözünüze dayayın, diğer gözü kapatıp duvardaki en ufak bir lekeyi, halıdaki bir deseni dev gibiymişçesine inceleyin.", "Gördüğünüz detayları abartılı ve komik bir belgesel sunucusu gibi çocuğunuza anlatın, sonra dürbünü ona verin."], safety: "Çocuğun tek gözünü kağıtla çok uzun süre yorarak rahatsız etmemesine dikkat edin." },
  { id:"g47", title: "Cee-e Zıpla Saklambaç 👻", duration: "5", place: "ev", material: "var", skill: "Neşe Odaklı Sürpriz", steps: ["Baba büyük bir yatak battaniyesinin altına tamamen saklanarak kaybolsun.", "İçeriden hafif boğuk ve meraklı bir sesle 'Acaba benim güzel oğlum nerede?' diye mırıldansın.", "Çocuk gülerek battaniyenin ucunu kaldırdığı (veya baba aniden üstünden attığı) an yüksek sesle 'Cee-e!!' yapıp onu sevgiyle kucaklayın."], safety: "Battaniyenin altında nefessiz veya rahatsız hissetmemesi için oyunun saklanma kısmını çok uzun tutmayın." }
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
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#ff8a2a', '#0ea5b8', '#ff6b6b', '#ffd89b']
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
  
  cardEl.classList.remove("animate-pop");
  void cardEl.offsetWidth; 

  titleEl.textContent = game.title;
  durationEl.textContent = game.duration + " dk";
  placeEl.textContent = labelPlace(game.place);
  materialEl.textContent = labelMaterial(game.material);
  skillEl.textContent = "Beceri: " + game.skill;
  safetyEl.textContent = "💡 Önemli İpucu: " + game.safety;
  
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

  cardEl.classList.add("animate-pop");
  
  const pop = new Audio('data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq/');
  pop.play().catch(e => console.log('Audio require interaction:', e));

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
    stepsEl.innerHTML = "<li>Süre veya ortam filtresini değiştirip tekrar deneyin. Favoriler seçiliyse ve hiç favori oyununuz yoksa bu uyarı çıkar.</li>";
    safetyEl.textContent = "💡 Bilgi: Henüz favori eklemediyseniz yandaki filtreyi 'Hepsi' yapın.";
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
