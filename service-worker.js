if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const c=e=>a(e,d),b={module:{uri:d},exports:r,require:c};s[d]=Promise.all(f.map((e=>b[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-2572b17b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Java Code Review"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.1cb4e54f.js",revision:"be2faa72be8e768e7d8dc68d55b3e431"},{url:"assets/404.html.0c8252b8.js",revision:"d64b20567ce888f90e08ec9acbdd81f9"},{url:"assets/404.html.67c88182.js",revision:"22e143da9435754b5f3b397c7005b544"},{url:"assets/about.html.d3f21402.js",revision:"1603111c04398a7487d926563d9cd1b7"},{url:"assets/about.html.f81ed40a.js",revision:"a6c1be726abb727213b53dc1a386db31"},{url:"assets/app.08bc983c.js",revision:"0d78873ad37e6ca5687b83adfc0604f6"},{url:"assets/auto.esm.15d52109.js",revision:"3005710dc3beaf11158e79fe70a4c0aa"},{url:"assets/Blog.44d490ee.js",revision:"0683af5e611098f474702baa0f2f2cf0"},{url:"assets/cd001-tail-220515-152637.html.0bdec126.js",revision:"e3035859df6f46d0df5255245eb64c52"},{url:"assets/cd001-tail-220515-152637.html.106037b5.js",revision:"7cbc7886a1bf99de72fa9914d94598b1"},{url:"assets/giscus.es.d2953791.js",revision:"c74b717a7906a84e4a2b2b6ba19b0954"},{url:"assets/highlight.esm.d982e650.js",revision:"3457767fb4f7fe757ad6fb071f162a85"},{url:"assets/index.1842ee54.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.html.0319d1c3.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.07bde183.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.085de103.js",revision:"59a0ab2ce6c8b0daff273d31a7f593d2"},{url:"assets/index.html.086e72a7.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.0b7b1149.js",revision:"000a1a7ed913f65f7e633bcb8ab722ab"},{url:"assets/index.html.1174fbbd.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.1331f6ca.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.1a27f7aa.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.1e315145.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.3d73e669.js",revision:"f66d355775d7af24f66d60ad3bbcfb3f"},{url:"assets/index.html.3e212e81.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.43b527ea.js",revision:"f88cb222b617e42f2c83e731200606c2"},{url:"assets/index.html.443bd711.js",revision:"f177abf77ed4dd22399054fa93bb3cdc"},{url:"assets/index.html.514b72a3.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.5567e046.js",revision:"6b9e21f49ce90bdcdbcae33bbcef7070"},{url:"assets/index.html.5838873d.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.58d1e162.js",revision:"9b0a72c6ebae171b2073cf69e5f4e4bd"},{url:"assets/index.html.5a1feced.js",revision:"93bd6ce0ff03f9cd1b762450dbac38c8"},{url:"assets/index.html.6141dcc0.js",revision:"5ce5abcde4f3f43585cfff537cd5f89f"},{url:"assets/index.html.68943ec5.js",revision:"e3912a4fa21505595330f67289712127"},{url:"assets/index.html.6f74c186.js",revision:"ec92a120648b3e4360825000cdb39694"},{url:"assets/index.html.704becac.js",revision:"2bf0c0c62f3e92398447efb08ecf8d65"},{url:"assets/index.html.78b908ab.js",revision:"9a4ab08def98ccc7b81487aa6058d19b"},{url:"assets/index.html.92c8981b.js",revision:"e4d4fd73d81315507b8eba6a29c5ffd0"},{url:"assets/index.html.98ce3f09.js",revision:"04a7062fbc972a7d6b2182c51f68b903"},{url:"assets/index.html.9dd4ab20.js",revision:"2aff6bb954774977e699d2a628d9bd13"},{url:"assets/index.html.b2aca281.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.b74845c5.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.c022f3e7.js",revision:"b9d3a664c32a8cc5b7f6089317efc820"},{url:"assets/index.html.c33ebb31.js",revision:"9553eb42a70e96bb60a62dde3769d96d"},{url:"assets/index.html.c73d2264.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.cb1f4c3b.js",revision:"eb76b76f4165eceadaa5f3b47c438fa7"},{url:"assets/index.html.d273ea0a.js",revision:"7dccae9614e932ec016508b5f94fc9e1"},{url:"assets/index.html.d519c7c5.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.d5cc08ad.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.da6c3a69.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.df8aca48.js",revision:"b4ba86db1e9ab771dfdecc4e38323b80"},{url:"assets/index.html.e183d23e.js",revision:"17b33a52c43028a3a85d7f5424a37dc3"},{url:"assets/index.html.ebced840.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.ec6c3b7c.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.f2312a0b.js",revision:"a726781d610f5afbc2a226da2cc40520"},{url:"assets/index.html.f6034bf8.js",revision:"eb4e5671700e69fc92b90d9cf86ef16f"},{url:"assets/Layout.543cd2e3.js",revision:"c8eda65af520c80aa32ccde5b5816e93"},{url:"assets/markdown.esm.832a189d.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/math.esm.a3f84b6f.js",revision:"cbf844f27edbc061c86ae840d70389f6"},{url:"assets/mermaid.esm.min.b0d0e5eb.js",revision:"96ea39020aa3b8591ff7b428b1a0106c"},{url:"assets/notes.esm.3c361cb7.js",revision:"eda65c99450fe02da90bde90cc614a56"},{url:"assets/photoswipe.esm.92018b73.js",revision:"442a3264b1db7eb84ffc880407e7565d"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/reveal.esm.b96f05d8.js",revision:"f78a424fad98faac5d5ca8ebfbebe94b"},{url:"assets/search.esm.80da4a02.js",revision:"690b84c66badd2f8fa69d57bc7cdad19"},{url:"assets/SkipLink.d075609c.js",revision:"026fb77d5b0ca2328387b65dd0e11b79"},{url:"assets/Slide.1bbf88c3.js",revision:"f7dad6b8979729579a650b8419db2c90"},{url:"assets/style.3328e8e5.css",revision:"b9235c56c56c0cf5f7e694e0c6c96aab"},{url:"assets/sw01-join-this-project.html.1719e747.js",revision:"fc09787652ee2a4ee30b68b82ca62476"},{url:"assets/sw01-join-this-project.html.87ae79ab.js",revision:"5c8b7ebd38d0805046170c0532cd0e53"},{url:"assets/sw02-effective-java-3rd.html.05582b2b.js",revision:"8e12206cf700e5991aedbfeaed6d2c70"},{url:"assets/sw02-effective-java-3rd.html.a89bbbd2.js",revision:"2bf162cd003e4e3758c129d4b1bec7d3"},{url:"assets/sw03-pro-fessional-wings.html.4c346407.js",revision:"b096675045dfe4d7188bba888d070ae3"},{url:"assets/sw03-pro-fessional-wings.html.e9a9ccb5.js",revision:"08aeed6df68ae6cfc7995d8255930122"},{url:"assets/tr01-type-static-first.html.d74abd49.js",revision:"8ee7eb462922d426702fe198f4857b94"},{url:"assets/tr01-type-static-first.html.e17a9270.js",revision:"9ef001cfedc7b3e272256643b7775fa5"},{url:"assets/zoom.esm.8514a202.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"index.html",revision:"b50c3ad52c6731692cad759ca3d0b5a1"},{url:"404.html",revision:"e93da3045c05376d2db664585946125e"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map