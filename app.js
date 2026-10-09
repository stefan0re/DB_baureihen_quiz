(() => {
  "use strict";

  const STORAGE_KEY = "zugquiz.game";
  const MAX_LIVES = 3;

  const $ = (id) => document.getElementById(id);
  const screens = { start: $("start"), quiz: $("quiz"), finish: $("finish") };
  const startBtn = $("start-btn");
  const resetBtn = $("reset-btn");
  const restartBtn = $("restart-btn");
  const cardInner = $("card-inner");
  const trainImage = $("train-image");
  const backTitle = $("back-title");
  const backText = $("back-text");
  const feedback = $("feedback");
  const form = $("answer-form");
  const input = $("answer");
  const actionBtn = $("action-btn");
  const progressText = $("progress-text");
  const progressBar = $("progress-bar");
  const livesEl = $("lives");

  // Tastatur nur auf Geräten mit Maus/Trackpad automatisch fokussieren,
  // auf dem Handy würde sie sonst das Bild verdecken.
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

  // order: zufällige Reihenfolge der Züge (Indizes in TRAINS) für die aktuelle Runde
  // step:  wie viele Züge dieser Runde schon richtig erkannt wurden
  // lives: verbleibende Leben; jeder Fehler kostet eins, bei 0 geht es von vorne los
  // mode:  "guess" (Antwort eingeben), "solved" (richtig → Weiter), "lost" (keine Leben → von vorne)
  let { order, step, lives } = loadGame() || newGame();
  let mode = "guess";

  // ---------- Runde ----------

  function shuffledOrder() {
    const a = TRAINS.map((_, i) => i);
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function newGame() {
    return { order: shuffledOrder(), step: 0, lives: MAX_LIVES };
  }

  const currentTrain = () => TRAINS[order[step]];

  // ---------- Speicher (Fortschritt bleibt beim Neuladen erhalten) ----------

  function loadGame() {
    try {
      const g = JSON.parse(localStorage.getItem(STORAGE_KEY));
      // Nur übernehmen, wenn die gespeicherte Reihenfolge noch zu trains.js passt
      const valid =
        g && Array.isArray(g.order) && g.order.length === TRAINS.length &&
        [...g.order].sort((a, b) => a - b).every((v, i) => v === i) &&
        Number.isInteger(g.step) && g.step >= 0 && g.step < TRAINS.length &&
        Number.isInteger(g.lives) && g.lives >= 1 && g.lives <= MAX_LIVES;
      return valid ? { order: g.order, step: g.step, lives: g.lives } : null;
    } catch {
      return null;
    }
  }

  function saveGame() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ order, step, lives }));
    } catch {
      /* z. B. privater Modus – dann eben ohne Speichern */
    }
  }

  // ---------- Bildschirme ----------

  function show(name) {
    for (const [key, el] of Object.entries(screens)) el.hidden = key !== name;
    window.scrollTo(0, 0);
  }

  function renderStart() {
    const resuming = step > 0;
    startBtn.textContent = resuming ? `Weiter mit Zug ${step + 1}` : "Start";
    resetBtn.hidden = !resuming;
    show("start");
  }

  function renderTrain() {
    mode = "guess";

    // Karte ohne Rückwärts-Animation wieder auf die Vorderseite stellen
    cardInner.classList.add("no-anim");
    cardInner.classList.remove("flipped");
    void cardInner.offsetWidth;
    cardInner.classList.remove("no-anim");
    trainImage.src = currentTrain().image;
    backTitle.textContent = "";
    backText.replaceChildren();

    feedback.textContent = "";
    feedback.className = "feedback";
    input.value = "";
    input.disabled = false;
    input.classList.remove("shake", "wrong");
    actionBtn.textContent = "Prüfen";
    actionBtn.disabled = true;

    renderLives();
    progressText.textContent = `${step + 1} / ${TRAINS.length}`;
    progressBar.style.width = `${(step / TRAINS.length) * 100}%`;

    preload(TRAINS[order[step + 1]]);
    show("quiz");
    if (hasFinePointer) input.focus({ preventScroll: true });
  }

  function renderLives(justLost = false) {
    [...livesEl.children].forEach((el, i) => {
      el.classList.toggle("lost", i >= lives);
      el.classList.remove("pop");
      if (justLost && i === lives) {
        void el.offsetWidth; // Animation neu starten
        el.classList.add("pop");
      }
    });
    livesEl.setAttribute("aria-label", `${lives} Leben übrig`);
  }

  function preload(train) {
    if (train) new Image().src = train.image;
  }

  function revealCard(title, train) {
    backTitle.textContent = title;
    backText.replaceChildren(
      ...train.info.split("\n").filter(Boolean).map((line) => {
        const p = document.createElement("p");
        p.textContent = line;
        return p;
      })
    );
    cardInner.classList.add("flipped");
  }

  function lockInput(buttonLabel) {
    input.disabled = true;
    actionBtn.textContent = buttonLabel;
    actionBtn.disabled = false;
    input.blur();
    if (hasFinePointer) actionBtn.focus({ preventScroll: true });
  }

  // ---------- Spiellogik ----------

  function submit() {
    const answer = input.value.replace(/\D/g, "").slice(0, 3);
    input.value = answer;
    if (!answer) return;

    const train = currentTrain();
    if (answer === train.typeNumber) {
      mode = "solved";
      revealCard(`Baureihe ${train.typeNumber}`, train);
      feedback.textContent = "✅ Richtig!";
      feedback.className = "feedback ok";
      progressBar.style.width = `${((step + 1) / TRAINS.length) * 100}%`;
      lockInput("Weiter");
    } else {
      lives -= 1;
      renderLives(true);
      shakeInput();
      if (navigator.vibrate) navigator.vibrate(lives > 0 ? 80 : [80, 60, 160]);

      if (lives > 0) {
        // Noch Leben übrig: gleicher Zug, neuer Versuch
        saveGame();
        feedback.textContent =
          `❌ Falsch – noch ${lives} Leben, versuch es nochmal`;
        feedback.className = "feedback bad";
        input.select();
        return;
      }

      // Keine Leben mehr: Runde ist vorbei, die nächste beginnt neu gemischt bei Zug 1
      mode = "lost";
      const reached = step;
      ({ order, step, lives } = newGame());
      saveGame();

      revealCard(`Richtig wäre: Baureihe ${train.typeNumber}`, train);
      feedback.textContent =
        `💥 Keine Leben mehr – zurück auf Anfang! (${reached} von ${TRAINS.length} geschafft)`;
      feedback.className = "feedback bad";
      input.classList.add("wrong");
      lockInput("Nochmal von vorne");
    }
  }

  function shakeInput() {
    // Animation neu starten, auch wenn die Klasse noch gesetzt ist
    input.classList.remove("shake");
    void input.offsetWidth;
    input.classList.add("shake");
  }

  function nextTrain() {
    if (step + 1 >= TRAINS.length) {
      ({ order, step, lives } = newGame());
      saveGame();
      show("finish");
      restartBtn.focus({ preventScroll: true });
    } else {
      step += 1;
      saveGame();
      renderTrain();
    }
  }

  function restart() {
    ({ order, step, lives } = newGame());
    saveGame();
    renderTrain();
  }

  // ---------- Events ----------

  startBtn.addEventListener("click", () => {
    saveGame();
    renderTrain();
  });
  resetBtn.addEventListener("click", restart);
  restartBtn.addEventListener("click", restart);

  input.addEventListener("input", () => {
    const cleaned = input.value.replace(/\D/g, "").slice(0, 3);
    if (cleaned !== input.value) input.value = cleaned;
    actionBtn.disabled = cleaned === "";
    input.classList.remove("shake");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (mode === "solved") nextTrain();
    else if (mode === "lost") renderTrain(); // neue Runde ist schon gemischt
    else submit();
  });

  // ---------- Start ----------

  preload(currentTrain());
  renderStart();

  // Offline-Unterstützung / "Zum Home-Bildschirm" (nur über http(s), nicht file://)
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
})();
