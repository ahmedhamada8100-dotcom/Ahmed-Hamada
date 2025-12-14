import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, ChevronDown, Search, TrendingUp, BarChart3, Layout, Target, Globe, Award, Briefcase, GraduationCap, Code, ExternalLink, Upload } from 'lucide-react';

// The main application component for the SEO Specialist Portfolio
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // --- New States for Image Uploads ---
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [image1Url, setImage1Url] = useState(null); // Project Image 1 (GSC Screenshot)
  const [image2Url, setImage2Url] = useState(null); // Project Image 2 (Sales Metrics)
  // ------------------------------------

  // Function to handle image uploads and set the appropriate state
  const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        // Create a local URL for the selected file
        setImage(URL.createObjectURL(file));
    } else {
        setImage(null);
        if(file) alert('الرجاء اختيار ملف صورة صالح (مثل: png, jpg).');
    }
  };

  // Effect to handle scroll-based navigation highlighting and sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky header styling
      setIsScrolled(window.scrollY > 50);

      // Determine the active section for navigation highlighting
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      let currentSection = 'home';
      
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          // Check if the section is currently visible (within the top half of the viewport)
          if (window.scrollY >= element.offsetTop - window.innerHeight / 2) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to smoothly scroll to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  // SEO Skills Data
  const skills = [
    { name: 'On-Page SEO', icon: Layout, level: 90 },
    { name: 'E-Commerce SEO', icon: TrendingUp, level: 85 },
    { name: 'Keyword Research', icon: Search, level: 90 },
    { name: 'Content Optimization', icon: Code, level: 85 },
    { name: 'Google Analytics', icon: BarChart3, level: 80 },
    { name: 'CRO (Conversion Rate Optimization)', icon: Target, level: 75 }
  ];

  // Tools Data
  const tools = [
    'Google Search Console',
    'Google Analytics 4',
    'SEMrush',
    'Ahrefs',
    'Google My Business',
    'Salla Platform',
    'Zid Platform'
  ];

  // Niche Expertise Data
  const niches = [
    'Metalwork',
    'Herbal Products',
    'Flowers & Floristry',
    'Digital Files',
    'Car Accessories',
    'Bedroom Essentials'
  ];

  // Utility component for rendering navigation items
  const NavItem = ({ section }) => (
    <button
      onClick={() => scrollToSection(section)}
      className={`capitalize text-lg px-4 py-2 rounded-lg transition-all font-medium 
        ${activeSection === section 
          ? 'text-white bg-[#525252] shadow-md' 
          : 'text-gray-300 hover:text-white hover:bg-[#525252]/50'
        }`}
    >
      {section}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-xl shadow-[#525252]/10' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-extrabold text-white bg-[#525252] px-4 py-1 rounded-xl tracking-wider cursor-pointer shadow-lg" onClick={() => scrollToSection('home')}>
              AE
            </div>
            <div className="hidden md:flex gap-4">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <NavItem key={section} section={section} />
              ))}
            </div>
            {/* Mobile Menu Placeholder (optional implementation) */}
            <div className="md:hidden text-white">
              {/* <Menu size={24} /> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'radial-gradient(circle at center, #525252 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          
          {/* Profile Picture Upload Area (Selected by user) */}
          <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
            <input 
              type="file" 
              id="profile-upload" 
              accept="image/*" 
              className="hidden" 
              onChange={(e) => handleImageUpload(e, setProfileImageUrl)} 
            />
            <label htmlFor="profile-upload" className="block cursor-pointer">
              <div className="w-36 h-36 mx-auto rounded-full bg-[#525252] flex items-center justify-center shadow-2xl border-4 border-white/20 relative overflow-hidden group">
                {profileImageUrl ? (
                  <img 
                    src={profileImageUrl} 
                    alt="Ahmed Hamada Elsaid Profile" 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <span className="text-5xl font-bold text-white">
                    AE
                  </span>
                )}
                {/* Overlay to indicate clickability */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium">
                    {profileImageUrl ? 'Change' : 'Upload'} Image
                </div>
              </div>
            </label>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg">
            Ahmed Hamada Elsaid
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light mb-6">Junior SEO Specialist</p>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Driving measurable growth for e-commerce businesses in the Saudi market through data-driven, conversion-focused SEO strategies.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-[#525252] text-white rounded-full font-semibold shadow-xl shadow-[#525252]/40 hover:shadow-2xl hover:bg-[#6b6b6b] transition-all duration-300 hover:scale-[1.02]"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="px-8 py-3 border-2 border-[#525252] text-white rounded-full font-semibold hover:bg-[#525252]/20 transition-all duration-300 hover:scale-[1.02]"
            >
              View Work History
            </button>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="mt-20 animate-bounce p-3 rounded-full bg-[#525252]/30 hover:bg-[#525252]/50 transition-colors"
            aria-label="Scroll down to About section"
          >
            <ChevronDown size={32} className="text-white" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-900/50 border-t border-b border-[#525252]/20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            About Me
          </h2>
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Main Bio */}
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed border-l-4 border-[#525252] pl-4">
                I'm a Junior SEO Specialist with over 6 months of specialized, high-impact experience in e-commerce optimization, particularly within the competitive Saudi market. My focus is always on delivering measurable results by translating complex data into actionable, comprehensive on-page SEO strategies.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Currently working at Moasher Company, I leverage platforms like Salla and Zid to help businesses across diverse niches significantly improve their online visibility, organic traffic, and ultimately, conversion rates. I believe in strategic consistency and continuous improvement.
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-white bg-[#525252] px-4 py-2 rounded-full font-medium text-sm shadow-md">
                  <Award size={18} />
                  <span>6+ Months Experience</span>
                </div>
                <div className="flex items-center gap-2 text-white bg-gray-700 px-4 py-2 rounded-full font-medium text-sm shadow-md">
                  <Globe size={18} />
                  <span>Saudi Market Expert</span>
                </div>
              </div>
            </div>

            {/* Specialized Industries Card */}
            <div className="bg-gray-800/70 rounded-2xl p-8 backdrop-blur-sm border border-[#525252]/50 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <Layout size={24} className="mr-3 text-[#525252]" />
                Industry Focus
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {niches.map((niche, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-300 bg-gray-700/30 p-2 rounded-lg transition-transform hover:translate-x-1">
                    <div className="w-2 h-2 bg-[#525252] rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{niche}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            Core Skills & Toolkit
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Core Competencies (Skill Bars) */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white border-b border-[#525252]/30 pb-3">Expertise</h3>
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon size={20} className="text-[#525252]" />
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 shadow-inner">
                      <div
                        className="bg-[#525252] h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools & Platforms */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white border-b border-[#525252]/30 pb-3">Digital Toolkit</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/70 rounded-xl p-4 text-center backdrop-blur-sm border border-gray-700 hover:border-[#525252] transition-all hover:scale-[1.05] shadow-md"
                  >
                    <p className="text-white text-sm font-medium">{tool}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-700/50">
                Proficient in utilizing these industry-standard tools for data analysis, keyword tracking, and optimization implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-900/50 border-t border-b border-[#525252]/20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            Featured Project: E-Commerce Growth
          </h2>
          
          <div className="bg-gray-800/70 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-[#525252]/50 shadow-2xl">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">High-Impact SEO Campaign (Q2 2025)</h3>
              <p className="text-gray-400 text-lg">Comprehensive On-Page & Conversion Optimization for a Saudi E-Tailer</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gray-900/50 rounded-xl p-6 border border-[#525252]/30 shadow-inner">
                <div className="text-4xl font-extrabold text-[#525252] mb-2">+38.33%</div>
                <div className="text-white font-medium text-lg">Organic Traffic Increase</div>
                <div className="text-sm text-gray-500 mt-1">3.02K → 4.18K visits (MoM)</div>
              </div>
              
              <div className="bg-gray-900/50 rounded-xl p-6 border border-[#525252]/30 shadow-inner">
                <div className="text-4xl font-extrabold text-[#525252] mb-2">+40.43%</div>
                <div className="text-white font-medium text-lg">Sales Growth (Conversions)</div>
                <div className="text-sm text-gray-500 mt-1">280 → 393 transactions (MoM)</div>
              </div>
              
              <div className="bg-gray-900/50 rounded-xl p-6 border border-[#525252]/30 shadow-inner">
                <div className="text-4xl font-extrabold text-[#525252] mb-2">+64.66%</div>
                <div className="text-white font-medium text-lg">Revenue Increase (SAR)</div>
                <div className="text-sm text-gray-500 mt-1">SAR 4,810 → 7,920 (MoM)</div>
              </div>
            </div>

            {/* Project Images/Visual Proof Area (Updated for upload) */}
            <div className="mb-10 space-y-6">
              <h4 className="text-xl font-bold text-white border-b border-[#525252]/30 pb-2">Visual Performance Proof:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Image 1 Upload: GSC Screenshot */}
                <div className="bg-gray-900/70 rounded-xl p-4 border border-gray-700">
                  <p className="text-gray-400 text-sm mb-3 text-center">صورة إثبات الأداء (1): مخطط البحث العضوي</p>
                  <div className="bg-white rounded-lg p-2 shadow-inner">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="image1-upload"
                      onChange={(e) => handleImageUpload(e, setImage1Url)}
                    />
                    
                    {image1Url ? (
                      <div className="relative aspect-video">
                        <img 
                            src={image1Url} 
                            alt="Organic Traffic Trend Screenshot" 
                            className="w-full h-full object-contain rounded-lg" 
                        />
                        <label 
                          htmlFor="image1-upload"
                          className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-all cursor-pointer rounded-lg flex items-center justify-center opacity-0 hover:opacity-100"
                          title="Click to change image"
                        >
                          <Upload size={32} className="text-white" />
                        </label>
                      </div>
                    ) : (
                      <label 
                        htmlFor="image1-upload"
                        className="block cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                      >
                        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300 p-8">
                          <div className="text-center">
                            <BarChart3 size={32} className="w-12 h-12 mx-auto mb-2 text-gray-500" />
                            <p className="text-sm font-medium">اضغط هنا لتحميل صورة إثبات GSC</p>
                            <p className="text-xs text-gray-500 mt-1">(إثبات نمو الزيارات بنسبة 38%)</p>
                          </div>
                        </div>
                      </label>
                    )}
                  </div>
                </div>

                {/* Image 2 Upload: Sales Metrics */}
                <div className="bg-gray-900/70 rounded-xl p-4 border border-gray-700">
                  <p className="text-gray-400 text-sm mb-3 text-center">صورة إثبات الأداء (2): لوحة مبيعات التجارة الإلكترونية</p>
                  <div className="bg-white rounded-lg p-2 shadow-inner">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="image2-upload"
                      onChange={(e) => handleImageUpload(e, setImage2Url)}
                    />
                    
                    {image2Url ? (
                      <div className="relative aspect-video">
                        <img 
                            src={image2Url} 
                            alt="Sales Metrics Screenshot" 
                            className="w-full h-full object-contain rounded-lg" 
                        />
                         <label 
                          htmlFor="image2-upload"
                          className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-all cursor-pointer rounded-lg flex items-center justify-center opacity-0 hover:opacity-100"
                          title="Click to change image"
                        >
                          <Upload size={32} className="text-white" />
                        </label>
                      </div>
                    ) : (
                      <label 
                        htmlFor="image2-upload"
                        className="block cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                      >
                        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300 p-8">
                          <div className="text-center">
                            <ExternalLink size={32} className="w-12 h-12 mx-auto mb-2 text-gray-500" />
                            <p className="text-sm font-medium">اضغط هنا لتحميل صورة إثبات المبيعات</p>
                            <p className="text-xs text-gray-500 mt-1">(إثبات نمو الإيرادات بنسبة 64%)</p>
                          </div>
                        </div>
                      </label>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Achievements */}
            <div className="mt-8">
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Target size={20} className="mr-2 text-[#525252]" />
                Detailed Success Points:
              </h4>
              <ul className="space-y-3 text-gray-300 list-inside">
                <li className="flex gap-2">
                  <span className="text-[#525252] font-extrabold">•</span>
                  <span>Increased organic search traffic by 38.33% within one month by optimizing category and product pages.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#525252] font-extrabold">•</span>
                  <span>Boosted conversion rate through strategic CTA placement and site speed improvements.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#525252] font-extrabold">•</span>
                  <span>Achieved 40.43% growth in total sales (280 to 393 transactions) directly attributable to organic uplift.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#525252] font-extrabold">•</span>
                  <span>Generated SAR 7,920 in revenue, a 64.66% increase from the previous period.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#525252] font-extrabold">•</span>
                  <span>Improved organic impressions by 28.11% (2,024 to 2,593) using targeted long-tail keywords.</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-700/50">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1 bg-[#525252] text-white rounded-full text-sm font-medium">On-Page SEO</span>
                <span className="px-4 py-1 bg-gray-700 text-white rounded-full text-sm font-medium">Data Analysis</span>
                <span className="px-4 py-1 bg-[#525252] text-white rounded-full text-sm font-medium">Conversion Optimization</span>
                <span className="px-4 py-1 bg-gray-700 text-white rounded-full text-sm font-medium">E-Commerce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            Work & Education
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Experience Timeline */}
            <div className="space-y-10">
              <h3 className="text-3xl font-bold text-white border-b border-[#525252]/30 pb-3 mb-6">Professional History</h3>
              
              {/* Junior SEO Specialist */}
              <div className="relative pl-6 border-l-2 border-[#525252]/50">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-[#525252] rounded-full border-4 border-gray-900 flex items-center justify-center">
                  <Briefcase size={14} className="text-white" />
                </div>
                <div className="bg-gray-800/70 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-[#525252] transition-all">
                  <h4 className="text-2xl font-bold text-white">Junior SEO Specialist</h4>
                  <p className="text-gray-400">Moasher Company</p>
                  <p className="text-sm text-[#525252] font-semibold mb-3">May 2025 – Present</p>
                  <ul className="space-y-2 text-gray-300 text-sm list-disc pl-5">
                    <li>Developed and deployed SEO strategies for over 5 e-commerce stores in the Saudi market.</li>
                    <li>Performed technical audits and implemented structured data markup for enhanced SERP visibility.</li>
                    <li>Generated monthly performance reports to track ROI and identify new growth opportunities.</li>
                  </ul>
                </div>
              </div>

              {/* SEO Intern */}
              <div className="relative pl-6 border-l-2 border-[#525252]/50">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-[#525252] rounded-full border-4 border-gray-900 flex items-center justify-center">
                  <Briefcase size={14} className="text-white" />
                </div>
                <div className="bg-gray-800/70 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-[#525252] transition-all">
                  <h4 className="text-2xl font-bold text-white">SEO Intern</h4>
                  <p className="text-gray-400">Moasher Company</p>
                  <p className="text-sm text-[#525252] font-semibold mb-3">February 2025 – April 2025</p>
                  <ul className="space-y-2 text-gray-300 text-sm list-disc pl-5">
                    <li>Assisted in conducting detailed keyword research and competitor analysis for content gaps.</li>
                    <li>Executed on-page optimizations, including meta tags, image alt texts, and URL restructuring.</li>
                    <li>Monitored website performance using Google Analytics and Search Console.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Block */}
            <div className="space-y-10">
                <h3 className="text-3xl font-bold text-white border-b border-[#525252]/30 pb-3 mb-6">Education</h3>
                <div className="relative pl-6 border-l-2 border-[#525252]/50">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-[#525252] rounded-full border-4 border-gray-900 flex items-center justify-center">
                        <GraduationCap size={14} className="text-white" />
                    </div>
                    <div className="bg-gray-800/70 rounded-xl p-6 shadow-lg border border-gray-700">
                        <h4 className="text-2xl font-bold text-white">Bachelor of Commerce - Accounting</h4>
                        <p className="text-gray-400">Mansoura University</p>
                        <p className="text-sm text-[#525252] font-semibold mb-3">Class of 2025</p>
                        <p className="text-gray-300">Achieved a grade of: <span className="font-semibold text-white">Very Good</span>.</p>
                        <p className="text-gray-400 text-sm mt-3">The analytical skills and attention to detail from my accounting background are directly applied to my data-driven SEO work.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900/50 border-t border-[#525252]/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            Let's Connect
          </h2>
          <div className="bg-gray-800/70 rounded-3xl p-8 md:p-10 backdrop-blur-sm border border-[#525252]/50 shadow-2xl">
            <p className="text-center text-gray-300 text-xl mb-10">
              Ready to grow your e-commerce business? I'm actively looking for new opportunities.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="mailto:ahmedhamada8100@gmail.com"
                className="flex flex-col items-center gap-3 p-6 bg-gray-900 rounded-xl hover:bg-gray-900/80 transition-all group border border-gray-700 hover:border-[#525252] shadow-md"
              >
                <Mail size={32} className="text-[#525252] group-hover:scale-110 transition-transform" />
                <span className="text-white text-sm break-all font-medium">Email Me</span>
                <span className="text-xs text-gray-500 hidden sm:block">ahmedhamada8100@gmail.com</span>
              </a>
              <a
                href="tel:+201023170647"
                className="flex flex-col items-center gap-3 p-6 bg-gray-900 rounded-xl hover:bg-gray-900/80 transition-all group border border-gray-700 hover:border-[#525252] shadow-md"
              >
                <Phone size={32} className="text-[#525252] group-hover:scale-110 transition-transform" />
                <span className="text-white text-sm font-medium">Call Me</span>
                <span className="text-xs text-gray-500 hidden sm:block">+20 102 317 0647</span>
              </a>
              <a
                href="#" // Placeholder for actual LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-gray-900 rounded-xl hover:bg-gray-900/80 transition-all group border border-gray-700 hover:border-[#525252] shadow-md"
              >
                <Linkedin size={32} className="text-[#525252] group-hover:scale-110 transition-transform" />
                <span className="text-white text-sm font-medium">LinkedIn</span>
                <span className="text-xs text-gray-500 hidden sm:block">Connect Online</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 border-t border-[#525252]/20">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Ahmed Hamada Elsaid. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
