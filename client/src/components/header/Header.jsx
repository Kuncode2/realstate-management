import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    display: flex;
    align-items: center;

    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }

    & > button {
        margin-left: 20px;
    }
`

const Header = () => {
    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Button variant="outlined" onClick={logout}>LOGOUT</Button>
            </Container>
        </Component>
    )
}

export default Header;
