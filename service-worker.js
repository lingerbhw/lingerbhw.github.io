if(!self.define){let e,a={};const i=(i,d)=>(i=new URL(i+".js",d).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(d,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let f={};const r=e=>i(e,c),b={module:{uri:c},exports:f,require:r};a[c]=Promise.all(d.map((e=>b[e]||r(e)))).then((e=>(s(...e),f)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"8f1b4123247e4dd9530536b7121181f4"},{url:"archives/2022/03/index.html",revision:"10bb8d2cc345582fa7b7ecd0c5ee0e77"},{url:"archives/2022/04/index.html",revision:"958ddb068d5f0d29d7e35003cac5b936"},{url:"archives/2022/05/index.html",revision:"4b8d0c7ad73e5352142159d3412ce6e1"},{url:"archives/2022/06/index.html",revision:"5f0b98de965b072422c0f8f473b513f7"},{url:"archives/2022/07/index.html",revision:"cd2062a82084164365ffd8e547e085d5"},{url:"archives/2022/index.html",revision:"27ab956a252c3c42cfd5bae7005f266a"},{url:"archives/2022/page/2/index.html",revision:"014c70fd0607bf7fc8a35cf8dbaa96ca"},{url:"archives/index.html",revision:"e3bf405f33fcce483d78138df52ec2fc"},{url:"archives/page/2/index.html",revision:"4ef65a3fd122ee02006af570cb3f67bd"},{url:"assets/algolia/algoliasearch.js",revision:"5e2249f3b4dd54b843b210ee8bc52d03"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"b3a72a06b977d5034f7cc843626e5520"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"d03e36c07135d4c9513d1b98ca170187"},{url:"categories/仿写/index.html",revision:"b445c02ad3fe9a630b974dabec0a4aae"},{url:"categories/小说/index.html",revision:"492c50db4839511097796300cdc5d81b"},{url:"categories/技术/index.html",revision:"878a30ce66097cb070c3d9d1d5f0cbac"},{url:"categories/搬运/index.html",revision:"0c608487d879c3192ca3acfbfa250e41"},{url:"categories/闲笔/index.html",revision:"d5341b6bfd9a168d6aada4d1b369b32f"},{url:"categories/青春，在路上/index.html",revision:"125e7a4c821b2b2f5ed7154bf830cd28"},{url:"css/coin.css",revision:"f85a120145a8e1742328e26fb575bf6b"},{url:"css/custom.css",revision:"0d36bb6c2750ed14c755d3f07a6e2f5f"},{url:"css/custom/twikoo_beautify.css",revision:"24b182170c87afcf0d89f4c858f89980"},{url:"css/font.css",revision:"00162a42cab09fc828f5d6147ab70077"},{url:"css/index.css",revision:"7af3d3ebffc44dfb7da9f41ec70cf478"},{url:"css/mouse.css",revision:"a351bc2d30e392293973709af9cb9c6c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/zhanku-black.ttf",revision:"b3c9f3645780fd1d064a6429b82ecba0"},{url:"fonts/zhanku.ttf",revision:"0aceab97af2cd21dc57f76aceb1b1722"},{url:"fontsdest/zhanku-black.css",revision:"9cca52f8042ae435104801bc5d4fc3d5"},{url:"fontsdest/zhanku-black.eot",revision:"660022ba2fd9056e3f01bdbd056ac4bc"},{url:"fontsdest/zhanku-black.svg",revision:"df6025d30d5d0e7510a3a7ad1657ac41"},{url:"fontsdest/zhanku-black.ttf",revision:"9f361fb0884caabc276ec0f1022e775b"},{url:"fontsdest/zhanku-black.woff",revision:"ed6c746461ba4acf2c2f3663bb1dedc8"},{url:"fontsdest/zhanku.css",revision:"7d9bdf5d50eef48e62ee9dc673bf3766"},{url:"fontsdest/zhanku.eot",revision:"d212ab564ecc2b59eda3ea9f76041c3c"},{url:"fontsdest/zhanku.svg",revision:"8759b84a5ecc7a1c84b3fd49cd4dd054"},{url:"fontsdest/zhanku.ttf",revision:"4dbdad65b34a7fa3816467b989c6f2b8"},{url:"fontsdest/zhanku.woff",revision:"87364ade584606b014f4462a07a0cde7"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"ae57d452b67691bcaafe9e722ffaf234"},{url:"js/background.js",revision:"dca71cb2a5b0835181137198baa12877"},{url:"js/coin.js",revision:"ece0c034a5406dcd817ad1e86bdca892"},{url:"js/crash.js",revision:"a68042305094c108d25bebe78ff29a17"},{url:"js/custom/fixed_card_widget.js",revision:"d72529613747fdec43a2abd78c8eb378"},{url:"js/custom/nav.js",revision:"169f80bd2156d7edef5ee52763f93601"},{url:"js/link-checker.js",revision:"9bea433caeafe396c922fd5886a4ad49"},{url:"js/main.js",revision:"e0db86387f35c33e688b94bce488c618"},{url:"js/runtime.js",revision:"ae4b50e84935a33ffcb691fbe972568a"},{url:"js/search/algolia.js",revision:"490ac3474717299789d089b966a95d33"},{url:"js/search/local-search.js",revision:"9a3fa909a665a2ea5c2717e91d4961bb"},{url:"js/sun_moon.js",revision:"f2da2435b944601fcf101144f1df4f18"},{url:"js/tw_cn.js",revision:"4b84207e490168db8faf5b25d98027e9"},{url:"js/utils.js",revision:"154cd33ff9d3d9bdcc4042423d7eac0a"},{url:"link/index.html",revision:"72ca21ee80f082abe106ed5e0558e7ef"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"19b81b16d0a2d65dc7e83ea7691cc276"},{url:"live2d-widget/demo/demo.html",revision:"47e43e92c243613ba8f8f7c62c77ab3b"},{url:"live2d-widget/demo/login.html",revision:"94fc2e501b4eb7068a7ccbc474c18412"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"a6e7c664ba7ac622f13375e2ac2b5e86"},{url:"live2d-widget/waifu-tips.js",revision:"d3e2fbd11aa5616da2239e8f104ab1fc"},{url:"live2d-widget/waifu.css",revision:"75b826812a7f170359c95867aac02777"},{url:"message/index.html",revision:"f484717841c2bcc34d5b33c22721d73b"},{url:"page/2/index.html",revision:"c48766803c56c2bb18ecb1b25e4d2bfb"},{url:"posts/53efd18f/index.html",revision:"29a284470c77dfd9e9ae95a5f00a81fb"},{url:"posts/5a0cf903/index.html",revision:"a8da5c230b42bc322e3426e6e3d40b11"},{url:"posts/74594f81/index.html",revision:"5938a55baee8ad7aca24650a34ff6747"},{url:"posts/7d7d33d7/index.html",revision:"e6808450677b0b7dc2088f6adc27f5ff"},{url:"posts/865aa801/index.html",revision:"220d88afb7af9794960fd35492b23948"},{url:"posts/8e7565eb/index.html",revision:"abb4e4b61ec56b4dcafe7bfae8f962f5"},{url:"posts/98a65798/index.html",revision:"f2c9d7f592661dde79e0047e00a6ef96"},{url:"posts/a089e4c9/index.html",revision:"56c04bb46ba7fc86b34aaa77bb2894f2"},{url:"posts/a2efad69/index.html",revision:"9845e0ae23800bae8a5c0f4b338ed124"},{url:"posts/a4cf88ab/index.html",revision:"d835ae7a64b08f82ea06451c2f44e912"},{url:"posts/a5d91a10/index.html",revision:"4d6de2471d9c9fafbbab50fd44fe5f1e"},{url:"posts/a839eca3/index.html",revision:"24f912b099b930990f4d7cf96cf26e17"},{url:"posts/b2c041af/index.html",revision:"5a91fe5fb2db42db2399d1a794e0da77"},{url:"posts/bad4d47c/index.html",revision:"7121cfd63ecea79dd9675aa48926eb76"},{url:"posts/bd97badf/index.html",revision:"fb3a2d8f5b12404180c44e9c450f23a1"},{url:"posts/c04e6f2/index.html",revision:"754e0264ffa26cd4b591649ff3cafe3d"},{url:"posts/ed76b39a/index.html",revision:"218b4255b28bb6af3e4bce78cf554188"},{url:"posts/fcde4aed/index.html",revision:"266c84a00fc51f92e29f2183f8123371"},{url:"random/index.html",revision:"f41dd2c5796fcd4679501bad5477c3b9"},{url:"tags/index.html",revision:"7ceb016e8fbfc17356af2b2fe8de70c4"},{url:"tags/java/index.html",revision:"11afb4910450b43499d3473bb22f73eb"},{url:"tags/mysql/index.html",revision:"e9eda0101393da533a97371100ada9cc"},{url:"tags/TCP/index.html",revision:"e422f6ca29158a4cbca2c8ef8f442aeb"},{url:"tags/中考/index.html",revision:"205ecea9412586e9d034a4c7fb478934"},{url:"tags/乐观/index.html",revision:"d340077557cdd0944b948e1067c546c8"},{url:"tags/供应商/index.html",revision:"1cbde56caf2c488e31855d3676033738"},{url:"tags/初中/index.html",revision:"054ac96d6d2a7b05d14033de9977f804"},{url:"tags/域名/index.html",revision:"a228cbd89b25ffe213fb63b901286a38"},{url:"tags/备案/index.html",revision:"2422dfb2a9366d75a9936dab5a987bb1"},{url:"tags/套接字/index.html",revision:"afe104abb7a7be76d0854f9b5fb2ffd6"},{url:"tags/女儿红/index.html",revision:"da95a50b964fc694b81dc6fe88a548b9"},{url:"tags/学习/index.html",revision:"9baf702c1ac0ad98a30a9dcd9892c354"},{url:"tags/小草/index.html",revision:"5739c77bd108c6ad0cff7ef01809248e"},{url:"tags/小说/index.html",revision:"13650ad90470b56486372959ee0a38e0"},{url:"tags/微虐/index.html",revision:"87a5e24fc213fda4a542506bd704eb64"},{url:"tags/服务器/index.html",revision:"8bcc4b81f3fe7a5f2733429ee0317b32"},{url:"tags/校园/index.html",revision:"c6f2c06a53bcd3ecb949297dc4eff716"},{url:"tags/生活/index.html",revision:"9c66d692fab4b5b787150a6f661f9c3e"},{url:"tags/笔记/index.html",revision:"d3740a0e4820077e8374099858af8a48"},{url:"tags/结业/index.html",revision:"a76b6ae834ed5d5b525b9b49a5c575c2"},{url:"tags/编程/index.html",revision:"6ffb7cedfb2a8b3c897351b2267ea63f"},{url:"tags/网站/index.html",revision:"7a80014fe55648a6f69ff3d0e5a9767c"},{url:"tags/网络安全/index.html",revision:"6a429b1b9eb5bdc9cfa61384409d514e"},{url:"tags/网络编程/index.html",revision:"32c7c71ab84ac48812aa87a257f9fa08"},{url:"tags/遇见/index.html",revision:"9cbb3d21e4bfbdd4291c4a1ecabe398e"},{url:"tags/青春/index.html",revision:"e559b28d2270bced0454fb4c3b075daf"},{url:"tags/高中/index.html",revision:"f680521be33277433a74ff65eb2b8161"}],{})}));
//# sourceMappingURL=service-worker.js.map
