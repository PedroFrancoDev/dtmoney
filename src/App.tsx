import { GlobalStyle } from './styles/global';
import { Header } from './Header/index';
import { Dashboard } from './Dashboard/index';
import { useState } from 'react';
import { NewTransactionModal } from './NewTransactionModal/index';
import { TransactionProvider } from './hooks/useTransactions';

export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

  return (
    <TransactionProvider>
      <GlobalStyle />
      <Header onNewTransactionModal={() => setIsNewTransactionModal(true)} />
      <NewTransactionModal
        isOpen={isNewTransactionModal}
        onRequestClose={() => setIsNewTransactionModal(false)}
      />
      <Dashboard />
    </TransactionProvider>
  );
} 