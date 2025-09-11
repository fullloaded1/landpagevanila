import Head from 'next/head'
import { useState } from 'react'

// Declare global gtag for TypeScript to avoid 'cannot find name gtag' errors
declare const gtag: (...args: any[]) => void;

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('id')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)

  const translations = {
    id: {
      title: "Natura Vanilla - Ekspor Vanili Premium Indonesia",
      description: "Ekspor vanili premium dari Indonesia ke seluruh dunia. Vanili berkualitas tinggi, pertanian berkelanjutan, pengiriman global.",
      brand: "Natura Vanilla",
      nav: {
        home: "Beranda",
        about: "Tentang",
        products: "Produk",
        catalog: "Katalog",
        contact: "Kontak"
      },
      hero: {
        title: "Natura Vanilla",
        subtitle: "Indonesia",
        description: "Mengekspor biji vanili terbaik dunia dari kepulauan subur Indonesia.",
        trusted: "Dipercaya oleh merek premium di seluruh dunia",
        catalogBtn: "Lihat Katalog Produk",
        contactBtn: "Hubungi Kami"
      },
      stats: {
        experience: "Tahun Persiapan",
        countries: "Negara Target", 
        exported: "Kg Siap Ekspor",
        quality: "Grade A Ready"
      },
      about: {
        title: "Tentang Vanili Kami",
        subtitle: "Dari tanah vulkanik Indonesia ke pasar global - vanili premium berkualitas ekspor",
        story: "Kisah Kami",
        storyTitle: "Komitmen Kualitas Premium",
        storyDesc1: "Natura Vanilla hadir sebagai perusahaan ekspor vanili premium yang menghubungkan kekayaan alam Indonesia dengan pasar global. Vanili kami berasal dari perkebunan terpilih di tanah vulkanik subur Jawa dan Bali, di mana kondisi iklim tropis menciptakan lingkungan ideal untuk menghasilkan vanili berkualitas ekspor.",
        storyDesc2: "Dengan menerapkan standar internasional dalam proses pemanenan dan pengolahan, setiap biji vanili dipilih secara selektif dan diproses menggunakan metode curing yang telah teruji untuk memastikan konsistensi kualitas yang memenuhi standar pasar global.",
        whyTitle: "Mengapa Memilih Natura Vanilla?",
        features: {
          quality: {
            title: "Jaminan Kualitas Premium",
            desc: "Biji vanili Grade A pilihan tangan dengan profil rasa superior"
          },
          farming: {
            title: "Pertanian Berkelanjutan", 
            desc: "Praktik ramah lingkungan yang mendukung komunitas lokal"
          },
          shipping: {
            title: "Pengiriman Global Aman",
            desc: "Pengiriman dapat dilakukan ke seluruh negara di dunia dengan pengiriman yang aman dan menjamin ketahanan produk sampai di negara tujuan"
          },
          pricing: {
            title: "Best Value Pricing",
            desc: "Harga langsung dari petani tanpa markup perantara"
          }
        }
      },
      products: {
        title: "Produk Premium Kami",
        subtitle: "Kami menawarkan berbagai jenis vanili untuk memenuhi kebutuhan pasar yang berbeda, dari restoran gourmet hingga produksi makanan industri",
        planifolia: {
          title: "Vanili Planifolia",
          category: "Premium",
          desc: "Vanili planifolia berkualitas premium dengan kandungan vanillin tinggi dan aroma yang khas.",
          features: ["Panjang: 15-20 cm", "Kelembaban: 30-35%", "Sempurna untuk penggunaan gourmet"]
        },
        tahitensis: {
          title: "Vanili Tahitensis", 
          category: "Eksotis",
          desc: "Vanili tahitensis dengan aroma floral yang unik dan rasa yang lebih kompleks.",
          features: ["Aroma floral khas", "Rasa kompleks", "Ideal untuk pastry premium"]
        },
        powder: {
          title: "Bubuk Vanili",
          category: "Industri", 
          desc: "Bubuk vanili halus sempurna untuk aplikasi baking dan industri dengan kualitas konsisten.",
          features: ["Konsistensi bubuk halus", "Umur simpan panjang", "Mudah digunakan"]
        }
      },
      catalog: {
        title: "Katalog Produk",
        subtitle: "Unduh katalog lengkap berisi spesifikasi, varian, kualitas, dan layanan kami.",
        highlights: [
          "Spesifikasi detail setiap produk",
          "Grade dan standar kualitas",
          "Informasi kemasan & pengiriman"
        ],
        viewBtn: "Lihat Daring",
        downloadBtn: "Unduh Katalog (PDF)"
      },
      contact: {
        title: "Siap Memesan?",
        subtitle: "Hubungi kami hari ini untuk harga kompetitif, sampel, dan pesanan khusus. Kami siap melayani kebutuhan vanili Anda.",
        email: {
          title: "Email Kami",
          desc: "Untuk pertanyaan dan penawaran"
        },
        whatsapp: {
          title: "WhatsApp", 
          desc: "Respon cepat terjamin"
        },
        location: {
          title: "Lokasi",
          desc: "Berbasis di Indonesia",
          address: "Perkebunan Vanili Jawa & Bali"
        },
        form: {
          title: "Pesan Langsung via WhatsApp",
          productType: "Jenis Produk",
          selectGrade: "-- Pilih Jenis Produk --",
          quantity: "Kuantitas (kg)",
          company: "Nama Perusahaan", 
          email: "Alamat Email",
          requirements: "Kebutuhan Tambahan",
          requirementsPlaceholder: "Ceritakan tentang kebutuhan spesifik Anda...",
          submitBtn: "Pesan via WhatsApp"
        }
      },
      footer: {
        description: "Perusahaan ekspor vanili premium yang berdedikasi membawa biji vanili terbaik Indonesia ke pasar global. Pertanian berkelanjutan, kualitas luar biasa, pengiriman ke seluruh dunia.",
        quickLinks: "Tautan Cepat",
        products: "Produk",
        copyright: "© 2025 Natura Vanilla. Semua hak dilindungi. | Ekspor Vanili Premium Indonesia"
      }
    },
    en: {
      title: "Natura Vanilla - Premium Indonesian Vanilla Export",
      description: "Premium vanilla export from Indonesia to the world. High-quality vanilla beans, sustainable farming, global shipping.",
      brand: "Natura Vanilla",
      nav: {
        home: "Home",
        about: "About", 
        products: "Products",
        catalog: "Catalog",
        contact: "Contact"
      },
      hero: {
        title: "Natura Vanilla",
        subtitle: "Indonesia",
        description: "Exporting the world's finest vanilla beans from the fertile islands of Indonesia.",
        trusted: "Trusted by premium brands worldwide",
        catalogBtn: "View Product Catalog",
        contactBtn: "Contact Us"
      },
      stats: {
        experience: "Years Preparation",
        countries: "Target Countries",
        exported: "Kg Export Ready", 
        quality: "Grade A Ready"
      },
      about: {
        title: "About Our Vanilla",
        subtitle: "From Indonesia's volcanic soils to global markets - premium export-quality vanilla",
        story: "Our Story",
        storyTitle: "Commitment to Premium Quality",
        storyDesc1: "Natura Vanilla emerges as a premium vanilla export company connecting Indonesia's natural wealth with global markets. Our vanilla originates from selected plantations in the fertile volcanic soils of Java and Bali, where tropical climate conditions create an ideal environment for producing export-quality vanilla.",
        storyDesc2: "By implementing international standards in harvesting and processing, each vanilla bean is selectively chosen and processed using proven curing methods to ensure quality consistency that meets global market standards.",
        whyTitle: "Why Choose Natura Vanilla?",
        features: {
          quality: {
            title: "Premium Quality Guarantee",
            desc: "Hand-selected Grade A vanilla beans with superior flavor profiles"
          },
          farming: {
            title: "Sustainable Farming",
            desc: "Eco-friendly practices supporting local communities"
          },
          shipping: {
            title: "Safe Global Shipping",
            desc: "Worldwide delivery can be done to all countries with safe shipping and guaranteed product durability until reaching the destination country"
          },
          pricing: {
            title: "Best Value Pricing", 
            desc: "Direct from farm pricing with no middleman markup"
          }
        }
      },
      products: {
        title: "Our Premium Products",
        subtitle: "We offer various types of vanilla to meet different market needs, from gourmet restaurants to industrial food production",
        planifolia: {
          title: "Vanilla Planifolia",
          category: "Premium",
          desc: "Premium quality vanilla planifolia with high vanillin content and distinctive aroma.",
          features: ["Length: 15-20 cm", "Moisture: 30-35%", "Perfect for gourmet use"]
        },
        tahitensis: {
          title: "Vanilla Tahitensis",
          category: "Exotic", 
          desc: "Vanilla tahitensis with unique floral aroma and more complex flavor.",
          features: ["Distinctive floral aroma", "Complex flavor", "Ideal for premium pastry"]
        },
        powder: {
          title: "Vanilla Powder",
          category: "Industrial",
          desc: "Fine vanilla powder perfect for baking and industrial applications with consistent quality.",
          features: ["Fine powder consistency", "Long shelf life", "Easy to use"]
        }
      },
      catalog: {
        title: "Product Catalog",
        subtitle: "Download the full catalog with specs, variants, quality grades, and services.",
        highlights: [
          "Detailed specs for each product",
          "Grades and quality standards",
          "Packaging & shipping information"
        ],
        viewBtn: "View Online",
        downloadBtn: "Download Catalog (PDF)"
      },
      contact: {
        title: "Ready to Order?",
        subtitle: "Contact us today for competitive pricing, samples, and custom orders. We're here to serve your vanilla needs.",
        email: {
          title: "Email Us",
          desc: "For inquiries and quotes"
        },
        whatsapp: {
          title: "WhatsApp",
          desc: "Quick response guaranteed"
        },
        location: {
          title: "Location",
          desc: "Based in Indonesia", 
          address: "Java & Bali Vanilla Farms"
        },
        form: {
          title: "Order Direct via WhatsApp",
          productType: "Product Type",
          selectGrade: "-- Select Product Type --",
          quantity: "Quantity (kg)",
          company: "Company Name",
          email: "Email Address",
          requirements: "Additional Requirements",
          requirementsPlaceholder: "Tell us about your specific needs...",
          submitBtn: "Order via WhatsApp"
        }
      },
      footer: {
        description: "Premium vanilla export company dedicated to bringing the finest Indonesian vanilla beans to the global market. Sustainable farming, exceptional quality, worldwide delivery.",
        quickLinks: "Quick Links",
        products: "Products", 
        copyright: "© 2025 Natura Vanilla. All rights reserved. | Premium Indonesian Vanilla Export"
      }
    },
    ar: {
      title: "ناتورا فانيلا - تصدير الفانيليا الإندونيسية الممتازة",
      description: "تصدير الفانيليا الممتازة من إندونيسيا إلى العالم. حبوب فانيليا عالية الجودة، زراعة مستدامة، شحن عالمي.",
      brand: "ناتورا فانيلا",
      nav: {
        home: "الرئيسية",
        about: "حولنا",
        products: "المنتجات",
        catalog: "الكتالوج",
        contact: "اتصل بنا"
      },
      hero: {
        title: "ناتورا فانيلا",
        subtitle: "إندونيسيا",
        description: "تصدير أجود حبوب الفانيليا في العالم من الجزر الخصبة في إندونيسيا.",
        trusted: "موثوق من قبل العلامات التجارية الممتازة في جميع أنحاء العالم",
        catalogBtn: "عرض كتالوج المنتجات",
        contactBtn: "اتصل بنا"
      },
      stats: {
        experience: "سنوات التحضير",
        countries: "البلدان المستهدفة",
        exported: "كيلو جاهز للتصدير",
        quality: "درجة أ جاهزة"
      },
      about: {
        title: "حول الفانيليا لدينا",
        subtitle: "من التربة البركانية في إندونيسيا إلى الأسواق العالمية - فانيليا ممتازة بجودة التصدير",
        story: "قصتنا",
        storyTitle: "الالتزام بالجودة الممتازة",
        storyDesc1: "تبرز ناتورا فانيلا كشركة تصدير فانيليا ممتازة تربط ثروة إندونيسيا الطبيعية بالأسواق العالمية. تنشأ الفانيليا لدينا من مزارع مختارة في التربة البركانية الخصبة في جاوة وبالي، حيث تخلق الظروف المناخية الاستوائية بيئة مثالية لإنتاج فانيليا بجودة التصدير.",
        storyDesc2: "من خلال تطبيق المعايير الدولية في الحصاد والمعالجة، يتم اختيار كل حبة فانيليا بعناية ومعالجتها باستخدام طرق المعالجة المجربة لضمان اتساق الجودة التي تلبي معايير السوق العالمي.",
        whyTitle: "لماذا تختار ناتورا فانيلا؟",
        features: {
          quality: {
            title: "ضمان الجودة الممتازة",
            desc: "حبوب فانيليا من الدرجة الأولى مختارة يدوياً مع نكهات فائقة"
          },
          farming: {
            title: "الزراعة المستدامة",
            desc: "ممارسات صديقة للبيئة تدعم المجتمعات المحلية"
          },
          shipping: {
            title: "الشحن العالمي الآمن",
            desc: "يمكن التوصيل إلى جميع دول العالم مع شحن آمن وضمان متانة المنتج حتى وصوله إلى البلد المقصود"
          },
          pricing: {
            title: "أفضل قيمة للسعر",
            desc: "أسعار مباشرة من المزرعة بدون هامش ربح الوسطاء"
          }
        }
      },
      products: {
        title: "منتجاتنا الممتازة",
        subtitle: "نقدم أنواعاً مختلفة من الفانيليا لتلبية احتياجات السوق المختلفة، من المطاعم الراقية إلى إنتاج الأغذية الصناعية",
        planifolia: {
          title: "فانيليا بلانيفوليا",
          category: "ممتاز",
          desc: "فانيليا بلانيفوليا عالية الجودة مع محتوى عالي من الفانيلين ورائحة مميزة.",
          features: ["الطول: 15-20 سم", "الرطوبة: 30-35%", "مثالية للاستخدام الراقي"]
        },
        tahitensis: {
          title: "فانيليا تاهيتنسيس",
          category: "غريبة",
          desc: "فانيليا تاهيتنسيس برائحة زهرية فريدة ونكهة أكثر تعقيداً.",
          features: ["رائحة زهرية مميزة", "نكهة معقدة", "مثالية للحلويات الممتازة"]
        },
        powder: {
          title: "مسحوق الفانيليا",
          category: "صناعي",
          desc: "مسحوق فانيليا ناعم مثالي للخبز والتطبيقات الصناعية مع جودة ثابتة.",
          features: ["قوام مسحوق ناعم", "مدة صلاحية طويلة", "سهل الاستخدام"]
        }
      },
      catalog: {
        title: "كتالوج المنتجات",
        subtitle: "قم بتنزيل الكتالوج الكامل الذي يحتوي على المواصفات والأنواع ومعايير الجودة وخدماتنا.",
        highlights: [
          "مواصفات تفصيلية لكل منتج",
          "الدرجات ومعايير الجودة",
          "معلومات التغليف والشحن"
        ],
        viewBtn: "عرض عبر الإنترنت",
        downloadBtn: "تنزيل الكتالوج (PDF)"
      },
      contact: {
        title: "جاهز للطلب؟",
        subtitle: "اتصل بنا اليوم للحصول على أسعار تنافسية وعينات وطلبات مخصصة. نحن هنا لخدمة احتياجاتك من الفانيليا.",
        email: {
          title: "راسلنا بالبريد الإلكتروني",
          desc: "للاستفسارات والعروض"
        },
        whatsapp: {
          title: "واتساب",
          desc: "استجابة سريعة مضمونة"
        },
        location: {
          title: "الموقع",
          desc: "مقرها في إندونيسيا",
          address: "مزارع الفانيليا في جاوة وبالي"
        },
        form: {
          title: "اطلب مباشرة عبر واتساب",
          productType: "نوع المنتج",
          selectGrade: "-- اختر نوع المنتج --",
          quantity: "الكمية (كجم)",
          company: "اسم الشركة",
          email: "عنوان البريد الإلكتروني",
          requirements: "المتطلبات الإضافية",
          requirementsPlaceholder: "أخبرنا عن احتياجاتك المحددة...",
          submitBtn: "اطلب عبر واتساب"
        }
      },
      footer: {
        description: "شركة تصدير فانيليا ممتازة مكرسة لجلب أجود حبوب الفانيليا الإندونيسية إلى السوق العالمي. زراعة مستدامة، جودة استثنائية، توصيل عالمي.",
        quickLinks: "روابط سريعة",
        products: "المنتجات",
        copyright: "© 2024 ناتورا فانيلا. جميع الحقوق محفوظة. | تصدير الفانيليا الإندونيسية الممتازة"
      }
    }
  }

  const t = translations[currentLang]

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="vanilla export, Indonesian vanilla, premium vanilla beans, vanilla supplier, Grade A vanilla, vanilla extract, vanilla powder, export vanilla Indonesia" />
        <meta name="author" content="Natura Vanilla" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://naturavanilla.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://naturavanilla.com" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
        <meta property="og:image" content="/assets/our-vanilla-farm-on-traditiona_waifu2x_photo_noise3_scale.webp" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://naturavanilla.com" />
        <meta property="twitter:title" content={t.title} />
        <meta property="twitter:description" content={t.description} />
        <meta property="twitter:image" content="/assets/our-vanilla-farm-on-traditiona_waifu2x_photo_noise3_scale.webp" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Natura Vanilla",
              "description": "Premium vanilla export company from Indonesia",
              "url": "https://naturavanilla.com",
              "logo": "/assets/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-851-4492-0078",
                "contactType": "sales",
                "availableLanguage": ["Indonesian", "English", "Arabic"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ID",
                "addressRegion": "Java & Bali"
              },
              "sameAs": [
                "https://wa.me/6285144920078"
              ]
            })
          }}
        />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `
          }}
        />
        
        <link rel="icon" href="/assets/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&family=Noto+Naskh+Arabic:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-warm-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <img src="/assets/logo.png" alt="Natura Vanilla Logo" className="h-10 w-auto mr-3" />
              <h1 className="text-xl font-display font-bold text-primary-800">{t.brand}</h1>
            </div>
            
            {/* Language Switcher */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentLang('id')}
                  className={`px-2 py-1 text-sm font-medium rounded ${currentLang === 'id' ? 'bg-primary-600 text-white' : 'text-primary-700 hover:text-primary-900'}`}
                >
                  ID
                </button>
                <button
                  onClick={() => setCurrentLang('en')}
                  className={`px-2 py-1 text-sm font-medium rounded ${currentLang === 'en' ? 'bg-primary-600 text-white' : 'text-primary-700 hover:text-primary-900'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setCurrentLang('ar')}
                  className={`px-2 py-1 text-sm font-medium rounded ${currentLang === 'ar' ? 'bg-primary-600 text-white' : 'text-primary-700 hover:text-primary-900'}`}
                >
                  AR
                </button>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#home" className="nav-text text-primary-700 hover:text-primary-900 px-2 py-2 rounded-md text-sm transition-colors hover:underline underline-offset-8 decoration-primary-300 decoration-2" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}>{t.nav.home}</a>
                <a href="#about" className="nav-text text-primary-700 hover:text-primary-900 px-2 py-2 rounded-md text-sm transition-colors hover:underline underline-offset-8 decoration-primary-300 decoration-2" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>{t.nav.about}</a>
                <a href="#products" className="nav-text text-primary-700 hover:text-primary-900 px-2 py-2 rounded-md text-sm transition-colors hover:underline underline-offset-8 decoration-primary-300 decoration-2" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}>{t.nav.products}</a>
                <a href="#catalog" className="nav-text text-primary-700 hover:text-primary-900 px-2 py-2 rounded-md text-sm transition-colors hover:underline underline-offset-8 decoration-primary-300 decoration-2" onClick={(e) => { e.preventDefault(); document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' }); }}>{t.nav.catalog}</a>
                <a href="#contact" className="nav-text bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>{t.nav.contact}</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-primary-700 hover:text-primary-900 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <div className="flex space-x-2 px-3 py-2 mb-2">
                  <button
                    onClick={() => setCurrentLang('id')}
                    className={`px-2 py-1 text-sm font-medium rounded ${currentLang === 'id' ? 'bg-primary-600 text-white' : 'text-primary-700'}`}
                  >
                    ID
                  </button>
                  <button
                    onClick={() => setCurrentLang('en')}
                    className={`px-2 py-1 text-sm font-medium rounded ${currentLang === 'en' ? 'bg-primary-600 text-white' : 'text-primary-700'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setCurrentLang('ar')}
                    className={`px-2 py-1 text-sm font-medium rounded ${currentLang === 'ar' ? 'bg-primary-600 text-white' : 'text-primary-700'}`}
                  >
                    AR
                  </button>
                </div>
                <a href="#home" className="nav-text text-primary-700 hover:text-primary-900 block px-3 py-2 rounded-md text-base hover:underline underline-offset-8 decoration-primary-300" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>{t.nav.home}</a>
                <a href="#about" className="nav-text text-primary-700 hover:text-primary-900 block px-3 py-2 rounded-md text-base hover:underline underline-offset-8 decoration-primary-300" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>{t.nav.about}</a>
                <a href="#products" className="nav-text text-primary-700 hover:text-primary-900 block px-3 py-2 rounded-md text-base hover:underline underline-offset-8 decoration-primary-300" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>{t.nav.products}</a>
                <a href="#catalog" className="nav-text text-primary-700 hover:text-primary-900 block px-3 py-2 rounded-md text-base hover:underline underline-offset-8 decoration-primary-300" onClick={(e) => { e.preventDefault(); document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>{t.nav.catalog}</a>
                <a href="#contact" className="nav-text bg-primary-600 hover:bg-primary-700 text-white block px-3 py-2 rounded-lg text-base" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>{t.nav.contact}</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="min-h-screen bg-gradient-to-b from-warm-50 to-white pt-16">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/assets/our-vanilla-farm-on-traditiona_waifu2x_photo_noise3_scale.webp" 
              alt="Our Vanilla Farm" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-primary-700/70"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto text-center z-10">
            
            <h1 className="hero-title text-5xl md:text-7xl text-white mb-8">
              {t.hero.title}
              <span className="block text-primary-200 text-4xl md:text-6xl mt-2">{t.hero.subtitle}</span>
            </h1>
            
            <p className="section-subtitle text-xl md:text-2xl text-white mb-6 max-w-4xl mx-auto">
              {t.hero.description}
            </p>
            <p className="body-text text-lg text-primary-200 mb-10 max-w-3xl mx-auto">
              {t.hero.trusted}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="button-text bg-white text-primary-800 hover:bg-primary-50 px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                {t.hero.catalogBtn}
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="button-text border-2 border-white text-white hover:bg-white hover:text-primary-800 px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                {t.hero.contactBtn}
              </button>
            </div>

          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
                {t.about.title}
              </h2>
              <p className="text-xl text-warm-700 max-w-3xl mx-auto">
                {t.about.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
                    {t.about.story}
                  </span>
                  <h3 className="text-2xl font-bold text-primary-800 mb-4">{t.about.storyTitle}</h3>
                  <p className="text-lg text-warm-700 mb-6 leading-relaxed">
                    {t.about.storyDesc1}
                  </p>
                  <p className="text-lg text-warm-700 leading-relaxed">
                    {t.about.storyDesc2}
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary-50 to-warm-50 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary-800 mb-6">{t.about.whyTitle}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-1">{t.about.features.quality.title}</h4>
                      <p className="text-warm-700 text-sm">{t.about.features.quality.desc}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-1">{t.about.features.farming.title}</h4>
                      <p className="text-warm-700 text-sm">{t.about.features.farming.desc}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-1">{t.about.features.shipping.title}</h4>
                      <p className="text-warm-700 text-sm">{t.about.features.shipping.desc}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-1">{t.about.features.pricing.title}</h4>
                      <p className="text-warm-700 text-sm">{t.about.features.pricing.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="font-display text-5xl font-bold text-primary-800 mb-3">3+</div>
                <div className="body-text text-primary-600 text-sm uppercase tracking-wider">{t.stats.experience}</div>
              </div>
              <div>
                <div className="font-display text-5xl font-bold text-primary-800 mb-3">8+</div>
                <div className="body-text text-primary-600 text-sm uppercase tracking-wider">{t.stats.countries}</div>
              </div>
              <div>
                <div className="font-display text-5xl font-bold text-primary-800 mb-3">2000+</div>
                <div className="body-text text-primary-600 text-sm uppercase tracking-wider">{t.stats.exported}</div>
              </div>
              <div>
                <div className="font-display text-5xl font-bold text-primary-800 mb-3">A</div>
                <div className="body-text text-primary-600 text-sm uppercase tracking-wider">{t.stats.quality}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 px-4 bg-gradient-to-b from-warm-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="section-title text-4xl md:text-6xl text-primary-800 mb-8">
                {t.products.title}
              </h2>
              <p className="section-subtitle text-xl md:text-2xl text-warm-700 max-w-4xl mx-auto">
                {t.products.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden">
                    <img 
                      src="/assets/vanili%20plafonia.jpg" 
                      alt={t.products.planifolia.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-800 mb-2">{t.products.planifolia.title}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{t.products.planifolia.category}</div>
                </div>
                <p className="text-warm-700 mb-6 text-center">
                  {t.products.planifolia.desc}
                </p>
                <ul className="space-y-3 mb-6">
                  {t.products.planifolia.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-warm-700">
                      <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-semibold transition-colors">
                  Request Quote
                </button>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden">
                    <img 
                      src="/assets/tahiti.jpg" 
                      alt={t.products.tahitensis.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-800 mb-2">{t.products.tahitensis.title}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{t.products.tahitensis.category}</div>
                </div>
                <p className="text-warm-700 mb-6 text-center">
                  {t.products.tahitensis.desc}
                </p>
                <ul className="space-y-3 mb-6">
                  {t.products.tahitensis.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-warm-700">
                      <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-semibold transition-colors">
                  Request Quote
                </button>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden">
                    <img 
                      src="/assets/bubuk.jpg" 
                      alt={t.products.powder.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-800 mb-2">{t.products.powder.title}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{t.products.powder.category}</div>
                </div>
                <p className="text-warm-700 mb-6 text-center">
                  {t.products.powder.desc}
                </p>
                <ul className="space-y-3 mb-6">
                  {t.products.powder.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-warm-700">
                      <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-semibold transition-colors">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section id="catalog" className="py-24 px-4 bg-gradient-to-b from-white to-warm-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="section-title text-4xl md:text-6xl text-primary-800 mb-6">{t.catalog.title}</h2>
              <p className="section-subtitle text-xl md:text-2xl text-warm-700 max-w-4xl mx-auto">
                {t.catalog.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="bg-white rounded-3xl p-10 shadow-lg border border-primary-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m4-4H8" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-800 mb-2">{t.catalog.title}</h3>
                    <p className="text-warm-700">{t.catalog.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {t.catalog.highlights.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center text-warm-700">
                      <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/assets/katalog%20vanilla.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-text bg-white border-2 border-primary-600 text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-xl text-lg transition-all duration-300"
                  >
                    {t.catalog.viewBtn}
                  </a>
                  <a
                    href="/assets/katalog%20vanilla.pdf"
                    download
                    className="button-text bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl text-lg transition-all duration-300"
                  >
                    {t.catalog.downloadBtn}
                  </a>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-primary-100 bg-white">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-100/40 to-transparent pointer-events-none"></div>
                <img src="/assets/our-vanilla-farm-on-traditiona_waifu2x_photo_noise3_scale.webp" alt="Catalog Preview" className="w-full h-80 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-primary-600 font-medium mb-1">PDF</div>
                      <div className="text-xl font-semibold text-primary-800">Natura Vanilla - Product Catalog</div>
                      <div className="text-warm-600">~2 MB • Bahasa Indonesia & English</div>
                    </div>
                    <a href="/assets/katalog%20vanilla.pdf" download className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                      </svg>
                      {t.catalog.downloadBtn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="section-title text-4xl md:text-6xl mb-8">{t.contact.title}</h2>
              <p className="section-subtitle text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto">{t.contact.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{t.contact.email.title}</h3>
                      <p className="text-primary-200 mb-2">{t.contact.email.desc}</p>
                      <a href="mailto:indo@naturavanilla.net" className="text-white font-medium hover:text-primary-200 transition-colors">
                        indo@naturavanilla.net
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{t.contact.whatsapp.title}</h3>
                      <p className="text-primary-200 mb-2">{t.contact.whatsapp.desc}</p>
                      <a href="https://wa.me/6285144920078" className="text-white font-medium hover:text-primary-200 transition-colors">
                        +62 851 4492 0078
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{t.contact.location.title}</h3>
                      <p className="text-primary-200 mb-2">{t.contact.location.desc}</p>
                      <p className="text-white font-medium">{t.contact.location.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-700/50 backdrop-blur-sm rounded-3xl p-10">
                <h3 className="section-title text-3xl mb-10">{t.contact.form.title}</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="nav-text block text-sm text-primary-200 mb-3">{t.contact.form.productType}</label>
                      <select className={`w-full px-5 py-4 bg-white/20 border rounded-xl text-white focus:outline-none focus:ring-2 body-text ${
                        (formErrors as any).productType ? 'border-red-400 focus:ring-red-400' : 'border-white/30 focus:ring-primary-400'
                      }`}>
                        <option value="" className="text-gray-500">{t.contact.form.selectGrade}</option>
                        <option value="Grade A Whole Beans" className="text-gray-900 bg-white">Grade A - Biji Vanili Utuh Premium</option>
                        <option value="Grade B Whole Beans" className="text-gray-900 bg-white">Grade B - Biji Vanili Utuh Standar</option>
                        <option value="Vanilla Extract" className="text-gray-900 bg-white">Ekstrak Vanili Cair</option>
                        <option value="Vanilla Powder" className="text-gray-900 bg-white">Bubuk Vanili</option>
                      </select>
                      {(formErrors as any).productType && (
                        <p className="text-red-300 text-sm mt-1">{(formErrors as any).productType}</p>
                      )}
                    </div>
                    <div>
                      <label className="nav-text block text-sm text-primary-200 mb-3">{t.contact.form.quantity}</label>
                      <input 
                        type="number" 
                        placeholder="100" 
                        className={`w-full px-5 py-4 bg-white/20 border rounded-xl text-white placeholder-primary-200 focus:outline-none focus:ring-2 body-text ${
                          (formErrors as any).quantity ? 'border-red-400 focus:ring-red-400' : 'border-white/30 focus:ring-primary-400'
                        }`} 
                      />
                      {(formErrors as any).quantity && (
                        <p className="text-red-300 text-sm mt-1">{(formErrors as any).quantity}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="nav-text block text-sm text-primary-200 mb-3">{t.contact.form.company}</label>
                    <input 
                      type="text" 
                      placeholder="Your Company Name" 
                      className={`w-full px-5 py-4 bg-white/20 border rounded-xl text-white placeholder-primary-200 focus:outline-none focus:ring-2 body-text ${
                        (formErrors as any).company ? 'border-red-400 focus:ring-red-400' : 'border-white/30 focus:ring-primary-400'
                      }`} 
                    />
                    {(formErrors as any).company && (
                      <p className="text-red-300 text-sm mt-1">{(formErrors as any).company}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="nav-text block text-sm text-primary-200 mb-3">{t.contact.form.email}</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className={`w-full px-5 py-4 bg-white/20 border rounded-xl text-white placeholder-primary-200 focus:outline-none focus:ring-2 body-text ${
                        (formErrors as any).email ? 'border-red-400 focus:ring-red-400' : 'border-white/30 focus:ring-primary-400'
                      }`} 
                    />
                    {(formErrors as any).email && (
                      <p className="text-red-300 text-sm mt-1">{(formErrors as any).email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="nav-text block text-sm text-primary-200 mb-3">{t.contact.form.requirements}</label>
                    <textarea rows={4} placeholder={t.contact.form.requirementsPlaceholder} className="w-full px-5 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none body-text"></textarea>
                  </div>
                  
                  <button 
                    onClick={async () => {
                      setIsSubmitting(true);
                      setFormErrors({});
                      setShowSuccess(false);
                      
                      const productType = (document.querySelector('select') as HTMLSelectElement)?.value || '';
                      const quantity = (document.querySelector('input[type="number"]') as HTMLInputElement)?.value || '';
                      const company = (document.querySelector('input[type="text"]') as HTMLInputElement)?.value || '';
                      const email = (document.querySelector('input[type="email"]') as HTMLInputElement)?.value || '';
                      const requirements = (document.querySelector('textarea') as HTMLTextAreaElement)?.value || '';
                      
                      // Form validation
                      const errors: any = {};
                      if (!productType) errors.productType = 'Pilih jenis produk';
                      if (!quantity || parseInt(quantity) < 1) errors.quantity = 'Masukkan kuantitas yang valid';
                      if (!company.trim()) errors.company = 'Nama perusahaan wajib diisi';
                      if (!email.trim()) errors.email = 'Email wajib diisi';
                      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Format email tidak valid';
                      
                      if (Object.keys(errors).length > 0) {
                        setFormErrors(errors);
                        setIsSubmitting(false);
                        return;
                      }
                      
                      // Analytics tracking
                      if (typeof gtag !== 'undefined') {
                        gtag('event', 'form_submit', {
                          event_category: 'engagement',
                          event_label: 'whatsapp_order_form',
                          value: parseInt(quantity) || 0
                        });
                      }
                      
                      // Simulate processing delay
                      await new Promise(resolve => setTimeout(resolve, 1000));
                      
                      const message = `Halo, saya tertarik untuk memesan vanili dari Natura Vanilla.

Detil Pesanan:
- Jenis Produk: ${productType}
- Kuantitas: ${quantity} kg
- Nama Perusahaan: ${company}
- Email: ${email}
- Kebutuhan Tambahan: ${requirements || 'Tidak ada'}

Mohon informasi lebih lanjut mengenai harga dan ketersediaan. Terima kasih!`;
                      
                      const encodedMessage = encodeURIComponent(message);
                      window.open(`https://wa.me/6285144920078?text=${encodedMessage}`, '_blank');
                      
                      // Track WhatsApp click
                      if (typeof gtag !== 'undefined') {
                        gtag('event', 'click', {
                          event_category: 'engagement',
                          event_label: 'whatsapp_redirect'
                        });
                      }
                      
                      setShowSuccess(true);
                      setIsSubmitting(false);
                      
                      // Reset success message after 3 seconds
                      setTimeout(() => setShowSuccess(false), 3000);
                    }}
                    disabled={isSubmitting}
                    className={`w-full px-8 py-5 rounded-xl button-text text-lg transition-all duration-300 transform ${
                      isSubmitting 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-white text-primary-800 hover:bg-primary-50 hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Memproses...
                      </div>
                    ) : (
                      t.contact.form.submitBtn
                    )}
                  </button>
                  
                  {/* Success Message */}
                  {showSuccess && (
                    <div className="mt-4 p-4 bg-green-500/20 border border-green-400 rounded-xl">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-green-300 text-sm">Berhasil! WhatsApp akan terbuka dengan pesan Anda.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary-900 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">{t.brand}</h3>
                <p className="text-primary-200 mb-4 leading-relaxed">
                  {t.footer.description}
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-primary-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-primary-200 hover:text-white transition-colors">{t.nav.home}</a></li>
                  <li><a href="#about" className="text-primary-200 hover:text-white transition-colors">{t.nav.about}</a></li>
                  <li><a href="#products" className="text-primary-200 hover:text-white transition-colors">{t.nav.products}</a></li>
                  <li><a href="#contact" className="text-primary-200 hover:text-white transition-colors">{t.nav.contact}</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">{t.footer.products}</h4>
                <ul className="space-y-2">
                  <li><span className="text-primary-200">{t.products.planifolia.title}</span></li>
                  <li><span className="text-primary-200">{t.products.tahitensis.title}</span></li>
                  <li><span className="text-primary-200">{t.products.powder.title}</span></li>
                  <li><span className="text-primary-200">Custom Orders</span></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-primary-700 pt-8 text-center">
              <p className="text-primary-200">
                {t.footer.copyright}
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
