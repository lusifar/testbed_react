const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('[middleware_logger] Dispatching ', action);

      const res = next(action);

      console.log('[middleware_logger] next state', store.getState());

      return res;
    };
  };
};

export default logger;
