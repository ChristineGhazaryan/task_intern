import { getInvoiceLines, getInvoices, getProducts } from "../../features/Invoice/InvoiceAPI"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useState } from "react"
import Products from '../Products'
import moment from "moment";

const Invoices = () => {
    const [show, setShow] = useState(false)
    const { invoices, products, invoiceLines } = useSelector(st => st.invoice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getInvoices())
    }, [])


    const getInvoiceLine = (invoiceId) => {
        setShow(false)
        dispatch(getInvoiceLines(invoiceId)).then((r) => {
            setShow(true)
        })
    }
    return <>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Paid Date</th>
                    <th>Total Amount</th>
                </tr>
            </thead>
            <tbody>
                {
                    invoices.map((el) => {
                        return <tr key={el?.InvoiceId}>
                            <td>
                                <input type="radio" value={el?.InvoiceId}
                                    onChange={(e) => getInvoiceLine(e.target.value)}
                                    name={'invoices'} id={el.Name} />
                            </td>
                            <td><label htmlFor={el.Name}>{el.Name}</label> </td>
                            <td>{moment(el['PaidDate']).utc().format('DD-MM-YYYY')}</td>
                            <td></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <hr />
        {show && <Products />}
    </>
}

export default Invoices