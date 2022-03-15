export function getAccessToken() {
    let token = window.localStorage.getItem("TOKEN");
    token = JSON.parse(token);
    return token;
}

export function removeAccessToken() {
    window.localStorage.removeItem("TOKEN");
}

export function setAccessToken(data) {
    window.localStorage.setItem("TOKEN", JSON.stringify(data))
}