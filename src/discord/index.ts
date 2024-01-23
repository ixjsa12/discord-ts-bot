import { Route, RouterType, json, error } from 'itty-router';
import { PingCommand } from './commands/ping';
import { RpgCommand } from './commands/rpg/rpg';
import { DiscordApp } from './app';
export default (router: RouterType<Route, any[]>) => {
	router.post('/discord/interaction', async (request, env) => {
		const app = new DiscordApp(
			'1198832769288130601',
			'MTE5ODgzMjc2OTI4ODEzMDYwMQ.GykD0_.mU__yT_vJwHKtj4EvWJsswNTDz4fP2zVjX8AIo',
			'4d42097d76b3f4dd12c899a07b5afaa71fd2fa01fe824012fac484b2a96d4d22',
		);
		app.pushCommand(new PingCommand());
		app.pushCommand(new RpgCommand());
		return app.handel(request, env);
	});
};
