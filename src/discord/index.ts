import { Route, RouterType, json } from 'itty-router';
import { InteractionResponseType, InteractionType, verifyKey } from 'discord-interactions';
export default (router: RouterType<Route, any[]>) => {
	router.post('/discord/interaction', async (request, env) => {
		const body = await request.text();
		const signature = request.headers.get('x-signature-ed25519');
		const timestamp = request.headers.get('x-signature-timestamp');
		const isValidRequest =
			signature && timestamp && verifyKey(body, signature, timestamp, '4d42097d76b3f4dd12c899a07b5afaa71fd2fa01fe824012fac484b2a96d4d22');
		console.log('请求数据', isValidRequest);

		return json(isValidRequest);
	});
};
