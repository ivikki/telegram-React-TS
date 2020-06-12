// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import appSaga from './app/saga';
import publicSaga from './public-layout/sagas';

/**
 * Connect all application sagas "rootSaga"
 */
function * rootSaga () {
    yield fork(appSaga);
    yield fork(publicSaga);
}

export default rootSaga;

