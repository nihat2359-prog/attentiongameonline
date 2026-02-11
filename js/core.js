const Game = {
    root: null,
    state: {},
    init(selector) {
        this.root = document.querySelector(selector);
        this.clear();
    },
    clear() {
        this.root.innerHTML = "";
    },
    shuffle(arr) {
        return arr.sort(() => Math.random() - 0.5);
    },
    el(tag, cls, text) {
        const e = document.createElement(tag);
        if (cls) e.className = cls;
        if (text) e.textContent = text;
        return e;
    }
};
Game.lang = (navigator.language || "en").startsWith("tr")
    ? "tr"
    : "en";

Game.texts = {
    en: {
        memoryTitle: "Memory Match",
        memorySub: "A simple game for kids",
        freeNote: "Free • No login • No data",
        tapThe: "Tap the"
    },
    tr: {
        memoryTitle: "Hafıza Oyunu",
        memorySub: "Çocuklar için basit bir oyun",
        freeNote: "Ücretsiz • Giriş yok • Veri yok",
        tapThe: "Dokun:"
    }
};

Game.t = function (key) {
    return Game.texts[this.lang][key] || key;
};

document.querySelector(".top h1").textContent =
    Game.t("memoryTitle");

document.querySelector(".subtitle").textContent =
    Game.t("memorySub");

document.querySelector(".bottom span").textContent =
    Game.t("freeNote");