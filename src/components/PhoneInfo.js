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

    state = {
        // 우리는 수정 버튼을 눌렀을 떄 editing 값을 true 로 설정해줄것입니다.
        // 이 값이 true 일 때에는, 기존에 텍스트 형태로 보여주던 값들을
        // input 형태로 보여주게 됩니다.
        editing: false,
        // input 의 값은 유동적이겠지요? input 값을 담기 위해서 각 필드를 위한 값도
        // 설정합니다
        name: '',
        phone: '',
    }

    handleRemove = () => {
        // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }


    // editing 값을 반전시키는 함수입니다
    // true -> false, false -> true
    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }


    // input 에서 onChange 이벤트가 발생 될 때
    // 호출되는 함수입니다
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }


    componentDidUpdate(prevProps, prevState) {
        // 여기서는, editing 값이 바뀔 때 처리 할 로직이 적혀있습니다.
        // 수정을 눌렀을땐, 기존의 값이 input에 나타나고,
        // 수정을 적용할땐, input 의 값들을 부모한테 전달해줍니다.
        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing) {
            // editing 값이 false -> true 로 전환 될 때
            // info 의 값을 state 에 넣어준다
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if (prevState.editing && !this.state.editing) {
            // editing 값이 true -> false 로 전환 될 때
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }
    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { editing } = this.state;

        if (editing) {
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }

        const { name, phone} = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PhoneInfo;