import { createElement } from 'rax';
import { isWeex } from 'universal-env'
import Home from '../../components/Home/';
import TabBar from '../../components/TabBar';
import inMiniApp from '../../utils/inMiniApp';
import { COMPONENT } from '../../constants';

function getZhCN() {
  if (inMiniApp) {
    return true;
  }
  return location && location.href && location.href.indexOf('zh-CN') > -1;
}

export default function App({ history }) {
  const isCN = getZhCN();

  return (
    <Home isCN={isCN} history={history} activeTab={COMPONENT}>
      <TabBar  x-if={isWeex} isCN={isCN} activeTab={COMPONENT} />
    </Home>
  );
}
