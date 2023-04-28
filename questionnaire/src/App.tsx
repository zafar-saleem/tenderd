import './App.css';
import { QuestionList } from './components/question-list';

const questions = [
  {
    question: 'What are the first 10 digits of PI?',
    answer: '3.141592653',
  },
  {
    question: 'What are the first 10 digits of PI?',
    answer: '3.141592653',
  },
];

function App() {
  return (
    <div className="App">
      <QuestionList questions={{questions}} />
    </div>
  );
}

export default App;
