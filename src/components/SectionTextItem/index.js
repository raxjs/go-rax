import { createElement } from 'rax';

import Text from 'rax-text';

export default function SectionTextItem({ children }) {
  const testItemStyle = {
    padding: '20rpx',
  };
  return (
    <Text
      style={testItemStyle}
    >
      {children}
    </Text>
  );
}
