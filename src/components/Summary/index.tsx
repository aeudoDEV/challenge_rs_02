import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary(){
    return (
        <Container>
            <div>
                <header>
                    <p>Joing</p>
                    <img src={incomeImg} alt="Joing"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            
            <div>
                <header>
                    <p>Out</p>
                    <img src={outcomeImg} alt="Joing"/>
                </header>
                <strong>- R$500,00</strong>
            </div>
            
            <div className='total'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Joing"/>
                </header>
                <strong> R$500,00</strong>
            </div>
            
        </Container>
    );
}