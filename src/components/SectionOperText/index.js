import { createElement } from 'rax';
import Text from 'rax-text';

export default function SectionOperText({ children }) {
  const operTestStyle = {
    fontSize: '30rpx',
    color: '#ffb006',
  };
  return (
    <Text
      style={operTestStyle}
    >{children}</Text>
  );
}
