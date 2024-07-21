import { createSlice } from '@reduxjs/toolkit';
import { getInvoiceLines, getInvoices, getProducts, getUser } from './InvoiceAPI';

const initialState = {
    user: {},
    invoices: [],
    invoiceLines: [],
    products: [],
}


export const inviceSlice = createSlice({
    name: 'Invoice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.fulfilled, (state, actions) => {
                state.user = actions.payload
            })
            .addCase(getInvoices.fulfilled, (state, actions) => {
                state.invoices = actions.payload.filter((a) => a.UserId == state.user.UserId)
            })
            .addCase(getInvoiceLines.fulfilled, (state, actions) => {
                state.invoiceLines = actions.payload
            })
            .addCase(getProducts.fulfilled, (state, actions) => {
                const myProducts = actions.payload.map(el => {
                    const line = state.invoiceLines.find((a) => a.ProductId == el.ProductId)
                    el = {
                        ...el,
                        "Quantity": line?.Quantity,
                        'TotalAmount': line?.Quantity * el.Price
                    }
                    return { ...el }
                });
                state.products = myProducts
            })
    },
});

export const { invoiceTotal } = inviceSlice.actions;
export default inviceSlice.reducer
