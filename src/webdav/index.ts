import { Route, RouterType, json, error, text } from 'itty-router';
import { XMLParser } from 'fast-xml-parser';
import { ContentType } from './type';
class webDav {
	private server: string;
	private username: string;
	private password: string;
	private path: string;

	constructor(server: string, path: string, username: string, password: string) {
		this.server = server;
		this.path = path;
		this.username = username;
		this.password = password;
	}
	async dav_fetch(path, init): Response {
		init = init || {};
		init.headers = init.headers || {};
		init.headers.Authorization = `Basic ${btoa(`${this.username}:${this.password}`)}`;
		console.log('当前路径', `${this.server}${this.path}${path}`);
		return fetch(`${this.server}${this.path}${path}`, init);
	}
	async get_file(path: string) {
		let dav_rsp: Response = await this.dav_fetch(path, {
			method: 'GET',
		});
		if (dav_rsp.status == 200) {
			return await dav_rsp.text();
		} else {
			return null;
		}
	}
	async get_file_response(path: string) {
		let dav_rsp: Response = await this.dav_fetch(path, {
			method: 'GET',
		});
		if (dav_rsp.status == 200) {
			return dav_rsp;
		} else {
			return null;
		}
	}
	async get_file_list(path: string) {
		let dav_rsp: Response = await this.dav_fetch(path, {
			method: 'PROPFIND',
			headers: { Depth: '1', Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`, 'Content-Type': 'text/xml' },
			body: `<?xml version="1.0" encoding="utf-8" ?>
        <D:propfind xmlns:D="DAV:">
          <D:allprop/>
        </D:propfind>`,
		});
		if (dav_rsp.ok) {
			var result: any = [];
			let xmlString = await dav_rsp.text();
			const parser = new XMLParser();
			const xmlDoc = parser.parse(xmlString);
			for (var item of xmlDoc['D:multistatus']['D:response']) {
				let file_item = {
					path: item['D:href'].replace(this.path, ''),
					type: item['D:propstat']['D:prop']['D:getcontenttype'],
					size: item['D:propstat']['D:prop']['lp1:getcontentlength'] || 0,
				};
				result.push(file_item);
			}
			return result;
		}
		return null;
	}
}
export default (router: RouterType<Route, any[]>) => {
	const dev = new webDav('https://ogi.teracloud.jp', '/dav/myfile', 'gh123', 'EAZCDQ37PHgeetjs');
	//查询文件
	router.get('/webdav/query/*', async (req, env) => {
		const path = req.route.replace('/*', '');
		const url = new URL(req.url);
		const new_path = url.pathname.replace(path, '');
		console.log('访问路径', new_path);
		const files = await dev.get_file_list(new_path);
		var parts = new_path.replace(/^\/|\/$/g, '').split('/');
		let hasPass: any = '';
		for (var item of files) {
			if (item.path.includes('.password')) {
				hasPass = await dev.get_file(`/${new_path}/.password`);
				console.log('子目录83', hasPass);
			}
		}
		if (hasPass == '') {
			for (var item of parts) {
				hasPass = await dev.get_file(`/${item}/.password`);
				console.log('子目录', hasPass);
				if (hasPass) {
					break;
				}
			}
		}
		const curl = new URL(req.url);
		const pwd = curl.searchParams.get('password');
		console.log('密码', hasPass);
		if (hasPass) {
			if (!pwd) {
				return json({ status: 500, msg: '请传入访问密码！' });
			}
			//有密码
			if (pwd != hasPass) {
				return json({ status: 500, msg: '访问密码错误！' });
			}
			if (pwd == hasPass) {
				return json({ status: 200, data: files });
			}
		}

		return json({ status: 200, data: files });
	});
	//下载文件
	router.get('/webdav/down/*', async (req, env) => {
		const path = req.route.replace('/*', '');
		const url = new URL(req.url);
		const new_path = url.pathname.replace(path, '');

		const dav_rsp = await dev.get_file_response(new_path);
		var parts = new_path.replace(/^\/|\/$/g, '').split('/');
		let { readable, writable } = new TransformStream();
		dav_rsp?.body?.pipeTo(writable);
		var response = new Response(readable);
		const file_extends = url.pathname.substring(url.pathname.lastIndexOf('.'));
		console.log(file_extends);
		response.headers.set('Content-Type', ContentType[file_extends] || 'application/octet-stream');
		let hasPass: any = '';
		if (dav_rsp?.status != 200) {
			response = json({ status: 500, msg: '文件不存在' });
		}
		hasPass = await dev.get_file('/.password');
		const dir_path = new_path.substring(0, new_path.lastIndexOf('/')) || '';
		var dir_path_arr = dir_path.replace(/^\/|\/$/g, '').split('/');
		var dir_c_path = '';
		for (var dirpath of dir_path_arr) {
			dir_c_path += `/${dirpath}`;
			console.log('遍历路径', dir_c_path);
			hasPass = await dev.get_file(`/${dir_c_path}/.password`);
			console.log('子目录83', hasPass);
			if (hasPass) {
				break;
			}
		}
		if (hasPass == '') {
			for (var item of parts) {
				hasPass = await dev.get_file(`/${item}/.password`);
				if (hasPass) {
					break;
				}
			}
		}
		const curl = new URL(req.url);
		const pwd = curl.searchParams.get('password');
		if (hasPass) {
			if (!pwd) {
				return json({ status: 500, msg: '请传入访问密码！' });
			}
			//有密码
			if (pwd != hasPass) {
				return json({ status: 500, msg: '访问密码错误！' });
			}
			if (pwd == hasPass) {
				return response;
			}
		}

		return response;
	});
};
