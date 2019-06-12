import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import './App.css';

class App extends Component {
  // 이제 state 안에 있는 값들을 부모 컴포넌트에게 전달해줄 차례입니다.
  // 이러한 상황에는, 부모 컴포넌트에서 메소드를 만들고,
  // 이 메소드를 자식에게 전달한 다음에 자식 내부에서 호출하는 방식을 사용합니다.
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
        <div>
          <PhoneForm
              onCreate={this.handleCreate}
          />
        </div>
    );
  }
}

export default App;
