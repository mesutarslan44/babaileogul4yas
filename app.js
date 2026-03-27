const games = [
  { id:"g1", title: "Renk Avcıları 🎨", duration: "5", place: "ev", material: "yok", skill: "Dikkat + Dil Gelişimi", steps: ["Oyuna başlamak için baba odadaki etrafta olan bir rengi seçip söyler. Örneğin: 'Kırmızı!'", "Çocuğunuzun hevesle odada o renge sahip tam 3 farklı eşyayı bulup onlara dokunması gerekir.", "Dokunduğu her eşyanın ne olduğunu yüksek sesle söylemelidir (Örn: 'Kırmızı yastık!'). Ardından renk seçme sırası çocuğa geçer."], safety: "Heyecanla koşarken kaymamak için ayağında kaydırmaz çorap olduğundan emin olun." },
  { id:"g2", title: "Yastık Adası 🏝️", duration: "15", place: "ev", material: "var", skill: "Denge + Kaba Motor", steps: ["Odadaki bütün yumuşak yastıkları ve minderleri yere aralıklı olarak dizerek 'adalar' oluşturun.", "Yerdeki boş alanların 'timsahlı su' olduğunu hayal edin. Çocuğunuz sadece yastıklara basarak odanın bir ucundan diğerine geçmeye çalışsın.", "Zorluğu artırmak için adaların arasını biraz daha açabilir veya sekerek gitmesini isteyebilirsiniz."], safety: "Yastıkların zemin üzerinde kayıp düşmeye sebep olmaması için altlarına halı denk gelmesine dikkat edin." },
  { id:"g3", title: "Hayvan Taklidi 🦁", duration: "5", place: "ev", material: "yok", skill: "Hayal Gücü + İfade", steps: ["Baba aklından bir hayvan seçer ve onun çıkardığı sesi, yürüme şeklini taklit etmeye başlar.", "Çocuk gülerek bu hayvanın ne olduğunu tahmin etmeye çalışır.", "Doğru bildiğinde sıra çocuğa geçer; bu sefer o kendi seçtiği hayvanı canlandırır ve baba bulmaya çalışır."], safety: "Maymun veya kurbağa gibi zıplamalı taklitlerde etraftaki eşyalara çarpmamaya özen gösterin." },
  { id:"g4", title: "Mini Hazine Avı 💎", duration: "15", place: "ev", material: "var", skill: "Problem Çözme + Dinleme", steps: ["Çocuğunuz gözlerini kapatırken, onun çok sevdiği küçük bir oyuncağı veya nesneyi odanın bir yerine saklayın.", "Ona hazineye ulaşması için 3 tane basit ipucu verin (Örn: 'Yumuşak bir şeyin altında', 'Rengi mavi olan bir eşyaya çok yakın').", "Çocuk hazineyi ararken ona 'Sıcak!' (yaklaştın) veya 'Soğuk!' (uzaklaştın) diyerek yönlendirin."], safety: "Hazineyi çocuğun boyunun yetişemeyeceği yerlere saklamayın." },
  { id:"g5", title: "Balon Havada 🎈", duration: "5", place: "ev", material: "var", skill: "El-Göz Koordinasyonu", steps: ["Orta boy bir balonu şişirip bağlayın.", "Balonu havaya fırlatın ve sırayla elinizle hafifçe vurarak yere düşürmemeye çalışın.", "Birlikte saymaya başlayın, hedefiniz balonu yere değdirmeden 10 veya 20 kere havada tutmak olsun!"], safety: "Patlayan balon parçalarını çocuğun ağzına atmaması için anında toplayıp çöpe atın." },
  { id:"g6", title: "Parkta Çizgi Takip 🛤️", duration: "15", place: "disari", material: "yok", skill: "Denge Odaklanması", steps: ["Dışarıda veya parkta yerde belirgin bir kaldırım taşı çizgisi veya boyalı bir alan bulun.", "Kolları yana açarak bir ip cambazı gibi sadece o çizginin üzerinde yürümeye çalışın.", "Çizginin sonuna ilk düşmeden ulaşan kişiyle kocaman bir çak (high-five) yapın!"], safety: "Güvenli park yollarını seçin." },
  { id:"g7", title: "Ağaç Dedektifi 🌳", duration: "30", place: "disari", material: "yok", skill: "Gözlem + Doğa Sevgisi", steps: ["Parkta dolaşırken yerlerden veya güvenli dallardan 3 tamamen farklı yaprak bulun.", "Yere oturup bu yaprakları yan yana koyun; renkleri, damarları ve şekilleri üzerine sohbet edin.", "Çocuğunuzdan bu yapraklara komik isimler takmasını isteyin (Örn: 'Sivri burun yaprak')."], safety: "Dikenli, zehirli olabilecek yabani bitkilere çıplak elle dokunmamaya özen gösterin." },
  { id:"g8", title: "Top Yuvarlama Yarışı ⚽", duration: "15", place: "disari", material: "var", skill: "Motor Becerileri", steps: ["Çimlerde veya geniş bir alanda başlangıç ve bitiş için iki tane ağaç veya taş belirleyin.", "Yumuşak veya orta boy bir topu sadece ellerinizle iterek (yuvarlayarak) bitiş çizgisine götürmeye yarışın.", "Bir sonraki turda topu sadece ayak içiyle itme kuralı getirerek zorlaştırın."], safety: "Araç yollarından güvenli bir şekilde uzak durarak oynayın." },
  { id:"g9", title: "Sihirli Komut 🎇", duration: "5", place: "ev", material: "yok", skill: "Dinleme + Odaklanma", steps: ["Baba arka arkaya eğlenceli komutlar verir: 'Zıpla!', 'Kendi etrafında dön!', 'Alkışla!'", "Fakat bir kural vardır: Sadece baba cümleye 'Sihirli komut:' diye başlarsa hareket yapılacaktır.", "Baba 'Sihirli komut' demeden 'Zıpla' derse ve çocuk zıplarsa, çocuk yanar ve gülerek sıra ona geçer."], safety: "Çocuğun hızlı hareket ederken kafasını vurmaması için ortamı boşaltın." },
  { id:"g10", title: "Kumanda Saklambaç 📺", duration: "5", place: "ev", material: "yok", skill: "Mizah + Görme", steps: ["Evin televizyon kumandasını veya sık kullanılan zararsız bir eşyayı çocuk odada yokken saklayın.", "Çocuğu odaya çağırın ve sadece 'Sıcak' (yaklaştın) veya 'Soğuk' (uzaklaştın) diyerek kumandayı buldurun.", "Kumandayı bulduğunda havalı bir kutlama yapın, ardından saklama sırasını ona verin."], safety: "Kırılabilecek eşyalardan uzağa saklayın." },
  { id:"g11", title: "Taş Topla ve Say 🪨", duration: "15", place: "disari", material: "yok", skill: "Matematik + İnce Motor", steps: ["Parktayken çocuğunuzdan birbirinden farklı boyut ve renklerde 10 tane küçük taş toplamasını isteyin.", "Taşları bir bankın üstüne koyun. Önce onları en küçükten en büyüğe doğru sıraya dizin.", "Sonra taşları tek tek sesli bir şekilde sayarak kutuya veya doğaya geri fırlatın."], safety: "Çocuğunuzun taşları ağzına götürmemesine dikkat edin." },
  { id:"g12", title: "Kutudan Garaj 📦", duration: "30", place: "ev", material: "var", skill: "Yaratıcılık + Rol Yapma", steps: ["Evdeki boş karton ayakkabı kutularını alın. Kapı kısımlarını keserek açık bir garaj yapın.", "Çocuğunuzun arabalarını getirmesini isteyin. Arabalara numaralar yazın.", "Sonra 'Kırmızı araba 2 numaralı garaja park etsin!' gibi direktiflerle otopark oyunu kurun."], safety: "Kutuları keserken kartonun keskin kenarlarını bantla yumuşatın." },
  { id:"g13", title: "Gölge Yakalamaca 🏃", duration: "15", place: "disari", material: "yok", skill: "Hareket + Refleks", steps: ["Güneşli, zemini düz bir parka çıkın. Kendi gölgelerinizi inceleyin.", "Baba, çocuğunun yere düşen gölgesine basmaya çalışsın, çocuk ise gölgesini kaçırsın.", "Birkaç dakika sonra dinlenin ve yakalayıcı rolünü çocuğunuza verin."], safety: "Düşme ihtimaline karşı çim veya yumuşak zeminli alanları tercih edin." },
  { id:"g14", title: "Heykel Ol! 🗿", duration: "5", place: "ev", material: "var", skill: "Vücut Kontrolü + Ritim", steps: ["Telefondan çocuğunuzun en sevdiği hareketli çocuk şarkısını açın.", "Müzik çalarken odanın içinde çılgınca dans edin.", "Müziği aniden durdurun! O an hangi hareketteyseniz taş kesilmiş bir 'heykel' gibi hareketsiz kalın."], safety: "Dans ederken ayağınızda kaygan zemin çorabı olmamasına özen gösterin." },
  { id:"g15", title: "Uçan Tüy Üfleme 🪶", duration: "5", place: "ev", material: "var", skill: "Nefes Kontrolü", steps: ["Hafif bir kuş tüyü veya küçük bir peçete parçasını hazırlayın.", "Kağıdı havaya atın ve sırayla alttan yukarı doğru üfleyerek yere düşmesini engelleyin.", "Kim daha çok nefesiyle onu havada tutarsa o turu kazanmış olur."], safety: "Çocuğun arka arkaya çok sert üfleyip başının dönmemesine dikkat edin." },
  { id:"g16", title: "Kör Ebe Baba 🙈", duration: "15", place: "ev", material: "yok", skill: "Ses Yönü Bulma", steps: ["Baba elleriyle gözlerini tamamen kapatsın ve yere diz çöksün.", "Çocuk odanın içinde yavaşça dolaşıp 'Buradayım baba!' diyerek ses çıkarsın.", "Baba sadece sese doğru emekleyerek yumuşak hareketlerle çocuğu bulmaya çalışsın. Bulunca kocaman gıdıklasın!"], safety: "Ortada sivri sehpa veya ayağa takılacak oyuncak olmadığından emin olun." },
  { id:"g17", title: "Ev Marketçiliği 🛒", duration: "30", place: "ev", material: "var", skill: "Sosyal Etkileşim + Dil", steps: ["Halının üzerine 5-6 tane favori oyuncağı veya zararsız kutuları dizin.", "Çocuğunuz dükkan sahibi olsun, siz ise hayali bir sepetle gelen müşteri olun.", "Küçük kağıtlardan hayali paralar yapın ve harika bir alışveriş sohbeti başlatın."], safety: "Yumuşak oyun paraları veya kağıtlar kullanın." },
  { id:"g18", title: "Dev Adımları 🦖", duration: "5", place: "disari", material: "yok", skill: "Kaba Motor + Hayal", steps: ["Parktayken kendinize bir hedef seçin (Örn: 'Şu büyük ağacın yanına gidelim').", "Ama oraya sadece kocaman açılmış 'Dev Dinozor' adımlarıyla yürüyerek gitme kuralı koyun.", "Ağaca ulaştıktan sonra dönüşte 'Minik Karınca' adımlarıyla piti piti geri dönün."], safety: "Dışarıda adım atarken bedeninizi incitmemeye dikkat edin." },
  { id:"g19", title: "Bant Çizgisinde Denge ⚖️", duration: "15", place: "ev", material: "var", skill: "Odaklanma + Denge", steps: ["Halıya veya koridora renkli bir kağıt bandı düz veya hafif zikzaklı şekillerde yapıştırın.", "Oluşturduğunuz bu bant yolundan taşmadan, ayak uçlarıyla dikkatlice yürüyerek sonuna ulaşmaya çalışın.", "Bandın dışında kalan halı kısmı 'sıcak lav' olsun, dışına basan oyuna baştan başlasın."], safety: "Zemine zarar vermeyen iz bırakmaz maskeleme bandı kullanın." },
  { id:"g20", title: "Gökyüzü Ressamı ☁️", duration: "15", place: "disari", material: "yok", skill: "Hayal Gücü", steps: ["Güzel bir havada parkta çimlere sırt üstü rahatça uzanın.", "Gökyüzündeki bulutları izleyin ve birbirinize 'Şu bulut sence neye benziyor?' diye sorun.", "Bulduğunuz şekillerden kısa bir masal uydurarak hikayeyi tamamlayın."], safety: "Güneşe doğrudan bakmamaya çok dikkat edin." },
  { id:"g21", title: "Sırtına Ne Çizdim? ✍️", duration: "5", place: "ev", material: "yok", skill: "Dokunma Duyusu + Tahmin", steps: ["Baba yere yüz üstü uzanır, çocuk babanın sırtına parmağıyla kocaman bir şekil çizer (Güneş, araba).", "Baba sırtında hissettiği bu dokunuşların ne olduğunu tahmin etmeye çalışır.", "Bulamazsa çocuktan küçük bir ipucu ister. Daha sonra roller değişir."], safety: "Tırnakla değil, sadece yumuşak parmak ucuyla çizim yapın." },
  { id:"g22", title: "Patpat Bateri Müzisyeni 🥁", duration: "15", place: "ev", material: "var", skill: "Ritim Algısı", steps: ["Mutfaktan kırılmayan plastik saklama kaplarını alın.", "Onları halının üzerine ters çevirip dizin. Elinize hafif tahta veya plastik kaşık alın.", "Baba bir ritim tutturur (Güm-güm-çat!), çocuk da elindeki kaşıklarla aynı ritmi taklit etmeye çalışır."], safety: "Gece saatlerinde komşuları rahatsız etmemeye özen gösterin." },
  { id:"g23", title: "Kurtarıcı Tünel 🚇", duration: "15", place: "ev", material: "yok", skill: "Esneklik + Motor", steps: ["Baba yere ellerinin ve ayaklarının üzerinde durarak uzun bir 'köprü/tünel' oluşturur.", "Çocuğun bu tünelin altından sürünerek veya emekleyerek diğer tarafa geçmesi gerekir.", "Geçiş sırasında tünel bazen 'yıkılıyormuş' gibi yapıp çocuğa inerek onu gıdıklar."], safety: "Babanın beli ağrıyorsa kısa süreli tutmalıdır." },
  { id:"g24", title: "Geri Geri Atış 🥎", duration: "15", place: "disari", material: "var", skill: "El-Göz Koordinasyonu", steps: ["Elinize yumuşak, orta büyüklükte bir top alın.", "Birbirinize 1-2 adım mesafede durup topu yavaşça atıp tutun.", "Her başarılı tutuşta ikiniz de yarım adım kadar geriye gidin ve mesafeyi açın."], safety: "Araç yolu olmayan geniş alanları tercih edin." },
  { id:"g25", title: "Sihirli Kutu 🎁", duration: "15", place: "ev", material: "var", skill: "Dokunarak Tanıma", steps: ["Boş bir ayakkabı kutusunun içine çocuğun görmeyeceği şekilde 3-4 farklı eşya koyun.", "Çocuk gözünü kapatarak sadece elini içeri sokar.", "Nesnelere sadece dokunarak ne olduklarını tahmin etmeye çalışır. Her doğru tahminde kutlayın."], safety: "İçine sivri uçlu veya kirli objeler koymayın." },
  { id:"g26", title: "Çorap Basketbolu 🏀", duration: "15", place: "ev", material: "var", skill: "Nişan Alma + Güç Ayarı", steps: ["Temiz çorapları iç içe katlayarak yumuşak 'çorap topu' elde edin.", "Odanın köşesine boş bir çamaşır sepeti yerleştirin.", "Farklı mesafelere yastıklar koyarak buralardan sepete basket atmaya yarışın."], safety: "Sepetin devrilmesi ihtimaline karşı biblolardan uzağa koyun." },
  { id:"g27", title: "Hayvan Kurtarma Operasyonu 🚑", duration: "30", place: "ev", material: "var", skill: "İnce Motor + Şefkat", steps: ["Çocuğun plastik hayvan oyuncaklarını kağıt bantla masaya hafifçe yapıştırın.", "Ona hayvanların sıkıştığını ve nazik bir 'kurtarıcıya' ihtiyaçları olduğunu söyleyin.", "Çocuk küçük parmaklarıyla bantları dikkatlice söküp hayvanları tek tek kurtarsın."], safety: "Zeminden rahat sökülecek kağıt maskeleme bandı kullanın." },
  { id:"g28", title: "Minder Kulesi Yıkımı 🏰", duration: "15", place: "ev", material: "var", skill: "Odaklanma + Hedef", steps: ["Odadaki bütün yastıkları üst üste dizerek kocaman bir kule inşa edin.", "Çocuğunuzla elinize yumuşak bir top alıp kuleye yaklaşık 3 adım uzakta durun.", "Sırayla topları fırlatarak kocaman kuleyi devirmeye çalışın."], safety: "Etrafta televizyon veya cam objeler olmadığından emin olun." },
  { id:"g29", title: "Yüz İfadeleri Ustası 🎭", duration: "5", place: "ev", material: "yok", skill: "Duygu Tanıma + Empati", steps: ["Baba komik veya belirgin bir duygu söyler. Örneğin: 'Kızgın ayı!'", "Hem baba hem çocuk yüzlerini büzerek o ifadeyi taklit eder.", "Sonra 'Çok mutlu bebek' gibi farklı duyguları abartılı bir şekilde canlandırın."], safety: "Çocuğun komik ifadelerini yargılamadan birlikte sadece eğlenin." },
  { id:"g30", title: "Oda Define Haritası 🗺️", duration: "30", place: "ev", material: "var", skill: "Yön Bulma + Görsel Algı", steps: ["Beyaz bir kağıda odanın kuşbakışı kaba bir haritasını çizin.", "Çocuk görmeden odanın bir köşesine tatlı bir oyuncak saklayıp haritada oraya X koyun.", "Haritayı çocuğa verip kağıttan yola çıkarak defineyi bulmasını seyredin."], safety: "Zemin seviyesinde ve tehlikesiz yerlere saklayın." },
  { id:"g31", title: "Sıcak Lava Macerası 🌋", duration: "15", place: "ev", material: "var", skill: "Kaba Motor + Denge", steps: ["Aniden bağırın: 'Dikkat! Halı çok sıcak bir lav! Yere basmak yasak!'", "Odadaki halıya basmadan, sadece belirlediğiniz minder ve kilimlere basarak odadan çıkmaya çalışın.", "Ara sıra 'Lav yükseliyor!' diyerek hoplamasını sağlayın."], safety: "Minderlerin çocuğun atladığı sırada kaygan zeminde kayıp düşürmemesi için halı üzerinde tutun." },
  { id:"g32", title: "Gölge Tiyatrosu Gece Gösterisi 🦇", duration: "15", place: "ev", material: "var", skill: "Hayal Gücü", steps: ["Akşam olunca ışıkları kapatıp, telefonunuzun fenerini düz bir duvara yansıtın.", "Işığın önüne ellerinizi sokarak parmaklarınızla uçan bir kuş veya havlayan bir köpek gölgesi yapın.", "Gölgeleri konuşturarak interaktif ve komik bir hikaye uydurun."], safety: "Fenerin ışığına doğrudan bakmayın." },
  { id:"g33", title: "Karınca Yolu Dedektifleri 🐜", duration: "15", place: "disari", material: "yok", skill: "Gözlem + Doğa Farkındalığı", steps: ["Parkta yerde telaşla yürüyen bir karınca keşfedin.", "Onu hiç rahatsız etmeden, uzaktan eğilerek sırayla takip edin.", "Acaba yuvası nerede, nereye koşuyor diye tahmin yürütüp doğayı gözlemleyin."], safety: "Canlılara zarar verilmeyeceğini hatırlatın." },
  { id:"g34", title: "Kuş Türküleri Dinletisi 🐦", duration: "15", place: "disari", material: "yok", skill: "İşitsel Odaklanma + Sakinlik", steps: ["Ağaçlık bir parkta banka oturun ve çocuğunuzdan gözlerini kapatmasını isteyin.", "Tam 1 dakika boyunca hiç konuşmadan kuş ve doğa seslerini dinleyin.", "Gözlerini açtığında, 'Sence kaç farklı doğa sesi duydun?' diye sorun."], safety: "Bu oyun aynı zamanda hareketli geçen anların ardından harika bir ruhsal dinlenme tekniğidir." },
  { id:"g35", title: "Saklı Renk Şampiyonu 🏆", duration: "5", place: "disari", material: "yok", skill: "Hızlı Tarama + Odak", steps: ["Açık alandayken aniden bir renk belirleyin (Örn: 'Kırmızının peşindeyiz!').", "Etrafa bakınarak ortamdaki 'kırmızı' eşyaları kim daha hızlı işaret edip sayarak bulacak diye yarışın.", "3 tane bulunca rengi değiştirin."], safety: "Arama sırasında araç yollarına fırlamamaya dikkat edin." },
  { id:"g36", title: "Su Damlası Labirenti 💧", duration: "15", place: "ev", material: "var", skill: "Konsantrasyon", steps: ["Düz plastik bir tepsi alın. Üzerine parmağınızla birkaç iri su damlası bırakın.", "Tepsiyi her iki yanından tutun ve hafifçe eğerek su damlasını taşırmadan köşeden köşeye götürmeye çalışın.", "Sonra tepsiyi çocuğa verin ve onun aynı sihirli dengeyi yapmasını izleyin."], safety: "Suyu halıya dökerseniz kayma yapmaması için peçeteyle hemen kurulayın." },
  { id:"g37", title: "Sihirli Dokunuş Müzisyeni 🎶", duration: "5", place: "ev", material: "yok", skill: "Hafıza + Komedi", steps: ["Çocuğunuza vücudunun düğmeler olduğunu söyleyin: Burnuna basarsanız kedi, kulağına basarsanız korna sesi vereceğinizi belirtin.", "Siz dokundukça o sesleri çıkarsın. Sonra siz hızlanarak aynı anda burnuna ve kulağına dokunup komik krizler yaratın.", "Ardından kuralı değiştirin ve o sizin burnunuza basarak sizi konuştursun."], safety: "Sadece nazikçe, parmak ucuyla dokunun." },
  { id:"g38", title: "Gece Uçuşu Pilotu ✈️", duration: "5", place: "ev", material: "yok", skill: "Bağ Kurma", steps: ["Çocuğunuzu sağlam bir şekilde gövdesinden kavrayarak kucağınıza alın.", "Kendinizi bir uçağın pilotu gibi hayal ederek motor sesleri çıkarın.", "Evin farklı odalarına 'uçarak' seyahat edin ve yatağa veya yastıklara pıt diye iniş yapın."], safety: "Beli zorlamayacak şekilde ağırlık dengesini kurun, kollarından çekmeyin." },
  { id:"g39", title: "Görünmez İp Çekmece 🧵", duration: "5", place: "ev", material: "yok", skill: "Rol Yapma (Pandomim)", steps: ["Baba elinde kalın, görünmez bir halat varmış gibi yapar ve kollarını güçlükle çeker.", "Çocuğunuza bu görünmez ipin onun göbeğine bağlı olduğunu söyleyin.", "Siz çektikçe o size doğru yürüsün. En sonunda ip kopmuş gibi iki taraf da geriye düşerek şaka yapsın."], safety: "Arka tarafta devrilecek objelerin olmadığı halılı alanlarda geriye düşün." },
  { id:"g40", title: "Engelli Parkur 🏁", duration: "15", place: "ev", material: "var", skill: "Çeviklik + Planlama", steps: ["Odadaki eşyaları kullanarak 3 aşamalı bir engelli parkuru (survivor) kurun.", "Kural: Önce sandalyenin altından sürün, sonra minder etrafında dön, en son yastıktan atla!", "Telefonla süreyi tutarsanız çok daha eğlenceli ve heyecanlı olur."], safety: "Mobilya sivri köşelerinden uzakta parkur hattı çizin." },
  { id:"g41", title: "Buz Küpü Eriyene Kadar 🧊", duration: "15", place: "ev", material: "var", skill: "Sabır + Isı Farkındalığı", steps: ["Buzluktan küçük bir buz küpü alıp çocuğun avucuna veya tabağa koyun.", "Çocuğa buzun kendi kendine tamamen suya dönüşene kadar birlikte bekleyeceğinizi söyleyin.", "Beklerken su döngüsü üzerine basit hayaller kurun veya suların nereye gittiğini sallasın."], safety: "Buz avucu çok üşütüp acıtmaması için ufak aralıklarla el değiştirin." },
  { id:"g42", title: "Denge Kaşığı Şampiyonası 🥚", duration: "15", place: "ev", material: "var", skill: "İnce Motor", steps: ["İki tahta kaşık alın. İçlerine yuvarlak ve ağır olmayan küçük bir meyve/nesne (ör: pinpon topu, mandalina) koyun.", "Kaşığı sadece sapından tutarak koridorda düşürmeden yürüme yarışı yapın.", "Topu düşüren kaldığı yere kadar dönerek veya ceza olarak gıdıklanarak devam eder."], safety: "Temizlemesi kolay ve kırılmaz nesneler tercih edin." },
  { id:"g43", title: "Çılgın Dansçılar Kitabı 🕺", duration: "15", place: "ev", material: "var", skill: "Denge + Postür", steps: ["Neşeli bir disko müziği açın.", "İkinizin de başının tam üstüne kalın yumuşak kapaklı birer hikaye kitabı koyun.", "Müziğin ritmine kapılıp zıplarken veya bel kıvırırken kitabı kafada düşürmemeye çalışın."], safety: "Sert ciltli ve çocuğun başına düştüğünde incitecek ağır kalın kitaplar kullanmayın." },
  { id:"g44", title: "Yaprak Peşinde Pırpır 🍂", duration: "15", place: "disari", material: "yok", skill: "Refleks + Zamanlama", steps: ["Rüzgarlı veya ağaçlı bir alanda düşmekte olan (rüzgarda uçuşan) bir yaprak gözünüze kestirin.", "Çocuğunuzla birlikte bu yaprak tamamen yere değmeden önce onu aniden havada yakalamaya yarışın.", "Her havada kapılan yaprak, günün büyük zaferi ilan edilebilir."], safety: "Araç yoluna koşulmayacak park bahçelerini seçin." },
  { id:"g45", title: "Geri Geri Yürüme Yarışı 🦀", duration: "5", place: "ev", material: "yok", skill: "Vücut Farkındalığı", steps: ["Oyunun tek kuralı var: Belirlediğiniz hedefe sadece arkanıza baka baka geri yürüyerek gidilecek.", "'Hadi banyoya gidelim ama geri geri yengeç gibi gidelim!' diyerek başlayın.", "Geri geri adımlanan bu seyahat, zihinsel oryantasyonu inanılmaz güçlendirir."], safety: "Çarpmalık tehlikeli oyuncakların yerde dağınık durup durmadığını önceden kontrol edin." },
  { id:"g46", title: "Dedektif Büyüteci 🔍", duration: "15", place: "ev", material: "var", skill: "Detayları Yansıtma", steps: ["A4 boyutunda kağıdı uzunlamasına rulo yapıp bantlayın ve 'özel dedektif büyütücümüz hazır' deyin.", "Kağıdı bir gözüne dayayıp, evin her odasındaki gizli, çok ufak kirleri, boya akıntılarını incelesin.", "Gördüğünüz komik ve minicik şeyleri abartarak bir belgesel sunucusu formunda birbirinize aktarın."], safety: "Kağıdın ucu göze veya yüze batacak kadar sivri kesilmemeli." },
  { id:"g47", title: "Cee-e Zıpla Saklambaç 👻", duration: "5", place: "ev", material: "var", skill: "Neşe Garantili", steps: ["Baba kocaman bir yatak battaniyesinin altına tamamen saklanır.", "İçeriden hafif meraklı bir sesle 'Aaa, acaba benim güzel oğlum nereye gitti?' diye fısıldasın.", "Çocuk gülerek battaniyenin ucunu havaya kaldırdığında veya çekiştirdiğinde yüksek sesle 'Cee-e!!' yapıp onu gıdıklayın."], safety: "Havasız kalınmaması için saklanma aşamasını 10 saniyeden kısa tutun." },
  { id:"g48", title: "Pamuk Püfleme Yarışı ☁️", duration: "5", place: "ev", material: "var", skill: "Nefes Gücü", steps: ["Masaya biraz büyükçe kopardığınız iki top pamuk koyun.", "Çocuğunuzla yan yana durup aynı anda derin bir nefes alarak pamuklara püfleyin.", "Kimin pamuğu masanın ucuna ilk ulaşır veya daha uzağa uçarsa o turu o alkışlayarak kazansın."], safety: "Pamuğun direkt ağza çekilmemesi, sadece karşıya doğru püflenmesi gerektiğine dikkat edin." },
  { id:"g49", title: "Baloncuk Yağmuru Patlatma 🧼", duration: "15", place: "disari", material: "var", skill: "Odak + Refleks", steps: ["Çocuğunuza bir şişe köpük balon çıkarıcı alın (bulaşık deterjanı ve su da iş görür).", "Siz yukarı doğru aralıksız onlarca, yüzlerce baloncuk üfleyerek havayı muhteşem bir şölene çevirin.", "Çocuğunuz işaret parmağıyla balonlar aşağı inmeden hepsini teker teker patlatmaya yetişmeye çalışsın."], safety: "Köpüğün veya deterjan suyunun göze sıçramamasına dikkat edin." },
  { id:"g50", title: "Komik Yürüyüşler Geçidi 🐧", duration: "5", place: "ev", material: "yok", skill: "Yaratıcı Hareket", steps: ["Odanın bir başından diğer başına yapacağınız seyahatin temellerini atın. Her tur farklı yürünecek.", "Deyin ki: 'Şimdi çok mutlu bir penguen gibi yürüyoruz!', sonra 'Şimdi midesi doymuş tontoş bir kedi!'", "Aynı anlarda yürüme tarzını abartın. Özellikle penguen topuklarına basarak ilerlemek çok komik olur."], safety: "Kaygan halılarda sakarlık etmemek için ayağınızda çorap yokken deneyin." },
  { id:"g51", title: "Uçan Mandal Toplayıcıları 🪶", duration: "15", place: "ev", material: "var", skill: "İnce Motor", steps: ["Odadaki koltuk minderlerinin kenarlarına veya battaniye kenarlarına farklı renklerdeki mandalları sıkıştırın.", "Çocuğunuza 'Bütün kuşlar ormanımıza konmuş!' deyin.", "En kısa sürede parmaklarını sıkıştırıp gevşeterek tüm mandalları toplaması için ufak bir mini yarış başlatın."], safety: "Küçük oyuncak mandallar kullanıyorsanız dikkatli olun, ev tipi büyük mandallar daha iyi olur." },
  { id:"g52", title: "Sıcak Çorba Üfleme 🍵", duration: "5", place: "ev", material: "yok", skill: "Solunum Nefes Eğitimi", steps: ["İki elinizi kase gibi birleştirin ve 'Ellerimizde aşırı, cayır cayır sıcak dev bir tabak çorba var' deyin.", "Çorbayı dökmemek için minik minik ve ritmik olarak üfleyerek hayali bir şekilde çorbayı soğutun.", "Hızlı üflerseniz 'Eyvah döküldü kollarım yandı!' diyerek komik sesler çıkarın; yavaş nefesi teşvik edin."], safety: "Uzun süre arka arkaya üfleyip oksijen sorunu (baş dönmesi) olmasına müsaade etmeyin." },
  { id:"g53", title: "Sihirli Parmak Yolu 👆", duration: "15", place: "disari", material: "var", skill: "Harita Okuma + Yön", steps: ["Parka çıkmadan önce elinize uzunca dökülmüş kum, toprak veya ıslak asfalt olan düz bir zemin bulun.", "Siz kocaman işaret parmağınızla yere çok kıvrımlı, kavisli garip bir sonsuz yol çizin.", "Çocuğunuzdan sizin çizdiğiniz bu uzun çizgiden işaret parmağını hiç kaldırmadan sonuca getirmesini isteyin."], safety: "Özellikle cam kırığı veya diken bulunmayan yumuşak toprakları seçin." },
  { id:"g54", title: "Kağıt Uçak Havayolları ✈️", duration: "30", place: "ev", material: "var", skill: "Tasarım El Becerisi", steps: ["Evde bulunan birkaç beyaz veya renkli A4 sayfasından birlikte klasik veya farklı çeşit kağıt uçaklar katlayın.", "Uçakları rengarenk boyalarla süsleyip onlara 'Yıldırım', 'Bulut Yıldızı' gibi isimler takın.", "Hemen ardında koridordan sırayla aynı hedefe doğru fırlatın. En uzağa kim fırlattı? Rekor denemeleri!"], safety: "Uçağın sivri burnu çocuğun yüzüne gelebileceği için birbirinize doğru asla atmayın." },
  { id:"g55", title: "Uyuyan Dev Uyanıyor! 👹", duration: "15", place: "ev", material: "yok", skill: "Vücut Kontrolü + Eğlence", steps: ["Baba dev gibi yatağın veya koltuğun üzerine uzanıp gözlerini kapatsın ve sahte horlamalarla uyusun.", "Çocuğun amacı odanın ucundan gelip sessizce size bir dokunuş(tıpkı minik böcek) yapıp kaçmaktır.", "Baba, çocuk yaklaşırken aniden 'Aaa! Kim beni uyandırdı?' diye korkutup onu hafifçe kovalamaya başlar."], safety: "Aniden kovalarken koşuşturmaca kazalarına mahal vermemek için yavaş ve şakalaşarak ilerleyin." },
  { id:"g56", title: "Karanlıkta Fenerle İz Sürme 🔦", duration: "30", place: "ev", material: "var", skill: "Cesaretlendirme Özgüven", steps: ["Evde gece olunca ışıkları tamamen kapatın. Elinize küçük pilli bir çocuk feneri alın.", "Odanın her köşesine feneri tutup tavandaki ve eşyalardaki gölgelerin büyüyüp küçülmesini keşfedin.", "Sonrasında küçük pelüş bir ayıyı odanın belli bir yerine oturtun, fenerle tarayarak ilk bulan oyunu kazansın!"], safety: "İçerisi tamamen zifiri karanlıksa odada çocuğun ayağına takılacak Lego türü oyuncakları kesinlikle kaldırın." },
  { id:"g57", title: "Buzdan Hazine Kurtarma 🥶", duration: "30", place: "ev", material: "var", skill: "Bilim + Sıcaklık Deneyi", steps: ["Gece öncesinden küçük plastik bir dinozor veya arabayı küçük bir kap suyun içine atıp dondurucuya yerleştirin.", "Ertesi gün buz kalıbını tabağa donmuş şekilde çocuğa geri verin.", "Çocuğun ister parmaklarının sıcaklığıyla, ister ılık sular damlatarak o çok sevdiği oyuncağını dev buzun içinden eriterk dışarı kurtarmasını isteyin."], safety: "Eğer buz çocuğun narin tenini acıtıyorsa arada eliyle ovalamasını ve dinlenmesini isteyiniz." },
  { id:"g58", title: "Kör Müzisyen 🎵", duration: "15", place: "ev", material: "var", skill: "Ses Ayırt Etme Hafızası", steps: ["Zil, tencere kapağı, ıslık, tuşlu kitap veya çan gibi ses çıkaran 3-4 farklı nesneyi hazırlayın.", "Çocuğun yüzünü arkaya dönmesini veya gözünü kapatmasını isteyin.", "Sadece bir nesneye basıp sesini çalın. Acaba çocuk o sesi aklında tutup dönüp bu 4 nesneden hangisinden çıktığını doğru bulabilecek mi?"], safety: "Yüksek desibel metal tencere kapağı sesleriyle oynamayın, kısık tatlı sesli oyuncaklara yönelin." },
  { id:"g59", title: "Teypteki Hikaye Ben 🎙️", duration: "30", place: "ev", material: "var", skill: "Kurgu Ve Sesli Düşünme", steps: ["Telefonunuzun ses kaydetme uygulamasını (mümkünse animasyonlu görünenleri) çocuğa gösterin.", "Beraber doğada, süpersonik arabasıyla maceraya atılan bir babayla oğlunun sıfırdan kurgulanmış sesli masalını oraya kaydedin.", "Ardından en rahat yere oturup o kaydettiğiniz sesi, sanki bir radyodan kendi hikayenizi dinliyormuşçasına heyecanla dinleyin."], safety: "Sesi kaydederken bağıra çağıra abartılı karakter tonlamaları yapmaktan asla utanmayın." },
  { id:"g60", title: "Gökkuşağı Tabağı Hazırlığı 🌈", duration: "30", place: "ev", material: "var", skill: "Mutfak Algısı, Yemek Seçiciliği Atma", steps: ["Oyun saatinde bir ara büyük, kırılmaz beyaz bir tepsi/tabak hazırlayın.", "Dolaptan veya masalardan en az 4 farklı renkte gıda seçmesine öncülük edin (Örn: Sarı peynir, kırmızı domates, yeşil salatalık, beyaz yoğurt).", "Bu dilimli yiyeceklerle tabakta dev mutlu bir yüz veya gülen kocaman bir güneş çizin, arından afiyetle oynayarak yiyin."], safety: "Mutfak gereçlerinde çocuğun eline sadece ucu küt kahvaltı bıçağı verip kendi yumuşak şeylerini (peynir vs.) kesmesini denetleyin." },
  { id:"g61", title: "Elma Soyma Rulosu Peşinde 🍎", duration: "5", place: "ev", material: "var", skill: "Dikkatli Odak", steps: ["Zamanınız kısıtlıysa güzel bir oyundur. Çocuğun karşısına elmayı koyun.", "Çocuğunuza, babanın ince ve kıvrımlı hareketlerle elmanın kabuğunu hiç koparmadan ta sonuna kadar soyup soyamayacağını sorun.", "O sadece kabuğun uzamasını nefesini tutup izler ve sizin koparmadan ne kadar uzun 'elma yılanı' yarattığınızla eğlenir. Kabuğu ağzına verip komik bir bıyık yapabilirsiniz."], safety: "Meyve bıçağını kullanırken kesinlikle çocuğu dokundurtmayacağınız seviyede güvende tutun." },
  { id:"g62", title: "Tahtada Sıra Kimde? 🖍️", duration: "15", place: "ev", material: "var", skill: "Birlikte Kurgu Yaratma", steps: ["Boş ve tertemiz büyük bir boş A4 kağıdı veya silinebilir tahta getirin elinize boya alın.", "Oyun gereği ikinizin de elinde kırmızı veya siyah kalem olacak. Baba kağıdın ortasına herhangi anlamsız kısa bir çizgi/karalama yapacak.", "Çocuk hemen o çizgiyi kalemle alıp anlamlı yepyeni bir şekle dönüştürmeye (Örn: Arabaya, buluta) çalışıp, babasına sırayı geri teslim edecek."], safety: "Boya kalemleriyle evdeki kumaş mobilyalara yakın yerlerde bulunmayın." },
  { id:"g63", title: "Karanlık Mağara 🐻", duration: "15", place: "ev", material: "var", skill: "Sınırlı Mekan Eğlencesi", steps: ["İki sandalyenin ucundan uç ucuna karanlık kalın battaniyeler gererek kocaman pofuduk bir 'ayı mağarası' tasarlayın.", "Çocuğunuz mağarasına (çadıra) elinde yastıkları ve ince kitabıyla girip keyfe çekilirken, siz dışarıdaki fırtınalı rüzgar (huuu!) veya kapıyı çalan karga olun.", "Mağaraya sığınıp siz de katılın. Tam bir dağ kampındaki sıcak yuva moduna girin ve kapalı çadır hikayeleri anlatın."], safety: "Çadırda daraldığını hissettiğinde çıkması için her zaman geniş bir kapısı olduğundan emin olun." },
  { id:"g64", title: "Ayak Parmağı Basketi 🦶", duration: "15", place: "ev", material: "var", skill: "Kaba Ayak Koordinasyonu", steps: ["Birkaç küçük parça pofuduk top, minik pamuk veya küçük peluş oyuncağı yerde açık etrafa dağıtın.", "Ayakta durun ya da yere oturun ve her iki kişiye birer minik kap / sepet verin.", "Hedef şudur: Yerdeki bu nesnelere ellerinizle asla dokunmayacaksınız. Onu sadece 'ayak baş parmaklarınızla' sıkıştırıp havalandırarak sepete basket edeceksiniz."], safety: "Çocuğun bileklerinin esnekliğine zorlayıcı hareketler yapıldığında anında bu oyun modülünü sonlandırın." },
  { id:"g65", title: "Sihirli Sarılma Düğmesi 🤗", duration: "5", place: "ev", material: "yok", skill: "Gülümseme Odaklı Sevgi Anı", steps: ["Baba yüzünde kocaman bir tebessümle sırt üstü veya oturur pozisyona geçer ve kolları serbest bırakır.", "Çocuğuna şöyle söyler: 'Biliyor musun, benim tam burnumun üstünde gizli bir sihirli sarılma düğmesi var'.", "Çocuk ne zaman koşup küçük parmağıyla babanın burnuna nazikçe 'bip' diye basarsa, babanın kolları refleks gibi saniyesinde otomatik kapanarak çocuğu kocaman, sarıp sarmalayıcı sevgi dolu bir şekilde pofuduk diye yakalar ve öper."], safety: "Düğmeye hızlı ve agresif basıldığında da tepki vermek yerine yavaş basılmasını güleryüzlü bir tonla önerin." },
  { id:"g66", title: "Süper Kahraman Pelerini 🦸", duration: "15", place: "ev", material: "var", skill: "Hayal Gücü + Rol Yapma", steps: ["Bir havlu veya ince battaniyeyi çocuğunuzun omzuna pelerin gibi bağlayın.", "Ona bir süper kahraman ismi verin (Örn: Süper Yıldırım!) ve odadaki oyuncakları kötülerden kurtarma görevi verin.", "Baba kötü adam rolünü üstlensin, dramatik sahneler çıkararak yakalansın ve teslim olsun."], safety: "Pelerinin boğaza sıkı bağlanmamasına dikkat edin." },
  { id:"g67", title: "Meyve Suyu Barı 🍹", duration: "30", place: "ev", material: "var", skill: "Pratik Hayat + Sosyal", steps: ["Mutfakta birkaç farklı meyve suyu veya renkli içeceği bardaklara koyun.", "Çocuğunuz barmen olsun! Siz müşteri olarak sipariş verin.", "Karıştırma kaşığıyla sulardan birbirine ekleyerek özel kokteyl yapmasını isteyin."], safety: "Kırılmaz plastik bardaklar kullanın." },
  { id:"g68", title: "Yumurta Taşıma Parkuru 🥄", duration: "15", place: "disari", material: "var", skill: "Denge + Sabır", steps: ["Plastik bir kaşığın içine küçük bir top veya mandalina koyun.", "Parkta başlangıç-bitiş belirleyip kaşığı elde tutarak düşürmeden koşun.", "Düşüren en başa döner! Kim bitiş çizgisine ilk varırsa şampiyon."], safety: "Gerçek yumurta yerine plastik top kullanın." },
  { id:"g69", title: "Dinozor Kazısı 🦴", duration: "30", place: "ev", material: "var", skill: "Sabır + Keşif", steps: ["Bir kaba un veya kum koyun, içine küçük plastik dinozorları gömün.", "Çocuğunuza bir fırça veya kaşık verin: Arkeolog olarak fosil kazısı yapıyorsun!", "Yavaşça kazarak dinosaurları ortaya çıkarsın ve her birinin adını koysun."], safety: "Un veya kumun göze kaçmaması için dikkatli olun." },
  { id:"g70", title: "Robot Yürüyüşü 🤖", duration: "5", place: "ev", material: "yok", skill: "Vücut Kontrolü", steps: ["Baba Robot Moduna Geç komutu verdiğinde çocuk mekanik hareketlerle yürüsün.", "Sağa dön, Dur, İleri yürü gibi komutlarla robotu yönlendirin.", "İnsan Moduna Geç dediğinizde normal yürüyüşe dönsün. Geçişler çok komik!"], safety: "Robot yürürken dizleri fazla kilitlemesin." },
  { id:"g71", title: "Rüzgar Gülü Yapımı 🌀", duration: "30", place: "ev", material: "var", skill: "El Becerisi + Bilim", steps: ["Kare bir kağıdı köşelerden ortaya doğru kesin ve bir çubuğa yapıştırarak rüzgar gülü yapın.", "Balkona veya pencere kenarına çıkıp rüzgara tutun ve dönmesini izleyin.", "Farklı boyut kağıtlarla hangisinin daha hızlı döndüğünü test edin."], safety: "Makası sadece baba kullansın." },
  { id:"g72", title: "Yastık Savaşı (Mini) 🎯", duration: "5", place: "ev", material: "var", skill: "Enerji Boşaltma", steps: ["Herkesin eline birer küçük ve yumuşak yastık alın.", "Sadece belden aşağıya vuruş geçerli kuralını koyun.", "3 dakika mini yastık savaşı, sonra birbirinize sarılarak barışın!"], safety: "Çok yumuşak, hafif yastıklar kullanın. Ağır yastıklarla oynamayın." },
  { id:"g73", title: "Posta Kutusu Oyunu 📬", duration: "15", place: "ev", material: "var", skill: "Yazma + İletişim", steps: ["Boş bir kutuyu Posta Kutusu olarak ev içine yerleştirin.", "Küçük kağıtlara birbirinize kısa mesajlar, resimler veya kalpler çizin ve kutuya atın.", "Her 5 dakikada bir Posta geldi! diye bağırıp kutuyu kontrol edin ve mektupları okuyun."], safety: "Kağıtları küçük tutun ama yutulmayacak büyüklükte olsun." },
  { id:"g74", title: "Hayvanat Bahçesi Müdürü 🐘", duration: "30", place: "ev", material: "var", skill: "Organizasyon + Hayal", steps: ["Tüm peluş ve plastik hayvan oyuncaklarını toplayın.", "Halı üzerine bantla alanlar ayırarak hayvanat bahçesi bölümleri oluşturun.", "Çocuğunuz müdür olsun, hayvanları doğru bölümlere yerleştirsin ve babaya tur versin."], safety: "Küçük parçalı oyuncakları çocuğun ağzına götürmemesine dikkat edin." },
  { id:"g75", title: "Gizli Ajan Lazer Parkuru 🔴", duration: "15", place: "ev", material: "var", skill: "Esneklik + Strateji", steps: ["Koridorda duvarlara ip veya yün iplik gererek lazer ışını tuzakları oluşturun.", "Çocuğunuz gizli ajan olarak bu iplere dokunmadan koridorun sonuna ulaşmaya çalışsın.", "İpe her dokunduğunda Alarm çaldı! Tekrar dene! diyerek heyecanı artırın."], safety: "İpleri boğaz hizasından geçirmeyin, diz ve göğüs hizasında tutun." },
  { id:"g76", title: "Buzdolabı Mıknatıs Hikayesi 🧲", duration: "15", place: "ev", material: "var", skill: "Hikaye Anlatma", steps: ["Buzdolabındaki harf mıknatıslarını veya mıknatıslı şekilleri çocuğun önüne koyun.", "Sırayla birer harf veya şekil seçerek o harfle başlayan bir cümle söyleyip devam eden hikaye kurun.", "Hikaye ne kadar saçma ve komik olursa o kadar güleceğinizi göreceksiniz."], safety: "Büyük, çocuk dostu mıknatısları tercih edin." },
  { id:"g77", title: "Ayak İzi Takibi 👣", duration: "15", place: "disari", material: "yok", skill: "Gözlem + Dedektiflik", steps: ["Yağmurdan sonra nemli toprakta ayak izlerini arayın.", "İzleri takip ederek nereye gittiğini tahmin edin. Bu iz köpeğe mi ait, insana mı?", "Kendi ayak izlerinizi basarak bırakın ve boyut karşılaştırması yapın."], safety: "Çamurlu bölgelerde kayma tehlikesine dikkat edin." },
  { id:"g78", title: "Süper Hafıza Masası 🧠", duration: "15", place: "ev", material: "var", skill: "Hafıza Güçlendirme", steps: ["Masaya 6-8 farklı küçük eşya dizin (kalem, araba, mandal, düğme).", "Çocuğunuz 30 saniye bakıp ezberlemeye çalışsın, sonra gözlerini kapatsın.", "Bir tanesini gizlice kaldırın. Gözlerini açtığında hangisi eksik bulsun!"], safety: "Sivri veya tehlikeli objeler koymayın." },
  { id:"g79", title: "Bulut Hamuru Şefleri 🍕", duration: "30", place: "ev", material: "var", skill: "İnce Motor + Yaratıcılık", steps: ["Oyun hamuru veya evde un-su-tuzla basit bir hamur hazırlayın.", "Birlikte pizza, kurabiye veya hayvan şekilleri yapın.", "Hamur pizzanızı hayali fırına koyun ve müşteriye servis edin."], safety: "Hamuru yememesi gerektiğini eğlenceli bir dille hatırlatın." },
  { id:"g80", title: "Merdiven Bowling 🎳", duration: "15", place: "ev", material: "var", skill: "Nişan Alma", steps: ["Koridorun sonuna 6-10 boş plastik su şişesi piramit şeklinde dizin.", "Yumuşak bir topla birkaç metre uzaktan yuvarlatarak devrilenleri sayın.", "3 tur yapıp toplam skoru hesaplayın. Kazanan çak alır!"], safety: "Cam şişe asla kullanmayın, sadece plastik kullanın." },
  { id:"g81", title: "Kelebek Avı Fotoğrafçısı 🦋", duration: "30", place: "disari", material: "var", skill: "Doğa Gözlemi + Sabır", steps: ["Telefonu veya tableti çocuğunuzun eline verin.", "Parkta birlikte dolaşın ve gördüğü kelebekleri, çiçekleri fotoğraflasın.", "Eve döndüğünüzde doğa albümünü birlikte inceleyin."], safety: "Cihazı düşürmemesi için bilekten asılan kordon varsa takın." },
  { id:"g82", title: "Rengarenk Buz Boyama 🎨", duration: "30", place: "disari", material: "var", skill: "Bilim + Sanat", steps: ["Buz kalıplarına farklı renklerde gıda boyası damlatıp dondurun.", "Beyaz karton üzerine renkli buzları çocuğa verin.", "Buzlar erirken renkli iz bırakır, çocuk soyut tablolar yapabilir."], safety: "Gıda boyası kullanın, tekstil boyası kullanmayın." },
  { id:"g83", title: "Evde Kamp Gecesi ⛺", duration: "30", place: "ev", material: "var", skill: "Macera + Aile Bağı", steps: ["Salon veya yatak odasında battaniyelerle büyük bir çadır kurun.", "İçine yastık, battaniye ve atıştırmalıklar koyarak kamp ortamı yaratın.", "Fenerle gölge oyunları oynayın, masal anlatın ve doğa sesleri taklit edin."], safety: "Hava sirkülasyonu için çadırın bir köşesini açık bırakın." },
  { id:"g84", title: "Top Sektirme Sayacı ⛹️", duration: "5", place: "disari", material: "var", skill: "Koordinasyon + Sayı", steps: ["Orta boy bir topu alıp yere sektirerek her sekmeyi yüksek sesle sayın.", "Çocuğunuz kaç kere üst üste sektirebiliyor görelim! Rekorunu not edin.", "Her gün rekorunu kırmaya çalışsın. Gelişimi görmek çok mutlu edecek."], safety: "Sert basketbol topu yerine yumuşak top tercih edin." },
  { id:"g85", title: "Çiçek Dikme Macerası 🌱", duration: "30", place: "disari", material: "var", skill: "Sorumluluk + Doğa", steps: ["Küçük bir saksıya toprak koyun.", "Birlikte bir tohum (fasulye, mercimek kolaydır) ekin ve üzerini toprakla örtün.", "Her gün sulama görevini çocuğa verin. Büyümesini izlemek harikulade!"], safety: "Toprağı ağzına götürmemesi ve sonrasında ellerini yıkaması lazım." },
  { id:"g86", title: "Gazete Kılıç Düellosu ⚔️", duration: "15", place: "ev", material: "var", skill: "Refleks + Eğlence", steps: ["Eski gazeteleri sıkıca rulo yapıp bantlayarak iki yumuşak kılıç yapın.", "Hafif vuruşlarla düello yapın. Bacağa dokunan puan alır.", "3 puana ulaşan Kılıç Ustası ilan edilir!"], safety: "Yüze kesinlikle vurmama kuralını net koyun." },
  { id:"g87", title: "Araba Yıkama Servisi 🚗", duration: "30", place: "disari", material: "var", skill: "Pratik Hayat + İşbirliği", steps: ["Çocuğun oyuncak arabalarını bir leğen ılık sabunlu suya koyun.", "Eski bir diş fırçası ile arabaları profesyonelce fırçalayarak yıkasın.", "Havluyla kuruladıktan sonra güneşte parlama için sıraya dizin."], safety: "Çok sıcak su kullanmayın, ılık su yeterlidir." },
  { id:"g88", title: "Sihirli Halı Yolculuğu 🧞", duration: "5", place: "ev", material: "var", skill: "Hayal Gücü + Coğrafya", steps: ["Bir battaniyeyi yere serin. Çocuğunuzla üzerine oturun.", "Bu bir sihirli halı! Nereye gitmek istersin? diye sorun. Afrika, Kutuplar, Ay!", "Gittiğiniz yerdeki hayvanları ve hava durumunu birlikte hayal edip canlandırın."], safety: "Battaniyenin altının kaygan olmamasına dikkat edin." },
  { id:"g89", title: "Terlik Fırlatma Olimpiyatları 🩴", duration: "15", place: "ev", material: "var", skill: "Kaba Motor + Eğlence", steps: ["Koridorun sonuna bir hedef yastık koyun.", "Ayağınızdaki terlikleri bacak sallamasıyla havaya fırlatarak hedefe yakın düşürmeye çalışın.", "Altın madalyayı kazanan baba mı yoksa oğul mu?"], safety: "Etraftaki kırılabilir eşyaları önceden kaldırın." },
  { id:"g90", title: "Pipet Futbolu ⚽", duration: "15", place: "ev", material: "var", skill: "Nefes + Strateji", steps: ["Masanın iki ucuna kitaplarla küçük kale yapın. Ortaya pinpon topu koyun.", "Her iki taraf elinde bir pipetle topu üfleyerek karşı kaleye sokmaya çalışsın.", "İlk 3 golü atan kazanır! Bu oyun çok heyecanlı ve rekabetçidir."], safety: "Pipeti ağızda ısırmamaya ve yutmamaya dikkat edin." },
  { id:"g91", title: "Müzikli Sandalye (Mini) 🪑", duration: "15", place: "ev", material: "var", skill: "Ritim + Hız", steps: ["Odaya 3-4 yastık veya minder koyun. Telefondan müzik açın.", "Müzik çalarken etrafta dans ederek dolanın. Müzik durduğunda bir mindere oturun.", "Her turda bir minderi kaldırarak heyecanı artırın!"], safety: "Minderlerin arasında yeterli mesafe bırakın." },
  { id:"g92", title: "Sırt Sırta Kalkış 💪", duration: "5", place: "ev", material: "yok", skill: "İşbirliği + Güç", steps: ["Çocuğunuzla yerde sırt sırta oturun ve kollarınızı birbirinize kenetleyin.", "Sadece birbirinize dayanarak ve bacak gücü kullanarak birlikte ayağa kalkmaya çalışın.", "Başardığınızda kocaman alkışlayın! Takım çalışmasının gücünü hissedeceksiniz."], safety: "Yavaş ve kontrollü yapın, zorlamayın." },
  { id:"g93", title: "Origami Hayvanlar 🐸", duration: "30", place: "ev", material: "var", skill: "İnce Motor + Geometri", steps: ["Renkli kağıtlarla basit origami modelleri yapın (köpek yüzü, gemi en kolaylarıdır).", "Telefondan basit origami videosu izleyerek adım adım birlikte katlayın.", "Yaptığınız hayvanlara isim verin ve onlarla kısa bir kukla gösterisi yapın."], safety: "Kağıt kenarlarının parmaklara kesmemesi için nazikçe katlayın." },
  { id:"g94", title: "Gözü Kapalı Lezzet Testi 😋", duration: "15", place: "ev", material: "var", skill: "Tat Duyusu + Tahmin", steps: ["Çocuğunuzun gözlerini bir bandana ile bağlayın.", "Ağzına küçük parçalar halinde farklı meyveler koyun (üzüm, elma, muz).", "Sadece tadına bakarak hangi meyve olduğunu tahmin etmeye çalışsın!"], safety: "Alerji riski olan gıdalardan kaçının ve küçük lokmalar verin." },
  { id:"g95", title: "Kuş Yuvası Yapıcıları 🐦", duration: "30", place: "disari", material: "var", skill: "Doğa + Mühendislik", steps: ["Parkta yerden ince dallar, yapraklar ve ot toplayın.", "Bunları alçak bir ağaç dalına veya güvenli bir yere minik kuş yuvası şeklinde dizin.", "Ertesi gün gidip bir kuş gelmiş mi diye kontrol edin!"], safety: "Yüksek dallara tırmanmayın, zemin seviyesinde yapın." },
  { id:"g96", title: "Çorap Kuklası Tiyatrosu 🧦", duration: "30", place: "ev", material: "var", skill: "Dil + Yaratıcılık", steps: ["Eski çorapları elinize takın. Keçeli kalemle gözler ve ağız çizin.", "Her çorap kuklaya bir karakter verin: birisi prens, diğeri ejderha!", "Koltuğun arkasını sahne yaparak kukla tiyatrosu gösterisi yapın."], safety: "Düğme yapıştırıyorsanız sağlam olduğundan emin olun." },
  { id:"g97", title: "Damla Damla Bilim 🔬", duration: "15", place: "ev", material: "var", skill: "Bilim Merakı", steps: ["Bir bardak suya birkaç damla zeytinyağı damlatın ve karışmadığını gösterin.", "Sonra bir damla bulaşık deterjanı ekleyerek yağın dağılışını birlikte izleyin.", "Su ve yağın neden arkadaş olamadığını basit kelimelerle anlatın."], safety: "Deterjanı çocuğun eline vermek yerine siz damlatın." },
  { id:"g98", title: "Sayı Avı Yürüyüşü 🔢", duration: "15", place: "disari", material: "yok", skill: "Matematik + Gözlem", steps: ["Dışarıda yürürken tabelaları, kapı numaralarını ve plakları inceleyin.", "Çocuğunuza 7 sayısını bul! gibi görevler verin ve etrafta o sayıyı aratın.", "5 sayıyı ilk bulan büyük ödülü yani kocaman bir sarılmayı kazanır."], safety: "Yolda yürürken kaldırımdan ayrılmayın." },
  { id:"g99", title: "Fısıltı Telefonu 🤫", duration: "5", place: "ev", material: "yok", skill: "İşitsel Dikkat + Komedi", steps: ["Babanın kulağına bir cümle fısıldayın (Örn: Kedi balık yedi).", "Çocuk duyduğunu babaya fısıldasın, baba da tekrar çocuğa fısıldasın.", "3 tur sonra son duyulan cümleyle ilk cümleyi karşılaştırın ve güülün!"], safety: "Kulağa çok yakın ve sert fısıldamamaya dikkat edin." },
  { id:"g100", title: "Yıldız Gözcüleri 🌟", duration: "15", place: "disari", material: "yok", skill: "Merak + Sakinlik + Doğa", steps: ["Akşam hava karardığında balkona veya bahçeye çıkıp gökyüzüne bakın.", "En parlak yıldızı bulun ve ona bir isim takın (Örn: Bizim Yıldızımız!).", "Her akşam dışarı çıktığınızda Bak, bizim yıldızımız hala orada! diyerek bu geleneği sürdürün."], safety: "Geç saatlerde dışarıda uzun kalmayın, 5-10 dakika yeterlidir." }

];

let favorites = JSON.parse(localStorage.getItem("babaOgle4YasFavs")) || [];
let played = JSON.parse(localStorage.getItem("babaOgle4YasPlayed")) || [];

const titleEl = document.getElementById("gameTitle");
const durationEl = document.getElementById("durationBadge");
const placeEl = document.getElementById("placeBadge");
const materialEl = document.getElementById("materialBadge");
const skillEl = document.getElementById("gameSkill");
const stepsEl = document.getElementById("gameSteps");
const safetyEl = document.getElementById("gameSafety");
const cardEl = document.getElementById("gameCard");
const favBtn = document.getElementById("favBtn");
const shareBtn = document.getElementById("shareBtn");
const searchInput = document.getElementById("searchInput");

const playedBtn = document.getElementById("playedBtn");
const timerDisplay = document.getElementById("gameTimer");
const timeText = document.getElementById("timeText");
const timerBtn = document.getElementById("timerBtn");

let currentGameId = null;
let timerInterval = null;
let timeRemaining = 0;

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
  const favoriteVal = document.getElementById("favoriteFilter").value;
  const searchTerm = searchInput.value.trim().toLowerCase();

  return games.filter((g) => {
    if (duration !== "all" && g.duration !== duration) return false;
    if (place !== "all" && g.place !== place) return false;
    if (material !== "all" && g.material !== material) return false;
    if (easyMode && !(g.duration === "5" && g.material === "yok")) return false;
    
    if (favoriteVal === "fav" && !favorites.includes(g.id)) return false;
    if (favoriteVal === "unplayed" && played.includes(g.id)) return false;

    if (searchTerm) {
      const isMatch = g.title.toLowerCase().includes(searchTerm) || 
                      g.steps.join(" ").toLowerCase().includes(searchTerm) || 
                      g.skill.toLowerCase().includes(searchTerm);
      if (!isMatch) return false;
    }
    
    return true;
  });
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function fireConfetti() {
  confetti({
    particleCount: 150,
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

function togglePlayed() {
  if (!currentGameId) return;
  const index = played.indexOf(currentGameId);
  if (index === -1) {
    played.push(currentGameId);
    playedBtn.classList.add("played");
    playedBtn.textContent = "✅ Bu Oyunu Oynadık (Geri Al)";
  } else {
    played.splice(index, 1);
    playedBtn.classList.remove("played");
    playedBtn.textContent = "✅ Bu Oyunu Oynadık!";
  }
  localStorage.setItem("babaOgle4YasPlayed", JSON.stringify(played));
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function updateTimerUI() {
  timeText.textContent = formatTime(timeRemaining);
  if (timeRemaining <= 10 && timeRemaining > 0) {
    timeText.classList.add("urgent");
  } else {
    timeText.classList.remove("urgent");
  }
}

function handleTimerClick() {
  if (!currentGameId) return;
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    timerBtn.textContent = "▶️ Devam Et";
  } else {
    if (timeRemaining <= 0) return;
    timerBtn.textContent = "⏸️ Durdur";
    timerInterval = setInterval(() => {
      timeRemaining--;
      updateTimerUI();
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerBtn.textContent = "✅ Süre Bitti!";
        timeText.classList.remove("urgent");
        fireConfetti();
        const alarm = new Audio('data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
        alarm.play().catch(e => console.log('Audio require interaction:', e));
      }
    }, 1000);
  }
}

async function shareGame() {
  if (!currentGameId) return;
  const g = games.find(x => x.id === currentGameId);
  const shareText = `Oğlumla Oynamak İçin Harika Bir Etkinlik Karşıma Çıktı!\n\n🎮 ${g.title}\n🕒 Süre: ${g.duration} dk | 💪 Beceri: ${g.skill}\n\nSen de çocuğunla bu bedava rastgele oyunlara bakabilirsin: https://babaileogul4yas.pages.dev`;
  
  if (navigator.share) {
    try {
      await navigator.share({
        title: g.title,
        text: shareText,
        url: 'https://babaileogul4yas.pages.dev'
      });
    } catch (err) {
      console.log('Paylaşım iptal edildi veya hata verdi', err);
    }
  } else {
    alert("Cihazınız veya tarayıcınız bu kolay paylaşım özelliğini desteklemiyor. Linki kopyalayabilirsiniz: https://babaileogul4yas.pages.dev");
  }
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

  if (played.includes(game.id)) {
    playedBtn.classList.add("played");
    playedBtn.textContent = "✅ Bu Oyunu Oynadık (Geri Al)";
  } else {
    playedBtn.classList.remove("played");
    playedBtn.textContent = "✅ Bu Oyunu Oynadık!";
  }

  // Timer Setup Initialize
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timeRemaining = parseInt(game.duration) * 60;
  updateTimerUI();
  timerBtn.textContent = "▶️ Dinamik Sayacı Başlat";

  stepsEl.innerHTML = "";
  game.steps.forEach((s) => {
    const li = document.createElement("li");
    li.textContent = s;
    stepsEl.appendChild(li);
  });

  cardEl.classList.add("animate-pop");
  
  const pop = new Audio('data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
  pop.play().catch(e => console.log('Audio require interaction:', e));

  fireConfetti();
}

function showRandom(easyMode = false) {
  const filtered = getFilteredGames(easyMode);
  if (!filtered.length) {
    cardEl.classList.remove("animate-pop");
    void cardEl.offsetWidth; 

    currentGameId = null;
    if (timerInterval) clearInterval(timerInterval);

    titleEl.textContent = "Aradığınıza uygun oyun bulamadım 😅";
    skillEl.textContent = "Beceri: Seçenekleri gevşetin";
    durationEl.textContent = "--";
    placeEl.textContent = "--";
    materialEl.textContent = "--";
    stepsEl.innerHTML = "<li>Arama kutusuna yanlış bir kelime girmiş olabilirsiniz.</li><li>'Sadece Favoriler' veya 'Oynanmamışlar' filtreleri seçiliyse aradığınız listede o oyun bitmiş olabilir.</li><li>Filtrelerinizi biraz normal seviyeye çekip tekrar deneyin.</li>";
    safetyEl.textContent = "💡 Bilgi: Arama kutusunu tamamen silip 'Hepsi'ne tıklayarak baştan başlayın.";
    
    favBtn.textContent = "🤍";
    favBtn.classList.remove("active");
    playedBtn.textContent = "Oyun Seçin";
    playedBtn.classList.remove("played");
    timeText.textContent = "--:--";
    timerBtn.textContent = "▶️ Sayac Yok";
    
    cardEl.classList.add("animate-pop");
    return;
  }
  renderGame(pickRandom(filtered));
}

document.getElementById("randomBtn").addEventListener("click", () => showRandom(false));
document.getElementById("easyModeBtn").addEventListener("click", () => showRandom(true));

// Filtre Değişimlerinde Rastgele Tetikte
document.getElementById("durationFilter").addEventListener("change", () => showRandom(false));
document.getElementById("placeFilter").addEventListener("change", () => showRandom(false));
document.getElementById("materialFilter").addEventListener("change", () => showRandom(false));
document.getElementById("favoriteFilter").addEventListener("change", () => showRandom(false));

// Arama tuşlama eventleri
searchInput.addEventListener("input", () => {
    // anında filtre yansıtılıyor, enter beklenmeksizin heyecanlı akış (debounce)
    showRandom(false);
});

favBtn.addEventListener("click", toggleFavorite);
playedBtn.addEventListener("click", togglePlayed);
timerBtn.addEventListener("click", handleTimerClick);
shareBtn.addEventListener("click", shareGame);

// Uygulama motorunu çalıştır
showRandom(false);
