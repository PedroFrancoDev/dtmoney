import { Container, Content } from './style';
import logoImg from '../assets/logo.svg';

interface HeaderProps {
    onNewTransactionModal: () => void;
}

export function Header(props: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt='Logo' />
                <button type='button' onClick={props.onNewTransactionModal}>Ver transação</button>
            </Content>
        </Container>
    );
}