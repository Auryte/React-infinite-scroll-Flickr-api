import './App.css';
import Images from './Images';
import Route from './components/Route';
import LikedImages from './LikedImages';

function App() {
  return (
    <div className='App'>
      <Route path='/'>
        <Images />
      </Route>
      <Route path='/likedimages'>
        <LikedImages />
      </Route>
      
    </div>
  );
};

export default App;
