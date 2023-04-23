import './App.css';
import useComponentVisible from './hooks/useComponentVisible';
import useFetch from './hooks/useFetch';
import useFilter from './hooks/useFilter';
import useMenu from './hooks/useMenu';
import useOrder from './hooks/useOrder';
import HomeScreen from './hoc/HomeScreen';
import { AppContext } from './hoc/Context';
import useStatus from './hooks/useStatus';

function App() {

  const [ ToggleMenu, handleToggleMenu ] = useMenu();

  const [ ref, isComponentVisible, setIsComponentVisible ] = useComponentVisible(false);

  const [ refOrder, isComponentVisibleOrder, setIsComponentVisibleOrder ] = useComponentVisible(false);

  const [ Data, setData ] = useFetch(`https://jopt05-productfeedback-backend.onrender.com/api/feedback`);

  const [ Order, handleOrderChange ] = useOrder( setIsComponentVisibleOrder, Data, setData );

  const [ Filter, handleChangeFilter, ContentExists ] = useFilter(Data, setIsComponentVisible);

  const Statuses = useStatus( Data );

  const context = {
    ToggleMenu,
    handleToggleMenu,
    ref,
    isComponentVisible,
    setIsComponentVisible,
    Data,
    Order,
    handleOrderChange,
    refOrder,
    isComponentVisibleOrder, 
    setIsComponentVisibleOrder,
    Filter,
    handleChangeFilter,
    Statuses,
    ContentExists
  }

  return (
    <AppContext.Provider value={ context }>
      <div className="App">
        <HomeScreen />
      </div>
    </AppContext.Provider>
  );
}

export default App;
