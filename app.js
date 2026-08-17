const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({
    extended: true
}));

function getQuests() {
    return JSON.parse(
        fs.readFileSync("./data/quests.json", "utf-8")
    );
}


function getPlayer() {
    return JSON.parse(
        fs.readFileSync("./data/player.json", "utf-8")
    );
}


function saveQuests(quests) {
    fs.writeFileSync(
        "./data/quests.json",
        JSON.stringify(quests, null, 4)
    );
}


function savePlayer(player) {
    fs.writeFileSync(
        "./data/player.json",
        JSON.stringify(player, null, 4)
    );
}

app.get("/", (req, res) => {

    const quests = getQuests();
    const player = getPlayer();

    const totalQuests = quests.length;

    const completedQuests = quests.filter(
        quest => quest.completed
    ).length;

    const activeQuests = totalQuests - completedQuests;

    let completionRate = 0;

    if (totalQuests > 0) {
        completionRate = Math.round(
            (completedQuests / totalQuests) * 100
        );
    }

    const stats = {
        totalQuests,
        completedQuests,
        activeQuests,
        completionRate
    };

    res.render("index", {
        quests,
        player,
        stats
    });

});

app.get("/quests/create", (req, res) => {
    res.render("create-quest");
});

app.post("/quests/create", (req, res) => {

    const quests = getQuests();

    const newQuest = {
        id: Date.now(),
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        icon: req.body.icon,
        xp: parseInt(req.body.xp),
        completed: false
    };

    quests.push(newQuest);

    saveQuests(quests);

    res.redirect("/");

});

app.post("/quests/:id/complete", (req, res) => {

    const quests = getQuests();
    const player = getPlayer();

    const questId = parseInt(req.params.id);

    const quest = quests.find(
        quest => quest.id === questId
    );

    if (!quest) {
        return res.redirect("/");
    }

    if (quest.completed) {
        return res.redirect("/");
    }

    quest.completed = true;

    player.xp += quest.xp;

    while (player.xp >= player.xpToNextLevel) {

        player.xp -= player.xpToNextLevel;

        player.level += 1;

        player.xpToNextLevel = player.level * 100;

    }

    saveQuests(quests);
    savePlayer(player);

    res.redirect("/");

});

app.listen(PORT, () => {
    console.log(
        `UDDHU.EXE is running on http://localhost:${PORT}`
    );
});