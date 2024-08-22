import { envs } from './core/config/env';
import { Server } from './server';

((): void => {
 main();
})();

function main(): void {
 const server = new Server({
  port: envs.PORT
 });
 void server.start();
}