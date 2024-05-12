import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
    isLoading: false
};

//===========================================Redux toolkit ========================================//
//gold => we only change what we need to change, so you don't return the entire state when no changes contion is met, master this and you are ready to go! 
//it transform the general reducer to a slice function
//in there will be small reducers
//these reducers will also work as the actions creators
//gold => we only change what we need to change, so you don't return the entire state when no changes contion is met, master this and you are ready to go! 
const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        deposit(state, action) {
            state.balance += action.payload;
            state.isLoading = false;
        },
        withdraw(state, action) {
            state.balance -= action.payload
        },
        requestLoan: {
            //gold => we only change what we need to change, so you don't return the entire state when no changes contion is met, master this and you are ready to go!
            //gold 2 => we can prepare the payload, so create logic that handle the payload passed to the action creator

            prepare(amount, purpose) {
                return { payload: { amount, purpose } }
            },

            reducer(state, action) {
                if (state.loan > 0) return;
                state.loan = action.payload.amount; state.loanPurpose = action.payload.purpose;
                state.balance = state.balance + action.payload.amount
            }
        },
        payLoan(state) {
            state.balance -= state.loan;
            state.loan = 0;
            state.loanPurpose = '';
        },
        converting(state) {
            state.isLoading = true;
        }
    }
})

console.log(accountSlice.actions);

export default accountSlice.reducer
console.log(accountSlice.reducer);

export const { withdraw, requestLoan, payLoan } = accountSlice.actions


export function deposit(amount, currency) {
    if (currency === "USD")
        return { type: 'account/deposit', payload: amount };
    return function (dispatch, getState) {
        const host = 'api.frankfurter.app';
        dispatch({ type: 'account/converting' });
        fetch(`https://${host}/latest?amount=${amount}&from=${currency}&to=USD`)
            .then(res => res.json())
            .then((data) => {
                dispatch({ type: 'account/deposit', payload: data.rates.USD })
            });

    }
}

//==================== Our lovely reducer ====================//
// export default function accountReducer(state = initialStateAccount, action) {
//     switch (action.type) {
//         //
//         case 'account/deposit':
//             return { ...state, balance: state.balance + action.payload, isLoading: false }
//         case 'account/withdraw':
//             return { ...state, balance: state.balance - action.payload }
//         case 'account/requestLoan':
//             return state.loan > 0 ? state :
//                 { ...state, loan: action.payload.amount, loanPurpose: action.payload.puspose, balance: state.balance + action.payload.amount }
//         case 'account/payLoan':
//             return { ...state, balance: state.balance - state.loan, loan: 0, loanPurpose: '' }
//         case 'account/converting':
//             return {
//                 ...state, isLoading: true
//             }

//         default:
//             return state
//     }
// }

// //======account======//


// }
// export function withdraw(amount) {
//     return { type: 'account/withdraw', payload: amount }
// }
// export function requestLoan(amount, puspose) {
//     return { type: 'account/requestLoan', payload: { amount, puspose } }
// }
// export function payLoan() {
//     return { type: 'account/payLoan' }
// }
