const header=document.querySelector('.site-header');
const menuBtn=document.querySelector('.menu-btn');
const updateHeader=()=>header?.classList.toggle('scrolled',scrollY>40); updateHeader(); addEventListener('scroll',updateHeader,{passive:true});
menuBtn?.addEventListener('click',()=>{document.body.classList.toggle('nav-open');menuBtn.setAttribute('aria-expanded',document.body.classList.contains('nav-open'))});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('nav-open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Video modal uses public Google Drive preview URLs so GitHub Pages stays lightweight.
const vModal=document.querySelector('.video-modal'); const frame=document.querySelector('#videoFrame');
document.querySelectorAll('[data-video-id]').forEach(el=>el.addEventListener('click',()=>{const id=el.dataset.videoId;frame.src=`https://drive.google.com/file/d/${id}/preview`;vModal.classList.add('open');document.body.style.overflow='hidden'}));
function closeVideo(){if(!vModal)return;vModal.classList.remove('open');frame.src='';document.body.style.overflow=''}
document.querySelector('[data-close-video]')?.addEventListener('click',closeVideo);vModal?.addEventListener('click',e=>{if(e.target===vModal)closeVideo()});

const lbox=document.querySelector('.lightbox'); const lboxImg=lbox?.querySelector('img');
document.querySelectorAll('[data-lightbox]').forEach(el=>el.addEventListener('click',()=>{lboxImg.src=el.dataset.lightbox||el.querySelector('img')?.src;lbox.classList.add('open');document.body.style.overflow='hidden'}));
function closeLight(){if(!lbox)return;lbox.classList.remove('open');document.body.style.overflow=''}
document.querySelector('[data-close-lightbox]')?.addEventListener('click',closeLight);lbox?.addEventListener('click',e=>{if(e.target===lbox)closeLight()});
addEventListener('keydown',e=>{if(e.key==='Escape'){closeVideo();closeLight()}});

// Contact form builds a pre-filled WhatsApp enquiry without needing a backend.
const enquiry=document.querySelector('#enquiryForm');
enquiry?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(enquiry);const msg=`Hello, I am interested in Neeranjali.%0A%0AName: ${encodeURIComponent(d.get('name')||'')}%0APhone: ${encodeURIComponent(d.get('phone')||'')}%0AInterest: ${encodeURIComponent(d.get('interest')||'General enquiry')}%0AMessage: ${encodeURIComponent(d.get('message')||'')}`;window.open(`https://wa.me/919495571201?text=${msg}`,'_blank','noopener')});

// Current nav state from body data-page.
const page=document.body.dataset.page; if(page) document.querySelector(`[data-nav="${page}"]`)?.classList.add('active');
