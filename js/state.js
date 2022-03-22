let state_ = null;

const state = {
  changeTo(s) {
    state_ = s;
  },
  get() {
    return state_;
  },
};

Object.freeze(state);
export { state };
