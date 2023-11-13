export function splitAndStoreToken(token) {

    const tokenPart2 = token.slice(token.length / 2);

    localStorage.setItem("secure_token_part2", encodeURIComponent(tokenPart2));
}

export function combineStoredToken() {
    const cookies = document.cookie.split(";");

    let tokenPart1 = null;
    let tokenPart2 = localStorage.getItem("secure_token_part2");

    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split("=");
        if (name === "secure_token_part1") {
            tokenPart1 = decodeURIComponent(value);
            break;
        }
    }

    if (!tokenPart1 || !tokenPart2) {
        return null;
    }

    const completeToken = tokenPart1 + decodeURIComponent(tokenPart2);

    return completeToken;
}

export function clearStoredToken() {
    
    localStorage.removeItem("secure_token_part2");
}
