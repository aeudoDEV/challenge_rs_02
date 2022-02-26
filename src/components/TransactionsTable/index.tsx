import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from '../../services/api'

interface Transaction {
    id:number;
    title:string;
    amount:number;
    type:string;
    category:string;
    createdAt:string;
}
export function TransactionTable(){
    
    const [transactions, setTransactions]  = useState<Transaction[]>([]);

    useEffect(() =>{
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))

    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Tittle</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                  {transactions.map(transaction => ( 
                    <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>{transaction.amount}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.createdAt}</td>
                    </tr> ))}                  
                </tbody>
            </table>

        </Container>
    );
}

function then(arg0: (data: any) => void) {
    throw new Error("Function not implemented.");
}