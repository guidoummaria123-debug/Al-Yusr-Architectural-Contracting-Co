/**
 * Al-Yusr Architectural Contracting Co. - Core Web Engine
 * Framework-free high performance translation matrix & view handling.
 */

// 1. Localization Dictionary Mappings
const i18nTokens = {
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_projects: "Projects",
        nav_gallery: "Our Projects Gallery",
        nav_certificates: "Certificates",
        nav_contact: "Contact Us",
        nav_cta: "Get in Touch",
        hero_title: "BUILDING THE FUTURE WITH EXCELLENCE",
        hero_subtitle: "Delivering world-class construction, finishing, infrastructure and urban development projects with quality, innovation and trust.",
        hero_btn_projects: "View Projects",
        hero_btn_contact: "Contact Us",
        stat_exp: "Years of Experience",
        stat_projects: "Projects Completed",
        stat_satisfaction: "Client Satisfaction",
        stat_awards: "Industry Awards",
        about_badge: "CORPORATE PROFILE",
        about_title: "About Al-Yusr Arch. Co.",
        about_main_p: "Al-Yusr Architectural Contracting is one of the leading construction companies in the Kingdom of Saudi Arabia, specialized in general contracting services including construction, finishing works, infrastructure, and urban development. Since its establishment, the company has built a reputation for excellence, reliability, and innovation by consistently delivering high-quality projects that meet international standards.",
        about_vision_title: "Vision",
        about_vision_desc: "To be a leading contracting company in Saudi Arabia and the Middle East, recognized for delivering high-quality projects with a focus on innovation, sustainability, and customer satisfaction.",
        about_mission_title: "Mission",
        about_mission_desc: "To provide comprehensive construction services that exceed client expectations by ensuring quality, safety, and timely delivery, while fostering sustainable development and professional growth.",
        about_goals_title: "Our Strategic Goals",
        about_goal_1: "Complete projects on time and within budget while maintaining the highest quality.",
        about_goal_2: "Build long-term relationships with clients through trust and excellence.",
        about_goal_3: "Develop and retain a skilled and motivated workforce.",
        about_goal_4: "Keep up with the latest technologies and methods in the construction industry.",
        about_floating_badge: "Years of Building Trust",
        services_badge: "OUR CORE CAPABILITIES",
        services_title: "Professional Engineering Services",
        process_badge: "EXECUTION FRAMEWORK",
        process_title: "A Seamless Journey",
        step1_title: "Discover", step1_desc: "Understand your vision, goals and requirements.",
        step2_title: "Design", step2_desc: "Crafting intelligent designs that loom and perform.",
        step3_title: "Build", step3_desc: "Expert mobilization with quality materials and execution.",
        step4_title: "Deliver", step4_desc: "On-time delivery with attention to every detail.",
        step5_title: "Beyond", step5_desc: "Ongoing bonding to ensure lasting satisfaction.",
        portfolio_badge: "OUR PORTFOLIO",
        portfolio_title: "Track Record of Masterpieces",
        filter_all: "All Projects",
        filter_commercial: "Commercial & Admin",
        filter_residential: "Residential & Villas",
        filter_infra: "Infrastructure Solutions",
        gallery_badge: "VISUAL CHRONICLES",
        gallery_title: "Our Projects Gallery",
        certs_badge: "COMPLIANCE & CREDENTIALS",
        certs_title: "Official Qualifications & Accreditations",
        cert1_title: "SCA Membership", cert1_desc: "Saudi Contractors Authority Certified Member Registration Document",
        cert2_title: "Balady Services Classification", cert2_desc: "Official classification by Ministry of Municipal Rural Affairs and Housing",
        cert3_title: "VAT Registration", cert3_desc: "Zakat, Tax and Customs Authority VAT Compliance Certification",
        cert4_title: "National Address Proof", cert4_desc: "Official verified legal address documentation inside the Kingdom",
        contact_title: "LET’S BUILD SOMETHING EXTRAORDINARY",
        contact_subtitle: "Partner with Al-Yusr Architectural Contracting Co. to bring engineering milestones to reality with absolute execution mastery.",
        contact_hq_label: "Headquarters",
        contact_hq_val: "Riyadh, Kingdom of Saudi Arabia",
        label_name: "Full Name",
        label_email: "Email Address",
        label_phone: "Phone Number",
        label_message: "Project Requirements / Message",
        btn_submit: "GET IN TOUCH",
        footer_partners: "STRATEGIC ENTERPRISE PARTNERS & VENDORS",
        footer_copy: "Al-Yusr Architectural Contracting Co. All Rights Reserved."
    },
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_services: "خدماتنا",
        nav_projects: "مشاريعنا",
        nav_gallery: "معرض مشاريعنا",
        nav_certificates: "الشهادات",
        nav_contact: "اتصل بنا",
        nav_cta: "تواصل معنا",
        hero_title: "بناء المستقبل بتميز",
        hero_subtitle: "تقديم مشاريع بناء وتشطيب وبنية تحتية وتطوير عقاري بمستوى عالمي مع الجودة، الابتكار، والثقة.",
        hero_btn_projects: "عرض المشاريع",
        hero_btn_contact: "اتصل بنا",
        stat_exp: "أكثر من 20 عاماً من الخبرة",
        stat_projects: "أكثر من 150 مشروعاً منجزاً",
        stat_satisfaction: "99% رضا العملاء",
        stat_awards: "أكثر من 15 جائزة في القطاع",
        about_badge: "ملف الشركة الإستراتيجي",
        about_title: "عن شركة اليسر المعمارية للمقاولات",
        about_main_p: "تعد شركة اليسر المعمارية للمقاولات إحدى الشركات الرائدة في مجال الإنشاءات في المملكة العربية السعودية، والمتخصصة في خدمات المقاولات العامة بما في ذلك أعمال البناء والتشطيبات والبنية التحتية والتطوير الحضري. منذ تأسيسها، نجحت الشركة في بناء سمعة قوية قائمة على التتميز والموثوقية والابتكار، من خلال تقديم مشاريع عالية الجودة تطابق المعايير العالمية بشكل مستمر.",
        about_vision_title: "الرؤية",
        about_vision_desc: "أن نكون شركة مقاولات رائدة في المملكة العربية السعودية والشرق الأوسط، مشهود لها بتقديم مشاريع عالية الجودة مع التركيز على الابتكار والاستدامة ورضا العملاء.",
        about_mission_title: "الرسالة",
        about_mission_desc: "تقديم خدمات إنشاءات شاملة تفوق توقعات العملاء من خلال ضمان الجودة والسلامة والتسليم في المواعيد المحددة، مع تعزيز التنمية المستدامة والنمو المهني.",
        about_goals_title: "أهدافنا الإستراتيجية",
        about_goal_1: "إنجاز المشاريع في الوقت المحدد وضمن الميزانية مع الحفاظ على أعلى معايير الجودة.",
        about_goal_2: "بناء علاقات طويلة الأمد مع العملاء من خلال الثقة والتميز.",
        about_goal_3: "تطوير واستبقاء قوى عاملة ماهرة ومحفزة.",
        about_goal_4: "مواكبة أحدث التقنيات والأساليب في صناعة الإنشاءات.",
        about_floating_badge: "عاماً من بناء الثقة العريقة",
        services_badge: "قدراتنا الهندسية الجوهرية",
        services_title: "الخدمات الهندسية الاحترافية",
        process_badge: "منهجية التنفيذ المتكاملة",
        process_title: "رحلة عمل سلسة",
        step1_title: "الاكتشاف", step1_desc: "فهم رؤيتك وأهدافك ومتطلباتك بدقة.",
        step2_title: "التصميم", step2_desc: "صياغة تصاميم ذكية ومميزة تلبي وتفوق التطلعات.",
        step3_title: "البناء", step3_desc: "حشد الخبرات والمواد عالية الجودة للتنفيذ المتقن.",
        step4_title: "التسليم", step4_desc: "التسليم في الوقت المحدد مع الاهتمام الصارم بكل التفاصيل.",
        step5_title: "ما بعد التسليم", step5_desc: "ارتباط مستمر لضمان الرضا الدائم والشهادات المستدامة.",
        portfolio_badge: "سجل أعمالنا",
        portfolio_title: "مشاريعنا الإنشائية المتميزة",
        filter_all: "جميع المشاريع",
        filter_commercial: "المشاريع التجارية والإدارية",
        filter_residential: "المجمعات السكنية والفلل",
        filter_infra: "حلول البنية التحتية",
        gallery_badge: "سجلات مرئية",
        gallery_title: "معرض مشاريعنا",
        certs_badge: "الامتثال والاعتمادات الرسمية",
        certs_title: "المؤهلات والاعتمادات الرسمية للشركة",
        cert1_title: "عضوية الهيئة السعودية للمقاولين", cert1_desc: "وثيقة تسجيل عضوية رسمية معتمدة من الهيئة السعودية للمقاولين",
        cert2_title: "تصنيف خدمات بلدي", cert2_desc: "شهادة التصنيف الرسمي المعتمد من وزارة الشؤون البلدية والقروية والإسكان",
        cert3_title: "شهادة ضريبة القيمة المضافة", cert3_desc: "شهادة الامتثال الضريبي الصادرة عن هيئة الزكاة والضريبة والجمارك",
        cert4_title: "إثبات العنوان الوطني", cert4_desc: "مستند العنوان القانوني واللوجستي المعتمد في مناطق المملكة",
        contact_title: "لنبني شيئاً استثنائياً",
        contact_subtitle: "شاركونا النجاح في شركة اليسر المعمارية للمقاولات لتحويل الرؤى الهندسية إلى معالم حية على أرض الواقع.",
        contact_hq_label: "المقر الرئيسي",
        contact_hq_val: "الرياض، المملكة العربية السعودية",
        label_name: "الاسم الكامل",
        label_email: "البريد الإلكتروني",
        label_phone: "رقم الجوال",
        label_message: "تفاصيل المشروع / الرسالة",
        btn_submit: "تواصل معنا الآن",
        footer_partners: "شركاء النجاح الإستراتيجيين",
        footer_copy: "شركة اليسر المعمارية للمقاولات. جميع الحقوق محفوظة."
    }
};

// 2. Comprehensive System Databases for Dynamic UI Elements
const servicesDatabase = [
    { id: 1, icon: "🏗️", en: { title: "General Contracting", desc: "Full spectrum elite execution control over civil structures and developments." }, ar: { title: "المقاولات العامة", desc: "إشراف وتنفيذ شامل على أعلى مستوى للمشاريع الإنشائية والمدنية." } },
    { id: 2, icon: "🧱", en: { title: "Construction", desc: "Precision heavy structural implementations fulfilling rigid engineering designs." }, ar: { title: "أعمال الإنشاءات", desc: "تنفيذ إنشائي دقيق للمباني والهياكل وفق أدق المخططات الهندسية." } },
    { id: 3, icon: "🏛️", en: { title: "Finishing Works", desc: "Premium interior & exterior detailing utilizing luxury architectural finishings." }, ar: { title: "أعمال التشطيبات", desc: "تشطيبات داخلية وخارجية فاخرة تعكس دقة الهندسة المعمارية." } },
    { id: 4, icon: "🛣️", en: { title: "Infrastructure", desc: "Robust framework utilities preparation, networks excavation, and paving masterworks." }, ar: { title: "البنية التحتية", desc: "تأسيس شبكات ومرافق البنية التحتية وشبكات الطرق بمواصفات قياسية." } },
    { id: 5, icon: "📐", en: { title: "Engineering Management", desc: "Operational orchestration safeguarding timelines, budgetary balances, and safety bounds." }, ar: { title: "الإدارة الهندسية", desc: "إدارة متكاملة تضمن الالتزام بالجداول الزمنية والميزانيات ومعايير السلامة." } },
    { id: 6, icon: "🏙️", en: { title: "Urban Development", desc: "Transformative structural developments matching modern sustainability parameters." }, ar: { title: "التطوير الحضري", desc: "تطوير عقاري وحضري يواكب أحدث معايير الاستدامة وجودة الحياة." } },
    { id: 7, icon: "💧", en: { title: "Infrastructure Solutions", desc: "Advanced systems for water, sewage, power grids, and subterranean structural work." }, ar: { title: "حلول البنية التحتية", desc: "أنظمة متقدمة لشبكات المياه والصرف والكهرباء والخطوط الجوفية المعقدة." } },
    { id: 8, icon: "⚙️", en: { title: "Engineering Solutions", desc: "Innovative value engineering overrides optimizing resource layouts flawlessly." }, ar: { title: "الحلول الهندسية", desc: "الهندسة القيمة وحلول الابتكار لترشيد الموارد ورفع كفاءة الأداء." } },
    { id: 9, icon: "💼", en: { title: "Project Management", desc: "Complete cross-functional management ensuring unmatched technical compliance cycles." }, ar: { title: "إدارة المشاريع", desc: "إشراف شامل متقاطع لضمان أعلى مستويات الامتثال والجودة في المواقع." } },
    { id: 10, icon: "✒️", en: { title: "Design & Build", desc: "Fluid turn-key conversion loops linking conceptual drafting seamlessly with field masonry." }, ar: { title: "التصميم والتنفيذ", desc: "منظومة تسليم المفتاح المتكاملة التي تربط الفكرة المعمارية بالتنفيذ الفعلي." } }
];

const projectsDatabase = [
    { id: 1, cat: "commercial", en: { title: "Commercial Administrative Project - Al-Mounasiya", owner: "Al-Hano Co.", desc: "Concrete Structure - Total Built-up Area 31,000 sqm" }, ar: { title: "إنشاء مشروع تجاري إداري حي المونسية", owner: "شركة الحنو", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 31000 م٢" } },
    { id: 2, cat: "commercial", en: { title: "Office Building - Al-Murooj District", owner: "Mad Real Estate Co.", desc: "Concrete Structure - Total Built-up Area 12,000 sqm" }, ar: { title: "إنشاء عمارة مكتبية حي المروج", owner: "شركة ماد العقارية", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 12000 م٢" } },
    { id: 3, cat: "commercial", en: { title: "Hotel Construction - Al-Rahmaniyah District", owner: "Al-Manihal Co.", desc: "Concrete Structure - Total Built-up Area 23,500 sqm" }, ar: { title: "إنشاء فندق حي الرحمانية", owner: "شركة المنيع", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 23500 م٢" } },
    { id: 4, cat: "commercial", en: { title: "Administrative Building - Al-Taawun District", owner: "Al-Qablan Co.", desc: "Concrete Structure - Total Built-up Area 9,200 sqm" }, ar: { title: "إنشاء مبني إداري حي التعاون", owner: "شركة القبلان", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 9200 م٢" } },
    { id: 5, cat: "commercial", en: { title: "Administrative Building - Al-Aqeeq District", owner: "Al-Ajlan Co.", desc: "Concrete Structure - Total Built-up Area 18,000 sqm" }, ar: { title: "إنشاء مبني إداري حي العقيق", owner: "شركة العجلان", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 18000 م٢" } },
    { id: 6, cat: "commercial", en: { title: "Warehouse Logistics Center - Al-Kharj", owner: "Zaid Al-Hussein Co.", desc: "Steel Structure Framework - Total Built-up Area 9,000 sqm" }, ar: { title: "إنشاء مستودعات الخرج", owner: "شركة زيد الحسين", desc: "إنشاء الهيكل الحديدي - إجمالي مسطحات 9000 م٢" } },
    { id: 7, cat: "commercial", en: { title: "Commercial Residential & Office Tower", owner: "Al-Obailan Group", desc: "Concrete Structure - Total Built-up Area 15,000 sqm" }, ar: { title: "إنشاء برج مكتبي سكني", owner: "العبيلان", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 15000 م٢" } },
    { id: 8, cat: "commercial", en: { title: "Commercial Building - Al-Sulaimaniyah", owner: "Mobily Co.", desc: "Concrete Structure - Total Built-up Area 17,000 sqm" }, ar: { title: "إنشاء مبني تجاري حي السليمانية", owner: "شركة موبايلي", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 17000 م٢" } },
    { id: 9, cat: "residential", en: { title: "Construction of (6) Residential Buildings - Al-Rimal", owner: "Abdul Latif Al-Abdul Latif - Abra Al-Afaq Co.", desc: "Concrete Structure - Total Area 26,000 sqm" }, ar: { title: "إنشاء عدد (6) عمارات سكنية بحي الرمال", owner: "عبد اللطيف العبد اللطيف - شركة عبر الآفاق", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 26000 م٢" } },
    { id: 10, cat: "commercial", en: { title: "Commercial Admin Complex - Northern Maather", owner: "Abdul Latif Al-Abdul Latif - Abra Al-Afaq Co.", desc: "Concrete Structure - Total Built-up Area 38,600 sqm" }, ar: { title: "إنشاء مبني تجاري إداري حي المعذر الشمالي", owner: "عبد اللطيف العبد اللطيف - شركة عبر الآفاق", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 38600 م٢" } },
    { id: 11, cat: "commercial", en: { title: "Commercial Structure - Al-Taawun District", owner: "Hayaza Real Estate", desc: "Concrete Structure - Total Built-up Area 20,000 sqm" }, ar: { title: "إنشاء مبني تجاري حي التعاون", owner: "شركة حيازة", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 20000 م٢" } },
    { id: 12, cat: "residential", en: { title: "Residential Villa Compound Complex - Irqah", owner: "Majzia Investment Co.", desc: "Turnkey Project Delivery - Total Built-up Area 3,200 sqm" }, ar: { title: "إنشاء مجمع فلل سكنية حي عرقة", owner: "شركة مجزية الإستثمارية", desc: "تسليم مفتاح - إجمالي مسطحات 3200 م٢" } },
    { id: 13, cat: "residential", en: { title: "Luxury Private Palace - Irqah District", owner: "Mr. Faisal Al-Wabil", desc: "Concrete Structural Baseline - Total Area 10,000 sqm" }, ar: { title: "إنشاء قصر سكني حي عرقة", owner: "الإستاذ فيصل الوابل", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 10000 م٢" } },
    { id: 14, cat: "residential", en: { title: "Residential Royal Palace - Al-Maather District", owner: "Princess Hessa Al-Damir", desc: "Concrete Structure Core Phase - Total Area 8,000 sqm" }, ar: { title: "إنشاء قصر سكني حي المعذر", owner: "الأميرة حصة الدامر", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 8000 م٢" } },
    { id: 15, cat: "residential", en: { title: "Mosque & Imam Residential Housing Complex - Granada", owner: "Mr. Ibrahim Saad Al-Hussein", desc: "Turnkey Engineering Construction Execution - 5,000 sqm" }, ar: { title: "إنشاء مسجد وسكن الإمام حي غرناطة", owner: "الاستاذ إبراهيم سعد الحسين", desc: "تسليم مفتاح - إجمالي مسطحات 5000 م٢" } },
    { id: 16, cat: "residential", en: { title: "Residential Villa Cluster Compound - Al-Nafl", owner: "Theeb Real Estate Development", desc: "Turnkey Full Scale Build Completion - 8,000 sqm" }, ar: { title: "إنشاء مجمع فلل سكنية حي النفل", owner: "شركة ذيب للتطوير العقاري", desc: "تسليم مفتاح - إجمالي مسطحات 8000 م٢" } },
    { id: 17, cat: "residential", en: { title: "Residential Apartment Block - Al-Sulaimaniyah", owner: "Al-Mulla Real Estate Development", desc: "Structural Shell Framework Execution - 5,000 sqm" }, ar: { title: "إنشاء عمارة سكنية حي السليمانية", owner: "شركة الملا للتطوير العقاري", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 5000 م٢" } },
    { id: 18, cat: "residential", en: { title: "Residential Blocks Structural Execution - Al-Nafl", owner: "Al-Omer Investment", desc: "Concrete Structural Architecture Engineering - 9,000 sqm" }, ar: { title: "إنشاء عمارات سكنية حي النفل", owner: "شركة العمر للإستثمار", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 9000 م٢" } },
    { id: 19, cat: "residential", en: { title: "Residential Buildings Construction - Al-Yasmin", owner: "Foonoon Al-Benaa Architecture", desc: "Concrete Structure Engineering Phases - 15,000 sqm" }, ar: { title: "إنشاء عمارات سكنية حي الياسمين", owner: "شركة فنون البناء", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 15000 م٢" } },
    { id: 20, cat: "residential", en: { title: "Residential Towers Construction - Al-Wadi", owner: "Mr. Waleed Al-Qasim", desc: "Turnkey Finish Engineering Execution - 6,000 sqm" }, ar: { title: "إنشاء عمارات سكنية حي الوادي", owner: "الاستاذ وليد القاسم", desc: "تسليم مفتاح - إجمالي مسطحات 6000 م٢" } },
    { id: 21, cat: "residential", en: { title: "Residential Villa Compound Block - Al-Rimal", owner: "Asas Al-Jawhara Real Estate Dev", desc: "Concrete Structural Phase Works - 18,000 sqm" }, ar: { title: "إنشاء مجمع فلل سكنية حي الرمال", owner: "شركة أساس الجوهرة للتطوير العقاري", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 18000 م٢" } },
    { id: 22, cat: "residential", en: { title: "Residential Complexes Development - Al-Aridh", owner: "Al-Sulaiman Real Estate Group", desc: "Concrete Structural Framework Assembly - 46,000 sqm" }, ar: { title: "إنشاء عمارات سكنية حي العارض", owner: "شركة السليمان العقارية", desc: "إنشاء الهيكل الخرساني - إجمالي مسطحات 46000 م٢" } },
    { id: 23, cat: "commercial", en: { title: "Three Foods Markets Commercial Complex - Al-Wadi", owner: "Al-Qasim Investments Group", desc: "Full Turnkey Commercial Development - 5,000 sqm" }, ar: { title: "إنشاء مبني أسواق الأطعمة الثلاثة حي الوادي", owner: "شركة القاسم للإستثمار", desc: "تسليم مفتاح - إجمالي مسطحات 5000 م٢" } },
    { id: 24, cat: "infrastructure", en: { title: "Educational Complex Structural Restoration - Al-Nafl", owner: "Al-Fursan Schools Group", desc: "Turnkey Complex Modernization & Refurbishment - 5,200 sqm" }, ar: { title: "ترميم وتشطيب مدرسة حي النفل", owner: "مدارس الفرسان", desc: "تسليم مفتاح - إجمالي مسطحات 5200 م٢" } }
];

// 3. Engine Application State Controller
let currentLanguage = "en";

document.addEventListener("DOMContentLoaded", () => {
    initializeLanguageSwitcher();
    renderServicesGrid();
    renderProjectsPortfolio("all");
    initializePortfolioFilters();
    initializeMobileMenu();
    trackScrollNavigationHighlight();
});

// 4. Localization Engine Implementation
function initializeLanguageSwitcher() {
    const langBtn = document.getElementById("langToggle");
    langBtn.addEventListener("click", () => {
        currentLanguage = currentLanguage === "en" ? "ar" : "en";
        langBtn.innerText = currentLanguage === "en" ? "العربية" : "English";
        
        // Mutate structural presentation directions
        const htmlNode = document.documentElement;
        htmlNode.setAttribute("lang", currentLanguage);
        htmlNode.setAttribute("dir", currentLanguage === "ar" ? "rtl" : "ltr");
        
        // Redraw translation tokens throughout DOM trees
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const token = element.getAttribute("data-i18n");
            if (i18nTokens[currentLanguage][token]) {
                element.innerText = i18nTokens[currentLanguage][token];
            }
        });
        
        // Re-hydrate components tracking structured multi-lingual state records
        renderServicesGrid();
        const activeFilter = document.querySelector(".filter-btn.active").getAttribute("data-filter");
        renderProjectsPortfolio(activeFilter);
    });
}

// 5. Dynamic Components Render Pipelines
function renderServicesGrid() {
    const container = document.getElementById("servicesGrid");
    container.innerHTML = "";
    
    servicesDatabase.forEach(item => {
        const localeData = currentLanguage === "ar" ? item.ar : item.en;
        const cardHTML = `
            <div class="service-card">
                <div>
                    <div class="service-icon-placeholder">${item.icon}</div>
                    <h3>${localeData.title}</h3>
                    <p>${localeData.desc}</p>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

function renderProjectsPortfolio(filterValue) {
    const container = document.getElementById("projectsGrid");
    container.innerHTML = "";
    
    const filteredDataset = filterValue === "all" 
        ? projectsDatabase 
        : projectsDatabase.filter(project => project.cat === filterValue);
        
    filteredDataset.forEach(item => {
        const localeData = currentLanguage === "ar" ? item.ar : item.en;
        const cardHTML = `
            <div class="portfolio-card" data-category="${item.cat}">
                <div class="portfolio-img-wrapper">
                    <img src="IMG_9344.jpeg" alt="${localeData.title}">
                </div>
                <div class="portfolio-card-info">
                    <span class="project-owner-badge">${localeData.owner}</span>
                    <h3>${localeData.title}</h3>
                    <p>${localeData.desc}</p>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// 6. Navigation Controls & Event Interfaces
function initializePortfolioFilters() {
    const filters = document.querySelectorAll("#portfolioFilters .filter-btn");
    filters.forEach(btn => {
        btn.addEventListener("click", () => {
            filters.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const category = btn.getAttribute("data-filter");
            renderProjectsPortfolio(category);
        });
    });
}

function initializeMobileMenu() {
    const toggleBtn = document.getElementById("mobileMenuBtn");
    const mainNav = document.getElementById("mainNav");
    
    toggleBtn.addEventListener("click", () => {
        mainNav.classList.toggle("open");
        toggleBtn.classList.toggle("active");
    });
    
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
            toggleBtn.classList.remove("active");
        });
    });
}

function trackScrollNavigationHighlight() {
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 120;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });
        
        document.querySelectorAll(".nav-link").forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });
}
