import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fullName: '',
    nationalID: '',
    createdAt: ''
}

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        createCustomer: {
            prepare(fullName, nationalID) {

                return {
                    payload: { fullName, nationalID, createdAt: new Date().toISOString() }
                }
            }
            ,
            reducer(state, action) {
                state.fullName = action.payload.fullName;
                state.nationalID = action.payload.nationalID;
                state.createdAt = action.payload.createdAt;
            }
        },
        updateName(state, action) {
            state.fullName = action.payload;
        }
    }
})


export default customerSlice.reducer
export const { createCustomer, updateName } = customerSlice.actions;



// export default function customerReducer(state = initialStateCustomer, action) {
//     switch (action.type) {
//         case 'customer/createCustomer':
//             return { ...state, fullName: action.payload.fullName, nationalID: action.payload.nationalID, createdAt: action.payload.createdAt }
//         case 'customer/updateName':
//             return { ...state, fullName: action.payload }
//         default:
//             return state
//     }
// }

// //===customer===//
// export function createCustomer(fullName, nationalID) {
//     //==== Note: date accessing is a side effect! so can't be found in the reducer function! ===//
//     return { type: 'customer/createCustomer', payload: { fullName, nationalID, createdAt: new Date().toISOString() } }
// }

// export function updateName(fullName) {
//     return { type: 'customer/updateName', payload: fullName }
// }
