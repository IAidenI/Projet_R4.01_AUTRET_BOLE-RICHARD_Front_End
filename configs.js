const API_URLS = {
    LOGIN: "https://autret-bole-richard-authapi.alwaysdata.net/",
    GESTION_SPORT: "https://autret-bole-richard-backend.alwaysdata.net/"
}

function checkToken() {
    const token = sessionStorage.getItem("token");

    if (!token) {
        window.location.href = "./Connection.html";
        return null;
    }
    return token;
}

export { API_URLS };
export { checkToken };