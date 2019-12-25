import { enqueueSetState } from './setState';
/**
 * @description: react.Component的实现
 *
 * @date: 2019/12/24 10:13 下午
 */

class Component {
  constructor(props = {}) {
    this.state = {};
    this.props = props;
  }

  // 改变state
  setState(stateChanges) {
    enqueueSetState(stateChanges, this);
  }
}

export default Component;
