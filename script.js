//  <script>
//       (function(){
//         emailjs.init("9GvMZyV4Uf_l1Eq7X"); // ✅ Replace with your EmailJS public key
//       })();
    
//       document.getElementById('contactForm').addEventListener('submit', function(event) {
//         event.preventDefault();
      
//         emailjs.send("service_3hd4lzm", "template_2y8lhga", {
//           from_name: document.getElementById('name').value,
//           from_email: document.getElementById('email').value,
//           message: document.getElementById('message').value
//         })
//         .then(function() {
//           alert("✅ Your message has been sent successfully!");
//           document.getElementById('contactForm').reset();
//         }, function(error) {
//           alert("we will be with you shortly.");
//           console.error(error);
//         });
//       });
//   </script>



 <style>
    * { font-family: 'Inter', sans-serif; }
    html { scroll-behavior: smooth; }

    /* Dark Mode */
    .dark-mode { @apply bg-slate-900 text-white; }
    .dark-mode .bg-white { @apply bg-slate-800; }
    .dark-mode .text-gray-800 { @apply text-gray-200; }
    .dark-mode .bg-blue-50 { @apply bg-slate-700; }

    /* Auto Scroll */
    @keyframes scrollX {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scrollX { animation: scrollX 25s linear infinite; }
    .animate-scrollX:hover { animation-play-state: paused; }

    /* Floating Button */
    .float-btn { animation: float 3s ease-in-out infinite; }
    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }

    /* Tooltip Share Button (kept from your style) */
    .tooltip-container { position:relative;display:inline-block; }
    .tooltip-content {
      position:absolute;top:110%;left:50%;transform:translateX(-50%) scale(0.8);
      background:white;border-radius:16px;padding:20px;box-shadow:0 20px 40px rgba(0,0,0,.15);
      opacity:0;visibility:hidden;transition:all .4s cubic-bezier(.68,-.55,.265,1.55);
      z-index:100;pointer-events:none;backdrop-filter:blur(12px);background:rgba(255,255,255,.95);
    }
    .tooltip-container:hover .tooltip-content{
      opacity:1;visibility:visible;transform:translateX(-50%) scale(1);pointer-events:auto;
    }
    .tooltip-content::before{
      content:"";position:absolute;top:-10px;left:50%;transform:translateX(-50%);
      border:10px solid transparent;border-bottom-color:rgba(255,255,255,.95);
    }

    /* Emergency SOS */
    .sos-pulse{animation:pulse 2s infinite}
    @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(239,68,68,.7)}70%{box-shadow:0 0 0 20px rgba(239,68,68,0)}100%{box-shadow:0 0 0 0 rgba(239,68,68,0)}}

    /* Counter */
    .counter{font-weight:800;font-size:2.5rem;color:#1d4ed8}
  </style>


 <!-- Dark Mode Toggle -->
  <button id="darkToggle" class="fixed top-20 right-6 z-50 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:shadow-xl transition">
    <i class="bi bi-moon-stars-fill text-xl"></i>
  </button>

  <!-- Emergency SOS Button -->
  <button id="sosBtn" class="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-5 rounded-full shadow-2xl sos-pulse transition transform hover:scale-110">
    <i class="bi bi-exclamation-triangle-fill text-2xl"></i>
  </button>
