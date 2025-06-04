// Sweet Home Apart Otel - Script
// Updated: 2024-03-03

// Oda detayları için veri
const roomDetails = {
    standart: {
        title: "14 Numaralı Daire",
        description: "65m² genişliğinde, konforlu ve tam donanımlı dairemiz sizleri bekliyor.",
        features: [
            "Double Yatak",
            "Oturma Alanı",
            "Ücretsiz Wi-Fi",
            "Smart TV",
            "Tam Donanımlı Mini Mutfak",
            "Banyo",
            "Saç Kurutma Makinesi",
            "Oda Servisi",
            "VIP Temizlik Servisi",
            "Mini Buzdolabı",
            "Sıcak Su",
            "Doğalgaz Kombi"
        ],
        images: [
            "images/room5.jpg",
            "images/room2.jpg"
        ]
    },
    deluxe: {
        title: "13 Numaralı Daire",
        description: "65m² genişliğinde, aile konaklamaları için ideal dairemiz huzurlu bir konaklama sunuyor.",
        features: [
            "Double Yatak",
            "Oturma Alanı",
            "Ücretsiz Wi-Fi",
            "Smart TV",
            "Tam Donanımlı Mini Mutfak",
            "Banyo",
            "Saç Kurutma Makinesi",
            "Oda Servisi",
            "VIP Temizlik Servisi",
            "Mini Buzdolabı",
            "Sıcak Su",
            "Doğalgaz Kombi"
        ],
        images: [
            "images/room9.jpg",
            "images/room4.jpg"
        ]
    },
    suit: {
        title: "12 Numaralı Daire",
        description: "65m² genişliğinde, geniş aileler için lüks ve konforlu dairemiz unutulmaz bir konaklama deneyimi sunuyor.",
        features: [
            "Double Yatak",
            "Oturma Alanı",
            "Ücretsiz Wi-Fi",
            "Smart TV",
            "Tam Donanımlı Mini Mutfak",
            "Banyo",
            "Saç Kurutma Makinesi",
            "Oda Servisi",
            "VIP Temizlik Servisi",
            "Mini Buzdolabı",
            "Sıcak Su",
            "Doğalgaz Kombi"
        ],
        images: [
            "images/room10.jpg",
            "images/room6.jpg"
        ]
    }
};

// Çevredeki Yerler verilerini ekle
const cevredekiYerler = [
    {
        id: "onur-aniti",
        title: "Onur Anıtı",
        image: "images/Onur_Anıtı.jpeg",
        description: "Samsun'un simgesi olan tarihi Onur Anıtı.",
        distance: "8 km"
    },
    {
        id: "atakum-sahili",
        title: "Atakum Sahili",
        image: "images/atakumun-essiz-sahili.jpg",
        description: "Karadeniz'in muhteşem manzarasını sunan sahil şeridi.",
        distance: "25 metre"
    },
    {
        id: "piazza-avm",
        title: "Piazza AVM",
        image: "images/piazza-samsun-avm.jpg",
        description: "Modern alışveriş merkezi ve eğlence kompleksi.",
        distance: "13 km"
    },
    {
        id: "bandirma-gemi-muze",
        title: "Bandırma Gemi-Müze",
        image: "images/SAMSUN-BANDIRMA VAPURU-GÜLCAN ACAR (2).jpg",
        description: "Türkiye Cumhuriyeti'nin kuruluşunda önemli rol oynayan, 1878 yılında inşa edilen tarihi Bandırma Gemisi."
    },
    {
        id: "amisos-tepesi",
        title: "Amisos Tepesi",
        image: "images/c36a965f-61b8-4768-939d-74b398a25db0.jpg",
        description: "MÖ 6. yüzyıldan itibaren dört aşamada gelişen, Karadeniz ile Anadolu'yu bağlayan önemli bir ticaret merkezi."
    },
    {
        id: "gazi-muzesi",
        title: "Gazi Müzesi",
        image: "images/SAMSUN-GAZİ MÜZESİ-GÜLCAN ACAR (1) kopya.jpg",
        description: "1902'de inşa edilen ve Mustafa Kemal Paşa'nın Samsun'a çıktığında kaldığı tarihi Mıntıka Palas Oteli."
    },
    {
        id: "samsun-kent-muzesi",
        title: "Samsun Kent Müzesi",
        image: "images/20190531140715007_kent muzesi.jpeg",
        description: "Samsun'un demiryolu tarihini yansıtan, Cumhuriyet döneminde devletleştirilen hatların hikayesini anlatan müze."
    },
    {
        id: "amazon-koyu",
        title: "Amazon Köyü",
        image: "images/7464ed6d-1c65-41ad-834b-49d18c14dc09.jpeg",
        description: "MÖ 3-2 bin yıllarında yaşamış Amazonların anısına İlkadım Batıpark'ta oluşturulan, balmumu heykelleriyle tarihi canlandıran köy."
    }
];

// Modal işlemleri için fonksiyon
function openRoomDetails(roomType) {
    const modal = document.getElementById("roomDetailsModal");
    const contentDiv = document.getElementById("roomDetailsContent");
    const room = roomDetails[roomType];
    
    if (!room) return;
    
    let html = `
        <h2>${room.title}</h2>
        <p class="room-description">${room.description}</p>
        <div class="room-images">
    `;
    
    room.images.forEach(img => {
        html += `<img src="${img}" alt="${room.title}">`;
    });
    
    html += `</div><ul class="features-list">`;
    
    room.features.forEach(feature => {
        html += `<li><i class="fas fa-check"></i> ${feature}</li>`;
    });
    
    html += `</ul>`;
    
    contentDiv.innerHTML = html;
    modal.style.display = "block";
    
    // Modal kapatma işlemi
    const closeBtn = document.getElementsByClassName("close")[0];
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };
    }
    
    // Dışarı tıklayınca kapatma
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

// Mobil menü toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const nav = document.getElementById("main-nav");
    
    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function() {
            nav.classList.toggle("active");
        });
    }
    
    // Menü öğelerine tıklandığında menüyü kapat (mobil görünümde)
    const menuItems = document.querySelectorAll("#main-nav a");
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove("active");
            }
        });
    });
    
    // Sayfa yüklendiğinde ve yeniden boyutlandırıldığında galeri öğelerini düzenle
    function adjustGalleryItems() {
        const galleryItems = document.querySelectorAll(".gallery-item");
        if (galleryItems.length > 0) {
            // Galeri öğelerinin boyutlarını ayarla
            galleryItems.forEach(item => {
                // Mobil görünümde farklı aspect ratio
                if (window.innerWidth <= 768) {
                    item.style.paddingBottom = "75%"; // 4:3 oranı
                } else {
                    item.style.paddingBottom = "56.25%"; // 16:9 oranı
                }
            });
        }
    }
    
    // Sayfa yüklendiğinde çalıştır
    adjustGalleryItems();
    
    // Pencere yeniden boyutlandırıldığında çalıştır
    window.addEventListener("resize", adjustGalleryItems);
});

// Performans iyileştirmeleri
// Resimlerin lazy loading ile yüklenmesi
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    if ("loading" in HTMLImageElement.prototype) {
        // Tarayıcı native lazy loading'i destekliyorsa
        images.forEach(img => {
            if (!img.hasAttribute("loading")) {
                img.setAttribute("loading", "lazy");
            }
        });
    }
});

// Newsletter form işlemleri
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    console.log('Newsletter kaydı:', email);
    alert('Bülten aboneliğiniz başarıyla gerçekleştirilmiştir.');
    this.reset();
});

// Müşteri Yorumları Slider
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.testimonials-slider');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    
    if (slider && prevBtn && nextBtn) {
        const cardWidth = slider.querySelector('.testimonial-card').offsetWidth + 30; // 30 is gap
        
        prevBtn.addEventListener('click', function() {
            slider.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', function() {
            slider.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        });
    }
});

// SSS Accordion
document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Tüm diğer açık öğeleri kapat
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Tıklanan öğeyi aç/kapat
            item.classList.toggle('active');
        });
    });
});

// Sezon Tabları
document.addEventListener("DOMContentLoaded", function() {
    const seasonTabs = document.querySelectorAll('.season-tab');
    const pricingTables = document.querySelectorAll('.pricing-table');
    
    if (seasonTabs.length > 0) {
        seasonTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Aktif tab'ı güncelle
                seasonTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // İlgili fiyat tablosunu göster
                const season = this.getAttribute('data-season');
                pricingTables.forEach(table => {
                    table.classList.remove('active');
                });
                document.getElementById(`${season}-season`).classList.add('active');
            });
        });
    }
});

// Çevredeki Yerleri Sayfaya Ekle
document.addEventListener("DOMContentLoaded", function() {
    const attractionsContainer = document.getElementById("attractions-container");
    
    if (attractionsContainer) {
        // Tüm çevredeki yerleri ekle
        cevredekiYerler.forEach(attraction => {
            const attractionCard = document.createElement("div");
            attractionCard.className = "attraction-card";
            
            let distanceHTML = '';
            if (attraction.distance) {
                distanceHTML = `<p class="distance"><i class="fas fa-car"></i> ${attraction.distance}</p>`;
            }
            
            attractionCard.innerHTML = `
                <div class="attraction-image">
                    <img src="${attraction.image}" alt="${attraction.title}" loading="lazy">
                </div>
                <div class="attraction-details">
                    <h3>${attraction.title}</h3>
                    ${distanceHTML}
                    <p>${attraction.description}</p>
                </div>
            `;
            
            attractionsContainer.appendChild(attractionCard);
        });
        
        // Kaydırma kontrolleri
        const prevBtn = document.querySelector('.attraction-prev');
        const nextBtn = document.querySelector('.attraction-next');
        
        if (prevBtn && nextBtn) {
            const cardWidth = attractionsContainer.querySelector('.attraction-card').offsetWidth + 30; // 30 is gap
            
            prevBtn.addEventListener('click', function() {
                attractionsContainer.scrollBy({
                    left: -cardWidth,
                    behavior: 'smooth'
                });
            });
            
            nextBtn.addEventListener('click', function() {
                attractionsContainer.scrollBy({
                    left: cardWidth,
                    behavior: 'smooth'
                });
            });
        }
    }
}); 
