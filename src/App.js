import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme,jssPreset,StylesProvider } from '@material-ui/core/styles'
import './App.css';
import Routes from './routes'
import { blue, indigo } from '@material-ui/core/colors'
import { create } from 'jss';
import rtl from 'jss-rtl';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  direction: 'rtl',
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  },
  overrides:{
    MuiSlider:{
      root:{
        color:"#ca0c85"
      }
    }
  }
});


class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <StylesProvider jss={jss}>
          <Routes />
          </StylesProvider>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
