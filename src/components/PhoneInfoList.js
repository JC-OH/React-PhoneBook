// src/components/PhoneInfoList.js
import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    // 가끔씩은 실수로 props 를 빠트려먹을때가 있습니다. 혹은, 특정 상황에 props 를 일부러 비워야 할 때도 있구요.
    // 그러한 경우에, props 의 기본값을 설정해줄 수 있는데요, 그것이 바로 defaultProps 입니다.

    // PhoneInfoList 에서는 props 로 전달받은 onRemove 를 그대로 전달해주겠습니다.
    // 이 함수가 전달되지 않았을 경우를 대비하여 해당 props 를 위한 defaultProps 도 설정하세요.
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined'),
    }

    // 이 컴포넌트에서는 data 라는 배열을 가져와서 map 을 통하여 JSX 로 변환을 해줍니다.
    // 이 과정에서, key 라는 값도 설정이 되었는데요, 여기서 key 는 리액트에서 배열을 렌더링을 할 때 꼭 필요한 값입니다.
    // 리액트는 배열을 렌더링 할 때 값을 통하여 업데이트 성능을 최적화하는데요, 한번 다음 예시를 살펴보세요.

    // 데이터를 컴포넌트로 렌더링하는 과정에서 PhoneInfo 에 onUpdate 를 그대로 전달해주었습니다.
    render() {
        const { data, onRemove, onUpdate  } = this.props;

        const list = data.map(
            info => (<PhoneInfo
                        key={info.id}
                        info={info}
                        onRemove={onRemove}
                        onUpdate={onUpdate}
            />)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;
