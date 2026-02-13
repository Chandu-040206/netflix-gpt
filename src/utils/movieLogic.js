
export const genreMap = {
    action: 28,
    comedy: 35,
    horror: 27,
    romance: 10749,
    sci: 878,
    thriller: 53,
    animation: 16,
};

export const detectGenre = (text) => {
    text = text.toLowerCase();
    if (text.includes("sad")) return 18;
    if (text.includes("space")) return 878;
    if (text.includes("love")) return 10749;

    for (let key in genreMap) {
        if (text.includes(key)) {
            return genreMap[key];
        }
    }

    return 28; 
};
