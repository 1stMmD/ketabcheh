import { create } from "zustand";
import { AccessTokenSlice , accessTokenSlice } from "./access-token-slice";

type StoreType = AccessTokenSlice

export const useAccessToken = create<StoreType>()((...e) => ({
    ...accessTokenSlice(...e)
}))