import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <Toolbar>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }} className="bg-red">
                File Explorer
            </Typography>
        </Toolbar>
    );
}

export default Header;