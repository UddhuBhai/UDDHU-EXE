# ⚔️ UDDHU.EXE

A gamified **personal productivity dashboard** that turns everyday tasks into RPG-style quests.

Because apparently, doing your work is easier when your brain thinks you're grinding XP instead of completing responsibilities.

## 📖 About

**UDDHU.EXE** is a small full-stack web application that transforms daily tasks into quests.

You start as:

> **UDDHU — Professional Procrastinator**
> **Level 1 | 0 XP**

and complete quests to earn XP, level up, and slowly become a functional human being.

The dashboard keeps track of active quests, completed quests, total quests, completion percentage, player level, and XP progress.

## 🚀 Features

* ⚔️ Create custom quests
* 📝 Add quest descriptions
* 🎯 Choose quest types
* 🎨 Choose quest icons
* ⭐ Assign XP rewards
* ✅ Complete quests
* 📈 Earn XP from completed quests
* 🆙 Automatically level up
* 📊 Track productivity statistics
* 💾 Persistent data using JSON
* 🖥️ RPG-inspired dashboard UI

## 🎮 Quest System

Each quest contains:

* **Title**
* **Description**
* **Quest Type**
* **Icon**
* **XP Reward**
* **Completion Status**

The application currently supports:

* ⚔️ **MAIN QUEST**
* 💻 **SIDE QUEST**
* 🏃 **DAILY QUEST**

The create-quest page also lets you choose from different icons such as Sword, Computer, Running, Study, Brain, and Grind.

## 🆙 Leveling System

Completing a quest adds its XP reward to the player's total XP.

When the player's XP reaches the required amount, the application automatically:

1. Removes the required XP from the current XP.
2. Increases the player's level.
3. Calculates the XP requirement for the next level.

The current system scales the next-level requirement based on the player's level.

## 📊 Dashboard

The main dashboard displays:

* 👤 Player name and title
* 🆙 Current level
* ⭐ Current XP
* 📈 XP progress bar
* 📚 Total quests
* ✅ Completed quests
* ⚡ Active quests
* 📊 Completion rate
* ⚔️ Active quest cards

Each incomplete quest has a **COMPLETE** button, while completed quests are marked with a ✓.

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **EJS**
* **JavaScript**
* **HTML5**
* **CSS3**
* **JSON**

## 🎯 What I Practiced

* Creating a server using Express
* Working with EJS templates
* Handling GET and POST routes
* Reading and writing JSON files
* Processing form data
* Creating dynamic pages
* Managing application state
* Building an XP and leveling system
* Calculating dashboard statistics
* Creating a gamified UI

## ✨ Highlights

The fun part of this project is that it isn't just a traditional task manager.

It turns things like:

> **"Finish Java Unit 1"**

into:

> ⚔️ **MAIN QUEST**
> Finish Java Unit 1
> **+100 XP**

And because apparently even **running 5 KM** needs to become a quest, that works too.

## 📚 Learning Outcome

Through this project, I learned how to:

* Build a small full-stack application with Node.js and Express
* Connect HTML forms to backend routes
* Render dynamic data using EJS
* Store and update application data using JSON
* Build a basic progression and leveling system
* Calculate real-time dashboard statistics
* Turn a simple productivity idea into an interactive web application

## 🔮 Future Improvements

Some features I could add in the future:

* 🏆 Achievements and badges
* 🔥 Daily streaks
* 🪙 Coins and an in-game shop
* 🧙 Character classes
* 📅 Quest deadlines
* 🗓️ Recurring daily quests
* 📊 Productivity history
* 🎯 Difficulty-based XP
* 🔐 User authentication
* 🗄️ Database integration

## 🤝 Contributions

Feel free to fork the repository, experiment with the quest system, add new RPG mechanics, or completely break the productivity system in the name of science.

## ⭐ Support

If you liked **UDDHU.EXE**, consider giving the repository a **⭐ Star**.

It may not increase my XP, but it will definitely increase my motivation.
