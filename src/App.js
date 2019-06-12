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
  render() {
    const { information } = this.state;
    return (
        <div>
          <PhoneForm
              onCreate={this.handleCreate}
          />
          {/*render 함수에서는 information 값을 문자열로 변환하여 보여주었습니다.*/}
          {JSON.stringify(information)}

          <PhoneInfoList data={this.state.information}/>
        </div>
    );
  }
}

export default App;
