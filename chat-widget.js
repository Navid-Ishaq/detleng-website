(function () {

// =========================
// CHAT BUBBLE
// =========================

const bubble = document.createElement("div");

bubble.innerHTML = "AI";

bubble.style.position = "fixed";
bubble.style.bottom = "20px";
bubble.style.right = "20px";

bubble.style.width = "80px";
bubble.style.height = "80px";

bubble.style.borderRadius = "50%";

bubble.style.background = "#2563eb"; // #006400 Dark Green
bubble.style.color = "white";

bubble.style.display = "flex";
bubble.style.alignItems = "center";
bubble.style.justifyContent = "center";

bubble.style.fontSize = "22px";
bubble.style.fontWeight = "bold";
bubble.style.fontFamily = "Arial, sans-serif";

bubble.style.cursor = "pointer";
bubble.style.zIndex = "99999";

bubble.style.boxShadow =
  "0 4px 15px rgba(0,0,0,.3)";

bubble.style.animation =
  "aiPulse 1.2s infinite";

// Create animation
const style = document.createElement("style");

style.innerHTML = `
@keyframes aiPulse {

  0% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.35;
    transform: scale(1.15);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }

}
`;

document.head.appendChild(style);

  // =========================
  // CHAT PANEL
  // =========================

  const panel = document.createElement("div");

  panel.style.position = "fixed";
  panel.style.bottom = "90px";
  panel.style.right = "20px";
  panel.style.width = "360px";
  panel.style.height = "520px";
  panel.style.background = "#ffffff";
  panel.style.border = "1px solid #ddd";
  panel.style.borderRadius = "12px";
  panel.style.display = "none";
  panel.style.zIndex = "99999";
  panel.style.boxShadow = "0 4px 20px rgba(0,0,0,.2)";
  panel.style.overflow = "hidden";

  panel.innerHTML = `
  <div style="
    background:#2563eb;
    color:white;
    padding:12px;
    font-weight:bold;
    font-size:16px;
  ">
    DeTLeng AI Assistant
  </div>

  <div id="chatMessages"
      style="
        height:360px;
        padding:12px;
        overflow-y:auto;
        font-size:14px;
        line-height:1.6;
      ">

    <div style="
        <div style="
    background:#f5f7ff;
    padding:10px;
    border-radius:8px;
    margin-bottom:10px;
">

👋 Welcome to DeTLeng.

<br><br>

We help businesses build reliable data foundations for reporting, analytics, automation, and business intelligence.

<br><br>

🌍 You can ask questions in any language.

<br><br>

Our Services:

<ul style="display:flex;flex-wrap:wrap;gap:10px 25px;">
<li>Data Engineering</li>
<li>ETL Development</li>
<li>Data Integration</li>
<li>Data Cleaning</li>
<li>SQL Development</li>
<li>BigQuery</li>
<li>Data Warehousing</li>
<li>Analytics Engineering</li>
<li>Reporting Automation</li>
<li>Power BI</li>
<li>Looker Studio</li>
<li>AI Business Assistants</li>
<li>Consulting</li>
<li>Case Studies</li>
</ul>

💬 Ask me anything about DeTLeng services, solution packages, case studies, or implementation approaches.

</div>

  </div>

  <div style="
      padding:10px;
      border-top:1px solid #ddd;
      display:flex;
      gap:8px;
  ">

    <input
      id="chatInput"
      type="text"
      placeholder="How can DeTLeng help your business?"
      style="
        flex:1;
        padding:8px;
        border:1px solid #ccc;
        border-radius:6px;
      "
    />

    <button
      id="sendBtn"
      style="
        padding:8px 12px;
        background:#2563eb;
        color:white;
        border:none;
        border-radius:6px;
        cursor:pointer;
      ">
      Ask AI
    </button>

  </div>
  `;

  // =========================
  // OPEN CLOSE
  // =========================

  bubble.onclick = () => {

    panel.style.display =
      panel.style.display === "none"
      ? "block"
      : "none";

  };

  document.body.appendChild(bubble);
  document.body.appendChild(panel);

  // =========================
  // CHAT LOGIC
  // =========================

function makeLinksClickable(text) {
  return text.replace(
    /(https?:\/\/[^\s<]+)/g,
    function(url) {

      const cleanUrl = url.replace(/[.,!?;:]+$/, '');

      return `<a href="${cleanUrl}" target="_blank"
        style="color:#2563eb;font-weight:bold;">
        ${cleanUrl}
      </a>`;
    }
  );
}

  setTimeout(() => {

    const sendBtn =
      document.getElementById("sendBtn");

    const chatInput =
      document.getElementById("chatInput");

    const chatMessages =
      document.getElementById("chatMessages");
      let chatHistory = [];

    sendBtn.onclick = async () => {

      const question = chatInput.value.trim();

      if (!question) return;

      chatMessages.innerHTML += `
        <div style="margin-top:10px;">
          <b>You:</b> ${question}
        </div>
      `;

      chatInput.value = "";

      try {

        const response = await fetch(
          "https://aapkaustaad-ai-backend.onrender.com/chat",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
               message: question,
               domain: window.location.origin,
               history: chatHistory
            })
          }
        );

        const data = await response.json();

const answer = data.answer || "";
        chatHistory.push({
    role: "user",
    content: question
});

chatHistory.push({
    role: "assistant",
    content: answer
});

chatMessages.innerHTML += `
  <div style="
    margin-top:10px;
    padding:8px;
    background:#f7f7f7;
    border-radius:8px;
  ">
    <b>DeTLeng:</b><br>
    ${makeLinksClickable(answer)}
  </div>
`;

if (data.whatsapp) {

  chatMessages.innerHTML += `
    <div style="margin-top:12px;">

      <a href="${data.whatsapp}"
         target="_blank"
         style="
            display:inline-block;
            background:#25D366;
            color:white;
            padding:10px 18px;
            border-radius:8px;
            text-decoration:none;
            font-weight:bold;
        ">

        📩 Request a Free Consultation

      </a>

    </div>
  `;

}

chatMessages.scrollTop = chatMessages.scrollHeight;
            
      

      } catch (err) {

        chatMessages.innerHTML += `
          <div style="
            color:red;
            margin-top:10px;
          ">
            Unable to connect to the DeTLeng AI service. Please try again later.
          </div>
        `;

      }

      chatMessages.scrollTop =
        chatMessages.scrollHeight;
    };

    chatInput.addEventListener(
      "keypress",
      function(e){

        if(e.key === "Enter"){
          sendBtn.click();
        }

      }
    );

  }, 500);

})();
