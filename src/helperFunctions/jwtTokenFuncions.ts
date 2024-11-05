export const saveJwtToken = (jwtToken: string) => {
    localStorage.setItem("jwtToken", jwtToken);
};

export const getJwtToken: () => string | null = () => {
    return localStorage.getItem("jwtToken");
};

export const isUserLoggedIn = () => {
    return localStorage.getItem("jwtToken") ? true : false;
};

export const removeJwtToken = () => {
    localStorage.removeItem("jwtToken");
};

export const getCurrentUsername: () => string | null = () => {
    const token = getJwtToken();

    if (token === null) return null;

    const parts = token.split(".");

    if (parts.length !== 3) return null;

    const payload = JSON.parse(atob(parts[1]));

    if (!payload || !payload.unique_name) return null;

    return payload.unique_name;
};
