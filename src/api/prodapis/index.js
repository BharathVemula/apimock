import * as handlers from './handlers';

let routes = [
  {
    method: 'GET',
    path: '/loop',
    handler: handlers.loop
  },
 {
   method: 'POST',
   path: '/tempPostReq',
   config: {

     payload: {
       output: 'stream',
       parse: true,
       allow: 'multipart/form-data'
     },
   },
   handler: handlers.csv2JsonConverter
  }
];



export default routes;
