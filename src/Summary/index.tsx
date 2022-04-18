import { Container } from './style';
import { useTransactions } from '../hooks/useTransactions';
import incomeImg from '../assets/income.svg'
import outcomeImg from '../assets/outcome.svg';
import totalImg from '../assets/total.svg';

export function Summary() {
    const { transaction } = useTransactions();

    const summary = transaction.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposit += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdrawal += transaction.amount
            acc.total -= transaction.amount
        }

        return acc;
    }, {
        deposit: 0,
        withdrawal: 0,
        total: 0
    });

    const formatValue = new Intl.NumberFormat('pt-AO', {
        style: 'currency',
        currency: 'AOA'
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>

                <strong>{formatValue.format(summary.deposit)}</strong>
            </div>

            <div>
                <header>
                    <p>Saída</p>
                    <img src={outcomeImg} alt="Saída" />
                </header>

                <strong>-{formatValue.format(summary.withdrawal)}</strong>
            </div>

            <div className="green-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>

                <strong>{formatValue.format(summary.total)}</strong>
            </div>
        </Container>
    );
}