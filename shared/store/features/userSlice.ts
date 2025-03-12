import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface UserState {
    user: {
        id: number | null;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }
}

const initialState: UserState = {
    user: {
        id: null,
        email: "",
        password: "",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        }
    },
})


export const { addUser } = userSlice.actions
export default userSlice.reducer