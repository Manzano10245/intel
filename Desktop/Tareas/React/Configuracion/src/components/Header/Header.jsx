
import './Header.css';

export const Header = ({children, title, show}) => {
    return (
        <header className="header">
            <h1 className="title">{title}</h1>
            {children}
            
            {
                show ? <p> este p  ese muestra s show prop esta true</p>: <p>show es false</p>
            }

        </header> 
    );
};

