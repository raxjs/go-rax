import { isMiniApp, isWeChatMiniProgram } from 'universal-env';

const inMiniApp = isMiniApp || isWeChatMiniProgram;
export default inMiniApp;
