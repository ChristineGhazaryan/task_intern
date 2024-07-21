import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/Invoice/InvoiceAPI";

const Products = () => {
    const { products } = useSelector(st => st.invoice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])
    console.log(products);
    return <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>TotalAmount</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((el) => {
                        return <tr key={el.ProductId}>
                            <td>{el.Name}</td>
                            <td>{el.Price}</td>
                            <td>{el.Quantity}</td>
                            <td>{el.TotalAmount}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
}

export default Products