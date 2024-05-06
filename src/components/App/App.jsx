import Card from '../Card/Card';
import './App.css'

const data = {
  page1: {
    title: "How did we do?",
    value: "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
  },
  page2: {
    title: "Thank you!",
    value: "We appreciate you taking the time to give a rating. If you ever need support, don't hesitate to get in touch!",
    rating: 4
  }
}

const App = () => {
  return (
    <>
      <main>
        <Card title={data.page1['title']} value={data.page1['value']} />
      </main>
    </>
  );
}

export default App;