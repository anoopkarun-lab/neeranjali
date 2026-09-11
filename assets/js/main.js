const header=document.querySelector('.site-header');
const menuBtn=document.querySelector('.menu-btn');
const updateHeader=()=>header?.classList.toggle('scrolled',scrollY>40); updateHeader(); addEventListener('scroll',updateHeader,{passive:true});
menuBtn?.addEventListener('click',()=>{document.body.classList.toggle('nav-open');menuBtn.setAttribute('aria-expanded',document.body.classList.contains('nav-open'))});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('nav-open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Locally hosted, web-optimised MP4s for faster playback and reliable orientation.
const videoMeta={
  approach:{src:'assets/videos/approach-drive.mp4',poster:'assets/images/approach-video-poster.webp',orientation:'portrait'},
  drone:{src:'assets/videos/drone-view.mp4',poster:'assets/images/drone-video-poster.webp',orientation:'landscape'}
};
const vModal=document.querySelector('.video-modal');
const player=document.querySelector('#videoPlayer');
document.querySelectorAll('[data-video]').forEach(el=>el.addEventListener('click',()=>{
  const meta=videoMeta[el.dataset.video];
  if(!meta||!vModal||!player)return;
  vModal.classList.remove('portrait','landscape');
  vModal.classList.add(meta.orientation);
  player.poster=meta.poster;
  player.src=meta.src;
  player.load();
  vModal.classList.add('open');
  vModal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  player.play().catch(()=>{});
}));
function closeVideo(){
  if(!vModal||!player)return;
  player.pause();
  player.removeAttribute('src');
  player.load();
  vModal.classList.remove('open','portrait','landscape');
  vModal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
document.querySelector('[data-close-video]')?.addEventListener('click',closeVideo);
vModal?.addEventListener('click',e=>{if(e.target===vModal)closeVideo()});

const lbox=document.querySelector('.lightbox'); const lboxImg=lbox?.querySelector('img');
document.querySelectorAll('[data-lightbox]').forEach(el=>el.addEventListener('click',()=>{lboxImg.src=el.dataset.lightbox||el.querySelector('img')?.src;lbox.classList.add('open');document.body.style.overflow='hidden'}));
function closeLight(){if(!lbox)return;lbox.classList.remove('open');document.body.style.overflow=''}
document.querySelector('[data-close-lightbox]')?.addEventListener('click',closeLight);lbox?.addEventListener('click',e=>{if(e.target===lbox)closeLight()});
addEventListener('keydown',e=>{if(e.key==='Escape'){closeVideo();closeLight()}});

// Contact form builds a pre-filled WhatsApp enquiry without needing a backend.
const enquiry=document.querySelector('#enquiryForm');
enquiry?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(enquiry);const msg=`Hello, I am interested in Neeranjali.%0A%0AName: ${encodeURIComponent(d.get('name')||'')}%0APhone: ${encodeURIComponent(d.get('phone')||'')}%0AInterest: ${encodeURIComponent(d.get('interest')||'General enquiry')}%0AMessage: ${encodeURIComponent(d.get('message')||'')}`;window.open(`https://wa.me/919495571201?text=${msg}`,'_blank','noopener')});

const page=document.body.dataset.page; if(page) document.querySelector(`[data-nav="${page}"]`)?.classList.add('active');
