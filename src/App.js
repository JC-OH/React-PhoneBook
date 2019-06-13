import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
import './App.css';

class App extends Component {
  // id 값은 각 데이터를 식별하기 위함입니다. 그리고 이 값은 데이터를 추가할때마다 숫자를 1씩 더해주겠습니다.
  // id 값의 경우에는, 컴포넌트의 일반 클래스 내부 변수로서 선언해주었습니다.
  // 컴포넌트 내부에서 필요한 값 중에서, 렌더링 되는것과 상관이 없는것들은 굳이 state 에 넣어줄 필요가 없습니다.
  id = 2

  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }

  // 이제 state 안에 있는 값들을 부모 컴포넌트에게 전달해줄 차례입니다.
  // 이러한 상황에는, 부모 컴포넌트에서 메소드를 만들고,
  // 이 메소드를 자식에게 전달한 다음에 자식 내부에서 호출하는 방식을 사용합니다.
  handleCreate = (data) => {
    // console.log(data);
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  // 우리는 단순히 값이 3인걸 없애는 것이죠?
  // 배열에는 filter 라는 내장함수가 있는데, 이 함수는 특정 조건에 부합되는 원소들만 뽑아내서 새 배열을 만들어줍니다.
  // 따라서, 3이 제외된 배열을 만들기 위해서 이러한 코드를 작성 할 수도 있지요.
  // array.filter(num => num !== 3); // [1, 2, 4, 5]

  handleRemove = (id) => {

    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  // 우리는 handleUpdate 라는 함수를 만들건데요, 이 함수는 id 와 data 라는 파라미터를 받아와서 필요한 정보를 업데이트 해줍니다.
  // 이 handleUpdate 는 PhoneInfoList 의 onUpdate 로 전달해주세요.
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
          info => id === info.id
              ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
              : info // 기존의 값을 그대로 유지
      )
    })
  }

  render() {
    const { information } = this.state;
    return (
        <div>
          <PhoneForm
              onCreate={this.handleCreate}
          />
          {/*render 함수에서는 information 값을 문자열로 변환하여 보여주었습니다.*/}
          {JSON.stringify(information)}
          {/*
          id 를 파라미터로 받아오는 handleRemove 라는 함수를 만드시고, PhoneInfoList 로 전달하세요.
          PhoneInfoList 에서는 props 로 전달받은 onRemove 를 그대로 전달해주겠습니다.
          */}
          <PhoneInfoList
              data={this.state.information}
              onRemove={this.handleRemove}
              onUpdate={this.handleUpdate}
          />
        </div>
    );
  }
}

export default App;
