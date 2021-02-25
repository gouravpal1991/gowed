import React, {createContext, Component} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isAccessibilityOn: true,
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
      inputHeight: 40,
      availableBalance: 'white',
      favTransBg: '#27292E',
      favTransIcon: '#D8DFE4',
    },
    light: {
      text: '#042245',
      ui: '#fff',
      bg: '#fff',
      bgGradientFrom: '#ffffff',
      bgGradientTo: '#ffffff',
      chartColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      themeToggleColor: '#FAAB5F',
      dashboardIcon: '',
      button: '#3779B2',
      labelFont: 20,
      iconTextFont: 15,
      iconSize: 40,
      iconContainer: 100,
      noOfColumns: 3,
      inputHeight: 40,
      availableBalance: 'green',
      favTransBg: '#FAFAFA',
      favTransIcon: '#B9C6CE',
    },
    navigationProps: null,
  };

  //function to toggle theme
  toggleTheme = () => {
    this.setState({isLightTheme: !this.state.isLightTheme});
  };

  toggleAccessbility = () => {
    this.setState({
      isAccessibilityOn: !this.state.isAccessibilityOn,
    });
  };

  setNavigationProps = (navigationProps) => {
    this.setState({
      navigationProps,
    });
  };
  //increaseFont
  handleFontSize = () => {
    const isFontLarge = !this.state.isFontLarge;
    const theme = this.state.isLightTheme ? this.state.light : this.state.dark;
    theme.labelFont = isFontLarge ? 22 : 18;
    theme.iconTextFont = isFontLarge ? 17 : 15;
    theme.iconSize = isFontLarge ? 50 : 40;
    theme.iconContainer = isFontLarge ? 110 : 100;
    theme.noOfColumns = isFontLarge ? 2 : 3;
    theme.inputHeight = isFontLarge ? 50 : 40;

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
          setNavigationProps: this.setNavigationProps,
          toggleAccessbility: this.toggleAccessbility,
        }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
