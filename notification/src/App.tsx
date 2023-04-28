import './App.css';
import { Notification } from './components/notification';

function App() {
  return (
    <div id="App">
      <Notification
        contents={{
          notification: {
            message:
              'This is message. This is message. This is message. This is message. This is message. This is message. This is message. This is message. This is message. This is message. This is message. This is message. This is message. ',
            type: 'success',
          },
        }}
      />
    </div>
  );
}

export default App;
