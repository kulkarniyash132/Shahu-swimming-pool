// ===== ANATOMY DATA =====
const anatomyDataEn = {
  brain: {
    badge: '+ BDNF · − CORTISOL',
    title: 'Neural Clarity',
    desc: 'Rhythmic breathing and bilateral limb coordination in water increases BDNF (brain-derived neurotrophic factor) — a molecular fertilizer for neurons — while flushing stress hormones. Regular swimming is linked to sharper memory, better mood, and delayed cognitive decline.',
    region: 'BRAIN'
  },
  lungs: {
    badge: '+ CAPACITY · + EFFICIENCY',
    title: 'Pulmonary Expansion',
    desc: 'Water pressure against the chest forces the diaphragm and intercostal muscles to work harder with every breath — expanding lung volume over time. Swimmers develop breathing efficiency that benefits asthma sufferers and endurance athletes alike.',
    region: 'LUNGS'
  },
  heart: {
    badge: '↓ BP · ↑ CARDIAC OUTPUT',
    title: 'Cardiovascular Fortification',
    desc: 'The horizontal position in water redistributes blood flow, reducing cardiac load while strengthening the heart. Regular swimmers see lower resting heart rates, reduced blood pressure, and significantly expanded VO₂ max.',
    region: 'HEART'
  },
  shoulders: {
    badge: '+ MOBILITY · + STRENGTH',
    title: 'Shoulder Architecture',
    desc: 'Every stroke — freestyle, backstroke, butterfly — cycles the shoulder through a full range of motion under water resistance. This builds rotator cuff stability, scapular strength, and mobility unmatched by land-based exercise.',
    region: 'SHOULDERS'
  },
  core: {
    badge: '+ STABILITY · + POSTURE',
    title: 'Core Stabilization',
    desc: 'Without gravity to anchor you, the core becomes the primary stabilizer in water. Every kick, every rotation, every stroke demands deep abdominal and spinal engagement — sculpting functional strength and correcting postural imbalances.',
    region: 'CORE'
  },
  back: {
    badge: '− COMPRESSION · + ALIGNMENT',
    title: 'Spinal Decompression',
    desc: 'Horizontal movement in buoyant water removes the compressive forces that gravity exerts on the spine throughout the day. Herniated discs, sciatica, and chronic back pain respond remarkably to consistent swimming therapy.',
    region: 'BACK'
  },
  legs: {
    badge: '+ POWER · + ENDURANCE',
    title: 'Lower-Body Drive',
    desc: 'The flutter kick, dolphin kick, and breaststroke kick engage quads, hamstrings, glutes, and calves against continuous water resistance — building lean power and endurance without the joint impact of running.',
    region: 'LEGS'
  },
  joints: {
    badge: '0 IMPACT · FULL MOTION',
    title: 'Joint Liberation',
    desc: 'Buoyancy removes approximately 90% of body weight, allowing arthritic knees, recovering surgeries, and ageing hips to move through full range of motion — pain-free. Swimming is the gold standard of low-impact rehabilitation.',
    region: 'JOINTS'
  }
};

const anatomyDataMr = {
  brain: {
    badge: '+ बीडीएनएफ · - कॉर्टिसोल',
    title: 'मानसिक स्पष्टता',
    desc: 'पाण्यातील श्वासोच्छ्वास आणि अंगांच्या हालचालींमुळे बीडीएनएफ वाढते - जे न्यूरॉन्ससाठी खतासारखे काम करते - आणि तणावाचे संप्रेरक कमी करते. नियमित पोहण्यामुळे स्मरणशक्ती सुधारते आणि मानसिक आरोग्य चांगले राहते.',
    region: 'मेंदू'
  },
  lungs: {
    badge: '+ क्षमता · + कार्यक्षमता',
    title: 'फुफ्फुसांचा विस्तार',
    desc: 'छातीवर असलेल्या पाण्याच्या दाबामुळे श्वासोच्छ्वास करताना डायाफ्राम आणि इंटरकोस्टल स्नायूंना अधिक मेहनत करावी लागते - ज्यामुळे फुफ्फुसांची क्षमता वाढते. पोहणाऱ्यांमध्ये श्वास घेण्याची कार्यक्षमता वाढते जी दम्याच्या रुग्णांसाठी आणि धावपटूंसाठी फायदेशीर ठरते.',
    region: 'फुफ्फुसे'
  },
  heart: {
    badge: '↓ रक्तदाब · ↑ हृदयाची कार्यक्षमता',
    title: 'हृदयाचे बळकटीकरण',
    desc: 'पाण्यातील आडव्या स्थितीमुळे रक्तप्रवाह संतुलित होतो, ज्यामुळे हृदयावरील ताण कमी होतो आणि ते मजबूत होते. नियमित पोहणाऱ्यांचा विश्रांतीचा हृदयदर कमी असतो, रक्तदाब कमी होतो आणि VO₂ max वाढतो.',
    region: 'हृदय'
  },
  shoulders: {
    badge: '+ हालचाल · + ताकद',
    title: 'खांद्यांची रचना',
    desc: 'प्रत्येक स्ट्रोक - फ्रीस्टाईल, बॅकस्ट्रोक, बटरफ्लाय - पाण्याच्या प्रतिकारामध्ये खांद्यांना पूर्ण गतीने फिरवतो. याने खांद्यांची ताकद आणि लवचिकता जमिनीवरील व्यायामापेक्षा अधिक वाढते.',
    region: 'खांदे'
  },
  core: {
    badge: '+ स्थिरता · + मुद्रा',
    title: 'कोर स्थिरीकरण',
    desc: 'पाण्यात गुरुत्वाकर्षण नसल्यामुळे कोर हा शरीराचा मुख्य स्थिरीकरण घटक बनतो. प्रत्येक हालचाल, प्रत्येक वळण उदर आणि मणक्याला गुंतवून ठेवते - ज्यामुळे ताकद वाढते आणि मुद्रा सुधारते.',
    region: 'कोर'
  },
  back: {
    badge: '− दाब · + सरळपणा',
    title: 'मणक्यावरील ताण कमी',
    desc: 'पाण्याच्या प्लावकतेमुळे गुरुत्वाकर्षणाचा मणक्यावरील ताण कमी होतो. हर्निएटेड डिस्क, सायटिका आणि जुनाट पाठदुखीमध्ये पोहण्याच्या उपचाराने उल्लेखनीय फायदा होतो.',
    region: 'पाठ'
  },
  legs: {
    badge: '+ ताकद · + सहनशक्ती',
    title: 'पायांची ताकद',
    desc: 'पाण्याच्या सततच्या प्रतिकारामध्ये किक मारल्याने मांड्या, हॅमस्ट्रिंग्स, ग्लूट्स आणि पोटऱ्या गुंतल्या जातात - धावण्याच्या प्रभावाशिवाय ताकद आणि सहनशक्ती वाढवतात.',
    region: 'पाय'
  },
  joints: {
    badge: '०-परिणाम · पूर्ण हालचाल',
    title: 'सांध्यांना मुक्ती',
    desc: 'पाण्याचा प्लावकपणा शरीराचे ~९०% वजन कमी करतो, ज्यामुळे सांधेदुखी, गुडघेदुखी आणि शस्त्रक्रियेनंतरची पुनर्प्राप्ती वेदनामुक्त होते. पोहणे हे सांध्यांसाठी सर्वोत्तम आहे.',
    region: 'सांधे'
  }
};

let currentLang = 'en';

// ===== MODAL =====
function openModal(region) {
  const data = currentLang === 'en' ? anatomyDataEn[region] : anatomyDataMr[region];
  if (!data) return;
  document.getElementById('modal-badge').textContent = data.badge;
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-desc').textContent = data.desc;
  
  const regionLabel = currentLang === 'en' ? 'REGION' : 'भाग';
  document.getElementById('modal-region').textContent = `${regionLabel} · ` + data.region;
  document.getElementById('anatomy-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('anatomy-modal').classList.remove('active');
  document.body.style.overflow = '';
}

window.closeModal = closeModal;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {

  // Hotspot clicks
  document.querySelectorAll('.hotspot').forEach(spot => {
    spot.addEventListener('click', () => {
      const region = spot.dataset.region;
      openModal(region);
    });
  });

  // Anatomy buttons
  document.querySelectorAll('.anatomy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const region = btn.dataset.region;
      // Update info panel
      const data = currentLang === 'en' ? anatomyDataEn[region] : anatomyDataMr[region];
      if (!data) return;
      const info = document.getElementById('anatomy-info');
      info.querySelector('.anatomy-info-label').textContent = data.badge;
      info.querySelector('.anatomy-info-title').textContent = data.title;
      info.querySelector('.anatomy-info-desc').textContent = data.desc;
      // Toggle active state
      document.querySelectorAll('.anatomy-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Highlight corresponding hotspot
      document.querySelectorAll('.hotspot').forEach(h => {
        h.style.transform = h.dataset.region === region ? 'scale(1.4)' : 'scale(1)';
        h.style.boxShadow = h.dataset.region === region
          ? '0 0 0 10px rgba(103,232,249,0.3), 0 0 40px rgba(103,232,249,0.3)'
          : '0 0 0 6px rgba(103,232,249,0.2), 0 0 20px rgba(103,232,249,0.15)';
      });
    });
  });

  // Modal close
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('anatomy-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Form submit
  document.getElementById('booking-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    const originalText = btn.innerHTML; // use innerHTML to preserve spans
    btn.textContent = currentLang === 'en' ? 'Booking...' : 'नोंदणी करत आहे...';
    btn.style.opacity = '0.7';

    const formData = {
      name: document.getElementById('form-name').value,
      phone: document.getElementById('form-phone').value,
      email: document.getElementById('form-email').value,
      program: document.getElementById('form-program').value,
      date: document.getElementById('form-date').value,
      time: document.getElementById('form-time').value,
      notes: document.getElementById('form-notes').value
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        btn.textContent = currentLang === 'en' ? '✓ Slot Reserved!' : '✓ वेळ राखून ठेवली!';
        btn.style.background = '#4ade80';
        btn.style.opacity = '1';
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.background = '';
          e.target.reset();
        }, 2500);
      } else {
        const errorData = await response.json();
        const errPrefix = currentLang === 'en' ? 'Failed to reserve slot: ' : 'वेळ राखून ठेवण्यात अयशस्वी: ';
        alert(errPrefix + (errorData.error || 'Unknown error'));
        btn.innerHTML = originalText;
        btn.style.opacity = '1';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const netErr = currentLang === 'en' ? 'Network error. Please try again later.' : 'नेटवर्क त्रुटी. कृपया नंतर पुन्हा प्रयत्न करा.';
      alert(netErr);
      btn.innerHTML = originalText;
      btn.style.opacity = '1';
    }
  });

  // Stats counter animation (intersection observer)
  const statValues = document.querySelectorAll('.stat-value');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      }
    });
  }, { threshold: 0.5 });
  statValues.forEach(sv => statsObserver.observe(sv));

  // Benefit cards animate on scroll
  const benefitCards = document.querySelectorAll('.benefit-card');
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `fadeInUp 0.5s ${i * 0.1}s ease forwards`;
        entry.target.style.opacity = '1';
      }
    });
  }, { threshold: 0.2 });
  benefitCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    cardObserver.observe(card);
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Header scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      header.style.borderBottomColor = 'rgba(255,255,255,0.1)';
    } else {
      header.style.borderBottomColor = 'rgba(255,255,255,0.04)';
    }
    lastScroll = currentScroll;
  });

  // Parallax on gallery images
  const galleryItems = document.querySelectorAll('.gallery-item, .gallery-main');
  const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });
  galleryItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
    galleryObserver.observe(item);
  });
});

// Add fade-in animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// ===== I18N (LANGUAGE TOGGLE) =====
const translations = {
  en: {
    poolName: "Chhatrapati Shahu Swimming Pool",
    navBenefits: "Benefits",
    navWhySwim: "Why Swim",
    navGallery: "Gallery",
    navBookSlot: "Book Slot",
    bookYourSlot: "Book Your Slot",
    heroLine1: "Chhatrapati",
    heroLine2: "Shahu Swimming",
    heroLine3: "Pool",
    heroDesc: "A civic aquatic sanctuary in the heart of Dhayari — where every stroke rebuilds posture, every breath expands the lungs, and every lap dissolves the noise of the city.",
    bookASlot: "Book A Slot",
    exploreBenefits: "↓ Explore Benefits",
    formName: 'Full Name <span class="req">*</span>',
    formPhone: 'Phone <span class="req">*</span>',
    formEmail: 'Email <span style="color:#94a3b8; font-size:0.85em; font-weight:400" data-i18n="optional">(Optional)</span>',
    optional: "(Optional)",
    formProgram: 'Program <span class="req">*</span>',
    formSelect: "Select",
    progBeginner: "Beginner",
    progIntermediate: "Intermediate",
    progAdvanced: "Advanced",
    progCompetition: "Competition",
    progTherapy: "Therapy",
    formDate: 'Date <span class="req">*</span>',
    formTimeSlot: 'Time Slot <span class="req">*</span>',
    formNotes: "Notes",
    reserveYourSlot: "Reserve Your Slot →",

    // Stats
    statOlympic: "Olympic Length",
    statCoaches: "Certified Coaches",
    statSwimmers: "Active Swimmers",
    statDaily: "Daily",
    
    // Manifesto
    chapManifesto: "Chapter I — Manifesto",
    manifestoTitle: "Six reasons the water<br><em>rebuilds</em> the human being.",
    ben1Title: "Full-Body Recomposition",
    ben1Desc: "Swimming recruits over 70% of the body's musculature simultaneously — shoulders, lats, glutes, quads, and core — sculpting lean strength without loading the joints.",
    ben1Impact: "600 kcal / hr",
    impactLabel: "Impact",
    ben2Title: "Cardiovascular Reserve",
    ben2Desc: "Rhythmic aerobic work in water strengthens the heart, lowers resting BP, and expands VO₂ max faster than most land-based sport — with a fraction of the impact.",
    ben2Impact: "↓ 34% BP",
    ben3Title: "Pulmonary Capacity",
    ben3Desc: "Controlled breathing against water pressure trains the diaphragm and intercostals, growing lung volume — a proven aid for asthma and endurance athletes alike.",
    ben3Impact: "+15% VO₂",
    ben4Title: "Neural Calm",
    ben4Desc: "The proprioceptive hush of water lowers cortisol and elevates BDNF, sharpening focus and mood. A single evening lap is worth an hour of meditation.",
    ben4Impact: "↑ BDNF",
    ben5Title: "Joint Rehabilitation",
    ben5Desc: "Buoyancy removes ~ 90% of body weight, allowing surgical recovery, arthritic knees, and ageing spines to move — pain-free — again.",
    ben5Impact: "0-impact",
    ben6Title: "Longevity Habit",
    ben6Desc: "Cohort studies link consistent swimming with a 28% lower all-cause mortality risk. It is, statistically, the sport of long life.",
    ben6Impact: "− 28% risk",
    
    // Ticker
    tickerBreathe: "Breathe",
    tickerRebeat: "Rebeat",
    tickerAscend: "Ascend",
    tickerImmerse: "Immerse",
    tickerFlow: "Flow",
    
    // Gallery
    frame00: "Frame · 00",
    frame01: "Frame · 01",
    frame02: "Frame · 02",
    frame03: "Frame · 03",
    chapGallery: "Chapter III — Gallery",
    galleryTitle: "Frames from the <em>deep end.</em>",
    galFirstLight: "First Light",
    galJunior: "Junior Academy",
    galSprint: "The Sprint",
    galStillness: "Stillness",
    
    // Anatomy
    chapAnatomy: "Chapter II — Anatomy of a Swimmer",
    anatomyTitle: "Hover the body.<br><em>Read the transformation.</em>",
    anatomyInst: "Instructions",
    anatomyInstTitle: "Move your cursor across the body.",
    anatomyInstDesc: "Each glowing node reveals a scientifically documented benefit of swimming for that region. Tap a node to open the full editorial note.",
    btnBrain: "Brain",
    btnLungs: "Lungs",
    btnHeart: "Heart",
    btnShoulders: "Shoulders",
    btnCore: "Core",
    btnBack: "Back",
    btnLegs: "Legs",
    btnJoints: "Joints",
    
    // Booking
    chapReserve: "Chapter IV — Reserve",
    bookTitle: "Book your <em>slot.</em>",
    bookDesc: "Reserve a lane, a coach and a time-slot online. A confirmation call from our front desk follows within a day.",
    detailLoc: "Location",
    detailLocVal: "Chhatrapati Shahu Swimming Pool,<br>Dhayari, Pune 411041",
    detailDesk: "Front Desk",
    detailHours: "Hours",
    detailHoursVal: "07:00 → 22:00 · Wednesday off",
    detailEmail: "Email",
    
    // Footer
    footerEst: "EST. 2022 · DHAYARI, PUNE",
    footerDesc: "A civic aquatic sanctuary of Pune — dedicated to swimming as sport, therapy and lifelong practice.",
    footerVisit: "Visit",
    footerNav: "Navigate",
    footerTagline: "© 2024 Chhatrapati Shahu Swimming Pool · Dhayari, Pune · All Rights Reserved",
    heroEst: "EST. DHAYARI · PUNE · SINCE 2022"
  },
  mr: {
    poolName: "छत्रपती शाहू जलतरण तलाव",
    navBenefits: "फायदे",
    navWhySwim: "का पोहावे",
    navGallery: "गॅलरी",
    navBookSlot: "वेळ नोंदवा",
    bookYourSlot: "तुमची वेळ नोंदवा",
    heroLine1: "छत्रपती",
    heroLine2: "शाहू जलतरण",
    heroLine3: "तलाव",
    heroDesc: "धायरीच्या मध्यभागी असलेले एक सार्वजनिक जलतरण संकुल — जिथे प्रत्येक स्ट्रोक शरीराची स्थिती सुधारतो, प्रत्येक श्वास फुफ्फुसांचा विस्तार करतो आणि प्रत्येक लॅप शहराचा गोंधळ विरघळवतो.",
    bookASlot: "वेळ नोंदवा",
    exploreBenefits: "↓ फायदे एक्सप्लोर करा",
    formName: 'पूर्ण नाव <span class="req">*</span>',
    formPhone: 'फोन <span class="req">*</span>',
    formEmail: 'ईमेल <span style="color:#94a3b8; font-size:0.85em; font-weight:400" data-i18n="optional">(ऐच्छिक)</span>',
    optional: "(ऐच्छिक)",
    formProgram: 'प्रोग्राम <span class="req">*</span>',
    formSelect: "निवडा",
    progBeginner: "नवशिक्या",
    progIntermediate: "मध्यम",
    progAdvanced: "प्रगत",
    progCompetition: "स्पर्धात्मक",
    progTherapy: "थेरपी",
    formDate: 'दिनांक <span class="req">*</span>',
    formTimeSlot: 'वेळेचा स्लॉट <span class="req">*</span>',
    formNotes: "नोंदी",
    reserveYourSlot: "तुमची वेळ राखून ठेवा →",

    // Stats
    statOlympic: "ऑलिम्पिक लांबी",
    statCoaches: "प्रमाणित प्रशिक्षक",
    statSwimmers: "सक्रिय जलतरणपटू",
    statDaily: "दररोज",
    
    // Manifesto
    chapManifesto: "अध्याय १ — जाहीरनामा",
    manifestoTitle: "पाण्याची सहा कारणे<br>जी मानवी शरीर <em>पुन्हा घडवतात</em>.",
    ben1Title: "संपूर्ण शरीराची पुनर्रचना",
    ben1Desc: "पोहण्यामुळे शरीराचे ७०% हून अधिक स्नायू एकाच वेळी कार्यरत होतात - खांदे, पाठ, मांड्या आणि कोर - सांध्यांवर ताण न आणता ताकद वाढवतात.",
    ben1Impact: "६०० कॅलरी / तास",
    impactLabel: "परिणाम",
    ben2Title: "हृदय व रक्तवाहिन्यासंबंधी कार्यक्षमता",
    ben2Desc: "पाण्यातील लयीत केलेले व्यायाम हृदयाला बळकट करतात, रक्तदाब कमी करतात आणि फुफ्फुसांची क्षमता वाढवतात.",
    ben2Impact: "↓ ३४% रक्तदाब",
    ben3Title: "फुफ्फुसांची क्षमता",
    ben3Desc: "पा पाण्याच्या दाबाविरूद्ध नियंत्रित श्वासोच्छ्वास केल्याने फुफ्फुसांची क्षमता वाढते - अस्थमा आणि धावपटूंसाठी फायदेशीर.",
    ben3Impact: "+१५% VO₂",
    ben4Title: "मानसिक शांतता",
    ben4Desc: "पाण्याची शांतता कॉर्टिसोल कमी करते आणि मेंदूची कार्यक्षमता वाढवते. संध्याकाळचे पोहणे ध्यानासारखेच प्रभावी आहे.",
    ben4Impact: "↑ बीडीएनएफ",
    ben5Title: "सांध्यांचे पुनर्वसन",
    ben5Desc: "पाण्याचा प्लावकपणा शरीराचे ~९०% वजन कमी करतो, ज्यामुळे सांधेदुखी आणि शस्त्रक्रियेनंतरची पुनर्प्राप्ती वेदनामुक्त होते.",
    ben5Impact: "०-परिणाम",
    ben6Title: "दीर्घायुष्याची सवय",
    ben6Desc: "अभ्यासानुसार नियमित पोहण्यामुळे मृत्यूचा धोका २८ टक्क्यांनी कमी होतो. हा खऱ्या अर्थाने दीर्घायुष्याचा खेळ आहे.",
    ben6Impact: "- २८% धोका",
    
    // Ticker
    tickerBreathe: "श्वास",
    tickerRebeat: "ठोके",
    tickerAscend: "वर या",
    tickerImmerse: "मग्न व्हा",
    tickerFlow: "प्रवाह",
    
    // Gallery
    frame00: "फ्रेम · ००",
    frame01: "फ्रेम · ०१",
    frame02: "फ्रेम · ०२",
    frame03: "फ्रेम · ०३",
    chapGallery: "अध्याय ३ — गॅलरी",
    galleryTitle: "<em>खोल पाण्यातून</em> काही क्षण.",
    galFirstLight: "पहिली किरण",
    galJunior: "जुनियर अकादमी",
    galSprint: "वेगवान पोहणे",
    galStillness: "शांतता",
    
    // Anatomy
    chapAnatomy: "अध्याय २ — जलतरणपटूची रचना",
    anatomyTitle: "शरीरावर कर्सर फिरवा.<br><em>बदल अनुभवा.</em>",
    anatomyInst: "सूचना",
    anatomyInstTitle: "शरीरावर तुमचा कर्सर फिरवा.",
    anatomyInstDesc: "प्रत्येक चमकणारा नोड पोहण्याचे वैज्ञानिक फायदे दर्शवतो. अधिक माहितीसाठी नोडवर टॅप करा.",
    btnBrain: "मेंदू",
    btnLungs: "फुफ्फुसे",
    btnHeart: "हृदय",
    btnShoulders: "खांदे",
    btnCore: "कोर",
    btnBack: "पाठ",
    btnLegs: "पाय",
    btnJoints: "सांधे",
    
    // Booking
    chapReserve: "अध्याय ४ — नोंदणी",
    bookTitle: "तुमची वेळ <em>राखून ठेवा.</em>",
    bookDesc: "ऑनलाइन लेन, प्रशिक्षक आणि वेळेचा स्लॉट बुक करा. आमच्या कडून एका दिवसात कन्फर्मेशन कॉल येईल.",
    detailLoc: "ठिकाण",
    detailLocVal: "छत्रपती शाहू जलतरण तलाव,<br>धायरी, पुणे ४११०४१",
    detailDesk: "स्वागत कक्ष",
    detailHours: "वेळ",
    detailHoursVal: "०७:०० → २२:०० · बुधवार बंद",
    detailEmail: "ईमेल",
    
    // Footer
    footerEst: "स्थापित २०२२ · धायरी, पुणे",
    footerDesc: "पुण्याचे एक सार्वजनिक जलतरण संकुल — खेळ, थेरपी आणि जीवनभराचा सराव म्हणून पोहण्यासाठी समर्पित.",
    footerVisit: "भेट द्या",
    footerNav: "नॅव्हिगेट करा",
    footerTagline: "© २०२४ छत्रपती शाहू जलतरण तलाव · धायरी, पुणे · सर्व हक्क सुरक्षित",
    heroEst: "स्थापित धायरी · पुणे · २०२२ पासून"
  }
};

const langToggleBtn = document.getElementById('lang-toggle');

langToggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'mr' : 'en';
  langToggleBtn.textContent = currentLang === 'en' ? 'मराठी' : 'English';
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      // Use innerHTML because some translations include HTML tags
      el.innerHTML = translations[currentLang][key];
    }
  });

  // Also update active anatomy button if any is selected
  const activeBtn = document.querySelector('.anatomy-btn.active');
  if (activeBtn) {
    const region = activeBtn.dataset.region;
    const data = currentLang === 'en' ? anatomyDataEn[region] : anatomyDataMr[region];
    const info = document.getElementById('anatomy-info');
    info.querySelector('.anatomy-info-label').textContent = data.badge;
    info.querySelector('.anatomy-info-title').textContent = data.title;
    info.querySelector('.anatomy-info-desc').textContent = data.desc;
  }
});
