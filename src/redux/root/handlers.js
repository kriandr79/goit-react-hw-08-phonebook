export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, {payload, error}) => {
  state.isLoading = false;
  state.error = payload?.error||payload|| error?.message|| 'Some error happend';
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
