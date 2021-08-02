import './App.css';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import AddInformationContainer from "./components/AdditionalInformationPage/AddInfPageContainer";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <div className='AppHeader'>
                    <Header/>
                </div>
                <div>
                    <Route exact patch='/' render={() => <Redirect to={'/mainPage'} />} />
                    <Route path='/additionalInformation/:itemId' render={() => <AddInformationContainer />}/>
                    <Route path='/mainPage' render={() => <MainPageContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
