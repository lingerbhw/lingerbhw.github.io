/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","edec2a5052536aed14d5715ef4fc4a68"],["/archives/2022/03/index.html","cf5a08f39849910013623f1a50857059"],["/archives/2022/04/index.html","c751d6863c3eec0540a8c233455864a2"],["/archives/2022/05/index.html","1516ebe781671f5397c4fde458d19d71"],["/archives/2022/06/index.html","0d886cc482561dd20589cd6f78b5f03d"],["/archives/2022/07/index.html","3c9e8b088b5a7353425dc834a50348e6"],["/archives/2022/08/index.html","f7b7da083b8517d2b629f747f1a5bed7"],["/archives/2022/09/index.html","fd3edf5ac845954033208c4b631d5e4b"],["/archives/2022/10/index.html","e1f1361992bcb5c9d9c63dd4f1899408"],["/archives/2022/index.html","fcc27b162f222f81b0d21c0bcc30150a"],["/archives/2022/page/2/index.html","8acd96106b743cee732d18b29d3616b5"],["/archives/2022/page/3/index.html","76599bda070a649e59a6595501166b52"],["/archives/index.html","3dbc046f59e2bed77e89f71840b25141"],["/archives/page/2/index.html","7293424defe3e794f7bf50f106b42d1c"],["/archives/page/3/index.html","b5a5bb12d05b828a43b40b47887a63d4"],["/assets/algolia/algoliasearch.js","5e2249f3b4dd54b843b210ee8bc52d03"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","b3a72a06b977d5034f7cc843626e5520"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","96b26e7b42bf258f3aafe1268e7d4b11"],["/categories/仿写/index.html","940caff31679573e4909a9fd2531a29a"],["/categories/小说/index.html","f5e8c8f47c6acb5323a6d0c43b5c1bf9"],["/categories/技术/index.html","026b3a28cca316b85fd115d829de058b"],["/categories/搬运/index.html","5b57a7db792aed1ff4527254736c99da"],["/categories/闲笔/index.html","6be4b488c3d9c3b5cbfe8ec0d2bda11e"],["/categories/随笔/index.html","e3f19e85134a44ccb0df7f3f149c439f"],["/categories/青春，在路上/index.html","a3f1669f8b697f095f158532000f86bb"],["/css/coin.css","f85a120145a8e1742328e26fb575bf6b"],["/css/custom.css","42050c8970259c97e26b898a80d262a9"],["/css/custom/category.css","794340eb1096ca8cbd5f04048d87df34"],["/css/custom/fixed_comment.css","06aebbffbf5f1625d8a07a187a71f11b"],["/css/custom/twikoo_beautify.css","24b182170c87afcf0d89f4c858f89980"],["/css/font.css","0aa95e641d1df5049aae0b594ceda7e0"],["/css/index.css","4c4f25b949753d7a61846e31c35f90f9"],["/css/mouse.css","a351bc2d30e392293973709af9cb9c6c"],["/css/sweetalert.css","a0b6eb4604b78ae25c2d1eed5ab5801d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","2033239b4b3c1f784bfbaeb5b2f71f6c"],["/fonts/zhanku.ttf","0aceab97af2cd21dc57f76aceb1b1722"],["/fontsdest/zhanku-black.css","c22723225538641ab96fa8d3d03ac354"],["/fontsdest/zhanku-black.eot","dde5dc26a265dbca9fabf47d196c21c5"],["/fontsdest/zhanku-black.ttf","667e29df5204c48b235871c37ae58298"],["/fontsdest/zhanku-black.woff","9abe46d3931ac8b40367b49ed485f35b"],["/fontsdest/zhanku.css","7d9bdf5d50eef48e62ee9dc673bf3766"],["/fontsdest/zhanku.eot","2cbdef2e8d03df2c1737a2bb5ea2bdff"],["/fontsdest/zhanku.svg","cc39be489067393a060f1e183d2ebe58"],["/fontsdest/zhanku.ttf","7b3ab7c15f5969313769158db084302a"],["/fontsdest/zhanku.woff","e6b8ec8317d9f1bed5b6917ce2613549"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/siteicon/README.html","34f69af68e17adb1b0ec60803396ecbe"],["/img/siteicon/android-chrome-144x144.png","d3b0eba175129231d52675797dbcc069"],["/img/siteicon/android-chrome-192x192.png","8aa1cd785c06d1febc3aec11f0e24722"],["/img/siteicon/android-chrome-256x256.png","8d662dc4f38291167979579e3c2538fa"],["/img/siteicon/android-chrome-36x36.png","22523f91eadc57b8a3ae29ebc8821df3"],["/img/siteicon/android-chrome-384x384.png","b5b9c3d2e48d895f63c35a70de734e7b"],["/img/siteicon/android-chrome-48x48.png","f59747a8bad7fbf8126d389b27afe0ec"],["/img/siteicon/android-chrome-72x72.png","fe79344d3655e58143cd7c8b9248d5aa"],["/img/siteicon/android-chrome-96x96.png","27f31e09151590963b1376bbecb00ca4"],["/img/siteicon/apple-touch-icon.png","ed72616f4f7248496e607d9da8827bb3"],["/img/siteicon/favicon-16x16.png","521fda1215a9535284ec39878b18edb6"],["/img/siteicon/favicon-32x32.png","13439d86f09d7ba97533349d55f039b3"],["/img/siteicon/mstile-150x150.png","27f03cd56dcadc15fee89800fac72246"],["/img/siteicon/safari-pinned-tab.svg","90f36d2d8ef5d27fa9a36209dae4a714"],["/index.html","5e7b35ded86f2acfc59615cbce682005"],["/js/SAO-Notify.js","87a067ac23afd650231c648b6ea146e4"],["/js/background.js","dca71cb2a5b0835181137198baa12877"],["/js/coin.js","ece0c034a5406dcd817ad1e86bdca892"],["/js/custom/fixed_card_widget.js","d72529613747fdec43a2abd78c8eb378"],["/js/custom/fixed_comment.js","aaed4b64d48fd956a5828e5633d94e5e"],["/js/custom/nav.js","169f80bd2156d7edef5ee52763f93601"],["/js/fixed-pagination.js","f50994a09e5b8628c30f69e502695a5c"],["/js/galmenu.js","2f65c47f463bc4d8ca811fb6e78f0155"],["/js/grayscale.js","4500929864ab1c41161a33a7ea6d20e0"],["/js/local.js","5acc626a86a41071e5ac2181a38e7cf8"],["/js/main.js","e0db86387f35c33e688b94bce488c618"],["/js/mirror.js","00f1503476e90848e28a689cb98e599b"],["/js/runtime.js","ae4b50e84935a33ffcb691fbe972568a"],["/js/search/algolia.js","490ac3474717299789d089b966a95d33"],["/js/search/local-search.js","9a3fa909a665a2ea5c2717e91d4961bb"],["/js/sun_moon.js","f2da2435b944601fcf101144f1df4f18"],["/js/sweetalert.js","ba9e72fac94d74d5d82d1ac034acaa2f"],["/js/tw_cn.js","4b84207e490168db8faf5b25d98027e9"],["/js/utils.js","154cd33ff9d3d9bdcc4042423d7eac0a"],["/link/index.html","850fe7fada3b0876a4ebb55ae5895c6f"],["/message/index.html","8aca48b90df8882006ab0e6b1182dac6"],["/page/2/index.html","d895b97e63bec3dfd4a7faa12cd73492"],["/page/3/index.html","ba4e434632a689b07d99407d5a78b9c3"],["/posts/385fb4fc/index.html","0be05e03168a8bdfcba21340b2be0c46"],["/posts/53efd18f/index.html","d8eff96f5dfcbf214e572021215e58fc"],["/posts/5a0cf903/index.html","685940d708528eed0dc30603810e3a48"],["/posts/74594f81/index.html","b8145fa6baae19006d1fcd323b3d0d5f"],["/posts/7d7d33d7/index.html","8158ab0a9a2ac032ba021cf2ced75792"],["/posts/865aa801/index.html","9e999be3259b7d3546b40043d75cc87f"],["/posts/8e7565eb/index.html","e9e70e8a43847dc326b57a49512bdb74"],["/posts/98a65798/index.html","86886681c9e4e65e7703a726c3af340e"],["/posts/a089e4c9/index.html","cf8bdb752d35aad0990e691a61bad847"],["/posts/a2efad69/index.html","f1a085521d876b1df99d92abf9b319e2"],["/posts/a4cf88ab/index.html","a6b837165abc0b3e4d1f22881fc474e2"],["/posts/a5d91a10/index.html","a40762feadea589e278c86a50629b713"],["/posts/a839eca3/index.html","5d9481671672e6e6dea373384296e735"],["/posts/b2c041af/index.html","63b291014b1ddd34780027d880fcbfa5"],["/posts/bad4d47c/index.html","82837955cc6b3fde0b13717cc7606338"],["/posts/bd97badf/index.html","5898485a5bf0ad533208e6612456569a"],["/posts/c04e6f2/index.html","363a7683b8ef638e396b02787250d4a6"],["/posts/dbf4d938/index.html","7a7ca4ff7ae8c8829d3ec43bec707fa3"],["/posts/e05b3ca8/index.html","98a8b4fafd115a8f4fc3bea09f7019fb"],["/posts/ed76b39a/index.html","ca72db4f7c0e44bfe245018298ebe64b"],["/posts/fcde4aed/index.html","178c78bf133532351838a00b64ac785a"],["/posts/fd47be9d/index.html","d2fde89a722870b4e6bc5fa09f2df09c"],["/random/index.html","5134a6e443d5afe8b06838add1f9091e"],["/sw-register.js","4d9ec451831ef482a0a5a3ca309b1acf"],["/tags/PWA/index.html","5b338fed724955d3c2ea58d101a4812e"],["/tags/TCP/index.html","c81fcc636aa37655d705bb36babcbcd3"],["/tags/index.html","33a57af80ecacefea7db5671246ff459"],["/tags/java/index.html","4b1c2cb41618eac55346a664f9a1df5e"],["/tags/mysql/index.html","2495df242146ae2b25fc8ff4f99788fc"],["/tags/vercel/index.html","2cfcf7423ccf44232320728acb207666"],["/tags/中考/index.html","2154300f356d9f360fcb6083b71aecd8"],["/tags/乐观/index.html","cb4506ac5144679ea48a821a089209ed"],["/tags/供应商/index.html","10b154b5b16ef76b6f631730020c1b41"],["/tags/初中/index.html","313f2851306468275cb46b9cc73ac577"],["/tags/古诗/index.html","5f0cfbf83576d276d6b415eb46f9a2a1"],["/tags/域名/index.html","7ed86fca3a6d58d50ecf13b55782ecb3"],["/tags/备案/index.html","e873216c5b71da25fa495d4c824463af"],["/tags/套接字/index.html","039bf0b214e1d44394dca83f8528d7d8"],["/tags/女儿红/index.html","7e04d619de2d76cbfd09cd8905674dde"],["/tags/学习/index.html","f77914d22769f84f69f8ca83bddd7418"],["/tags/小草/index.html","2ac5314ecc87650e481148e203e9f37b"],["/tags/小说/index.html","109386890be52fdd9effd5153ef8dd8e"],["/tags/微虐/index.html","b23b85c39e3118546e691799c68fa824"],["/tags/技术/index.html","a0f1d769753f623dfb6fa89c06551224"],["/tags/故障/index.html","98b8249586543d97849b700d4db5233c"],["/tags/服务器/index.html","e65759e5d60baa476e02616ff86c4248"],["/tags/校园/index.html","a39e48c54b72e619a972fcc9ff2e3128"],["/tags/生活/index.html","c190aac881f4919a46a0ebf290a06886"],["/tags/笔记/index.html","f53ffcbd4374991b5a04c4bb9d558059"],["/tags/结业/index.html","b890e965e716b3431cd543e11cfbb181"],["/tags/编程/index.html","f3dfcab0948173e9aa6fe01a4a027d13"],["/tags/网站/index.html","3045b71aec84b237b749cf089d344ac7"],["/tags/网络安全/index.html","e1614d2ae4dc61d772fa5bf59e1e9ae0"],["/tags/网络编程/index.html","ae3c801f753a2a2d400cc517c1a8a7dc"],["/tags/遇见/index.html","f8fbea6cffab84b4a6a6ffd47098f360"],["/tags/随笔/index.html","70f8383f08552378d7ea52c2012d9982"],["/tags/青春/index.html","f88a9c69cd0a745fcfe751e3972bcee1"],["/tags/高中/index.html","e0cdfcb5358f720b17a9f6d159967265"]];
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
