import { Container } from './style';
import { useTransactions } from '../hooks/useTransactions';

export function TransactionsTable() {
    const { transaction } = useTransactions();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transaction.map(transaction => (
                        <tr key={transaction.id}>
                            <td className={transaction.title}>{transaction.title}</td>
                            <td className={transaction.type}>{new Intl.NumberFormat('pt-AO', {
                                style: 'currency',
                                currency: 'AOA'
                            }).format(transaction.amount)}</td>
                            <td>{transaction.category}</td>
                            <td>{new Intl.DateTimeFormat('pt-AO').format(transaction.amount)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}