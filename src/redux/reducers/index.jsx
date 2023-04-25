import { combineReducers } from 'redux';
import app from "./app";
import auth from './auth';
import alert from './alert'
import user from './user';
import rdps from './rdps';
import vps from './vps';
import cpanel from './cpanel';
import shell from './shell';
import smtp from './smtp';
import phpmailer from './phpmailer';
import lead from './lead';
import premiumShop from './premiumShop';
import programScript from './programScript';
import method from './method';
import service from './service';

const rootReducer = combineReducers({
  app,
  auth,
  alert,
  user,
  rdps,
  vps,
  cpanel,
  shell,
  smtp,
  phpmailer,
  lead,
  premiumShop,
  programScript,
  method,
  service
});

export default rootReducer;
