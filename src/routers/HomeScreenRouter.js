import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../hoc/HomeScreen';
import ElementScreen from '../hoc/ElementScreen';
import useComponentVisible from '../hooks/useComponentVisible';
import useFetch from '../hooks/useFetch';
import useFilter from '../hooks/useFilter';
import useMenu from '../hooks/useMenu';
import useOrder from '../hooks/useOrder';
import useStatus from '../hooks/useStatus';
import { AppContext } from '../hoc/Context';

export const HomeScreenRouter = () => {

  const [ ToggleMenu, handleToggleMenu ] = useMenu();

  const [ ref, isComponentVisible, setIsComponentVisible ] = useComponentVisible(false);

  const [ refOrder, isComponentVisibleOrder, setIsComponentVisibleOrder ] = useComponentVisible(false);

  const [ Data, setData ] = useFetch(`${process.env.REACT_APP_API_URL}/api/feedback`);

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
        <>
            <AppContext.Provider value={ context }>
                <Routes>
                    <Route path='/element' element={ <ElementScreen /> } />
                    <Route path='/*' element={ <HomeScreen /> } />
                </Routes>
            </AppContext.Provider>
        </>
    )
}