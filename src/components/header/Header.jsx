import React from 'react';
import Button from '@mui/material/Button';
import '../../../src/index.css'

const Header = () => {
    return (
        <div className='wrapper header-wrapper'>
            <div className='header-logo'>Logo</div>
            <Button variant="contained">Button</Button>
        </div>
    );
}

export default Header;

