// List of puns
const puns = [
    "What did one volcano say to the other? I lava you <3",
    "Do not take this website for granite",
    "My friend Phil swallowed a flashlight. Now he's a phyllite.",
    "If you're fishing for a long-nosed fish, be sure to bring your garnet!",
    "Geology rocks",
    "Why wasn't the geologist hungry? Because they lost their apatite",
    "Basalt is so hipster. It was magma before it was cool.",
    "Why did the fold get in trouble. It was caught rolling a joint.",
    "This joke is a clastic",
    "May the quartz be with you",
    "Please be patient with geologists. They all have their faults.",
    "Tectonic plates can't maintain relationships with each other. There's just too much friction",
    "I have to say, this website got off to a rocky start."
];

// Setup a list of random integers corresponding to each pun
const randomIndex = Math.floor(Math.random() * puns.length);

// ID for html script
const punElement = document.getElementById("refresh-pun");
if (punElement) {
    punElement.innerText = puns[randomIndex]; // Pick a random pun
} else {
    console.error("Could not find element with id 'refresh-pun'");
}
