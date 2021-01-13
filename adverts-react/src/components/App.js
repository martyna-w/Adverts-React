import React from 'react';
import MainBar from './MainBar';

const api = {
    base: "localhost:3000/"
}

class App extends React.Component {

    state = {adverts: [], currnetAdvert: null, user: null}

    render () {
        return (
            <MainBar />
        )
    }
}

export default App;