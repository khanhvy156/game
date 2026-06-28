
let player = "";
let code = "";
let score = 0;
let hp = 100;
let combo = 0;
let maxCombo = 0;
let currentIndex = 0;
let runQuestions = [];
let answered = 0;
let correctCount = 0;
let wrongCount = 0;
let skippedCount = 0;
let timer = null;
let timeLeft = 20;
let soundEnabled = true;
let evidenceUnlocked = [];

const SOUND_FILES = {
  typing: "assets/sounds/typing.wav",
  click: "assets/sounds/click.wav",
  ok: "assets/sounds/success.wav",
  bad: "assets/sounds/wrong.wav",
  timeout: "assets/sounds/timeout.wav",
  win: "assets/sounds/win.wav",
  boot: "assets/sounds/boot.wav",
  alarm: "assets/sounds/alarm.wav"
};
const soundPool = {};
function initSounds(){
  Object.entries(SOUND_FILES).forEach(([key, src])=>{
    soundPool[key] = [];
    for(let i=0;i<6;i++){
      const a = new Audio(src);
      a.preload = "auto";
      a.volume = key==="typing" ? 0.38 : 0.62;
      soundPool[key].push(a);
    }
  });
}
initSounds();

function playSound(name){
  if(!soundEnabled) return;
  const pool = soundPool[name] || soundPool.click;
  const audio = pool.find(a=>a.paused) || pool[0];
  try{
    audio.currentTime = 0;
    audio.play();
  }catch(e){}
}


const screens = ["intro","boot","login","story","game","ending"];

function showScreen(id){
  screens.forEach(s=>document.getElementById(s).classList.remove("active"));
  document.getElementById(id).classList.add("active");
}


const SOUND_PATHS = {
  click: "assets/sounds/click.wav",
  ok: "assets/sounds/success.wav",
  bad: "assets/sounds/wrong.wav",
  timeout: "assets/sounds/timeout.wav",
  win: "assets/sounds/win.wav",
  boot: "assets/sounds/boot.wav",
  alarm: "assets/sounds/alarm.wav",
  complete: "assets/sounds/complete.wav",
  typing: "assets/sounds/typing.wav"
};

const SOUND_POOL = {};
function loadSounds(){
  Object.entries(SOUND_PATHS).forEach(([key,path])=>{
    SOUND_POOL[key] = [];
    for(let i=0;i<6;i++){
      const a = new Audio(path);
      a.preload = "auto";
      a.volume = key==="typing" ? 0.28 : 0.75;
      SOUND_POOL[key].push(a);
    }
  });
}

function playSound(key){
  if(!soundEnabled) return;
  const pool = SOUND_POOL[key];
  if(!pool) return;
  const audio = pool.find(a=>a.paused || a.ended) || pool[0].cloneNode(true);
  try{
    audio.currentTime = 0;
    audio.play().catch(()=>{});
  }catch(e){}
}

function beep(type="click"){
  playSound(type);
}

function typeTick(){
  playSound("typing");
}

loadSounds();

function unlockAudio(){
  Object.values(SOUND_POOL).flat().forEach(a=>{
    try{
      a.muted = true;
      a.play().then(()=>{a.pause(); a.currentTime=0; a.muted=false;}).catch(()=>{a.muted=false;});
    }catch(e){}
  });
  document.removeEventListener("click", unlockAudio);
  document.removeEventListener("keydown", unlockAudio);
}
document.addEventListener("click", unlockAudio);
document.addEventListener("keydown", unlockAudio);


document.body.insertAdjacentHTML("beforeend", `<button class="ghost sound-toggle" onclick="toggleSound()">🔊 Âm thanh</button>`);
function toggleSound(){
  soundEnabled=!soundEnabled;
  document.querySelector(".sound-toggle").textContent = soundEnabled ? "🔊 Âm thanh" : "🔇 Tắt âm";
  beep("click");
}

function bootSystem(){
  beep("boot");
  showScreen("boot");
  const lines = [
    "Initializing secure channel...",
    "Loading VAA incident database...",
    "Decrypting ShadowFox case archive...",
    "Checking leaderboard cache...",
    "Audio module: READY",
    "Question bank: 100 records loaded",
    "Access granted."
  ];
  let i=0, p=0;
  const box=document.getElementById("bootText");
  box.textContent="";
  const int=setInterval(()=>{
    box.textContent += "[SYSTEM] " + lines[i] + "\n";
    p += Math.ceil(100/lines.length);
    document.getElementById("bootBar").style.width=Math.min(p,100)+"%";
    beep("boot");
    i++;
    if(i>=lines.length){
      clearInterval(int);
      setTimeout(()=>showScreen("login"),650);
    }
  },450);
}

function createAgent(){
  player = document.getElementById("playerName").value.trim() || "Điều tra viên ẩn danh";
  code = "SOC-" + Math.floor(1000 + Math.random()*9000);
  showScreen("story");
  typeStory();
}

function typeStory(){
  beep("alarm");
  const text = `Xin chào ${player}.\nMã điều tra viên của bạn là ${code}.\n\n00:13, trung tâm SOC nhận được cảnh báo bất thường. Website trường bị quét liên tục, email giả mạo lan trong hộp thư sinh viên, một máy trong phòng lab có dấu hiệu mã độc.\n\nBiệt danh ShadowFox xuất hiện trong log bị xóa dở. Hắn đang thử mở đường vào cơ sở dữ liệu.\n\nBạn có 15 hồ sơ cần xử lý. Mỗi hồ sơ chỉ có 20 giây. Nếu bỏ qua, hồ sơ đó sẽ bị khóa và không hiện lại trong lượt chơi.`;
  const box=document.getElementById("storyText");
  box.textContent="";
  document.getElementById("storyBtn").classList.add("hidden");
  let i=0;
  let tickCount = 0;
  const int=setInterval(()=>{
    const ch = text.charAt(i++);
    box.textContent += ch;
    if(ch && ch !== " " && ch !== "\n"){
      tickCount++;
      if(tickCount % 3 === 0) typeTick();
    }
    if(i>text.length){
      clearInterval(int);
      beep("ok");
      document.getElementById("storyBtn").classList.remove("hidden");
    }
  },22);
}

function shuffle(arr){
  return arr.map(x=>[Math.random(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
}

function startRun(){
  score=0; hp=100; combo=0; maxCombo=0; currentIndex=0;
  answered=0; correctCount=0; wrongCount=0; skippedCount=0; evidenceUnlocked=[];
  const easy=shuffle(QUESTION_BANK.filter(q=>q.diff==="DỄ")).slice(0,4);
  const mid=shuffle(QUESTION_BANK.filter(q=>q.diff==="TRUNG BÌNH")).slice(0,6);
  const hard=shuffle(QUESTION_BANK.filter(q=>q.diff==="KHÓ")).slice(0,5);
  runQuestions=shuffle([...easy,...mid,...hard]);
  showScreen("game");
  renderQuestion();
}

function rankName(s){
  if(s>=330) return "👑 Cyber Legend";
  if(s>=280) return "💎 Cyber Guardian";
  if(s>=220) return "🥇 Incident Responder";
  if(s>=160) return "🥈 SOC Analyst";
  if(s>=90) return "🏅 Junior Analyst";
  return "🧩 Intern";
}

function updateHud(){
  document.getElementById("hudName").textContent=player;
  document.getElementById("hudCode").textContent=code;
  document.getElementById("hudScore").textContent=score;
  document.getElementById("hudRank").textContent=rankName(score);
  document.getElementById("hudProgress").textContent=`${Math.min(currentIndex+1,15)}/15`;
  document.getElementById("hpFill").style.width=Math.max(0,hp)+"%";
  document.getElementById("xpFill").style.width=Math.min(100,score/350*100)+"%";
  document.getElementById("comboBox").textContent="x"+combo;
}

function renderQuestion(){
  clearInterval(timer);
  if(currentIndex>=runQuestions.length || hp<=0){ finishGame(); return; }
  const q=runQuestions[currentIndex];
  updateHud();
  const html = `
    <div class="case-title">
      <h2>CASE ${String(currentIndex+1).padStart(2,"0")} — ${q.case}</h2>
      <span class="badge">${q.diff}</span><span class="badge">${q.tag}</span>
    </div>
    <div class="timer">⏳ <span id="timerText">20</span>s</div>
    <h3>📌 Bằng chứng</h3>
    <div class="evidence">${q.exp}</div>
    <div class="question-box">
      <h3>❓ Câu hỏi điều tra</h3>
      <p>${q.q}</p>
      <div id="answers">
        ${q.a.map((ans,i)=>`<button class="answer" onclick="chooseAnswer(${i})">${String.fromCharCode(65+i)}. ${ans}</button>`).join("")}
      </div>
      <div id="notice"></div>
    </div>
  `;
  document.getElementById("gameMain").innerHTML=html;
  startTimer();
}

function startTimer(){
  timeLeft=20;
  document.getElementById("timerText").textContent=timeLeft;
  timer=setInterval(()=>{
    timeLeft--;
    const t=document.getElementById("timerText");
    if(t){
      t.textContent=timeLeft;
      if(timeLeft<=5){ t.style.color="var(--red)"; if(timeLeft===5) beep("alarm"); }
    }
    if(timeLeft<=0){
      clearInterval(timer);
      timeoutQuestion();
    }
  },1000);
}

function lockAnswers(){
  document.querySelectorAll(".answer").forEach(b=>b.disabled=true);
}

function chooseAnswer(i){
  clearInterval(timer);
  lockAnswers();
  const q=runQuestions[currentIndex];
  const notice=document.getElementById("notice");
  answered++;
  if(i===q.c){
    correctCount++;
    combo++;
    maxCombo=Math.max(maxCombo,combo);
    let base=q.diff==="KHÓ"?25:q.diff==="TRUNG BÌNH"?18:12;
    let timeBonus = timeLeft>=10 ? 5 : 0;
    let comboBonus = combo>=3 ? 8 : 0;
    let gain=base+timeBonus+comboBonus;
    score+=gain;
    evidenceUnlocked.push(q.tag);
    beep("ok");
    notice.innerHTML=`<div class="notice good">✅ Chính xác! +${gain} điểm<br>${q.tip}<br>${combo>=3?"🔥 Combo bonus đang kích hoạt!<br>":""}<br><button class="primary" onclick="nextQuestion()">ĐI TIẾP</button></div>`;
  }else{
    wrongCount++;
    combo=0;
    hp-=15;
    beep("bad");
    notice.innerHTML=`<div class="notice bad">❌ Sai rồi. Server HP -15<br>${q.tip}<br><br><button class="primary" onclick="nextQuestion()">ĐI TIẾP</button></div>`;
  }
  updateHud();
}

function timeoutQuestion(){
  lockAnswers();
  skippedCount++;
  combo=0;
  hp-=10;
  beep("timeout");
  document.getElementById("notice").innerHTML=`<div class="notice bad">⏰ Hết thời gian! Hồ sơ bị khóa và không hiện lại trong lượt này. Server HP -10<br><br><button class="primary" onclick="nextQuestion()">ĐI TIẾP</button></div>`;
  updateHud();
}

function nextQuestion(){
  currentIndex++;
  renderQuestion();
}

function renderDashboard(){
  clearInterval(timer);
  updateHud();
  document.getElementById("gameMain").innerHTML=`
    <div class="case-title"><h2>DASHBOARD ĐIỀU TRA</h2><span class="badge">LIVE STATUS</span></div>
    <div class="dashboard-grid">
      <div class="tile"><span>Đã xử lý</span><br><b>${answered}</b>/15</div>
      <div class="tile"><span>Đúng</span><br><b>${correctCount}</b></div>
      <div class="tile"><span>Sai</span><br><b>${wrongCount}</b></div>
      <div class="tile"><span>Bỏ qua/Hết giờ</span><br><b>${skippedCount}</b></div>
      <div class="tile"><span>Combo cao nhất</span><br><b>${maxCombo}</b></div>
      <div class="tile"><span>Server HP</span><br><b>${Math.max(0,hp)}%</b></div>
    </div>
    <br><button class="primary" onclick="renderQuestion()">TIẾP TỤC HỒ SƠ</button>
  `;
}

function renderEvidence(){
  clearInterval(timer);
  const unique=[...new Set(evidenceUnlocked)];
  document.getElementById("gameMain").innerHTML=`
    <div class="case-title"><h2>KHO BẰNG CHỨNG</h2><span class="badge">EVIDENCE VAULT</span></div>
    <p>Các chủ đề bạn đã xử lý đúng sẽ được mở khóa tại đây.</p>
    ${unique.length?unique.map(x=>`<div class="achievement">🔓 ${x}</div>`).join(""):"<div class='evidence'>Chưa có bằng chứng nào được mở khóa.</div>"}
    <br><button class="primary" onclick="renderQuestion()">TIẾP TỤC HỒ SƠ</button>
  `;
}

function leaderboard(){
  return JSON.parse(localStorage.getItem("cyberCaseV2Board")||"[]");
}

function saveScore(){
  const board=leaderboard();
  board.push({name:player,code,score,rank:rankName(score),date:new Date().toLocaleString("vi-VN"),correct:correctCount});
  board.sort((a,b)=>b.score-a.score);
  localStorage.setItem("cyberCaseV2Board",JSON.stringify(board.slice(0,20)));
}

function renderLeaderboard(){
  clearInterval(timer);
  const board=leaderboard();
  let rows=board.slice(0,10).map((x,i)=>`
    <div class="leader-row">
      <span class="num">${i===0?"👑":i+1}</span>
      <span><b>${x.name}</b><br><small>${x.date} • ${x.code || ""}</small></span>
      <span><b>${x.score}</b></span>
      <span>${x.rank}</span>
    </div>`).join("");
  document.getElementById("gameMain").innerHTML=`
    <div class="leader-wrap">
      <div class="case-title">
        <div>
          <h2>HALL OF FAME — BẢNG XẾP HẠNG</h2>
          <span class="badge">TOP 10 ĐIỀU TRA VIÊN</span>
        </div>
      </div>
      <p class="evidence">Điểm được lưu bằng LocalStorage trên máy/trình duyệt đang mở game. Khi bạn gửi thư mục game cho người khác chơi trên <b>cùng máy này</b>, bảng xếp hạng vẫn còn. Nếu chơi ở máy khác thì cần dùng cùng file nhưng bảng xếp hạng sẽ là dữ liệu của máy đó.</p>
      ${rows || "<div class='evidence'>Chưa có người chơi nào. Hãy bắt đầu lượt điều tra đầu tiên.</div>"}
      <div class="leader-actions">
        <button class="primary" onclick="newPlayer()">👤 ĐĂNG NHẬP NGƯỜI CHƠI KHÁC</button>
        <button class="ghost" onclick="showScreen('intro')">🏠 MÀN HÌNH CHÍNH</button>
        ${currentIndex < runQuestions.length && runQuestions.length ? '<button class="ghost" onclick="renderQuestion()">▶ TIẾP TỤC LƯỢT HIỆN TẠI</button>' : ''}
      </div>
    </div>
  `;
}
function openHallFromIntro(){
  player="Khách";
  code="SOC-GUEST";
  showScreen("game");
  updateHud();
  renderLeaderboard();
}

function newPlayer(){
  clearInterval(timer);
  document.getElementById("playerName").value="";
  showScreen("login");
}

function finishGame(){
  clearInterval(timer);
  saveScore();
  beep(hp>0?"win":"bad");
  showScreen("game");
  updateHud();
  const finalRank = rankName(score);
  const achievements=[];
  if(correctCount>=10) achievements.push("🏆 Phishing Hunter");
  if(maxCombo>=5) achievements.push("🔥 Combo Master");
  if(score>=250) achievements.push("💎 Cyber Guardian");
  if(hp>=70) achievements.push("🛡 Server Protector");
  const achText = achievements.length ? achievements.join(" • ") : "🧩 Case Starter";
  const board=leaderboard();
  let rows=board.slice(0,10).map((x,i)=>`
    <div class="leader-row">
      <span class="num">${i===0?"👑":i+1}</span>
      <span><b>${x.name}</b><br><small>${x.date} • ${x.code || ""}</small></span>
      <span><b>${x.score}</b></span>
      <span>${x.rank}</span>
    </div>`).join("");
  document.getElementById("gameMain").innerHTML=`
    <div class="leader-wrap">
      <div class="case-title">
        <div>
          <h2>CASE CLOSED — ĐÃ LƯU ĐIỂM</h2>
          <span class="badge">${finalRank}</span>
          <span class="badge">Đúng ${correctCount}/15</span>
          <span class="badge">Combo cao nhất x${maxCombo}</span>
        </div>
      </div>
      <div class="dashboard-grid">
        <div class="tile"><span>Điều tra viên</span><br><b style="font-size:22px">${player}</b></div>
        <div class="tile"><span>Điểm</span><br><b>${score}</b></div>
        <div class="tile"><span>Server HP</span><br><b>${Math.max(0,hp)}%</b></div>
      </div>
      <div class="achievement">${achText}</div>
      <h2 style="color:var(--gold)">HALL OF FAME</h2>
      ${rows || ""}
      <div class="leader-actions">
        <button class="primary" onclick="newPlayer()">👤 ĐĂNG NHẬP NGƯỜI CHƠI KHÁC</button>
        <button class="ghost" onclick="showScreen('intro')">🏠 MÀN HÌNH CHÍNH</button>
      </div>
      <p class="evidence">Lưu ý: Bảng xếp hạng lưu trên <b>cùng máy/cùng trình duyệt</b>. Nếu gửi game cho bạn khác chơi trên máy khác thì dữ liệu xếp hạng sẽ không tự đồng bộ vì game này không dùng server.</p>
    </div>
  `;
}

document.addEventListener("click", function(e){
  if(e.target && e.target.tagName === "BUTTON"){
    playSound("click");
  }
});
