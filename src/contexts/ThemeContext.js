import React, {createContext, Component} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    isFontLarge: false,
    dark: {
      text: '#fff',
      // ui: '#262626',
      // bg: '#262626',
      ui: '#042245',
      bg: '#042245',
      bgGradientFrom: '#232323',
      bgGradientTo: '#333333',
      chartColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      themeToggleColor: '#8A57E5',
      dashboardIcon: '',
      button: '#3779B2',
      labelFont: 20,
      iconTextFont: 15,
      iconSize: 40,
      iconContainer: 100,
      noOfColumns: 3,
    },
    light: {
      text: '#042245',
      ui: '#fff',
      bg: '#fff',
      bgGradientFrom: '#ffffff',
      bgGradientTo: '#ffffff',
      chartColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      themeToggleColor: '#FCDF5D',
      dashboardIcon: '',
      button: '#3779B2',
      labelFont: 20,
      iconTextFont: 15,
      iconSize: 40,
      iconContainer: 100,
      noOfColumns: 3,
    },
  };

  //function to toggle theme
  toggleTheme = () => {
    this.setState({isLightTheme: !this.state.isLightTheme});
  };

  //increaseFont
  handleFontSize = () => {
    const isFontLarge = !this.state.isFontLarge;
    const theme = this.state.isLightTheme ? this.state.light : this.state.dark;
    theme.labelFont = isFontLarge ? 24 : 20;
    theme.iconTextFont = isFontLarge ? 19 : 15;
    theme.iconSize = isFontLarge ? 60 : 40;
    theme.iconContainer = isFontLarge ? 120 : 100;
    theme.noOfColumns = isFontLarge ? 2 : 3;

    if (this.state.isLightTheme) {
      this.setState({
        light: theme,
        isFontLarge: !this.state.isFontLarge,
      });
      return;
    }
    this.setState({
      dark: theme,
      isFontLarge: !this.state.isFontLarge,
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          toggleTheme: this.toggleTheme,
          handleFontSize: this.handleFontSize,
        }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
