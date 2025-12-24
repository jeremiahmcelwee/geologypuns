// List of puns
const puns = [
    "What did one volcano say to the other? I lava you <3",
    "Do not take this website for granite",
    "My friend Phil swallowed a flashlight. Now he's a phyllite.",
    "If you're fishing for a long-nosed fish, be sure to bring your garnet!",
    "Geology rocks"
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
