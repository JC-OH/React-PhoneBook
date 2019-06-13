// file: src/components/PhoneInfo.js
import React, { Component } from 'react';


// 우리는 info 라는 객체를 props 로 받아와서 렌더링 해줄것입니다.
// 그런데, 우리가 실수로 info 값을 전달해주는것을 까먹게 된다면 컴포넌트가 크래쉬 될 것입니다.
// info 가 undefined 일 때에는 비구조화 할당을 통해 내부의 값을 받아올 수 없기 때문입니다.

// 그렇기 때문에 defaultProps 를 통하여 info 의 기본값을 설정해주었습니다.

class PhoneInfo extends Component {
    // 가끔씩은 실수로 props 를 빠트려먹을때가 있습니다. 혹은, 특정 상황에 props 를 일부러 비워야 할 때도 있구요.
    // 그러한 경우에, props 의 기본값을 설정해줄 수 있는데요, 그것이 바로 defaultProps 입니다.
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }

    handleRemove = () => {
        // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { name, phone} = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PhoneInfo;