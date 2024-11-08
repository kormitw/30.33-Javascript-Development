const arceusAnim = [
    {color: "white"},
    {color: "black"},
    {color: "white"},
];

const arceusTiming = {
    duration: 10000,
    iterations: Infinity,
};

document.getElementById("arceus-text").animate(arceusAnim, arceusTiming);

export {arceusAnim, arceusTiming};