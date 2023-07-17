import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";
import "./Header.scss";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";



type Props = {};

const Header = (props: Props) => {
  return (
    
      <AppBar position="sticky">
        <header className="galss-effect">
        <Container>
          <Toolbar className="test">
          <Typography  component="div" sx={{ flexGrow: 1 }}>  
          <Logo />
          </Typography>
            <Menu />
            
          </Toolbar>
        </Container>
        </header>
        </AppBar>
  );
};

export default Header;
