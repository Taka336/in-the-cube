import { LEVELS } from "./consts";

let levelIdx_ = 0;

const levels = {
  setIndexToZero() {
    levelIdx_ = 0;
  },
  incrementIndex() {
    ++levelIdx_;
  },
  decrementIndex() {
    --levelIdx_;
  },
  getLevel() {
    return LEVELS[levelIdx_];
  },
  getIndex() {
    return levelIdx_;
  },
  getLength() {
    return LEVELS.length;
  },
};

Object.freeze(levels);
export { levels };
