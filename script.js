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
    badge: '+ मेंदूचे आरोग्य · − ताण',
    title: 'मानसिक स्पष्टता',
    desc: 'पोहताना श्वासाची लय आणि हात-पायांच्या समन्वित हालचालींमुळे एकाग्रता व मनःस्थिती सुधारण्यास मदत होऊ शकते. नियमित शारीरिक हालचाल मेंदूच्या आरोग्यासाठीही उपयुक्त ठरते.',
    region: 'मेंदू'
  },
  lungs: {
    badge: '+ श्वसनक्षमता · + कार्यक्षमता',
    title: 'श्वसनक्षमता',
    desc: 'पाण्यात पोहताना श्वास नियंत्रित ठेवण्याचा सराव होतो. यामुळे श्वसनाची लय आणि सहनशक्ती विकसित करण्यास मदत होऊ शकते.',
    region: 'फुफ्फुसे'
  },
  heart: {
    badge: '+ हृदयाचे आरोग्य · + सहनशक्ती',
    title: 'हृदय व रक्ताभिसरण',
    desc: 'नियमित पोहणे हा हृदय आणि रक्ताभिसरणासाठी उपयुक्त एरोबिक व्यायाम आहे. क्षमतेनुसार केलेल्या सरावामुळे तंदुरुस्ती आणि सहनशक्ती सुधारण्यास मदत होते.',
    region: 'हृदय'
  },
  shoulders: {
    badge: '+ हालचाल · + ताकद',
    title: 'खांद्यांची हालचाल',
    desc: 'फ्रीस्टाइल, बॅकस्ट्रोक आणि ब्रेस्टस्ट्रोकसारख्या प्रकारांत खांद्यांचा वारंवार वापर होतो. योग्य तंत्राने सराव केल्याने खांद्यांची हालचाल आणि स्नायूंची ताकद विकसित होऊ शकते.',
    region: 'खांदे'
  },
  core: {
    badge: '+ स्थिरता · + शरीराचा समतोल',
    title: 'मध्यभागाची स्थिरता',
    desc: 'पोहताना शरीराचा तोल सांभाळण्यासाठी पोट आणि पाठीच्या मध्यभागातील स्नायू काम करतात. नियमित सरावामुळे शरीराचा समतोल आणि हालचालींवरील नियंत्रण सुधारण्यास मदत होते.',
    region: 'शरीराचा मध्यभाग'
  },
  back: {
    badge: '+ हालचालींची मोकळीक · + आधार',
    title: 'पाठीचा कणा व पाठ',
    desc: 'पाण्याच्या आधारामुळे शरीर हलके वाटते आणि हालचाली करणे सोपे होऊ शकते. पाठदुखी किंवा पाठीच्या कण्याशी संबंधित त्रास असल्यास योग्य पोहण्याचा प्रकार तज्ज्ञांच्या सल्ल्याने निवडावा.',
    region: 'पाठ'
  },
  legs: {
    badge: '+ ताकद · + सहनशक्ती',
    title: 'पायांची ताकद',
    desc: 'पायांच्या किकमुळे मांडी, नितंब आणि पोटरीचे स्नायू काम करतात. पाण्याच्या प्रतिकाराविरुद्ध पोहल्याने पायांची ताकद व सहनशक्ती विकसित होऊ शकते.',
    region: 'पाय'
  },
  joints: {
    badge: 'कमी धक्का · मोकळ्या हालचाली',
    title: 'सांध्यांसाठी सौम्य व्यायाम',
    desc: 'पाण्याचा उत्प्लावक आधार सांध्यांवरील भार कमी जाणवण्यास मदत करतो. दुखापत, संधिवात किंवा शस्त्रक्रियेनंतरचा सराव सुरू करण्यापूर्वी डॉक्टर किंवा फिजिओथेरपिस्टचा सल्ला घ्या.',
    region: 'सांधे'
  }
};

let currentLang = 'en';

function updateAnatomyInfo(region) {
  const data = currentLang === 'en' ? anatomyDataEn[region] : anatomyDataMr[region];
  if (!data) return;
  activeAnatomyRegion = region;
  const info = document.getElementById('anatomy-info');
  if (info) {
    const order = ['brain', 'shoulders', 'lungs', 'heart', 'core', 'back', 'legs', 'joints'].indexOf(region) + 1;
    const prefix = currentLang === 'mr' ? 'भाग' : 'REGION';
    info.querySelector('.anatomy-info-index').textContent = prefix + ' ' + String(order).padStart(2, '0') + ' / 08';
    info.querySelector('.anatomy-info-label').textContent = data.badge;
    info.querySelector('.anatomy-info-title').textContent = data.title;
    info.querySelector('.anatomy-info-desc').textContent = data.desc;
    info.classList.remove('is-updating');
    // Restart a small reveal animation without forcing layout across the whole page.
    void info.offsetWidth;
    info.classList.add('is-updating');
  }
  document.querySelectorAll('.hotspot').forEach(spot => {
    const active = spot.dataset.region === region;
    spot.classList.toggle('active', active);
    spot.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  document.querySelectorAll('.anatomy-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.region === region);
  });
}

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

// ===== BATCH CONFIG (shared) =====
const MAX_CAPACITY = 50;
// Women's only batch start times in minutes from midnight
const WOMENS_BATCH_STARTS = [10 * 60, 15 * 60]; // 10:00 and 15:00

function pad2(n) { return String(n).padStart(2, '0'); }

function formatClock12(minutes) {
  const hour24 = Math.floor(minutes / 60) % 24;
  const hour12 = hour24 % 12 || 12;
  const suffix = hour24 >= 12 ? 'PM' : 'AM';
  return hour12 + ':' + pad2(minutes % 60) + ' ' + suffix;
}

function formatRange12(startMinutes, endMinutes) {
  return formatClock12(startMinutes) + ' – ' + formatClock12(endMinutes);
}

function formatStoredRange12(value) {
  if (typeof value !== 'string') return value || '—';
  const match = value.match(/^(\d{1,2}):(\d{2})\s*[–-]\s*(\d{1,2}):(\d{2})$/);
  if (!match) return value;
  const start = Number(match[1]) * 60 + Number(match[2]);
  const end = Number(match[3]) * 60 + Number(match[4]);
  return formatRange12(start, end);
}

function buildSlots() {
  const slots = [];
  const startM = 6 * 60, endM = 22 * 60;
  for (let m = startM; m + 45 <= endM; m += 60) {
    const batchEnd = m + 45, breakEnd = m + 60;
    // Keep the original 24-hour label as the database/API key to avoid breaking existing records.
    const label = pad2(Math.floor(m / 60)) + ':' + pad2(m % 60) + ' – ' + pad2(Math.floor(batchEnd / 60)) + ':' + pad2(batchEnd % 60);
    const breakLabel = breakEnd <= endM
      ? pad2(Math.floor(batchEnd / 60)) + ':' + pad2(batchEnd % 60) + ' – ' + pad2(Math.floor(breakEnd / 60)) + ':' + pad2(breakEnd % 60)
      : null;
    const isWomens = WOMENS_BATCH_STARTS.includes(m);
    slots.push({
      label,
      displayLabel: formatRange12(m, batchEnd),
      breakLabel,
      displayBreakLabel: breakEnd <= endM ? formatRange12(batchEnd, breakEnd) : null,
      isWomens,
      startMinutes: m
    });
  }
  return slots;
}

const ALL_SLOTS = buildSlots();
let currentBatchConfigMap = {};
let batchStatusRendered = false;
let activeAnatomyRegion = null;

// ===== BATCH SLOTS GENERATOR (booking form dropdown) =====
function generate45MinSlots() {
  const select = document.getElementById('form-time');
  if (!select) return;
  ALL_SLOTS.forEach(function(s) {
    const opt = document.createElement('option');
    opt.value = s.label;
    opt.textContent = s.isWomens ? s.displayLabel + ' ♀ Women-only' : s.displayLabel;
    select.appendChild(opt);
  });
}

generate45MinSlots();

// ===== BATCH STATUS GRID (public visible section) =====
function renderBatchCards(configMap) {
  const grid = document.getElementById('batch-status-grid');
  if (!grid) return;
  grid.innerHTML = '';
  currentBatchConfigMap = configMap || {};
  batchStatusRendered = true;
  const isMr = currentLang === 'mr';

  ALL_SLOTS.forEach(function(s) {
    const cfg   = configMap[s.label] || null;
    const coaches  = cfg ? cfg.coaches  : null;
    const students = cfg ? cfg.students : null;
    const pct    = students !== null ? Math.min(100, Math.round((students / MAX_CAPACITY) * 100)) : null;
    const isEmpty  = cfg === null;
    const isNearFull = pct !== null && pct >= 80 && pct < 100;
    const isFull     = pct !== null && pct >= 100;

    // Card modifier classes
    let cardClass = 'bsc-card';
    if (s.isWomens) cardClass += ' bsc-card--women';
    else if (isFull) cardClass += ' bsc-card--full';
    else if (isNearFull) cardClass += ' bsc-card--near-full';
    if (isEmpty) cardClass += ' bsc-card--empty';

    // Fill bar color class
    let barClass = 'bsc-fill-bar';
    let pctClass = 'bsc-fill-pct';
    if (s.isWomens) { barClass += ' bsc-fill-bar--women'; }
    else if (isFull) { barClass += ' bsc-fill-bar--danger'; pctClass += ' bsc-fill-pct--danger'; }
    else if (isNearFull) { barClass += ' bsc-fill-bar--warn'; pctClass += ' bsc-fill-pct--warn'; }

    const coachDisplay   = coaches  !== null ? coaches  : '\u2014';
    const studentDisplay = students !== null ? students : '\u2014';
    const pctDisplay     = pct !== null ? pct + '%' : '\u2014';
    const breakNote      = s.displayBreakLabel ? '&#9208; ' + (isMr ? 'विश्रांती ' : 'Break ') + s.displayBreakLabel : '';

    const card = document.createElement('div');
    card.className = cardClass;
    card.innerHTML =
      '<div class="bsc-card-header">' +
        '<span class="bsc-slot-time">' + s.displayLabel + '</span>' +
        (s.isWomens ? '<span class="bsc-women-badge">♀ ' + (isMr ? 'फक्त महिलांसाठी' : 'Women-only') + '</span>' : '') +
      '</div>' +
      '<div class="bsc-stats">' +
        '<div class="bsc-stat">' +
          '<span class="bsc-stat-value">' + coachDisplay + '</span>' +
          '<span class="bsc-stat-label">' + (isMr ? 'प्रशिक्षक' : 'Coaches') + '</span>' +
        '</div>' +
        '<div class="bsc-divider"></div>' +
        '<div class="bsc-stat">' +
          '<span class="bsc-stat-value">' + studentDisplay + '</span>' +
          '<span class="bsc-stat-label">' + (isMr ? 'विद्यार्थी' : 'Students') + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="bsc-fill-row">' +
        '<span class="bsc-fill-label">' + (isMr ? 'क्षमता' : 'Capacity') + '</span>' +
        '<span class="' + pctClass + '">' + pctDisplay + '</span>' +
      '</div>' +
      '<div class="bsc-fill-track">' +
        '<div class="' + barClass + '" data-pct="' + (pct || 0) + '"></div>' +
      '</div>' +
      (breakNote ? '<div class="bsc-break-note">' + breakNote + '</div>' : '');

    grid.appendChild(card);
  });

  // Animate fill bars after a short delay (allows CSS transition to play)
  setTimeout(function() {
    grid.querySelectorAll('.bsc-fill-bar[data-pct]').forEach(function(bar) {
      bar.style.width = bar.dataset.pct + '%';
    });
  }, 120);
}

function setBatchStatusMessage(message, isError) {
  const status = document.getElementById('batch-status-message');
  if (!status) return;
  status.textContent = message;
  status.classList.toggle('is-error', Boolean(isError));
}

async function loadBatchStatus() {
  const grid = document.getElementById('batch-status-grid');
  if (!grid) return;

  try {
    const res = await fetch('/api/batch-config-public', { cache: 'no-store' });
    if (!res.ok) throw new Error('Batch status API returned HTTP ' + res.status);

    const data = await res.json(); // array of { slot, coaches, students }
    if (!Array.isArray(data)) throw new Error('Unexpected batch status response');

    const map = {};
    data.forEach(function(r) {
      if (r && typeof r.slot === 'string') map[r.slot] = r;
    });
    renderBatchCards(map);

    if (data.length === 0) {
      document.getElementById('batch-status-message').dataset.state = 'empty';
      setBatchStatusMessage(currentLang === 'mr' ? 'प्रशिक्षक व विद्यार्थ्यांची संख्या अद्याप उपलब्ध नाही. कृपया नंतर पुन्हा पाहा.' : 'Batch counts have not been published yet. Please check back later.', false);
    } else {
      document.getElementById('batch-status-message').dataset.state = 'loaded';
      setBatchStatusMessage(currentLang === 'mr' ? 'खालील संख्या तलावाच्या प्रशासकाने नोंदवलेल्या आहेत. डॅश (—) म्हणजे त्या वेळेसाठी संख्या नोंदवलेली नाही.' : 'Counts shown below are the values entered by the pool admin. A dash means no count has been configured for that time slot.', false);
    }
  } catch (e) {
    console.error('Could not load public batch status:', e);
    grid.innerHTML = '<div class="batch-status-loading">' + (currentLang === 'mr' ? 'प्रशिक्षक व विद्यार्थ्यांची थेट माहिती सध्या उपलब्ध नाही. कृपया पुन्हा प्रयत्न करा.' : 'Live coach and student counts are temporarily unavailable. Please try again later.') + '</div>';
    const status = document.getElementById('batch-status-message');
    if (status) status.dataset.state = 'error';
    setBatchStatusMessage(currentLang === 'mr' ? 'सध्या थेट बॅच-माहितीशी संपर्क साधता आला नाही.' : 'We could not connect to the live batch information right now.', true);
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {

  // Load public batch status section
  loadBatchStatus();

  // Booking form: time slot change → update info strip
  const timeSelect = document.getElementById('form-time');
  const batchStrip = document.getElementById('batch-info-strip');

  if (timeSelect && batchStrip) {
    timeSelect.addEventListener('change', async function() {
      const slot = timeSelect.value;
      if (!slot) { batchStrip.style.display = 'none'; return; }

      const slotMeta = ALL_SLOTS.find(function(s) { return s.label === slot || slot.startsWith(s.label); });
      const isWomens = slotMeta ? slotMeta.isWomens : false;

      // Update women's badge in strip
      const womensBadge = document.getElementById('batch-womens-badge');
      if (womensBadge) womensBadge.style.display = isWomens ? 'inline-flex' : 'none';

      try {
        const cleanSlot = slot; // option values retain the canonical 24-hour API/database key
        const res = await fetch('/api/batch-config?slot=' + encodeURIComponent(cleanSlot));
        if (res.ok) {
          const cfg = await res.json();
          const students = cfg.students || 0;
          const pct = Math.min(100, Math.round((students / MAX_CAPACITY) * 100));

          document.getElementById('batch-coaches').textContent  = cfg.coaches  !== undefined ? cfg.coaches  : '\u2014';
          document.getElementById('batch-students').textContent = cfg.students !== undefined ? cfg.students : '\u2014';

          const fillText = document.getElementById('batch-fill-text');
          if (fillText) fillText.textContent = pct + '% full';

          const fillBar = document.getElementById('batch-fill-bar');
          if (fillBar) {
            fillBar.style.width = pct + '%';
            fillBar.style.background = isWomens
              ? 'linear-gradient(90deg,#ec4899,#a855f7)'
              : pct >= 100
                ? 'linear-gradient(90deg,#ef4444,#f87171)'
                : pct >= 80
                  ? 'linear-gradient(90deg,#f97316,#fb923c)'
                  : 'linear-gradient(90deg,#06b6d4,#67e8f9)';
          }

          batchStrip.style.display = 'block';
        } else {
          // Still show strip with women's badge if applicable
          if (isWomens) { batchStrip.style.display = 'block'; }
          else { batchStrip.style.display = 'none'; }
        }
      } catch (err) {
        if (isWomens) { batchStrip.style.display = 'block'; }
        else { batchStrip.style.display = 'none'; }
      }
    });
  }

  // Hover/focus/tap on a body marker updates the detail panel immediately (no modal).
  document.querySelectorAll('.hotspot').forEach(spot => {
    const reveal = () => updateAnatomyInfo(spot.dataset.region);
    spot.addEventListener('pointerenter', reveal);
    spot.addEventListener('focus', reveal);
    spot.addEventListener('click', reveal); // touch-screen fallback
  });

  // The region pills remain available for keyboard and touch users.
  document.querySelectorAll('.anatomy-btn').forEach(btn => {
    btn.addEventListener('click', () => updateAnatomyInfo(btn.dataset.region));
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
    statOlympic: "Pool Length",
    statCoaches: "Certified Coaches",
    statSwimmers: "Active Swimmers",
    statDaily: "Daily",
    statHoursValue: "6:00 AM – 10:00 PM",
    batchStatusDesc: "Live coach and student counts for each batch · Capacity: 50 students · 45-minute sessions with 15-minute breaks",
    batchStatusLoading: "Loading live coach and student counts…",
    legendWomen: "Women-only batch",
    legendOpen: "Open batch",
    legendFull: "Near capacity / full",
    batchCoaches: "🏊 <strong id=\"batch-coaches\" style=\"color:#67e8f9;\">—</strong> Coaches",
    batchStudents: "👥 <strong id=\"batch-students\" style=\"color:#67e8f9;\">—</strong> / 50 Students",
    batchWomenOnly: "♀ WOMEN-ONLY",
    anatomyKicker: "THE SWIMMER'S BLUEPRINT · 08 REGIONS",
    anatomyLead: "One movement, whole-body benefits. Hover over a glowing point to see how swimming supports that region.",
    hotspotCount: "08 POINTS · HOVER TO EXPLORE",
    anatomyInfoFoot: "A closer look at what every stroke can support.",
    
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
    anatomyInstTitle: "Hover over a glowing point.",
    anatomyInstDesc: "The details appear here as you move over each point. On a phone or tablet, tap a point to explore it.",
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
    detailHoursVal: "7:00 AM – 10:00 PM · Closed Wednesdays",
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
    navWhySwim: "पोहण्याचे फायदे",
    navGallery: "गॅलरी",
    navBookSlot: "वेळ आरक्षित करा",
    bookYourSlot: "आपली वेळ आरक्षित करा",
    heroLine1: "छत्रपती",
    heroLine2: "शाहू जलतरण",
    heroLine3: "तलाव",
    heroDesc: "धायरीतील छत्रपती शाहू जलतरण तलावात पोहण्याचा आनंद घ्या. नियमित सरावामुळे शरीराची हालचाल, श्वसनक्षमता आणि सहनशक्ती विकसित करण्यास मदत होते.",
    bookASlot: "वेळ नोंदवा",
    exploreBenefits: "↓ फायदे जाणून घ्या",
    formName: 'पूर्ण नाव <span class="req">*</span>',
    formPhone: 'मोबाईल क्रमांक <span class="req">*</span>',
    formEmail: 'ईमेल <span style="color:#94a3b8; font-size:0.85em; font-weight:400" data-i18n="optional">(ऐच्छिक)</span>',
    optional: "(ऐच्छिक)",
    formProgram: 'प्रशिक्षणाचा प्रकार <span class="req">*</span>',
    formSelect: "निवडा",
    progBeginner: "नवशिक्या",
    progIntermediate: "मध्यम स्तर",
    progAdvanced: "प्रगत स्तर",
    progCompetition: "स्पर्धा प्रशिक्षण",
    progTherapy: "पुनर्वसनासाठी पोहणे",
    formDate: 'दिनांक <span class="req">*</span>',
    formTimeSlot: 'वेळेची निवड <span class="req">*</span>',
    formNotes: "नोंदी",
    reserveYourSlot: "वेळ आरक्षित करा →",

    // Stats
    statOlympic: "तलावाची लांबी",
    statCoaches: "प्रशिक्षक",
    statSwimmers: "सक्रिय जलतरणपटू",
    statDaily: "दररोज",
    statHoursValue: "सकाळी ६:०० – रात्री १०:००",
    batchStatusDesc: "प्रत्येक बॅचमधील प्रशिक्षक व विद्यार्थ्यांची थेट संख्या · कमाल क्षमता: ५० विद्यार्थी · ४५ मिनिटांचे सत्र आणि १५ मिनिटांची विश्रांती",
    batchStatusLoading: "प्रशिक्षक व विद्यार्थ्यांची थेट माहिती लोड होत आहे…",
    legendWomen: "फक्त महिलांसाठी बॅच",
    legendOpen: "सर्वांसाठी खुली बॅच",
    legendFull: "क्षमता जवळपास पूर्ण / पूर्ण",
    batchCoaches: "🏊 <strong id=\"batch-coaches\" style=\"color:#67e8f9;\">—</strong> प्रशिक्षक",
    batchStudents: "👥 <strong id=\"batch-students\" style=\"color:#67e8f9;\">—</strong> / ५० विद्यार्थी",
    batchWomenOnly: "♀ फक्त महिलांसाठी",
    anatomyKicker: "जलतरणपटूचे शरीर · ८ भाग",
    anatomyLead: "पोहण्याचे अनेक फायदे होतात. एखाद्या चमकणाऱ्या बिंदूवर कर्सर न्या आणि त्या भागाची माहिती पाहा.",
    hotspotCount: "८ बिंदू · माहिती पाहण्यासाठी कर्सर न्या",
    anatomyInfoFoot: "पोहण्याच्या प्रत्येक फटक्याचे फायदे अधिक जाणून घ्या.",
    
    // Manifesto
    chapManifesto: "भाग १ — पोहण्याचे फायदे",
    manifestoTitle: "पोहण्याचे सहा फायदे<br>जे शरीर आणि मनाला <em>सशक्त करतात</em>.",
    ben1Title: "संपूर्ण शरीराचा व्यायाम",
    ben1Desc: "पोहताना खांदे, पाठ, नितंब, मांड्या आणि पोटाभोवतीचे स्नायू एकाच वेळी काम करतात. त्यामुळे सांध्यांवर कमी धक्का येत असताना ताकद आणि सहनशक्ती वाढवण्यास मदत होते.",
    ben1Impact: "६०० कॅलरी / तास",
    impactLabel: "मुख्य फायदा",
    ben2Title: "हृदयाचे आरोग्य",
    ben2Desc: "लयबद्ध पोहणे हा हृदयासाठी उपयुक्त एरोबिक व्यायाम आहे. नियमित आणि क्षमतेनुसार सराव केल्याने हृदयाची तंदुरुस्ती व सहनशक्ती सुधारण्यास मदत होऊ शकते.",
    ben2Impact: "↓ ३४% रक्तदाब",
    ben3Title: "श्वसनक्षमता",
    ben3Desc: "पोहताना श्वास नियंत्रित ठेवण्याचा सराव होतो. यामुळे श्वसनाची लय आणि सहनशक्ती विकसित करण्यास मदत होऊ शकते.",
    ben3Impact: "+१५% VO₂",
    ben4Title: "मनःशांती आणि एकाग्रता",
    ben4Desc: "पोहण्याची लय आणि श्वासावर लक्ष केंद्रित केल्याने मन शांत होण्यास मदत होऊ शकते. नियमित शारीरिक हालचाल मनःस्थिती आणि एकाग्रतेसाठी उपयुक्त ठरते.",
    ben4Impact: "↑ बीडीएनएफ",
    ben5Title: "सांध्यांसाठी सौम्य व्यायाम",
    ben5Desc: "पाण्याचा आधार सांध्यांवरील भार कमी जाणवण्यास मदत करतो. दुखापत किंवा शस्त्रक्रियेनंतर पोहण्याचा सराव सुरू करण्यापूर्वी वैद्यकीय तज्ज्ञांचा सल्ला घ्या.",
    ben5Impact: "कमी धक्का",
    ben6Title: "निरोगी जीवनशैली",
    ben6Desc: "नियमित पोहणे ही सक्रिय जीवनशैलीचा चांगला भाग ठरू शकते. वयानुसार आणि क्षमतेनुसार सातत्याने केलेला व्यायाम दीर्घकालीन आरोग्यास मदत करतो.",
    ben6Impact: "नियमित सराव",
    
    // Ticker
    tickerBreathe: "श्वास",
    tickerRebeat: "ठोके",
    tickerAscend: "उंच भरारी",
    tickerImmerse: "पाण्यात रमून जा",
    tickerFlow: "प्रवाह",
    
    // Gallery
    frame00: "फ्रेम · ००",
    frame01: "फ्रेम · ०१",
    frame02: "फ्रेम · ०२",
    frame03: "फ्रेम · ०३",
    chapGallery: "भाग ३ — छायाचित्रे",
    galleryTitle: "तलावातील <em>काही खास क्षण.</em>",
    galFirstLight: "पहाटेचा सराव",
    galJunior: "बाल जलतरण प्रशिक्षण",
    galSprint: "वेगाचा सराव",
    galStillness: "शांतता",
    
    // Anatomy
    chapAnatomy: "भाग २ — पोहण्याचा शरीरावर होणारा परिणाम",
    anatomyTitle: "शरीरावरील बिंदूंवर कर्सर न्या.<br><em>फायदे जाणून घ्या.</em>",
    anatomyInst: "पोहण्याचा फायदा",
    anatomyInstTitle: "चमकणाऱ्या बिंदूवर कर्सर न्या.",
    anatomyInstDesc: "प्रत्येक चमकणाऱ्या बिंदूवर कर्सर नेताच त्या भागाशी संबंधित माहिती येथे दिसेल. मोबाइलवर बिंदूला स्पर्श करा.",
    btnBrain: "मेंदू",
    btnLungs: "फुफ्फुसे",
    btnHeart: "हृदय",
    btnShoulders: "खांदे",
    btnCore: "कोर",
    btnBack: "पाठ",
    btnLegs: "पाय",
    btnJoints: "सांधे",
    
    // Booking
    chapReserve: "भाग ४ — वेळ आरक्षित करा",
    bookTitle: "आपली वेळ <em>आरक्षित करा.</em>",
    bookDesc: "आपला प्रशिक्षण प्रकार आणि सोयीची वेळ निवडून ऑनलाइन विनंती पाठवा. पुढील पुष्टीसाठी तलावाचा कर्मचारी आपल्याशी संपर्क साधेल.",
    detailLoc: "ठिकाण",
    detailLocVal: "छत्रपती शाहू जलतरण तलाव,<br>धायरी, पुणे ४११०४१",
    detailDesk: "स्वागत कक्ष",
    detailHours: "वेळ",
    detailHoursVal: "सकाळी ७:०० ते रात्री १०:०० · बुधवारी बंद",
    detailEmail: "ईमेल",
    
    // Footer
    footerEst: "स्थापित २०२२ · धायरी, पुणे",
    footerDesc: "पोहण्याचा सराव, तंदुरुस्ती आणि जलक्रीडेला प्रोत्साहन देणारे धायरीतील सार्वजनिक जलतरण संकुल.",
    footerVisit: "भेट द्या",
    footerNav: "पृष्ठावरील दुवे",
    footerTagline: "© २०२४ छत्रपती शाहू जलतरण तलाव · धायरी, पुणे · सर्व हक्क सुरक्षित",
    heroEst: "धायरी · पुणे · स्थापना २०२२"
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

  // Keep the anatomy detail and live batch cards in the selected language.
  const hotspotNames = currentLang === 'mr'
    ? { brain: 'मेंदू', shoulders: 'खांदे', lungs: 'फुफ्फुसे', heart: 'हृदय', core: 'मध्यभाग', back: 'पाठ', legs: 'पाय', joints: 'सांधे' }
    : { brain: 'BRAIN', shoulders: 'SHOULDERS', lungs: 'LUNGS', heart: 'HEART', core: 'CORE', back: 'SPINE', legs: 'LEGS', joints: 'JOINTS' };
  document.querySelectorAll('.hotspot').forEach(spot => {
    const label = spot.querySelector('.hotspot-label');
    if (label) label.textContent = hotspotNames[spot.dataset.region] || '';
    spot.setAttribute('aria-label', (currentLang === 'mr' ? 'माहिती पाहा: ' : 'Explore ') + (hotspotNames[spot.dataset.region] || ''));
  });
  if (activeAnatomyRegion) updateAnatomyInfo(activeAnatomyRegion);
  const infoStrip = document.getElementById('batch-info-strip');
  if (infoStrip) {
    const coachCount = document.getElementById('batch-coaches');
    const studentCount = document.getElementById('batch-students');
    const coachValue = coachCount ? coachCount.textContent : '—';
    const studentValue = studentCount ? studentCount.textContent : '—';
    const labels = infoStrip.querySelector('div');
    if (labels) {
      labels.children[0].innerHTML = '🏊 <strong id="batch-coaches" style="color:#67e8f9;">' + coachValue + '</strong> ' + (currentLang === 'mr' ? 'प्रशिक्षक' : 'Coaches');
      labels.children[1].innerHTML = '👥 <strong id="batch-students" style="color:#67e8f9;">' + studentValue + '</strong> / ' + (currentLang === 'mr' ? '५० विद्यार्थी' : '50 Students');
      const womens = document.getElementById('batch-womens-badge');
      if (womens) womens.textContent = currentLang === 'mr' ? '♀ फक्त महिलांसाठी' : '♀ WOMEN-ONLY';
    }
  }
  if (document.getElementById('batch-status-grid') && batchStatusRendered) {
    renderBatchCards(currentBatchConfigMap);
  }
  const statusEl = document.getElementById('batch-status-message');
  if (statusEl && statusEl.dataset.state) {
    if (statusEl.dataset.state === 'empty') setBatchStatusMessage(currentLang === 'mr' ? 'प्रशिक्षक व विद्यार्थ्यांची संख्या अद्याप उपलब्ध नाही. कृपया नंतर पुन्हा पाहा.' : 'Batch counts have not been published yet. Please check back later.', false);
    else if (statusEl.dataset.state === 'loaded') setBatchStatusMessage(currentLang === 'mr' ? 'खालील संख्या तलावाच्या प्रशासकाने नोंदवलेल्या आहेत. डॅश (—) म्हणजे त्या वेळेसाठी संख्या नोंदवलेली नाही.' : 'Counts shown below are the values entered by the pool admin. A dash means no count has been configured for that time slot.', false);
    else if (statusEl.dataset.state === 'error') setBatchStatusMessage(currentLang === 'mr' ? 'सध्या थेट बॅच-माहितीशी संपर्क साधता आला नाही.' : 'We could not connect to the live batch information right now.', true);
  }
});
