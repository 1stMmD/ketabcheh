import { StateCreator } from "zustand";

export type AccessTokenSlice = {
    accessToken : string | null,
    setAccessToken : (new_tk : string) => void
}

export const accessTokenSlice : StateCreator<AccessTokenSlice> = (set) => ({
    accessToken : null,
    setAccessToken : (new_tk : string) => {
        set({accessToken : new_tk})
    }
})