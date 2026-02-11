Game.startMemory = function () {
    const symbols = ["🍎", "🍌", "🍇", "🍓", "🍊", "🍉"];
    const cards = Game.shuffle([...symbols, ...symbols]);
    let first = null;
    let lock = false;

    const grid = Game.el("div", "grid");

    cards.forEach(symbol => {
        const card = Game.el("div", "card");
        card.dataset.value = symbol;

        card.onclick = () => {
            if (lock || card.classList.contains("open")) return;

            card.textContent = symbol;
            card.classList.add("open");

            if (!first) {
                first = card;
            } else {
                lock = true;
                if (first.dataset.value === card.dataset.value) {
                    first = null;
                    lock = false;
                } else {
                    setTimeout(() => {
                        first.textContent = "";
                        card.textContent = "";
                        first.classList.remove("open");
                        card.classList.remove("open");
                        first = null;
                        lock = false;
                    }, 600);
                }
            }
        };

        grid.appendChild(card);
    });

    Game.root.appendChild(grid);
};
