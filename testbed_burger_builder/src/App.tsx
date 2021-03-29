import React from "react";
import classes from "./App.module.scss";

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

interface TProps {}

const App: React.FC<TProps> = () => {
  return (
    <div className={classes.App}>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
};

export default App;
