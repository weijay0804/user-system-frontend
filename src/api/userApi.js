import { apiHelper } from "./apiHelper";

export const userApi = {

    fetchUser: async () => {
        return await apiHelper.get("users/me", {
            authRequired: true
        })
    }
}