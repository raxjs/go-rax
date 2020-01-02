import { createElement } from 'rax';
import { isWeex } from 'universal-env';
import Home from '../../components/Home/';
import TabBar from '../../components/TabBar';
import { API } from '../../constants';
import inMiniApp from '../../utils/inMiniApp';

function getZhCN() {
  if (inMiniApp) {
    return true;
  }
  return location && location.href && location.href.indexOf('zh-CN') > -1;
}

export default function App({ history }) {
  const isCN = getZhCN();
  return (
    <Home activeTab={API} isCN={isCN} history={history}>
      <TabBar x-slot:body x-if={isWeex} isCN={isCN} activeTab={API} />
    </Home>
  );
}
