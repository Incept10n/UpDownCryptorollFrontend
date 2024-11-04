export const saveJwtToken = (jwtToken: string) => {
    localStorage.setItem("jwtToken", jwtToken);
};

export const getJwtToken: () => string | null = () => {
    return localStorage.getItem("jwtToken");
};
