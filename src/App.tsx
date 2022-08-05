import React from 'react';
import {StoreType} from "./redux/state";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Music} from "./components/Music/Music";
import {Friends} from "./components/Friends/Friends";
import {Fundraising} from './components/Fundraising/Fundraising';
import './App.css';

type AppPropsType = {
    store: StoreType
}

export const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()

    return (
        <div className={'app-wrap'}>
            <Header/>
            <NavBar sidebarElements={state.sidebar}/>
            <div className="app-wrap-content">
                <Routes>
                    <Route path="/profile" element={
                        <Profile
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}
                            dispatch={props.store.dispatch.bind(props.store)}
                        />}
                    />
                    <Route path="/dialogs" element={
                        <Dialogs
                            dialogs={state.dialogsPage.dialogs}
                            messages={state.dialogsPage.messages}
                            newMessagesText={state.dialogsPage.newMessagesText}
                            dispatch={props.store.dispatch.bind(props.store)}
                        />}
                    />
                    <Route path="/fundraising"
                           element={
                               <Fundraising
                                   fundPosts={state.fundraisingPage.fundPosts}
                               />}/>
                    <Route path="/music" element={Music}/>
                    <Route path="/settings" element={Friends}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}
