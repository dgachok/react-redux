import request from 'superagent'
import { INCREMENT, getPhotos} from '../actions/app';

const dataService = store => next => action => {
    next(action);
    switch (action.type) {
        case INCREMENT:
            request
                .get('https://www.worldpressphoto.org/sites/redesign/themes/wpp/images/popup-arrow-share.png')
                .end((err, res) => {
                    if (err) console.log(err);
                    next(getPhotos(res))
                });
            break;
        default:
            break
    }

};

export default dataService