/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","eb13c04c9dab58fd4623474003baf6b3"],["/archives/2022/03/index.html","3298e6be60e0b267e88034e048513214"],["/archives/2022/04/index.html","c4884386338a4b0c01084e6f202a864b"],["/archives/2022/05/index.html","8e02a89078686f0ce4a705ce3486c204"],["/archives/2022/06/index.html","573488cabfb48d9944e839860d0f034f"],["/archives/2022/07/index.html","702b35b0895cf8ee00d241c5b2670334"],["/archives/2022/08/index.html","353f8fab588c59266b6e6379940f5f9d"],["/archives/2022/09/index.html","0d3c3b7ece94964aa76536e3ccc57b3a"],["/archives/2022/10/index.html","ad2c9a136d3dae3e0f09297b0778d107"],["/archives/2022/index.html","b71a5a8e08dc3ec25448806e02e9e28e"],["/archives/2022/page/2/index.html","2c1cec14c99a523f17682bef3d304263"],["/archives/2022/page/3/index.html","3f4cfc3e9d2be2afe70c7debe853e2ee"],["/archives/index.html","9385cc6837a4d91f3d842e8316292864"],["/archives/page/2/index.html","625a03e3a6361eebdcca74d89e5c5862"],["/archives/page/3/index.html","0707986dcac4633d17216efe6f0c6f37"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","d3c238492ae22ca79dc61d6a87c09425"],["/categories/仿写/index.html","f792b4fde051cc084d83ee10e8bd36da"],["/categories/小说/index.html","117eedbd73d027447a03eaf61228c70f"],["/categories/技术/index.html","1ff2a830ecf670e5a3ab5564cf9fdf6d"],["/categories/技术/page/2/index.html","3e3a3cb3a9ef4e41596a6c02e26e732d"],["/categories/搬运/index.html","dbc8577178a4b6d335c55596f271aba1"],["/categories/闲笔/index.html","5c4c610b1137cfbea8db55b4babc18bc"],["/categories/随笔/index.html","daf5338f27ef9f0a6cf4fbac3fb5def4"],["/categories/青春，在路上/index.html","7556b1a05d0c21e0bf50fc4905b816a3"],["/css/coin.css","812e6b56f4b7f6a54a8442320c41a426"],["/css/custom.css","79966f11f49b84bb7ebbab7225a1d116"],["/css/custom/category.css","538bb6523707165e5f4f63081b07628f"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/custom/twikoo_beautify.css","16d0a403748e57799c90ff06843dcace"],["/css/font.css","f6bbb9d20183ea5d00235b74f0ed2c9f"],["/css/index.css","c2c7929cb38da9ab238385efbe87bc5e"],["/css/mouse.css","1afdc3be000bb0068001d018506d76bd"],["/css/sweetalert.css","4668c1e648b8f58d442ed5b6b2031ee1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","96085340d584d55b92000f355d593d96"],["/fonts/zhanku.ttf","0aceab97af2cd21dc57f76aceb1b1722"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/siteicon/README.html","ab651fa2540da79396beb9e7d099b1d7"],["/img/siteicon/android-chrome-144x144.png","d3b0eba175129231d52675797dbcc069"],["/img/siteicon/android-chrome-192x192.png","8aa1cd785c06d1febc3aec11f0e24722"],["/img/siteicon/android-chrome-256x256.png","8d662dc4f38291167979579e3c2538fa"],["/img/siteicon/android-chrome-36x36.png","22523f91eadc57b8a3ae29ebc8821df3"],["/img/siteicon/android-chrome-384x384.png","b5b9c3d2e48d895f63c35a70de734e7b"],["/img/siteicon/android-chrome-48x48.png","f59747a8bad7fbf8126d389b27afe0ec"],["/img/siteicon/android-chrome-72x72.png","fe79344d3655e58143cd7c8b9248d5aa"],["/img/siteicon/android-chrome-96x96.png","27f31e09151590963b1376bbecb00ca4"],["/img/siteicon/apple-touch-icon.png","ed72616f4f7248496e607d9da8827bb3"],["/img/siteicon/favicon-16x16.png","521fda1215a9535284ec39878b18edb6"],["/img/siteicon/favicon-32x32.png","13439d86f09d7ba97533349d55f039b3"],["/img/siteicon/mstile-150x150.png","27f03cd56dcadc15fee89800fac72246"],["/img/siteicon/safari-pinned-tab.svg","90f36d2d8ef5d27fa9a36209dae4a714"],["/index.html","87d615adb02ba8bb34848f99b9e74e9e"],["/js/SAO-Notify.js","bee62801396dff92c96b4f16928bdc7a"],["/js/background.js","7b370436ecd2d0f43b614d374894ab0d"],["/js/coin.js","16be4711da8cbe57c0be5a9c107b237c"],["/js/custom/fixed_card_widget.js","967f8f32e536f4300d2ac8c2f25ec99f"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/custom/nav.js","f338fd486397ddc9917720c3fafe7bcb"],["/js/fixed-pagination.js","0c52f10bdc7e4f1d26f2a9822530532f"],["/js/galmenu.js","8d12fb0f638f64dde88ea2f22d3383e4"],["/js/grayscale.js","3337622648819ebb05d17f96617f9a37"],["/js/local.js","08ac73a973855be130adaf469df1de8c"],["/js/main.js","9e9d7a443b02ba9b611aa8b08e298535"],["/js/mirror.js","5839362ccfbcc8df8da0bf10e12b677a"],["/js/runtime.js","1bc38d555d5fcc4314985f3ebc49eb5e"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","4c706393befa2bbd41adc866e728d80f"],["/message/index.html","17fdb36b50f3ff6d07b0201b914be374"],["/page/2/index.html","9935cbf04cfcaf72086304ef32ccb64c"],["/page/3/index.html","0dae307b9d7362e85eadcb74f88f0b6c"],["/posts/385fb4fc/index.html","4a4997a2a572f2879abe8ee981c06348"],["/posts/53efd18f/index.html","0f11c66a47399485acf79986b2df480b"],["/posts/56d1295c/index.html","8e87795e3fdb754ff113f6f72d272429"],["/posts/5a0cf903/index.html","100084af0585c96fcb5a6d41c77571a2"],["/posts/74594f81/index.html","9e90e5206276141d2d2225d20cd6bd73"],["/posts/7d7d33d7/index.html","a3436225e807a7ea56f77b401227aeae"],["/posts/865aa801/index.html","496c7d318bca7fe4094cd67b23e818cc"],["/posts/8e7565eb/index.html","53875a4958b691b67f144a77a2200460"],["/posts/98a65798/index.html","cc3809af545d2126dca4407879842e6b"],["/posts/a089e4c9/index.html","a6edb20d63fdad7918b72f1e97e8dfea"],["/posts/a2efad69/index.html","8b12518e8d8e7e581d755c5d98b331d2"],["/posts/a4cf88ab/index.html","91d29d5f8512011878396746abebeb0d"],["/posts/a5d91a10/index.html","ea78023a46579b0e34cb2c811ec1d442"],["/posts/a839eca3/index.html","67c0f3a193d8c7959f461a22b5ba7aac"],["/posts/b2c041af/index.html","2448c736912a05db9c0548a8d4e0ef49"],["/posts/bad4d47c/index.html","a9b4bd91a06f4a851a6c13d92ba85c7c"],["/posts/bd97badf/index.html","b1274f6f146041ea155762744789c030"],["/posts/c04e6f2/index.html","8d1ffbea47a732a4272c9c6c36dde304"],["/posts/dbf4d938/index.html","c0217dde0cb7f6210f0730d980638bb9"],["/posts/e05b3ca8/index.html","865ac0aceed3833e81087119601f4387"],["/posts/ed76b39a/index.html","967b0ff581add53752f104428585690f"],["/posts/fcde4aed/index.html","f4cdb5bc72f2f42cc608ca9ffc15f7f9"],["/posts/fd47be9d/index.html","a8c8a4fe3fe91e3e2a5ca43451bbaf11"],["/random/index.html","eb82886d382f5195b2e5bb9bfb3ad25f"],["/sw-register.js","132c34f3d019d4a51d457e6b0eac67db"],["/tags/PWA/index.html","d4991a5459333a8dd2c63d4b78d8b081"],["/tags/TCP/index.html","c115b73d678d0e68b828bd1b16d085e4"],["/tags/dns污染/index.html","f04a986255c0ae1d4a0f03ee4b62a419"],["/tags/github/index.html","eae8e81e07db3def539d16b0c80961be"],["/tags/index.html","ce616a1c985d26bf3c9a46b47049335a"],["/tags/java/index.html","baf530a2c008eef1cd9cef836db52c35"],["/tags/mysql/index.html","0da6a88f19a412d93bee55877ebbf91b"],["/tags/vercel/index.html","c8b785457d0d213a833db1ea912e54b2"],["/tags/中考/index.html","84a5c1e23805d1e84354e234a43d1fae"],["/tags/乐观/index.html","ebbbc5b8d0469d9a8c65788bc7be1ab6"],["/tags/供应商/index.html","ea7c01d28bbf11fcf755ea95bfa23880"],["/tags/初中/index.html","006d42163d49f4e8d40bb3858bc51995"],["/tags/古诗/index.html","c3f63ca7f75ebdb4c6c52ff4fcb76d3e"],["/tags/域名/index.html","2e31152396dbc2b3331e28f6d43246bd"],["/tags/备案/index.html","77f146ec3d01b2840a32cd75dd04ae9b"],["/tags/套接字/index.html","5f96d75ac65fe1e7f196ceb21106c3ad"],["/tags/女儿红/index.html","bc7771b2aa0a0f7e6ca4e0ab72197a29"],["/tags/学习/index.html","aeb7bf87c5e340e01a7360575da7dd15"],["/tags/小草/index.html","4caac6e79e001290a062d3a2eede70ac"],["/tags/小说/index.html","eace5fb4454d9ea4b06e9b2d80344292"],["/tags/微虐/index.html","99d15900748e875ce24413c239cd386a"],["/tags/技术/index.html","4dace3c635092711e7d7a757567aad0d"],["/tags/故障/index.html","03d634fa6f57add5dac178b8826b589f"],["/tags/服务器/index.html","9292e87c35af59bd56266fa8154ca449"],["/tags/校园/index.html","b3ac73580fef8843f57d6827e98d8ffd"],["/tags/生活/index.html","c16621c7daa38b4c98983942d9e16a31"],["/tags/笔记/index.html","c8beafed3020d1ca95d087f9ccb32ace"],["/tags/结业/index.html","28f80dd8eb062279e7885212021820f5"],["/tags/编程/index.html","1c1d26cd5f0a771388223c2ea664a69e"],["/tags/网站/index.html","03680d1a5cce8c73f231d44a9871b9c2"],["/tags/网络安全/index.html","80bb8490da884acee1cf0e0a87df5ed6"],["/tags/网络编程/index.html","28973f67647fa27779e15eb3635259a9"],["/tags/遇见/index.html","55493d6a799e07c20ca727784c62b69b"],["/tags/随笔/index.html","b263d269b30b228595bf29666452bafe"],["/tags/青春/index.html","e2a0dce5a8f030af34bd9687382febb8"],["/tags/高中/index.html","f6ecba47ddc31577d09f6bc1df6ab30e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
