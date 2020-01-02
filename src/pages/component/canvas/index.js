import {
  createElement,
  useRef,
  useEffect,
} from 'rax';
import Canvas from 'rax-canvas';
import { isMiniApp } from 'universal-env';

import Container from '../../../components/Container';
import Section from '../../../components/Section';

export default function App() {
  const canvasRef = !isMiniApp && useRef(null);
  useEffect(() => {
    const context = isMiniApp ? my.createCanvasContext('canvas') : canvasRef.current.getContext();
    isMiniApp ? context.setFillStyle('#49a9ee') : context.fillStyle = '#49a9ee';
    context.fillRect(0, 0, 300, 300);
    context.draw();
  }, []);
  return (
    <Container
      title={'Canvas'}
      moduleTitle={'Canvas'}
      desc={
        'Canvas component.'
      }
    >
      <Section title={'Basic Usage: '}>
        <Canvas
          id="canvas"
          style={{
            width: 300,
            height: 300,
          }}
          ref={canvasRef}
        />
      </Section>
    </Container>
  );
}
