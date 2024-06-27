import React from 'react';
import { Flex, Spin } from 'antd';

const Loading: React.FC = () => (
    <Flex justify={'center'} >
        <Spin size="large" style={{ color: '#E1A304' }} />
    </Flex>
);

export default Loading;