/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","778300fc5b22e4866733743b539b9160"],["/archives/2022/03/index.html","a847b226ed912034736e39f6b4e3a8b4"],["/archives/2022/04/index.html","47a0cd1f8e1d772a0145f8d9ab2246b4"],["/archives/2022/05/index.html","422a35b82d7662bef6c17531a9e6bd88"],["/archives/2022/06/index.html","87e1518bd2ae0168b17fefdb3aab16e2"],["/archives/2022/07/index.html","3f9f7e9cf415005aa59d7eb2ab61f860"],["/archives/2022/08/index.html","e4e9f30f6247e0c19a2c2ad7a276a35e"],["/archives/2022/09/index.html","cedb6148e19f3e6decc707d4b58812de"],["/archives/2022/10/index.html","3f97bb37c4759b9954e5be18f38dc379"],["/archives/2022/index.html","7d0d1fd41373f34b46ac7976784bcebd"],["/archives/2022/page/2/index.html","f1d1f04fcd898b1f368674d5590d5e7c"],["/archives/2022/page/3/index.html","0fb89c44adcd73677fa240605025fb68"],["/archives/index.html","14640fed4f3578b25807c7f6e8ff7963"],["/archives/page/2/index.html","4a59ac3d42289223306c356703e10178"],["/archives/page/3/index.html","cac713c925721190e58d4435a84e25c0"],["/assets/algolia/algoliasearch.js","5e2249f3b4dd54b843b210ee8bc52d03"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","b3a72a06b977d5034f7cc843626e5520"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","f1abafbfb174c9602e9ab50aa35f298b"],["/categories/仿写/index.html","4b7492d56d4ace2620787604c64f96d0"],["/categories/小说/index.html","af1068ee2e8b37740fbb52509f93333e"],["/categories/技术/index.html","d394731b1e6007aa2a13339e5b01067a"],["/categories/技术/page/2/index.html","b1979cf1edaec9b6fb6ef6c3b205dbe0"],["/categories/搬运/index.html","51500d7c794c020a0c6698d7d14acffc"],["/categories/闲笔/index.html","cf3532c38060175f4756a7bc2d17e881"],["/categories/随笔/index.html","d9f836004dcf38ab2d7e0a2ea152899f"],["/categories/青春，在路上/index.html","234bc6c0663aaa45a9ade5612a63114e"],["/css/coin.css","f85a120145a8e1742328e26fb575bf6b"],["/css/custom.css","80b64581de3327247921ac6b626e74b0"],["/css/custom/category.css","794340eb1096ca8cbd5f04048d87df34"],["/css/custom/fixed_comment.css","06aebbffbf5f1625d8a07a187a71f11b"],["/css/custom/twikoo_beautify.css","24b182170c87afcf0d89f4c858f89980"],["/css/font.css","0aa95e641d1df5049aae0b594ceda7e0"],["/css/index.css","4c4f25b949753d7a61846e31c35f90f9"],["/css/mouse.css","a351bc2d30e392293973709af9cb9c6c"],["/css/sweetalert.css","a0b6eb4604b78ae25c2d1eed5ab5801d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","0c5ec1a85cd9c54d921948c6b705df05"],["/fonts/zhanku.ttf","0aceab97af2cd21dc57f76aceb1b1722"],["/fontsdest/zhanku-black.css","c22723225538641ab96fa8d3d03ac354"],["/fontsdest/zhanku-black.eot","0791bed5863ca754878985fc99a42291"],["/fontsdest/zhanku-black.ttf","e361dd6c171fb0b0509faf1fc2f3f5f9"],["/fontsdest/zhanku-black.woff","6c52814d9a2197c932936dd63ecac92f"],["/fontsdest/zhanku.css","7d9bdf5d50eef48e62ee9dc673bf3766"],["/fontsdest/zhanku.eot","784c6587e0edd69182d140ee44ea5c07"],["/fontsdest/zhanku.svg","f150df356fd9f618798312904e1a4d6a"],["/fontsdest/zhanku.ttf","b3d2819682a12e402b0e0a581b53867e"],["/fontsdest/zhanku.woff","9f20e47d4adb3cf2e300b861f6401c73"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/siteicon/README.html","d589375186f2d26f9c34c778bd2ed08a"],["/img/siteicon/android-chrome-144x144.png","d3b0eba175129231d52675797dbcc069"],["/img/siteicon/android-chrome-192x192.png","8aa1cd785c06d1febc3aec11f0e24722"],["/img/siteicon/android-chrome-256x256.png","8d662dc4f38291167979579e3c2538fa"],["/img/siteicon/android-chrome-36x36.png","22523f91eadc57b8a3ae29ebc8821df3"],["/img/siteicon/android-chrome-384x384.png","b5b9c3d2e48d895f63c35a70de734e7b"],["/img/siteicon/android-chrome-48x48.png","f59747a8bad7fbf8126d389b27afe0ec"],["/img/siteicon/android-chrome-72x72.png","fe79344d3655e58143cd7c8b9248d5aa"],["/img/siteicon/android-chrome-96x96.png","27f31e09151590963b1376bbecb00ca4"],["/img/siteicon/apple-touch-icon.png","ed72616f4f7248496e607d9da8827bb3"],["/img/siteicon/favicon-16x16.png","521fda1215a9535284ec39878b18edb6"],["/img/siteicon/favicon-32x32.png","13439d86f09d7ba97533349d55f039b3"],["/img/siteicon/mstile-150x150.png","27f03cd56dcadc15fee89800fac72246"],["/img/siteicon/safari-pinned-tab.svg","90f36d2d8ef5d27fa9a36209dae4a714"],["/index.html","6b9342c355bba6191364cd28715dee96"],["/js/SAO-Notify.js","87a067ac23afd650231c648b6ea146e4"],["/js/background.js","dca71cb2a5b0835181137198baa12877"],["/js/coin.js","ece0c034a5406dcd817ad1e86bdca892"],["/js/custom/fixed_card_widget.js","d72529613747fdec43a2abd78c8eb378"],["/js/custom/fixed_comment.js","aaed4b64d48fd956a5828e5633d94e5e"],["/js/custom/nav.js","169f80bd2156d7edef5ee52763f93601"],["/js/fixed-pagination.js","f50994a09e5b8628c30f69e502695a5c"],["/js/galmenu.js","2f65c47f463bc4d8ca811fb6e78f0155"],["/js/grayscale.js","4500929864ab1c41161a33a7ea6d20e0"],["/js/local.js","5acc626a86a41071e5ac2181a38e7cf8"],["/js/main.js","e0db86387f35c33e688b94bce488c618"],["/js/mirror.js","00f1503476e90848e28a689cb98e599b"],["/js/runtime.js","ae4b50e84935a33ffcb691fbe972568a"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/sun_moon.js","f2da2435b944601fcf101144f1df4f18"],["/js/sweetalert.js","ba9e72fac94d74d5d82d1ac034acaa2f"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","611b9d5082b00ad083da017d0821833b"],["/message/index.html","9cc718bc5853f2374ca113b2295abd5a"],["/page/2/index.html","0e12a61249376791f7b20bbb1380232a"],["/page/3/index.html","f743bc60b06cc94c5b8a63a9ba56b477"],["/posts/385fb4fc/index.html","cc76867da3bd9697bdf362d0ef20b6fb"],["/posts/53efd18f/index.html","3b9e132c1305a30dabf2297f73ff204e"],["/posts/56d1295c/index.html","62fc94c6b7d155dd64e713f0bf7828ea"],["/posts/5a0cf903/index.html","ca37551d43c43f9f82ca8221b4ec3fc5"],["/posts/74594f81/index.html","49ea022c225db0eff55ec9081ad07072"],["/posts/7d7d33d7/index.html","4566e82e9b1ffc69de8650133891a921"],["/posts/865aa801/index.html","ca923a3d179c8272a8f6e34f82451aac"],["/posts/8e7565eb/index.html","c21152cf3b1b20de055b25d20ea55235"],["/posts/98a65798/index.html","4c3c03730c856a4be45746b816168f0e"],["/posts/a089e4c9/index.html","21cd64f775a5de715f2a6c53e3e879a0"],["/posts/a2efad69/index.html","3114512852308cc18273e1029c080e69"],["/posts/a4cf88ab/index.html","577b19abd0ba1d1dddbf66914572a477"],["/posts/a5d91a10/index.html","4d510a45ffae4d0960dee7b825c1c713"],["/posts/a839eca3/index.html","d4a4f6b61a49f146b4fdd577eae2f608"],["/posts/b2c041af/index.html","5e8ade2485c4b38ea260f1663154bd20"],["/posts/bad4d47c/index.html","78ba75f0c82bb840433346e9787ca074"],["/posts/bd97badf/index.html","7b4a6e11ce128feff5972988290cc164"],["/posts/c04e6f2/index.html","a7521b0fd9a3d4cb9ff1da5046a68bcd"],["/posts/dbf4d938/index.html","c6beb9ddea6483db14a57bbd95005814"],["/posts/e05b3ca8/index.html","f19116dcff1aaa0912ef886e3a1b4cf8"],["/posts/ed76b39a/index.html","bcd3a9b1d1226e8c8b07d4cb3837ae54"],["/posts/fcde4aed/index.html","4425b54173a620c2701f362bbf796966"],["/posts/fd47be9d/index.html","fe36510635cfe61bf6a2165a06579dec"],["/random/index.html","7f19045268f5d0e31066d635c46802c0"],["/sw-register.js","e1f5de2f4eb710015db2b7a93ba37cf1"],["/tags/PWA/index.html","ec9a63311b101e7253ec6b1871066819"],["/tags/TCP/index.html","95db0dd45b0619b2e699ca489e633e09"],["/tags/dns污染/index.html","238602e194e4568edd11aa19a4ae49fc"],["/tags/github/index.html","e1876364063d83c01fec4ce39242c021"],["/tags/index.html","a1e15a1d2aeb374ee71141f397ef098b"],["/tags/java/index.html","b5eabe485a5c4d39a792e3f4749986cc"],["/tags/mysql/index.html","7107d4b9ec727e2893a6b94df541d71a"],["/tags/vercel/index.html","bf3c6f125849049358acf5823eb91088"],["/tags/中考/index.html","7e120a6263786c9dc3ab6166da4c15c0"],["/tags/乐观/index.html","8d9e6b884708f6300c731c7081e5e4e5"],["/tags/供应商/index.html","df50c7e1c53cddb2f7e6c2ec440ccda3"],["/tags/初中/index.html","ef5fd1110f08726319c15de89738c4ad"],["/tags/古诗/index.html","9705b7fb6eb36a066505cb995d1a8788"],["/tags/域名/index.html","874e846475048bb2599086a354d59de6"],["/tags/备案/index.html","9a171f1c632d8176da84baeed230aba3"],["/tags/套接字/index.html","99ce1b39a121b3a33c4c6213a7f7324f"],["/tags/女儿红/index.html","82d809a19fc7341bec04725d9318c5e9"],["/tags/学习/index.html","8795400f26657ea68413d7888e325356"],["/tags/小草/index.html","f2f2569ba00fa33cbafc581d29349e28"],["/tags/小说/index.html","7d97a351f9903c53c9c8396fcf749a53"],["/tags/微虐/index.html","39f9ecfaa1f23a16de26c0ac5880b4c4"],["/tags/技术/index.html","b9b8e798ab7164f6f97bf927f0cd8546"],["/tags/故障/index.html","2763066e5137c75f30d34deaebc2663a"],["/tags/服务器/index.html","2b9cae45ac0500e163fa019c5c5b44ed"],["/tags/校园/index.html","a75ec06dab310a26d5e99094c61f0b58"],["/tags/生活/index.html","a141c6fe7b54016689cfd092afb11223"],["/tags/笔记/index.html","0b094368629999acb8d34048e69dfdcd"],["/tags/结业/index.html","0d7659d71e2da61ce42d856776be6b01"],["/tags/编程/index.html","cd180e89e51c20bc444c92d675b18c9a"],["/tags/网站/index.html","384bebe34a2c2aeb69847135699af7df"],["/tags/网络安全/index.html","cf718896ee2db86ab51640716f7170e1"],["/tags/网络编程/index.html","a5747b219ae4c7e5c6b7ebb08ca41715"],["/tags/遇见/index.html","1f74deb75806f33d2862db2d98e9448d"],["/tags/随笔/index.html","3a88a2a00a0f877434cf9f619e955ff0"],["/tags/青春/index.html","150cc7cf246961ce388cb52ce2386509"],["/tags/高中/index.html","b855d6d166a19c79b3fc7a178f2edd0e"]];
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
