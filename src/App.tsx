import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import store, {ActionsType, StoreType} from "./redux/state";


type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar navbarPage={state.navbarPage}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={state}
                                                  store={store}
                                                  messagesPage={state.messagesPage}/>}/>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={state.profilePage}
                               dispatch={props.dispatch}
                               newPostText={state.profilePage.newPostText}
                           />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
