import { isMiniApp, isWeChatMiniprogram } from 'universal-env';

const inMiniApp = isMiniApp || isWeChatMiniprogram;
export default inMiniApp;