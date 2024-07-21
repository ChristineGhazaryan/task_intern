import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import urls from "./urls";

export const getUser = createAsyncThunk('get/user',
    async (user) => {
        const data = await axios.get(urls.loginURL).then((r) => {
            return r.data.value
        })
        const findUser = data.find((a) => a.Name == user.username && a.Password == user.password)
        return findUser ? findUser : {}
    })

export const getInvoices = createAsyncThunk('get/invoices',
    async () => {
        const data = await axios.get(urls.invoicesURL).then((r) => {
            return r.data
        })
        return data?.value
    })

export const getInvoiceLines = createAsyncThunk('get/invoiceLines',
    async (invoiceId) => {
        const data = await axios.get(urls.invoicelinesURL).then((r) => {
            return r.data.value
        })
        const invoiceLines = data.filter((a) => a.InvoiceId == invoiceId)
        return invoiceLines
    })

export const getProducts = createAsyncThunk('get/products',
    async () => {
        const data = await axios.get(urls.productsURL).then((r) => {
            return r.data
        })
        return data?.value
    })