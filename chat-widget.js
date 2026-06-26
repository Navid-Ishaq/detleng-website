(function () {

/* ==========================================================
   Agents DeTLeng AI Assistant Widget
   Version 2.0
   ========================================================== */

/* ==========================================================
   Bubble
========================================================== */

const bubble = document.createElement("div");

bubble.id = "detleng-ai-bubble";

bubble.innerHTML = `
<div style="
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
line-height:1.1;
">
<div style="font-size:28px;">🤖</div>
<div style="font-size:18px;font-weight:700;">Ask AI</div>
</div>
`;

bubble.style.position = "fixed";
bubble.style.bottom = "20px";
bubble.style.right = "20px";

bubble.style.width = "82px";
bubble.style.height = "82px";

bubble.style.borderRadius = "50%";

bubble.style.background =
"linear-gradient(135deg,#2563eb,#06b6d4)";

bubble.style.color = "#fff";

bubble.style.display = "flex";
bubble.style.alignItems = "center";
bubble.style.justifyContent = "center";

bubble.style.cursor = "pointer";

bubble.style.fontFamily =
"'Segoe UI',Arial,sans-serif";

bubble.style.boxShadow =
"0 8px 22px rgba(37,99,235,.45)";

bubble.style.userSelect = "none";

bubble.style.zIndex = "999999";

bubble.style.animation =
"detlengPulse 1.8s infinite";


/* ==========================================================
   Popup
========================================================== */

const popup = document.createElement("div");

popup.id = "detleng-popup";

popup.style.position = "fixed";

popup.style.right = "20px";

popup.style.bottom = "115px";

popup.style.width = "420px";

popup.style.overflow = "hidden";

popup.style.height = "560px";

popup.style.maxWidth = "92vw";

popup.style.background = "#ffffff";

popup.style.borderRadius = "22px";

popup.style.boxShadow =
"0 18px 50px rgba(15,23,42,.18), 0 8px 20px rgba(37,99,235,.15)";

popup.style.border =
"1px solid rgba(191,219,254,.9)";

popup.style.display = "none";

popup.style.zIndex = "999999";

popup.innerHTML = `

<div style="
background:linear-gradient(135deg,#2563eb 0%,#1d4ed8 45%,#06b6d4 100%);
padding:20px;
color:#ffffff;
border-radius:18px 18px 0 0;
display:flex;
justify-content:space-between;
align-items:center;
box-shadow:0 2px 10px rgba(0,0,0,.10);
">

<div>

<div style="
font-size:26px;
font-weight:700;
line-height:1.2;
">

🤖 Agents DeTLeng

</div>

<div style="
font-size:14px;
opacity:.95;
margin-top:5px;
letter-spacing:.3px;
">

Your Intelligent AI Assistant

</div>

</div>

<div style="
font-size:28px;
opacity:.75;
">

✨

</div>

</div>

<div id="detleng-popup-body" style="
padding:22px;
font-family:'Segoe UI',Arial,sans-serif;
height:360px;
overflow-y:auto;
overflow-x:hidden;
scroll-behavior:smooth;
">

<div style="
font-size:20px;
font-weight:700;
color:#111827;
margin-bottom:12px;
">

👋 Hello!

</div>

<p style="
font-size:15px;
line-height:1.8;
color:#444;
margin:0;
">

Thank you for visiting
<b>Agents DeTLeng.</b>

<br><br>

🚀 Our AI Assistant is currently under development.

<br><br>

Very soon you'll be able to chat with us about:

</p>

<ul style="
margin-top:14px;
line-height:2;
color:#374151;
">

<li>🤖 AI Agents</li>

<li>⚙ Business Automation</li>

<li>📊 Data Engineering</li>

<li>🔄 ETL Pipelines</li>

<li>☁ Cloud Solutions</li>

<li>💡 AI Consulting</li>

</ul>

<div style="
margin-top:18px;
padding:16px;
background:linear-gradient(135deg,#eff6ff,#dbeafe);
border-radius:12px;
text-align:center;
font-weight:700;
color:#2563eb;
line-height:1.7;
border:1px solid #bfdbfe;
">

🚀 <strong>AI Assistant Launching Soon</strong>

<br><br>

We are building an intelligent AI assistant to help you with
AI Agents, Business Automation, Data Engineering and Cloud Solutions.

<br><br>

✨ Stay tuned — exciting features are coming very soon.

</div>

</div>

`;


/* ==========================================================
   CSS
========================================================== */

const style = document.createElement("style");

style.innerHTML = `

@keyframes detlengPulse{

0%{

transform:scale(1);

box-shadow:
0 0 12px rgba(37,99,235,.35);

}

50%{

transform:scale(1.12);

box-shadow:
0 0 24px rgba(37,99,235,.70),
0 0 40px rgba(6,182,212,.40);

}

100%{

transform:scale(1);

box-shadow:
0 0 12px rgba(37,99,235,.35);

}

}

/* ==========================================
   Popup Animation
========================================== */

@keyframes popupFadeIn{

0%{

opacity:0;
transform:translateY(20px) scale(.96);

}

100%{

opacity:1;
transform:translateY(0) scale(1);

}

}

/* ==========================================
   Mobile
========================================== */

@media(max-width:768px){

#detleng-ai-bubble{

width:72px !important;

height:72px !important;

right:15px !important;

bottom:15px !important;

}

#detleng-popup{

right:10px !important;

left:10px !important;

width:auto !important;

bottom:100px !important;

}

}

/* ==========================================
   Custom Scrollbar
========================================== */

#detleng-popup-body::-webkit-scrollbar{

width:8px;

}

#detleng-popup-body::-webkit-scrollbar-track{

background:#f1f5f9;
border-radius:10px;

}

#detleng-popup-body::-webkit-scrollbar-thumb{

background:#60a5fa;
border-radius:10px;

}

#detleng-popup-body::-webkit-scrollbar-thumb:hover{

background:#2563eb;

}

`;

document.head.appendChild(style);

document.head.appendChild(style);


/* ==========================================================
   Events
========================================================== */

bubble.onclick = function(){

    if(
        popup.style.display === "none" ||
        popup.style.display === ""
    ){

        popup.style.display = "block";

    }else{

        popup.style.display = "none";

    }

};


document.addEventListener("click",function(e){

if(e.target.id==="closeDetlengPopup"){

popup.style.display="none";

}

});


/* ==========================================================
   Render
========================================================== */

document.body.appendChild(bubble);

document.body.appendChild(popup);


/* ==========================================================
   END
========================================================== */

})();
