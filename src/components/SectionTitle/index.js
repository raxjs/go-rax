import { createElement } from 'rax';

import Text from 'rax-text';

export default function SectionTitle({ children }) {
  const titleStyle = {
    color: '#1D2C41',
    backgroundColor: '#F2F3F4',
    padding: '20rpx',
    width: '750rpx',
    display: 'flex'
  };
  return (
    <Text
      style={titleStyle}
    >
      {children}
    </Text>
  );
}
