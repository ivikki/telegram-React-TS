// outsource dependencies
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import publicLayout from './public-layout/reducers';

// local dependencies
import app from './app/reducer';

/**
 * Connect all application reducers to "rootReducer"
 */

const createRootReducer = (history: any) =>
    combineReducers({
        app,
        form,
        router: connectRouter(history),
        // pages
        ...publicLayout,
    });

// export
export default createRootReducer;
