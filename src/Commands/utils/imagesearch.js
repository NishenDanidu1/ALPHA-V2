const _0x44ff27=_0x40bd;(function(_0xaaf9ed,_0x48e1a1){const _0x258f36=_0x40bd,_0x12352a=_0xaaf9ed();while(!![]){try{const _0x256376=-parseInt(_0x258f36(0x16a))/0x1+-parseInt(_0x258f36(0x170))/0x2+parseInt(_0x258f36(0x176))/0x3*(parseInt(_0x258f36(0x16e))/0x4)+parseInt(_0x258f36(0x16f))/0x5+parseInt(_0x258f36(0x174))/0x6+-parseInt(_0x258f36(0x171))/0x7+parseInt(_0x258f36(0x173))/0x8*(parseInt(_0x258f36(0x17d))/0x9);if(_0x256376===_0x48e1a1)break;else _0x12352a['push'](_0x12352a['shift']());}catch(_0x1385a7){_0x12352a['push'](_0x12352a['shift']());}}}(_0x3e0e,0x4d454));function _0x3e0e(){const _0x40b893=['2572045zLcLsg','624166lSZTzX','1849526nPIHEJ','from','128ksOvtq','1059594anFZzM','Here\x20you\x20go','1737CwnARc','utils','Could\x20not\x20find\x20the\x20searched\x20term','image','sendMessage','exports','googlethis','400509wvnrUD','549595DDIcBv','Sorry\x20you\x20did\x20not\x20give\x20any\x20search\x20term!','nsfw','Searches\x20image\x20from\x20google.com','272xuxHvx'];_0x3e0e=function(){return _0x40b893;};return _0x3e0e();}const google=require(_0x44ff27(0x17c));function _0x40bd(_0x2ec080,_0x1f5a01){const _0x3e0e3d=_0x3e0e();return _0x40bd=function(_0x40bda0,_0x38f0e6){_0x40bda0=_0x40bda0-0x16a;let _0x3ec879=_0x3e0e3d[_0x40bda0];return _0x3ec879;},_0x40bd(_0x2ec080,_0x1f5a01);}module[_0x44ff27(0x17b)]={'name':'imagesearch','aliases':['imgs'],'category':_0x44ff27(0x177),'exp':0x7,'description':_0x44ff27(0x16d),async 'execute'(_0x439f9b,_0x3e7f07,_0x2b9113,_0x313845){const _0x354f17=_0x44ff27;if(!_0x2b9113)return _0x313845['reply'](_0x354f17(0x16b));const _0x2bbc2e=await _0x439f9b['DB']['get'](_0x354f17(0x16c))||[],_0x281b34=await google[_0x354f17(0x179)](_0x2b9113,{'safe':_0x2bbc2e['includes'](_0x313845[_0x354f17(0x172)])})['catch'](_0x4ef8a0=>{const _0xc06d25=_0x354f17;return _0x313845['reply'](_0xc06d25(0x178));});_0x439f9b[_0x354f17(0x17a)](_0x313845[_0x354f17(0x172)],{'image':{'url':_0x281b34[0x0]['url']},'caption':_0x354f17(0x175)});}};