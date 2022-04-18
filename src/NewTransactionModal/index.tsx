import { Form, TransactionTypeModal, RadioBox } from './style';
import { useState, FormEvent } from 'react';
import { useTransactions } from '../hooks/useTransactions';
import Modal from 'react-modal';
import closeImg from '../assets/close.svg';
import incomeImg from '../assets/income.svg';
import outcomeImg from '../assets/outcome.svg';

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
}

Modal.setAppElement('#root')

export function NewTransactionModal({ onRequestClose, isOpen }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const { createTransaction } = useTransactions();

    async function handleNewTransactionModal(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            type,
            title,
            amount,
            category
        })

        setType('deposit');
        setTitle('');
        setAmount(0);
        setCategory('')

        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button className='react-modal-close' onClick={onRequestClose}>
                <img src={closeImg} alt='Fechar modal' />
            </button>
            <Form onSubmit={handleNewTransactionModal}>
                <h1>Cadastrar transação</h1>
                <input
                    placeholder='Titulo'
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                />

                <input
                    placeholder='Valor'
                    type='number'
                    onChange={(event) => setAmount(Number(event.target.value))}
                    value={amount}
                />

                <TransactionTypeModal>
                    <RadioBox
                        type='button'
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt='Entrada' />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={() => setType('withdrawal')}
                        isActive={type === 'withdrawal'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt='Saída' />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeModal>

                <input
                    placeholder='Categoria'
                    onChange={(event) => setCategory(event.target.value)}
                    value={category}
                />

                <button type='submit'>
                    Cadastrar
                </button>
            </Form>
        </Modal>

    )
}