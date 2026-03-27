# 🚀 Baba & Oğul Oyunda (4 Yaş)

Bu proje, 4 yaşındaki çocuklarla kaliteli, eğlenceli ve interaktif vakit geçirmek için geliştirilmiş tamamen ücretsiz, reklamsız ve açık kaynaklı bir **Ebeveyn Oyun Asistanı** web uygulamasıdır. 

🔗 **Canlı Yayında İncele:** [babaileogul4yas.pages.dev](https://babaileogul4yas.pages.dev)

---

## ✨ Öne Çıkan Özellikler (V4 Sürümü)

Uygulama düz bir metin listesinden çıkarak, PWA alt yapısıyla tam donanımlı bir akıllı web uygulamasına (Web App) dönüştürülmüştür:

- **🎲 100 Benzersiz Oyun:** Gölge tiyatrosundan, su damlası labirentine, origami hayvanlardan yıldız gözcülüğüne kadar tamamı detaylandırılmış, güvenlik notları eklenmiş birbirinden farklı oyun fikri.
- **⏱️ Entegre Geri Sayım Sayacı:** Gelen oyunun süresi (örn: 15 dk) ekranda canlı sayar. Son 10 saniye kırmızı renkte uyarı nabzı verir ve süre bitince konfeti partisi / zil sesi ile kutlama yapar.
- **🔎 Akıllı Canlı Arama Çubuğu:** "Top", "Araba" veya "Uyku" yazarak 65 oyun içinde saniyeler içerisinde anlık (real-time) filtreleme yapar.
- **📤 WhatsApp Share Desteği:** Tek tıkla ekrandaki oyunu hazır ve şık bir metin formatında eşinize veya diğer ebeveynlere yönlendirebilirsiniz (Mobil cihazlarda Native Share menüsünü tetikler).
- **✅ "Oynadık" ve ⭐ "Favori" Hafızası:** LocalStorage yardımıyla çocukla bitirilen oyunları işaretleyebilir veya favorilere alabilirsiniz. Filtrelerde *"Sadece Yeni (Oynanmamış) Oyunlar"* seçeneği ile her seferinde sistemin yepyeni bir macera sunmasını sağlayabilirsiniz.
- **💤 Baba Yorgun Modu:** Enerjinizin sıfırlandığı akşamlar için "5 dakikalık + Malzemesiz" oynanabilen kısa ve sakin oyunları tek tuşla filtreler.
- **📱 PWA (Progressive Web App):** Telefonunuzda adres çubuğundan "Ana Ekrana Ekle" diyerek, uygulamanın native (gerçek bir uygulama gibi) telefona kurulmasını sağlayabilirsiniz.

## 🛠️ Kullanılan Teknolojiler

- **HTML5 & CSS3:** Modern "Glassmorphism" (Cam Efekti), degrade zeminler ve yumuşak CSS animasyonlarıyla Premium UX.
- **Vanilla JavaScript:** Hiçbir ağır framework kullanılmadan (No React/Vue vb. dependency olmadan) son derece hızlı çalışan saf JS mantığı.
- **Web API'leri:** Native Share API, Audio Interface ve LocalStorage Mimarisi.
- **Canvas-Confetti:** Ekrandaki görsel parçacık efektleri.
- **Cloudflare Pages:** Limitsiz ve ultra hızlı global barındırma (GitHub'a push yapıldığı an CI/CD entegrasyonu ile otomatik saniyeler içinde canlıya deploy olur).

## 🚀 Geliştirici Kurulumu (Local Çalıştırma)

Sistemi kendi bilgisayarınızda çalıştırmak veya oyuna yeni fikirler ekleyip kendi kopyanızı türetmek isterseniz:

1. Repoyu bilgisayarınıza indirin (Klonlayın):
   ```bash
   git clone https://github.com/mesutarslan44/babaileogul4yas.git
   ```
2. Proör klasörüne girin:
   ```bash
   cd babaileogul4yas
   ```
3. Dosyayı Herhangi Bir Tarayıcıda Çalıştırın:
   Sadece klasör içindeki `index.html` dosyasına çift tıklayarak modern bir tarayıcıda (Chrome vs.) açmanız yeterlidir. Ek bir Node.js veya sunucu kurulumuna ihtiyaç yoktur.
4. Yeni Oyun Eklemek İçin: 
   `app.js` dosyasını bir kod editöründe açıp, `games` dizisi içerisine aynı yapıda yeni bir obje eklemeniz yeterlidir. Yazdığınız yeni oyun otomatik olarak sisteme ve arama filtrelerine dahil olacaktır.

---
*👨‍👦 Sevgiyle, biraz da teknolojiyle; babalar ve çocukları için geliştirilmiştir.*
