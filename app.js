// Navigation Logic
function navigateTo(pageId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('hidden'));
    const target = document.getElementById(`page-${pageId}`);
    if (target) target.classList.remove('hidden');

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('text-violet-300', 'bg-violet-950/60', 'border', 'border-violet-500/30');
        btn.classList.add('text-slate-400');
    });
    const activeNav = document.getElementById(`nav-${pageId}`);
    if (activeNav) {
        activeNav.classList.add('text-violet-300', 'bg-violet-950/60', 'border', 'border-violet-500/30');
        activeNav.classList.remove('text-slate-400');
    }
    document.getElementById('mobileMenu')?.classList.add('hidden');
    window.scrollTo(0,0);
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('hidden');
}

// Ambient Canvas
const canvas = document.getElementById('ambientCanvas');
if(canvas){
    const ctx = canvas.getContext('2d');
    let w, h;
    function resize(){ w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight; }
    window.addEventListener('resize', resize); resize();
    // simple floating particles
    const particles = Array.from({length: 40}, () => ({
        x: Math.random()*w, y: Math.random()*h,
        vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3,
        r: Math.random()*2+1
    }));
    function animate(){
        ctx.clearRect(0,0,w,h);
        particles.forEach(p=>{
            p.x+=p.vx; p.y+=p.vy;
            if(p.x<0||p.x>w) p.vx*=-1;
            if(p.y<0||p.y>h) p.vy*=-1;
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fillStyle='rgba(139,92,246,0.4)';
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}