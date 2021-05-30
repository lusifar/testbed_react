import { colors, createMuiTheme, ThemeProvider } from "@material-ui/core";

import classes from "./App.module.scss";

import Layout from "./containers/Layout/Layout";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.purple[500],
      },
    },
  });

  return (
    <div className={classes.App}>
      <ThemeProvider theme={theme}>
        <Layout></Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
