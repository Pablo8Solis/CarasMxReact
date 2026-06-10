
import {ButtonsStyles} from './styles';
interface ButtonsProps {
    nameOfButton: string;
}

const Buttons = ({nameOfButton}: ButtonsProps): JSX.Element => {
    return (
        <div>
            <ButtonsStyles>{nameOfButton}</ButtonsStyles>
        </div>
    );
}

export default Buttons;