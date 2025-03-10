export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "rajulang/_app",
	assets: new Set([".nojekyll","favicon.png","icons/add.svg","icons/address.svg","icons/agreement.svg","icons/cart.svg","icons/chat.svg","icons/cloth.svg","icons/current_user.svg","icons/heart.svg","icons/star.svg","icons/Success.mp4","icons/trash.svg","images/banner1.png","images/banner2.png","images/banner3.png","images/event.png","images/icon_event.png","images/icon_poin.png","images/icon_tukar.png","images/logofill_textv1.png","images/logofill_textv2.png","images/logo_fillnobg.png","images/logo_nobg.png","images/logo_textv1.png","images/logo_textv2.png","images/market.png","images/Success.mp4","images/tukarbaju.png","images/tukarpoin.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".mp4":"video/mp4"},
	_: {
		client: {start:"_app/immutable/entry/start.BctlWYE3.js",app:"_app/immutable/entry/app.CGXTLoOI.js",imports:["_app/immutable/entry/start.BctlWYE3.js","_app/immutable/chunks/pR75V5mY.js","_app/immutable/chunks/CL4d3RLJ.js","_app/immutable/chunks/BKPiKqAg.js","_app/immutable/chunks/BvtgYnx-.js","_app/immutable/chunks/ZaymPzu5.js","_app/immutable/entry/app.CGXTLoOI.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/CL4d3RLJ.js","_app/immutable/chunks/BCS-ZuLu.js","_app/immutable/chunks/htClrpyG.js","_app/immutable/chunks/eHDleO55.js","_app/immutable/chunks/D_38IB-T.js","_app/immutable/chunks/CqPl9aep.js","_app/immutable/chunks/DZW1j941.js","_app/immutable/chunks/BKPiKqAg.js","_app/immutable/chunks/ZaymPzu5.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/artikel",
				pattern: /^\/artikel\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/marketplace",
				pattern: /^\/marketplace\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/marketplace/cart",
				pattern: /^\/marketplace\/cart\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/marketplace/product/[id]",
				pattern: /^\/marketplace\/product\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/notification",
				pattern: /^\/notification\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/temutukar",
				pattern: /^\/temutukar\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
