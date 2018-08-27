import Codesquad from './Codesquad';
import _ from './utility';

_.log('my first test data');

const cs = new Codesquad();
_.log(`current hour is ${cs.getCurrentHour()}`);
_.log(`lectures of Codesquad are ${cs.getLectures()}`);