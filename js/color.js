Game.startColorMatch = function () {
    const colors = [
        { value: "#ef4444", labels: { en: "Red", tr: "Kırmızı" } },
        { value: "#3b82f6", labels: { en: "Blue", tr: "Mavi" } },
        { value: "#22c55e", labels: { en: "Green", tr: "Yeşil" } },
        { value: "#eab308", labels: { en: "Yellow", tr: "Sarı" } },
        { value: "#a855f7", labels: { en: "Purple", tr: "Mor" } },
        { value: "#f97316", labels: { en: "Orange", tr: "Turuncu" } }
    ];

    Game.clear();

    const target = Game.el("div", "color-target");
    const grid = Game.el("div", "grid");

    Game.root.append(target, grid);

    function nextRound() {
        grid.innerHTML = "";

        // ✅ doğru rengi bağımsız seç
        const correct =
            colors[Math.floor(Math.random() * colors.length)];

        // hedef metni
        target.textContent =
            correct.labels[Game.lang] || correct.labels.en;
        target.style.color = correct.value;

        // ✅ grid için ayrı shuffle
        const displayColors = Game.shuffle([...colors]);

        displayColors.forEach(c => {
            const card = Game.el("div", "card");
            card.style.background = c.value;

            card.onclick = () => {
                if (c === correct) {
                    nextRound();
                }
            };

            grid.appendChild(card);
        });
    }

    nextRound();
};
