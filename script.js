// script.js (updated and completed)
// Language Toggle Functionality
const langButtons = document.querySelectorAll('.lang-btn');
const htmlElement = document.documentElement;

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        
        // Update active button
        langButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update page direction and lang attribute
        if (lang === 'ar') {
            document.body.setAttribute('dir', 'rtl');
            htmlElement.setAttribute('lang', 'ar');
            updateContentForArabic();
        } else {
            document.body.setAttribute('dir', 'ltr');
            htmlElement.setAttribute('lang', 'en');
            updateContentForEnglish();
        }
    });
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Dropdown functionality
document.querySelectorAll('.nav-item').forEach(item => {
    if (item.querySelector('.dropdown')) {
        const dropdown = item.querySelector('.dropdown');
        const link = item.querySelector('.nav-link');
        
        link.addEventListener('click', (e) => {
            if (window.innerWidth < 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    }
});

// Page Navigation
document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');
        
        // Hide all pages
        document.querySelectorAll('.page-content').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show target page
        document.getElementById(targetPage).classList.add('active');
        
        // Close mobile menu
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    });
});

// Media filters
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        // Actual filtering would go here
    });
});

// Complete Arabic Translation
function updateContentForArabic() {
    // Header
    document.querySelector('.logo h1').textContent = 'وزارة الشؤون البلدية والإسكان';
    
    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks[0].textContent = 'الرئيسية';
    navLinks[1].innerHTML = 'المشاريع <i class="fas fa-chevron-down"></i>';
    navLinks[2].textContent = 'من نحن';
    navLinks[3].textContent = 'التعاون مع الأمم المتحدة';
    navLinks[4].textContent = 'المركز الإعلامي';
    
    // Dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-link');
    dropdownItems[0].textContent = 'برنامج سكني لدعم الإسكان';
    dropdownItems[1].textContent = 'مشروع بهجة لإحياء المناطق الحضرية';
    dropdownItems[2].textContent = 'المساعد الذكي ومدينتي';
    dropdownItems[3].textContent = 'مشروع كامكوم للذكاء الاصطناعي للتلوث البصري';
    
    // Hero Section
    document.querySelector('.hero h1').textContent = 'الاحتفاء بالابتكار والتميز';
    document.querySelector('.hero p').textContent = 'وزارة الشؤون البلدية والإسكان - المملكة العربية السعودية';
    document.querySelector('.hero .btn').textContent = 'استكشف المشاريع';
    document.querySelector('.hero .btn-outline').textContent = 'معرفة المزيد';
    
    // Vision Section
    document.querySelector('.vision-content h2').textContent = 'رؤيتنا';
    document.querySelector('.vision-content p:nth-child(2)').textContent = 'تطوير مجتمعات حيوية ومستدامة في جميع أنحاء المملكة العربية السعودية من خلال التخطيط الحضري المبتكر، والإدارة الفعالة للأراضي، والشراكات الاستراتيجية مع المنظمات العالمية.';
    document.querySelector('.vision-content p:nth-child(3)').textContent = 'نهدف إلى تعزيز جودة الحياة لجميع المواطنين من خلال توفير حلول سكنية ميسورة وخلق مدن حديثة صالحة للعيش تعكس تراثنا الثقافي الغني مع تبني تقنيات المستقبل.';
    document.querySelector('.vision-content p:nth-child(4)').textContent = 'يمتد التزامنا إلى تعزيز النمو الاقتصادي، والحفاظ على البيئة، وضمان الوصول العادل إلى الخدمات البلدية لجميع السكان.';
    
    // Domains Section
    document.querySelector('.section-title').textContent = 'مجالات عملنا';
    document.querySelectorAll('.card-content h3')[0].textContent = 'التخطيط البلدي';
    document.querySelectorAll('.card-content h3')[1].textContent = 'إدارة الأراضي';
    document.querySelectorAll('.card-content h3')[2].textContent = 'المشاريع الكبرى';
    document.querySelectorAll('.card-content h3')[3].textContent = 'تطوير الأحياء';
    document.querySelectorAll('.card-content h3')[4].textContent = 'التراخيص والرقابة';
    document.querySelectorAll('.card-content h3')[5].textContent = 'الحركة والبنية التحتية';
    
    document.querySelectorAll('.card-content p')[0].textContent = 'خطط تنمية حضرية استراتيجية لإنشاء مدن مستدامة وفعالة في جميع أنحاء المملكة.';
    document.querySelectorAll('.card-content p')[1].textContent = 'الاستخدام الفعال وتنظيم موارد الأراضي لدعم أهداف التنمية الوطنية.';
    document.querySelectorAll('.card-content p')[2].textContent = 'تنفيذ مشاريع البنية التحتية والتنموية الكبرى التي تحول المدن السعودية.';
    document.querySelectorAll('.card-content p')[3].textContent = 'خلق مجتمعات حيوية وصالحة للعيش مع مرافق وخدمات حديثة.';
    document.querySelectorAll('.card-content p')[4].textContent = 'عمليات تنظيمية مبسطة تضمان الامتثال للمعايير الحضرية.';
    document.querySelectorAll('.card-content p')[5].textContent = 'تطوير شبكات نقل حديثة وبنية تحتية أساسية للمدينة.';
    
    // Projects Section
    document.querySelector('.projects .section-title').textContent = 'المشاريع البارزة';
    document.querySelectorAll('.project-content h3')[0].textContent = 'برنامج سكني لدعم الإسكان';
    document.querySelectorAll('.project-content h3')[1].textContent = 'مشروع بهجة لإحياء المناطق الحضرية';
    document.querySelectorAll('.project-content h3')[2].textContent = 'المساعد الذكي ومدينتي';
    document.querySelectorAll('.project-content h3')[3].textContent = 'مشروع كامكوم للذكاء الاصطناعي للتلوث البصري';
    
    document.querySelectorAll('.project-content p')[0].textContent = 'مبادرة لتوفير حلول سكنية ميسورة للمواطنين السعوديين من خلال الدعم المالي وشراكات المطورين.';
    document.querySelectorAll('.project-content p')[1].textContent = 'تحويل الأحياء التاريخية إلى مراكز ثقافية وتجارية نابضة بالحياة مع الحفاظ على التراث.';
    document.querySelectorAll('.project-content p')[2].textContent = 'منصات رقمية تمكن السكان من الوصول إلى الخدمات البلدية والإبلاغ عن المشكلات بكفاءة.';
    document.querySelectorAll('.project-content p')[3].textContent = 'نظام مدعوم بالذكاء الاصطناعي لاكتشاف وإدارة التلوث البصري في البيئات الحضرية.';
    
    document.querySelectorAll('.project-content .btn')[0].textContent = 'معرفة المزيد';
    document.querySelectorAll('.project-content .btn')[1].textContent = 'معرفة المزيد';
    document.querySelectorAll('.project-content .btn')[2].textContent = 'معرفة المزيد';
    document.querySelectorAll('.project-content .btn')[3].textContent = 'معرفة المزيد';
    
    // About Us Page
    document.querySelector('#about .section-title').textContent = 'من نحن';
    document.querySelector('#about .about-content p:first-child').textContent = 'وزارة الشؤون البلدية والإسكان (MoMaH) هي جهة حكومية رئيسية في المملكة العربية السعودية، مسؤولة عن التنمية الحضرية والإسكان والخدمات البلدية في جميع أنحاء البلاد. مهمتنا هي خلق مجتمعات مستدامة ونابضة بالحياة تعزز جودة الحياة لجميع المواطنين والمقيمين.';
    document.querySelector('#about .about-content h3:nth-of-type(1)').textContent = 'مهمتنا';
    document.querySelector('#about .about-content p:nth-of-type(2)').textContent = 'قيادة تطوير قطاعات البلديات والإسكان من خلال السياسات المبتكرة والشراكات الاستراتيجية والحوكمة الفعالة، تماشياً مع رؤية السعودية ٢٠٣٠.';
    document.querySelector('#about .about-content h3:nth-of-type(2)').textContent = 'قيمنا';
    document.querySelector('#about .about-content h3:nth-of-type(3)').textContent = 'القيادة';
    document.querySelector('#about .about-content h3:nth-of-type(4)').textContent = 'رحلتنا';
    document.querySelector('#about .about-content p:last-child').textContent = 'تأسست الوزارة عام ١٩٧٥، وكانت في طليعة التحول الحضري في المملكة. أطلقنا العديد من المبادرات التي أعادت تشكيل المشهد الحضري ووفرت حلولاً سكنية لملايين السعوديين.';
    document.querySelector('#about .gallery-section .section-title').textContent = 'عملنا على أرض الواقع';
    
    // Values
    const valueCards = document.querySelectorAll('.value-card');
    valueCards[0].querySelector('h4').textContent = 'النزاهة';
    valueCards[1].querySelector('h4').textContent = 'الابتكار';
    valueCards[2].querySelector('h4').textContent = 'التعاون';
    valueCards[3].querySelector('h4').textContent = 'الاستدامة';
    
    valueCards[0].querySelector('p').textContent = 'نلتزم بأعلى المعايير الأخلاقية في جميع عملياتنا.';
    valueCards[1].querySelector('p').textContent = 'نتبنى الإبداع والتكنولوجيا لحل التحديات الحضرية.';
    valueCards[2].querySelector('p').textContent = 'نعمل مع الشركاء لتحقيق أهداف مشتركة للتنمية الحضرية.';
    valueCards[3].querySelector('p').textContent = 'نخطط للمستقبل من خلال تحقيق التوازن بين الاحتياجات الاقتصادية والاجتماعية والبيئية.';
    
    // Leadership
    const leaderCards = document.querySelectorAll('.leader-card');
    leaderCards[0].querySelector('h4').textContent = 'معالي الوزير';
    leaderCards[0].querySelector('p').textContent = 'وزير الشؤون البلدية والإسكان';
    leaderCards[1].querySelector('h4').textContent = 'نائب الوزير';
    leaderCards[1].querySelector('p').textContent = 'نائب الوزير للشؤون البلدية';
    leaderCards[2].querySelector('h4').textContent = 'نائب الوزير';
    leaderCards[2].querySelector('p').textContent = 'نائب الوزير للإسكان';

    // Our Journey
    document.querySelector('#about .about-content h3:nth-of-type(4)').textContent = 'رحلتنا';
    document.querySelector('#about .about-content p:nth-of-type(3)').textContent = 'تأسست الوزارة عام ١٩٧٥، وكانت في طليعة التحول الحضري في المملكة. أطلقنا العديد من المبادرات التي أعادت تشكيل المشهد الحضري ووفرت حلولاً سكنية لملايين السعوديين.';
    
    // Page Title
document.querySelector('#un-collaboration .section-title').textContent = 'التعاون مع الأمم المتحدة';

// Intro Paragraph
document.querySelector('#un-collaboration .un-content p').textContent = 
    'تتعاون وزارة الشؤون البلدية والإسكان مع وكالات الأمم المتحدة لتعزيز التنمية الحضرية المستدامة ومبادرات الإسكان في المملكة العربية السعودية. تركز شراكاتنا مع برنامج الأمم المتحدة الإنمائي وموئل الأمم المتحدة على تبادل المعرفة وبناء القدرات وتطبيق أفضل الممارسات العالمية.';

// UNDP Section
document.querySelectorAll('.un-agency h3')[0].textContent = 'برنامج الأمم المتحدة الإنمائي (UNDP)';
document.querySelectorAll('.un-agency p')[0].textContent = 
    'تركز شراكتنا مع برنامج الأمم المتحدة الإنمائي على التنمية الحضرية المستدامة، والمرونة المناخية، والابتكار في الخدمات البلدية. تشمل المبادرات الرئيسية ما يلي:';
document.querySelectorAll('.un-agency ul')[0].innerHTML = `
    <li>حلول المدن الذكية للتحديات الحضرية</li>
    <li>بناء قدرات موظفي البلديات</li>
    <li>سياسات وممارسات الإسكان المستدام</li>
`;

// UN-Habitat Section
document.querySelectorAll('.un-agency h3')[1].textContent = 'برنامج الأمم المتحدة للمستوطنات البشرية (موئل الأمم المتحدة)';
document.querySelectorAll('.un-agency p')[1].textContent = 
    'يركز التعاون مع موئل الأمم المتحدة على التخطيط الحضري والإسكان الميسر وتطوير المدن الشاملة. تشمل مشاريعنا المشتركة ما يلي:';
document.querySelectorAll('.un-agency ul')[1].innerHTML = `
    <li>استراتيجيات التنمية الحضرية الوطنية</li>
    <li>مشاركة المجتمع في التخطيط الحضري</li>
    <li>حلول مبتكرة للإسكان الميسر</li>
`;

// Impact & Achievements
document.querySelector('#un-collaboration .impact-stats').previousElementSibling.textContent = 'الأثر والإنجازات';
document.querySelectorAll('.stat-card h4')[0].textContent = 'أكثر من ١٥';
document.querySelectorAll('.stat-card h4')[1].textContent = 'أكثر من ٢٠٠';
document.querySelectorAll('.stat-card h4')[2].textContent = 'أكثر من ٥٠٠';
document.querySelectorAll('.stat-card h4')[3].textContent = 'أكثر من ٥ ملايين';

document.querySelectorAll('.stat-card p')[0].textContent = 'مبادرات مشتركة';
document.querySelectorAll('.stat-card p')[1].textContent = 'جلسات تدريبية';
document.querySelectorAll('.stat-card p')[2].textContent = 'موظفين تم تدريبهم';
document.querySelectorAll('.stat-card p')[3].textContent = 'مستفيدين تم الوصول إليهم';

// Featured Projects
document.querySelector('#un-collaboration .featured-projects').previousElementSibling.textContent = 'المشاريع المميزة';
document.querySelectorAll('.project-highlight h4')[0].textContent = 'مختبر الابتكار الحضري';
document.querySelectorAll('.project-highlight p')[0].textContent = 
    'مبادرة مشتركة مع برنامج الأمم المتحدة الإنمائي لتعزيز الابتكار في الخدمات البلدية من خلال التكنولوجيا ومشاركة المجتمع.';
document.querySelectorAll('.project-highlight h4')[1].textContent = 'إطار سياسة الإسكان الوطنية';
document.querySelectorAll('.project-highlight p')[1].textContent = 
    'تم تطويره بالتعاون مع موئل الأمم المتحدة لوضع سياسة إسكان شاملة تعالج مسائل التيسير والاستدامة.';
    
    // مركز الإعلام
document.querySelector('#media-center .section-title').textContent = 'مركز الإعلام';

document.querySelectorAll('#media-center .media-card')[0].querySelector('span').textContent = 'خبر';
document.querySelectorAll('#media-center .media-card')[0].querySelector('h3').textContent = 'إطلاق مبادرة المدينة الذكية الجديدة من MoMaH';
document.querySelectorAll('#media-center .media-card')[0].querySelector('p').textContent = 'أعلنت الوزارة عن مبادرة جديدة لدمج التقنيات الذكية في المراكز الحضرية في جميع أنحاء المملكة.';

document.querySelectorAll('#media-center .media-card')[1].querySelector('span').textContent = 'بيان صحفي';
document.querySelectorAll('#media-center .media-card')[1].querySelector('h3').textContent = 'تعزيز الشراكة مع برنامج الأمم المتحدة الإنمائي';
document.querySelectorAll('#media-center .media-card')[1].querySelector('p').textContent = 'توسعت MoMaH وبرنامج الأمم المتحدة الإنمائي في تعاونهما ليشمل المرونة المناخية في التخطيط الحضري.';

document.querySelectorAll('#media-center .media-card')[2].querySelector('span').textContent = 'فيديو';
document.querySelectorAll('#media-center .media-card')[2].querySelector('h3').textContent = 'رؤية ٢٠٣٠: تحويل المشهد الحضري';
document.querySelectorAll('#media-center .media-card')[2].querySelector('p').textContent = 'شاهد كيف تنفذ MoMaH رؤية ٢٠٣٠ من خلال مشاريع تطوير حضري مبتكرة.';

document.querySelectorAll('#media-center .media-card')[3].querySelector('span').textContent = 'خبر';
document.querySelectorAll('#media-center .media-card')[3].querySelector('h3').textContent = 'تطوير مشاريع إسكان جديدة في الرياض';
document.querySelectorAll('#media-center .media-card')[3].querySelector('p').textContent = 'أعلنت MoMaH عن ٥٠٠٠ وحدة سكنية ميسورة التكلفة سيتم تطويرها في منطقة العاصمة.';

document.querySelectorAll('#media-center .media-card')[4].querySelector('span').textContent = 'بيان صحفي';
document.querySelectorAll('#media-center .media-card')[4].querySelector('h3').textContent = 'MoMaH وموئل الأمم المتحدة يطلقان تحدي الابتكار الحضري';
document.querySelectorAll('#media-center .media-card')[4].querySelector('p').textContent = 'مبادرة مشتركة تبحث عن حلول مبتكرة للتنمية الحضرية المستدامة في مدن المملكة.';

document.querySelectorAll('#media-center .media-card')[5].querySelector('span').textContent = 'فيديو';
document.querySelectorAll('#media-center .media-card')[5].querySelector('h3').textContent = 'مشروع بهجة: إحياء الأحياء التاريخية';
document.querySelectorAll('#media-center .media-card')[5].querySelector('p').textContent = 'شاهد كيف يعمل مشروع بهجة على تحويل الأحياء التاريخية إلى مساحات مجتمعية نابضة بالحياة.';
    
    // Sakani Project - Arabic Translations
document.querySelector('#sakani .breadcrumb a[data-page="home"]').textContent = 'الرئيسية';
document.querySelector('#sakani .breadcrumb a[data-page="projects"]').textContent = 'المشاريع';
document.querySelector('#sakani .breadcrumb span').textContent = 'برنامج سكني لدعم الإسكان';

document.querySelector('#sakani .project-header h1').textContent = 'برنامج سكني لدعم الإسكان';
document.querySelector('#sakani .project-header p').textContent = 'توفير حلول سكنية ميسورة للعائلات السعودية';

document.querySelector('#sakani .project-description h2').textContent = 'عن البرنامج';
document.querySelector('#sakani .project-description p').textContent = 'برنامج سكني هو مبادرة رائدة من وزارة الشؤون البلدية والإسكان، تهدف إلى تسهيل تملك المواطنين السعوديين للمنازل. يقدم البرنامج مساعدات مالية، وقروض مدعومة، ومجموعة متنوعة من الخيارات السكنية لتلبية احتياجات الأسر المختلفة.';

document.querySelector('#sakani .project-description h3:nth-of-type(1)').textContent = 'الميزات الرئيسية';

const keyFeatures = document.querySelectorAll('#sakani .project-description ul li');
if (keyFeatures.length === 4) {
  keyFeatures[0].textContent = 'دعم مالي للدفعة الأولى والبناء';
  keyFeatures[1].textContent = 'شراكات مع مطوري العقارات لتوفير وحدات سكنية ميسورة';
  keyFeatures[2].textContent = 'منصة إلكترونية لخدمات الإسكان والتقديم';
  keyFeatures[3].textContent = 'حلول مخصصة لمختلف مستويات الدخل';
}

document.querySelector('#sakani .project-description h3:nth-of-type(2)').textContent = 'الإنجازات';

const achievementCards = document.querySelectorAll('#sakani .achievement-card');
if (achievementCards.length === 3) {
  achievementCards[0].querySelector('h4').textContent = '٥٠٠٬٠٠٠+';
  achievementCards[1].querySelector('h4').textContent = '١٫٢M+';
  achievementCards[2].querySelector('h4').textContent = '+١٠٠B ﷼';  

  achievementCards[0].querySelector('p').textContent = 'وحدات سكنية تم تسليمها';
  achievementCards[1].querySelector('p').textContent = 'أُسر مستفيدة';
  achievementCards[2].querySelector('p').textContent = 'استثمارات في الإسكان';
}

document.querySelector('#sakani .btn').textContent = 'قدّم الآن';

// Bahja Urban Revitalization - Arabic
document.querySelector('#bahja .breadcrumb a[data-page="home"]').textContent = 'الصفحة الرئيسية';
document.querySelector('#bahja .breadcrumb a[data-page="projects"]').textContent = 'المشاريع';
document.querySelector('#bahja .breadcrumb span').textContent = 'مشروع بهجة لإحياء المناطق الحضرية';

document.querySelector('#bahja .project-header h1').textContent = 'مشروع بهجة لإحياء المناطق الحضرية';
document.querySelector('#bahja .project-header p').textContent = 'تحويل الأحياء التاريخية إلى مراكز ثقافية نابضة بالحياة';

document.querySelector('#bahja .project-description h2').textContent = 'نظرة عامة على المشروع';
document.querySelector('#bahja .project-description p').textContent = 'يعد مشروع بهجة مبادرة لإحياء الأحياء التاريخية وتحويلها إلى مراكز ثقافية وتجارية نابضة بالحياة مع الحفاظ على طابعها التراثي. يركز المشروع على تحسين المساحات العامة وتطوير البنية التحتية ودعم الأنشطة التجارية المحلية.';

document.querySelector('#bahja .project-description h3:nth-of-type(1)').textContent = 'المكونات الرئيسية';
const bahjaFeatures = document.querySelectorAll('#bahja .project-description ul li');
if (bahjaFeatures.length >= 4) {
    bahjaFeatures[0].textContent = 'ترميم المباني والمعالم التاريخية';
    bahjaFeatures[1].textContent = 'تطوير مساحات عامة صديقة للمشاة';
    bahjaFeatures[2].textContent = 'دعم الحرفيين المحليين والشركات الصغيرة';
    bahjaFeatures[3].textContent = 'دمج المرافق الحديثة مع الطراز المعماري التقليدي';
}

document.querySelector('#bahja .project-description h3:nth-of-type(2)').textContent = 'الأثر';

const bahjaAchievements = document.querySelectorAll('#bahja .achievement-card');
if (bahjaAchievements.length >= 3) {
    bahjaAchievements[0].querySelector('h4').textContent = '١٥+';
    bahjaAchievements[0].querySelector('h4').textContent = '٥٬٠٠٠+';
    bahjaAchievements[1].querySelector('h4').textContent = '١٠٠K+';

    bahjaAchievements[0].querySelector('p').textContent = 'أحياء تم إحياؤها';
    bahjaAchievements[1].querySelector('p').textContent = 'مشروعات تجارية محلية مدعومة';
    bahjaAchievements[2].querySelector('p').textContent = 'عدد المستفيدين من السكان';
}

document.querySelector('#bahja .btn').textContent = 'عرض معرض المشروع';

// Smart Assistant and My City
document.querySelector('#smart-assistant .breadcrumb a:nth-of-type(1)').textContent = 'الرئيسية';
document.querySelector('#smart-assistant .breadcrumb a:nth-of-type(2)').textContent = 'المشاريع';
document.querySelector('#smart-assistant .breadcrumb span').textContent = 'المساعد الذكي ومدينتي';

document.querySelector('#smart-assistant .project-header h1').textContent = 'المساعد الذكي ومدينتي';
document.querySelector('#smart-assistant .project-header p').textContent = 'منصات رقمية لتعزيز الخدمات البلدية';

document.querySelector('#smart-assistant .project-description h2').textContent = 'مبادرة التحول الرقمي';
document.querySelector('#smart-assistant .project-description p').textContent = 'تمثل منصتا المساعد الذكي ومدينتي التزام وزارة الشؤون البلدية والإسكان بالتحول الرقمي. تتيح هذه المنصات للمقيمين الوصول إلى الخدمات البلدية، والإبلاغ عن المشكلات، والتفاعل مع مجتمعاتهم من خلال واجهات رقمية سهلة الاستخدام.';

document.querySelector('#smart-assistant .project-description h3:nth-of-type(1)').textContent = 'ميزات المنصة';
document.querySelectorAll('#smart-assistant .project-description ul li')[0].textContent = 'مساعد افتراضي متاح على مدار الساعة للاستفسارات البلدية';
document.querySelectorAll('#smart-assistant .project-description ul li')[1].textContent = 'تطبيق جوال لطلبات الخدمة وتتبعها';
document.querySelectorAll('#smart-assistant .project-description ul li')[2].textContent = 'معلومات وتحديثات المدينة في الوقت الفعلي';
document.querySelectorAll('#smart-assistant .project-description ul li')[3].textContent = 'أدوات تفاعل مجتمعية';
document.querySelectorAll('#smart-assistant .project-description ul li')[4].textContent = 'نظام دفع متكامل للرسوم البلدية';

document.querySelector('#smart-assistant .project-description h3:nth-of-type(2)').textContent = 'الفوائد';
document.querySelectorAll('#smart-assistant .achievement-card h4')[0].textContent = '٪٨٠';
document.querySelectorAll('#smart-assistant .achievement-card p')[0].textContent = 'استجابة أسرع للخدمات';
document.querySelectorAll('#smart-assistant .achievement-card h4')[1].textContent = '١M+';
document.querySelectorAll('#smart-assistant .achievement-card p')[1].textContent = 'مستخدمون نشطون';
document.querySelectorAll('#smart-assistant .achievement-card h4')[2].textContent = '٩٥٪';
document.querySelectorAll('#smart-assistant .achievement-card p')[2].textContent = 'رضا المستخدمين';

document.querySelector('#smart-assistant .btn').textContent = 'اعرف المزيد';

// CamCom AI Visual Pollution Project
document.querySelector('#camcom .breadcrumb span').textContent = 'مشروع كامكوم للذكاء الاصطناعي لمعالجة التلوث البصري';
document.querySelector('#camcom .project-header h1').textContent = 'مشروع كامكوم للذكاء الاصطناعي لمعالجة التلوث البصري';
document.querySelector('#camcom .project-header p').textContent = 'استخدام الذكاء الاصطناعي لتحسين جمالية المدن';

document.querySelector('#camcom .project-description h2').textContent = 'إدارة حضرية مبتكرة';
document.querySelector('#camcom .project-description p').textContent = 'كامكوم هو نظام مدعوم بالذكاء الاصطناعي يكتشف ويدير التلوث البصري في البيئات الحضرية. باستخدام الرؤية الحاسوبية وتعلم الآلة، يحدد النظام المشكلات مثل الإعلانات غير المصرح بها والكتابات على الجدران والواجهات السيئة الصيانة، مما يتيح إدارة حضرية فعالة.';

document.querySelector('#camcom .project-description h3:nth-of-type(1)').textContent = 'مكونات التكنولوجيا';
document.querySelectorAll('#camcom .project-description ul li')[0].textContent = 'نظام تعرف بصري مدعوم بالذكاء الاصطناعي';
document.querySelectorAll('#camcom .project-description ul li')[1].textContent = 'تطبيق جوال للإبلاغ من قبل المواطنين';
document.querySelectorAll('#camcom .project-description ul li')[2].textContent = 'سير عمل آلي لحل المشكلات';
document.querySelectorAll('#camcom .project-description ul li')[3].textContent = 'تحليلات بيانات لتخطيط المدن';
document.querySelectorAll('#camcom .project-description ul li')[4].textContent = 'تكامل مع أنظمة تطبيق البلدية';

document.querySelector('#camcom .project-description h3:nth-of-type(2)').textContent = 'النتائج';
document.querySelectorAll('#camcom .achievement-card h4')[0].textContent = '٧٠٪';
document.querySelectorAll('#camcom .achievement-card h4')[1].textContent = '٤٠٪';
document.querySelectorAll('#camcom .achievement-card h4')[2].textContent = '١٢';

document.querySelectorAll('#camcom .achievement-card p')[0].textContent = 'كشف أسرع';
document.querySelectorAll('#camcom .achievement-card p')[1].textContent = 'انخفاض التلوث البصري';
document.querySelectorAll('#camcom .achievement-card p')[2].textContent = 'مدن مطبقة';

document.querySelector('#camcom .btn').textContent = 'عرض دراسات الحالة';

// Footer
    document.querySelector('footer .footer-col:nth-of-type(1) h3').textContent = 'وزارة الشؤون البلدية والإسكان';
  document.querySelector('footer .footer-col:nth-of-type(1) p').textContent = "نبني مجتمعات مستدامة من أجل مستقبل المملكة من خلال الابتكار والتميز في التخطيط الحضري وحلول الإسكان.";

  document.querySelector('footer .footer-col:nth-of-type(2) h3').textContent = 'روابط سريعة';
  const quickLinks = document.querySelectorAll('footer .footer-col:nth-of-type(2) li');
  quickLinks[0].textContent = 'الرئيسية';
  quickLinks[1].textContent = 'المشاريع';
  quickLinks[2].textContent = 'من نحن';
  quickLinks[3].textContent = 'التعاون مع الأمم المتحدة';
  quickLinks[4].textContent = 'المركز الإعلامي';

  document.querySelector('footer .footer-col:nth-of-type(3) h3').textContent = 'مشاريعنا';
  const projectsLinks = document.querySelectorAll('footer .footer-col:nth-of-type(3) li');
  projectsLinks[0].textContent = 'برنامج سكني لدعم الإسكان';
  projectsLinks[1].textContent = 'بهجة لتجديد المناطق الحضرية';
  projectsLinks[2].textContent = 'المساعد الذكي ومدينتي';
  projectsLinks[3].textContent = 'مشروع كامكوم للذكاء الاصطناعي والتلوث البصري';

  document.querySelector('footer .footer-col:nth-of-type(4) h3').textContent = 'تواصل معنا';
  const contactList = document.querySelectorAll('footer .footer-col:nth-of-type(4) li');
  contactList[0].childNodes[1].textContent = ' الرياض، المملكة العربية السعودية';
  contactList[1].childNodes[1].textContent = ' +966 11 123 4567';
  contactList[2].childNodes[1].textContent = ' info@momah.gov.sa';

  document.querySelector('footer .copyright p').textContent = '© ٢٠٢٥ وزارة الشؤون البلدية والإسكان. جميع الحقوق محفوظة.';
    

}

// Reset to English
function updateContentForEnglish() {
    // Header
    document.querySelector('.logo h1').textContent = 'MoMaH';
    
    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks[0].textContent = 'Home';
    navLinks[1].innerHTML = 'Projects <i class="fas fa-chevron-down"></i>';
    navLinks[2].textContent = 'About Us';
    navLinks[3].textContent = 'UN Collaboration';
    navLinks[4].textContent = 'Media Center';
    
    // Dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-link');
    dropdownItems[0].textContent = 'Sakani Housing Support Program';
    dropdownItems[1].textContent = 'Bahja Urban Revitalization';
    dropdownItems[2].textContent = 'Smart Assistant and My City';
    dropdownItems[3].textContent = 'CamCom AI Visual Pollution Project';
    
    // Hero Section
    document.querySelector('.hero h1').textContent = 'Celebrating Innovation & Excellence';
    document.querySelector('.hero p').textContent = 'Ministry of Municipalities and Housing - Kingdom of Saudi Arabia';
    document.querySelector('.hero .btn').textContent = 'Explore Projects';
    document.querySelector('.hero .btn-outline').textContent = 'Learn More';
    
    // Vision Section
    document.querySelector('.vision-content h2').textContent = 'Our Vision';
    document.querySelector('.vision-content p:nth-child(2)').textContent = 'To develop vibrant and sustainable communities across the Kingdom of Saudi Arabia through innovative urban planning, efficient land management, and strategic partnerships with global organizations.';
    document.querySelector('.vision-content p:nth-child(3)').textContent = 'We aim to enhance the quality of life for all citizens by providing accessible housing solutions and creating modern, livable cities that reflect our rich cultural heritage while embracing future technologies.';
    document.querySelector('.vision-content p:nth-child(4)').textContent = 'Our commitment extends to fostering economic growth, preserving the environment, and ensuring equitable access to municipal services for all residents.';
    
    // Domains Section
    document.querySelector('.section-title').textContent = 'Our Domains';
    document.querySelectorAll('.card-content h3')[0].textContent = 'Municipal Planning';
    document.querySelectorAll('.card-content h3')[1].textContent = 'Land Management';
    document.querySelectorAll('.card-content h3')[2].textContent = 'Large Projects';
    document.querySelectorAll('.card-content h3')[3].textContent = 'Neighbourhood Development';
    document.querySelectorAll('.card-content h3')[4].textContent = 'Permitting and Enforcement';
    document.querySelectorAll('.card-content h3')[5].textContent = 'Mobility and Infrastructure';
    
    document.querySelectorAll('.card-content p')[0].textContent = 'Strategic urban development plans to create sustainable and efficient cities across the Kingdom.';
    document.querySelectorAll('.card-content p')[1].textContent = 'Efficient utilization and regulation of land resources to support national development goals.';
    document.querySelectorAll('.card-content p')[2].textContent = 'Implementation of major infrastructure and development projects transforming Saudi cities.';
    document.querySelectorAll('.card-content p')[3].textContent = 'Creating vibrant, livable communities with modern amenities and services.';
    document.querySelectorAll('.card-content p')[4].textContent = 'Streamlined regulatory processes ensuring compliance with urban standards.';
    document.querySelectorAll('.card-content p')[5].textContent = 'Developing modern transportation networks and essential city infrastructure.';
    
    // Projects Section
    document.querySelector('.projects .section-title').textContent = 'Featured Projects';
    document.querySelectorAll('.project-content h3')[0].textContent = 'Sakani Housing Support Program';
    document.querySelectorAll('.project-content h3')[1].textContent = 'Bahja Urban Revitalization';
    document.querySelectorAll('.project-content h3')[2].textContent = 'Smart Assistant and My City';
    document.querySelectorAll('.project-content h3')[3].textContent = 'CamCom AI Visual Pollution Project';
    
    document.querySelectorAll('.project-content p')[0].textContent = 'Initiative to provide affordable housing solutions for Saudi citizens through financial support and developer partnerships.';
    document.querySelectorAll('.project-content p')[1].textContent = 'Transforming historic districts into vibrant cultural and commercial hubs while preserving heritage.';
    document.querySelectorAll('.project-content p')[2].textContent = 'Digital platforms enabling residents to access municipal services and report issues efficiently.';
    document.querySelectorAll('.project-content p')[3].textContent = 'AI-powered system to detect and manage visual pollution in urban environments.';
    
    document.querySelectorAll('.project-content .btn')[0].textContent = 'Learn More';
    document.querySelectorAll('.project-content .btn')[1].textContent = 'Learn More';
    document.querySelectorAll('.project-content .btn')[2].textContent = 'Learn More';
    document.querySelectorAll('.project-content .btn')[3].textContent = 'Learn More';
    
    // About Us Page (reset to original English content)
    document.querySelector('#about .section-title').textContent = 'About Us';
    document.querySelector('#about .about-content p:first-child').textContent = 'The Ministry of Municipalities and Housing (MoMaH) is a key government entity in the Kingdom of Saudi Arabia, responsible for urban development, housing, and municipal services across the nation. Our mission is to create sustainable and vibrant communities that enhance the quality of life for all citizens and residents.';
    document.querySelector('#about .about-content h3:nth-of-type(1)').textContent = 'Our Mission';
    document.querySelector('#about .about-content p:nth-of-type(2)').textContent = 'To lead the development of municipal and housing sectors through innovative policies, strategic partnerships, and effective governance, in line with Saudi Vision 2030.';
    document.querySelector('#about .about-content h3:nth-of-type(2)').textContent = 'Our Values';
    document.querySelector('#about .about-content h3:nth-of-type(3)').textContent = 'Leadership';
    document.querySelector('#about .about-content h3:nth-of-type(4)').textContent = 'Our Journey';
    document.querySelector('#about .about-content p:last-child').textContent = 'Established in 1975, the Ministry has been at the forefront of urban transformation in the Kingdom. We have launched numerous initiatives that have reshaped the urban landscape and provided housing solutions for millions of Saudis.';
    document.querySelector('#about .gallery-section .section-title').textContent = 'Our Work in Action';
    
    // Values
    const valueCards = document.querySelectorAll('.value-card');
    valueCards[0].querySelector('h4').textContent = 'Integrity';
    valueCards[1].querySelector('h4').textContent = 'Innovation';
    valueCards[2].querySelector('h4').textContent = 'Collaboration';
    valueCards[3].querySelector('h4').textContent = 'Sustainability';
    
    valueCards[0].querySelector('p').textContent = 'We adhere to the highest ethical standards in all our operations.';
    valueCards[1].querySelector('p').textContent = 'We embrace creativity and technology to solve urban challenges.';
    valueCards[2].querySelector('p').textContent = 'We work with partners to achieve shared goals for urban development.';
    valueCards[3].querySelector('p').textContent = 'We plan for the future by balancing economic, social, and environmental needs.';
    
    // Leadership
    const leaderCards = document.querySelectorAll('.leader-card');
    leaderCards[0].querySelector('h4').textContent = 'His Excellency the Minister';
    leaderCards[0].querySelector('p').textContent = 'Minister of Municipalities and Housing';
    leaderCards[1].querySelector('h4').textContent = 'Deputy Minister';
    leaderCards[1].querySelector('p').textContent = 'Deputy Minister for Municipal Affairs';
    leaderCards[2].querySelector('h4').textContent = 'Deputy Minister';
    leaderCards[2].querySelector('p').textContent = 'Deputy Minister for Housing';
    
    // Page Title
document.querySelector('#un-collaboration .section-title').textContent = 'UN Collaboration';

// Intro Paragraph
document.querySelector('#un-collaboration .un-content p').textContent = 
    'The Ministry of Municipalities and Housing collaborates with United Nations agencies to drive sustainable urban development and housing initiatives in Saudi Arabia. Our partnerships with UNDP and UN-Habitat focus on knowledge exchange, capacity building, and implementing global best practices.';

// UNDP Section
document.querySelectorAll('.un-agency h3')[0].textContent = 'United Nations Development Programme (UNDP)';
document.querySelectorAll('.un-agency p')[0].textContent = 
    'Our partnership with UNDP focuses on sustainable urban development, climate resilience, and innovation in municipal services. Key initiatives include:';
document.querySelectorAll('.un-agency ul')[0].innerHTML = `
    <li>Smart City Solutions for Urban Challenges</li>
    <li>Capacity Building for Municipal Staff</li>
    <li>Sustainable Housing Policies and Practices</li>
`;

// UN-Habitat Section
document.querySelectorAll('.un-agency h3')[1].textContent = 'United Nations Human Settlements Programme (UN-Habitat)';
document.querySelectorAll('.un-agency p')[1].textContent = 
    'Collaboration with UN-Habitat emphasizes urban planning, affordable housing, and inclusive city development. Our joint projects include:';
document.querySelectorAll('.un-agency ul')[1].innerHTML = `
    <li>National Urban Development Strategies</li>
    <li>Community Engagement in Urban Planning</li>
    <li>Innovative Solutions for Affordable Housing</li>
`;

// Impact & Achievements
document.querySelector('#un-collaboration .impact-stats').previousElementSibling.textContent = 'Impact and Achievements';
document.querySelectorAll('.stat-card h4')[0].textContent = '15+';
document.querySelectorAll('.stat-card h4')[1].textContent = '200+';
document.querySelectorAll('.stat-card h4')[2].textContent = '500+';
document.querySelectorAll('.stat-card h4')[3].textContent = '5M+';

document.querySelectorAll('.stat-card p')[0].textContent = 'Joint Initiatives';
document.querySelectorAll('.stat-card p')[1].textContent = 'Training Sessions';
document.querySelectorAll('.stat-card p')[2].textContent = 'Officials Trained';
document.querySelectorAll('.stat-card p')[3].textContent = 'Beneficiaries Reached';

// Featured Projects
document.querySelector('#un-collaboration .featured-projects').previousElementSibling.textContent = 'Featured Projects';
document.querySelectorAll('.project-highlight h4')[0].textContent = 'Urban Innovation Lab';
document.querySelectorAll('.project-highlight p')[0].textContent = 
    'A joint initiative with UNDP to foster innovation in municipal services through technology and community engagement.';
document.querySelectorAll('.project-highlight h4')[1].textContent = 'National Housing Policy Framework';
document.querySelectorAll('.project-highlight p')[1].textContent = 
    'Developed with UN-Habitat to create a comprehensive housing policy that addresses affordability and sustainability.';
    
    // Media Center
document.querySelector('#media-center .section-title').textContent = 'Media Center';

document.querySelectorAll('#media-center .media-card')[0].querySelector('span').textContent = 'News';
document.querySelectorAll('#media-center .media-card')[0].querySelector('h3').textContent = 'MoMaH Launches New Smart City Initiative';
document.querySelectorAll('#media-center .media-card')[0].querySelector('p').textContent = 'The Ministry has announced a new initiative to integrate smart technologies in urban centers across the Kingdom.';

document.querySelectorAll('#media-center .media-card')[1].querySelector('span').textContent = 'Press Release';
document.querySelectorAll('#media-center .media-card')[1].querySelector('h3').textContent = 'Partnership with UNDP Strengthens';
document.querySelectorAll('#media-center .media-card')[1].querySelector('p').textContent = 'MoMaH and UNDP expand collaboration to include climate resilience in urban planning.';

document.querySelectorAll('#media-center .media-card')[2].querySelector('span').textContent = 'Video';
document.querySelectorAll('#media-center .media-card')[2].querySelector('h3').textContent = 'Vision 2030: Transforming Urban Landscapes';
document.querySelectorAll('#media-center .media-card')[2].querySelector('p').textContent = 'Watch how MoMaH is implementing Vision 2030 through innovative urban development projects.';

document.querySelectorAll('#media-center .media-card')[3].querySelector('span').textContent = 'News';
document.querySelectorAll('#media-center .media-card')[3].querySelector('h3').textContent = 'New Housing Developments in Riyadh';
document.querySelectorAll('#media-center .media-card')[3].querySelector('p').textContent = 'MoMaH announces 5,000 new affordable housing units to be developed in the capital region.';

document.querySelectorAll('#media-center .media-card')[4].querySelector('span').textContent = 'Press Release';
document.querySelectorAll('#media-center .media-card')[4].querySelector('h3').textContent = 'MoMaH and UN-Habitat Launch Urban Innovation Challenge';
document.querySelectorAll('#media-center .media-card')[4].querySelector('p').textContent = 'Joint initiative seeks innovative solutions for sustainable urban development in Saudi cities.';

document.querySelectorAll('#media-center .media-card')[5].querySelector('span').textContent = 'Video';
document.querySelectorAll('#media-center .media-card')[5].querySelector('h3').textContent = 'Bahja Project: Revitalizing Historic Neighborhoods';
document.querySelectorAll('#media-center .media-card')[5].querySelector('p').textContent = 'See how the Bahja project is transforming historic districts into vibrant community spaces.';
    
    // Sakani Project
  document.querySelector('#sakani .breadcrumb a[data-page="home"]').textContent = 'Home';
  document.querySelector('#sakani .breadcrumb a[data-page="projects"]').textContent = 'Projects';
  document.querySelector('#sakani .breadcrumb span').textContent = 'Sakani Housing Support Program';

  // Header
  document.querySelector('#sakani .project-header h1').textContent = 'Sakani Housing Support Program';
  document.querySelector('#sakani .project-header p').textContent = 'Providing affordable housing solutions for Saudi families';

  // Description Section
  document.querySelector('#sakani .project-description h2').textContent = 'About the Program';
  document.querySelectorAll('#sakani .project-description p')[0].textContent =
    'The Sakani Housing Support Program is a flagship initiative of the Ministry of Municipalities and Housing, designed to facilitate homeownership for Saudi citizens. The program offers financial assistance, subsidized mortgages, and a range of housing options to meet diverse family needs.';

  // Key Features
  document.querySelector('#sakani .project-description h3:nth-of-type(1)').textContent = 'Key Features';
  const features = document.querySelectorAll('#sakani .project-description ul li');
  features[0].textContent = 'Financial support for down payments and construction';
  features[1].textContent = 'Partnerships with real estate developers for affordable housing units';
  features[2].textContent = 'Online platform for housing services and applications';
  features[3].textContent = 'Customized solutions for different income levels';

  // Achievements
  document.querySelector('#sakani .project-description h3:nth-of-type(2)').textContent = 'Achievements';
  const achievements = document.querySelectorAll('#sakani .achievement-card');
  achievements[0].querySelector('h4').textContent = '500,000+';
  achievements[1].querySelector('h4').textContent = '1.2M+';
  achievements[2].querySelector('h4').textContent = 'SAR 100B+';
  achievements[0].querySelector('p').textContent = 'Housing Units Delivered';
  achievements[1].querySelector('p').textContent = 'Beneficiary Families';
  achievements[2].querySelector('p').textContent = 'Investments in Housing';

  // Button
  document.querySelector('#sakani .btn').textContent = 'Apply Now';

// Bahja Urban Revitalization - English
document.querySelector('#bahja .breadcrumb a[data-page="home"]').textContent = 'Home';
document.querySelector('#bahja .breadcrumb a[data-page="projects"]').textContent = 'Projects';
document.querySelector('#bahja .breadcrumb span').textContent = 'Bahja Urban Revitalization';

document.querySelector('#bahja .project-header h1').textContent = 'Bahja Urban Revitalization';
document.querySelector('#bahja .project-header p').textContent = 'Transforming historic districts into vibrant cultural hubs';

document.querySelector('#bahja .project-description h2').textContent = 'Project Overview';
document.querySelector('#bahja .project-description p').textContent = 'Bahja is an urban revitalization initiative that transforms historic neighborhoods into vibrant cultural and commercial centers while preserving their heritage. The project focuses on enhancing public spaces, improving infrastructure, and creating opportunities for local businesses.';

document.querySelector('#bahja .project-description h3:nth-of-type(1)').textContent = 'Key Components';
const bahjaFeatures = document.querySelectorAll('#bahja .project-description ul li');
if (bahjaFeatures.length >= 4) {
    bahjaFeatures[0].textContent = 'Restoration of historic buildings and landmarks';
    bahjaFeatures[1].textContent = 'Development of pedestrian-friendly public spaces';
    bahjaFeatures[2].textContent = 'Support for local artisans and small businesses';
    bahjaFeatures[3].textContent = 'Integration of modern amenities with traditional architecture';
}

document.querySelector('#bahja .project-description h3:nth-of-type(2)').textContent = 'Impact';

const bahjaAchievements = document.querySelectorAll('#bahja .achievement-card');
if (bahjaAchievements.length >= 3) {
    bahjaAchievements[0].querySelector('h4').textContent = '15+';
    bahjaAchievements[0].querySelector('h4').textContent = '5,000+';
    bahjaAchievements[1].querySelector('h4').textContent = '100K+';

    bahjaAchievements[0].querySelector('p').textContent = 'Districts Revitalized';
    bahjaAchievements[1].querySelector('p').textContent = 'Local Businesses Supported';
    bahjaAchievements[2].querySelector('p').textContent = 'Residents Benefited';
}

document.querySelector('#bahja .btn').textContent = 'View Project Gallery';

// Smart Assistant and My City
document.querySelector('#smart-assistant .breadcrumb a:nth-of-type(1)').textContent = 'Home';
document.querySelector('#smart-assistant .breadcrumb a:nth-of-type(2)').textContent = 'Projects';
document.querySelector('#smart-assistant .breadcrumb span').textContent = 'Smart Assistant and My City';

document.querySelector('#smart-assistant .project-header h1').textContent = 'Smart Assistant and My City';
document.querySelector('#smart-assistant .project-header p').textContent = 'Digital platforms for enhanced municipal services';

document.querySelector('#smart-assistant .project-description h2').textContent = 'Digital Transformation Initiative';
document.querySelector('#smart-assistant .project-description p').textContent = "The Smart Assistant and My City platforms represent MoMaH's commitment to digital transformation. These platforms enable residents to access municipal services, report issues, and engage with their communities through user-friendly digital interfaces.";

document.querySelector('#smart-assistant .project-description h3:nth-of-type(1)').textContent = 'Platform Features';
document.querySelectorAll('#smart-assistant .project-description ul li')[0].textContent = '24/7 virtual assistant for municipal inquiries';
document.querySelectorAll('#smart-assistant .project-description ul li')[1].textContent = 'Mobile app for service requests and tracking';
document.querySelectorAll('#smart-assistant .project-description ul li')[2].textContent = 'Real-time city information and updates';
document.querySelectorAll('#smart-assistant .project-description ul li')[3].textContent = 'Community engagement tools';
document.querySelectorAll('#smart-assistant .project-description ul li')[4].textContent = 'Integrated payment system for municipal fees';

document.querySelector('#smart-assistant .project-description h3:nth-of-type(2)').textContent = 'Benefits';
document.querySelectorAll('#smart-assistant .achievement-card h4')[0].textContent = '80%';
document.querySelectorAll('#smart-assistant .achievement-card p')[0].textContent = 'Faster Service Response';
document.querySelectorAll('#smart-assistant .achievement-card h4')[1].textContent = '1M+';
document.querySelectorAll('#smart-assistant .achievement-card p')[1].textContent = 'Active Users';
document.querySelectorAll('#smart-assistant .achievement-card h4')[2].textContent = '95%';
document.querySelectorAll('#smart-assistant .achievement-card p')[2].textContent = 'User Satisfaction';

document.querySelector('#smart-assistant .btn').textContent = 'Know More';

// CamCom AI Visual Pollution Project
document.querySelector('#camcom .breadcrumb span').textContent = 'CamCom AI Visual Pollution Project';
document.querySelector('#camcom .project-header h1').textContent = 'CamCom AI Visual Pollution Project';
document.querySelector('#camcom .project-header p').textContent = 'Using artificial intelligence to enhance urban aesthetics';

document.querySelector('#camcom .project-description h2').textContent = 'Innovative Urban Management';
document.querySelector('#camcom .project-description p').textContent = 'CamCom is an AI-powered system that detects and manages visual pollution in urban environments. Using computer vision and machine learning, the system identifies issues such as unauthorized advertisements, graffiti, and poorly maintained facades, enabling efficient urban management.';

document.querySelector('#camcom .project-description h3:nth-of-type(1)').textContent = 'Technology Components';
document.querySelectorAll('#camcom .project-description ul li')[0].textContent = 'AI-powered image recognition system';
document.querySelectorAll('#camcom .project-description ul li')[1].textContent = 'Mobile app for citizen reporting';
document.querySelectorAll('#camcom .project-description ul li')[2].textContent = 'Automated workflow for issue resolution';
document.querySelectorAll('#camcom .project-description ul li')[3].textContent = 'Data analytics for urban planning';
document.querySelectorAll('#camcom .project-description ul li')[4].textContent = 'Integration with municipal enforcement systems';

document.querySelector('#camcom .project-description h3:nth-of-type(2)').textContent = 'Results';
document.querySelectorAll('#camcom .achievement-card h4')[0].textContent = '70%';
document.querySelectorAll('#camcom .achievement-card h4')[1].textContent = '40%';
document.querySelectorAll('#camcom .achievement-card h4')[2].textContent = '12';

document.querySelectorAll('#camcom .achievement-card p')[0].textContent = 'Faster Detection';
document.querySelectorAll('#camcom .achievement-card p')[1].textContent = 'Reduction in Visual Pollution';
document.querySelectorAll('#camcom .achievement-card p')[2].textContent = 'Cities Implemented';

document.querySelector('#camcom .btn').textContent = 'View Case Studies';

  //Footer
  document.querySelector('footer .footer-col:nth-of-type(1) h3').textContent = 'Ministry of Municipalities and Housing';
  document.querySelector('footer .footer-col:nth-of-type(1) p').textContent = "Building sustainable communities for the Kingdom's future through innovation and excellence in urban planning and housing solutions.";

  document.querySelector('footer .footer-col:nth-of-type(2) h3').textContent = 'Quick Links';
  const quickLinks = document.querySelectorAll('footer .footer-col:nth-of-type(2) li');
  quickLinks[0].textContent = 'Home';
  quickLinks[1].textContent = 'Projects';
  quickLinks[2].textContent = 'About Us';
  quickLinks[3].textContent = 'UN Collaboration';
  quickLinks[4].textContent = 'Media Center';

  document.querySelector('footer .footer-col:nth-of-type(3) h3').textContent = 'Our Projects';
  const projectsLinks = document.querySelectorAll('footer .footer-col:nth-of-type(3) li');
  projectsLinks[0].textContent = 'Sakani Housing Support Program';
  projectsLinks[1].textContent = 'Bahja Urban Revitalization';
  projectsLinks[2].textContent = 'Smart Assistant and My City';
  projectsLinks[3].textContent = 'CamCom AI Visual Pollution Project';

  document.querySelector('footer .footer-col:nth-of-type(4) h3').textContent = 'Contact Us';
  const contactList = document.querySelectorAll('footer .footer-col:nth-of-type(4) li');
  contactList[0].childNodes[1].textContent = ' Riyadh, Saudi Arabia';
  contactList[1].childNodes[1].textContent = ' +966 11 123 4567';
  contactList[2].childNodes[1].textContent = ' info@momah.gov.sa';

  document.querySelector('footer .copyright p').textContent = '© 2025 Ministry of Municipalities and Housing. All Rights Reserved.';
    
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language based on HTML lang attribute
    if (htmlElement.getAttribute('lang') === 'ar') {
        document.querySelector('.lang-btn[data-lang="ar"]').click();
    } else {
        document.querySelector('.lang-btn[data-lang="en"]').click();
    }
});