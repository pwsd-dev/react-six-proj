import React from 'react';
import router from '../store/router';
import { observer } from 'mobx-react';


@observer class App extends React.Component {

    render() {
        return (
            <div className="container">
                {router.component}
            </div>
        )
    }
}

export default App;



