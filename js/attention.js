Game.startAttention = function () {
    const symbols = ["⭐", "🔺", "⬜", "⚪", "🔵", "🟥"];

    Game.clear();

    const title = Game.el("div", "attention-title");
    const grid = Game.el("div", "grid");

    Game.root.append(title, grid);

    function render() {
        grid.innerHTML = "";

        const target = symbols[Math.floor(Math.random() * symbols.length)];
        //title.textContent = `Tap the ${target}`;
        title.textContent = `${Game.t("tapThe")} ${target}`;
        const items = Game.shuffle(
            Array(8).fill("⬜").concat(target)
        );

        items.forEach(sym => {
            const card = Game.el("div", "card", sym);
            card.onclick = () => {
                if (sym === target) render();
            };
            grid.appendChild(card);
        });
    }

    render();
};
