import { configureStore } from '@reduxjs/toolkit';
import invoiceReducer from '../features/Invoice/InvoiceSlice';

export const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
  },
});
