
let token = localStorage.getItem("accessToken");
export const TokenExpiredOrNot = () => {
    try {
        let decodedJwt = JSON.parse(atob(token?.split('.')[1]));
        if (decodedJwt?.exp * 1000 > Date.now()) {
            return true
        }
        else {
            return false
        }
    } catch (e) {
        return null;
    }
};



