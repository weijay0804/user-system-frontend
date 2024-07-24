import { apiHelper } from "./apiHelper";

export const authApi = {

    login: async (data) => {

        return await apiHelper.postForm("/auth/login", data)
    },

    signUp: async (data) => {
        return await apiHelper.post("/users", data)
    },

    accountVerify: async (data) => {

        return await apiHelper.post("/auth/verifiy", data)
    }

}