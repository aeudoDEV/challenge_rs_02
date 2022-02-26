import react, { FormEvent } from 'react';
import Modal from 'react-modal';
import {useState} from 'react';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';

interface NewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModal){
        const [type, setType] = useState('deposit');
        const [title, setTitle] = useState('');
        const [price, setPrice] = useState(0);
        const [category, setCategory] = useState('');
        function createNewTransaction(event: FormEvent){
            event.preventDefault();
            const data = {price, title, category, type};

            api.post('/transactions', data)
        };
    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose} 
        overlayClassName="react-modal-overlay" 
        className="react-modal-content"
        > 
            <button className="react-modal-close">
                <img src={closeImg} alt="Close Modal"  onClick={onRequestClose}/>
            </button>
            <Container onSubmit={createNewTransaction}>
                <h2>Nubank</h2>
                <input placeholder="Tittle" 
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input type="number" placeholder="Price" 
                    value={price}
                    onChange={event => setPrice(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <RadioBox 
                    className="btn-1"
                    onClick={() => {setType('deposit');}}
                    isActive = {type === 'deposit'}
                    activeColor = "green"
                    >
                        <img src={incomeImg} alt=""/>
                        <p>Entrada</p>
                    </RadioBox>
                    <RadioBox
                    isActive = {type === 'withdraw'}
                    activeColor = "red"
                    onClick={() => {setType('withdraw');}}
                    >
                        <img src={outcomeImg} alt="" />
                        <p>Saida</p>
                    </RadioBox>
                </TransactionTypeContainer>
                <input placeholder="Category" 
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button className="btn-primary">Confirm</button>
            </Container>
        
        </Modal>
    );
}