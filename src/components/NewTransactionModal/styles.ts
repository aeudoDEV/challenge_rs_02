import styled from 'styled-components';
import {darken} from 'polished'
export const Container = styled.form`

*{
    box-sizing:border-box;
}

h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}
 input{
        width 100%;
        height: 4rem;
        border-radius:0.25rem;
        padding:0 1.5rem;

        border:1px solid #D7D7D7;
        background: #E7E9EE;

        font-weight: 400;
        font-size: 1rem;

        ::placeholder{
            color: var(--text-body);

        }
        & + input {
            margin-top: 1rem;
        }
    }   

    .btn-primary{
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        border: 0;
        margin-top: 1.5rem;
        font-size:1rem;
        color: #FFF;
        background: var(--green);
        transition:filter 0.3s;
        font-weight:600;

        :hover {
            filter: brightness(0.9);
        }
    }
    .btn-second{
        position:absolute;
        border:0;
    }

}





`;

export const TransactionTypeContainer = styled.div`
display:grid;
grid-template-columns: 1fr  1fr;
gap:0.5rem;
margin: 0.5rem 0;


`;
interface RadioBoxProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}
const colors = {
    green: '#d0dfd7',
    red: '#e5d4d7'


}
export const RadioBox = styled.div<RadioBoxProps>`

    display:flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    color: var(--text-title);
    border: solid 1px #D7D7D7;
    border-radius:0.25rem;
    transition: border-color 0.2s;
    :hover {
        border-color: ${darken(0.2, '#D7D7D7')};
    }
    cursor: pointer;
    background:${(props) => props.isActive 
        ? colors[props.activeColor]
        : 'transperant'};
p{
    font-size: 1.5rem;
    padding: 0 0.4rem;
}
`;