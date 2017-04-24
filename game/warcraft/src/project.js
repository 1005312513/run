require=function e(t,o,n){function c(s,r){if(!o[s]){if(!t[s]){var a="function"==typeof require&&require;if(!r&&a)return a(s,!0);if(i)return i(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=o[s]={exports:{}};t[s][0].call(u.exports,function(e){var o=t[s][1][e];return c(o?o:e)},u,u.exports,e,t,o,n)}return o[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)c(n[s]);return c}({bulletHandler:[function(e,t,o){"use strict";cc._RFpush(t,"2cee0u1D0VDQbPnQme6kq0R","bulletHandler"),cc.Class({"extends":cc.Component,properties:{},onCollisionEnter:function(e,t){t.node.destroy()},onLoad:function(){},unuse:function(){this.getComponent(cc.Animation).stop("bullet3")},reuse:function(e){this.getComponent(cc.Animation).play("bullet3")}}),cc._RFpop()},{}],bullet_loop:[function(e,t,o){"use strict";cc._RFpush(t,"b2da6RMUBNDDbBxVNJAGSN+","bullet_loop"),cc.Class({"extends":cc.Component,properties:{preBullet:{"default":null,type:cc.Prefab,displayName:"子弹形状设置",tooltip:"拖入预制文件"},bulletNumber:{"default":0,type:cc.Integer,displayName:"子弹数量设置",tooltip:"数量/s"},audio:{url:cc.AudioClip,"default":null}},onLoad:function(){this.schedule(this.creatBullet,1/this.bulletNumber),this.bulletPool=new cc.NodePool("bulletHandler")},creatBullet:function(){var e=this.bulletPool.get();this.current=cc.audioEngine.play(this.audio,!1,1),e||(cc.log("生产新子弹"),e=cc.instantiate(this.preBullet),e.addComponent("bulletHandler"));var t=this.node.getComponent("move").hero.getPosition();e.x=t.x,e.y=t.y+70,e.runAction(cc.sequence(cc.moveBy(1,0,500),cc.callFunc(this.removeNode,this,e))),this.node.addChild(e)},removeNode:function(e,t){this.bulletPool.put(t)}}),cc._RFpop()},{}],game:[function(e,t,o){"use strict";cc._RFpush(t,"af0dav+4TJIa5xTr2RhAE3c","game"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){},startScene:function(){cc.director.loadScene("gameScene")},gameScene:function(){cc.director.loadScene("overScene")},overScene:function(){cc.director.loadScene("startScene")}}),cc._RFpop()},{}],heroBlood:[function(e,t,o){"use strict";cc._RFpush(t,"9aaf0LRS8xKYr5m5/2t81Sm","heroBlood"),cc.Class({"extends":cc.Component,properties:{label:{"default":null,type:cc.Label},blood:{"default":null,type:cc.Sprite},touchingNumber:1,aaa:0},onEnable:function(){cc.director.getCollisionManager().enabled=!0},_updataFillStart:function(e,t){var o=e.fillRange,n=e.fillStart;this.touchingNumber>this.aaa&&n>0&&(n+=10*o/100,this.aaa=this.touchingNumber),e.fillStart=n,n<=0&&(this.getComponent(cc.Animation).play("hero_over"),cc.director.loadScene("overScene"))},onCollisionEnter:function(e,t){this.label.string="Collision on tag:"+e.tag,this.touchingNumber++,this._updataFillStart(this.blood)},updata:function(e){}}),cc._RFpop()},{}],monestHandler:[function(e,t,o){"use strict";cc._RFpush(t,"f15599McfpEQK1QYuN0madG","monestHandler"),cc.Class({"extends":cc.Component,properties:{},onCollisionEnter:function(e,t){t.node.destroy()},onLoad:function(){cc.director.getCollisionManager().enabled=!0},unuse:function(){cc.log("放入池中时处理")},reuse:function(e){cc.log("取出时预先处理")}}),cc._RFpop()},{}],monesterBlood:[function(e,t,o){"use strict";cc._RFpush(t,"71adeHvwChMgKo6KlfUugx1","monesterBlood"),cc.Class({"extends":cc.Component,properties:{blood:{"default":null,type:cc.Sprite},audio:{url:cc.AudioClip,"default":null,displayName:"怪物死亡声音",tooltip:"崩"},touchingNumber:1,aaa:0,bloodNumber:30,monesterScore:10},_updataFillStart:function(e,t){var o=e.fillRange,n=e.fillStart;this.touchingNumber>this.aaa&&n>0&&(n+=10*o/this.bloodNumber,this.aaa=this.touchingNumber),e.fillStart=n,n<=0&&(this.current=cc.audioEngine.play(this.audio,!1,1))},onCollisionEnter:function(e,t){this.touchingNumber++,this._updataFillStart(this.blood)}}),cc._RFpop()},{}],monesterLoop:[function(e,t,o){"use strict";cc._RFpush(t,"6d8b4NQ1c1GoJWonQr4YgW4","monesterLoop"),cc.Class({"extends":cc.Component,properties:{preMonest:{"default":null,type:cc.Prefab,displayName:"怪物类型",tooltip:"拖入预制文件"},monestNumber:{"default":0,type:cc.Integer,displayName:"怪物数量设置",tooltip:"数量/s"},scoreDisplay:{"default":null,type:cc.Label},score:0},onLoad:function(){this.schedule(this.creatMonest,1/this.monestNumber),this.monestPool=new cc.NodePool("monestHandler"),this.score=0},creatMonest:function(){var e=this.monestPool.get();e||(cc.log("产生新敌机"),e=cc.instantiate(this.preMonest),e.addComponent("monestHandler"));var t=this.node.getPosition();e.x=1280*Math.random(),e.y=t.y+960,this.node.addChild(e),e.runAction(cc.sequence(cc.moveBy(5,0,-2e3),cc.callFunc(this.removeNode,this,e)))},removeNode:function(e,t){cc.log("敌机回收"),this.monestPool.put(t)},gainScore:function(){this.scoreDisplay.string=this.score.toString()},updata:function(e){}}),cc._RFpop()},{}],move:[function(e,t,o){"use strict";cc._RFpush(t,"b908034PZFOw6n+6NXKOsfJ","move"),cc.Class({"extends":cc.Component,properties:{hero:{"default":null,type:cc.Node},background:{"default":null,type:cc.Node},speed:0,speedMax:0,speedA:0,xdirection:0,ydirection:0},onKeyPressed:function(e,t){var o=this;switch(e){case cc.KEY.a:case cc.KEY.left:o.xdirection=-1;break;case cc.KEY.d:case cc.KEY.right:o.xdirection=1;break;case cc.KEY.w:case cc.KEY.up:o.ydirection=1;break;case cc.KEY.s:case cc.KEY.down:o.ydirection=-1}},onKeyReleased:function(e,t){this.xdirection=0,this.ydirection=0,this.speed=0},setViewPoint:function(){var e=(cc.director.getVisibleSize(),cc.size.width/2),t=this.hero.x;Math.abs(t)>=e&&(cc.log("背景跟随"),this.background.x+=this.speed*xdirection)},onLoad:function(){cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:this.onKeyPressed.bind(this),onKeyReleased:this.onKeyReleased.bind(this)},this.node),this.onDrag()},onDrag:function(){this.node.on("touchmove",this.dragMove,this)},offDrag:function(){this.node.off("touchmove",this.dragMove,this)},dragMove:function(e){var t=e.getLocation(),o=this.node.parent.convertToNodeSpaceAR(t),n=-this.node.parent.width/2+this.node.width/2,c=-n,i=-this.node.parent.height/2+this.node.height/2,s=-i;o.x<n&&(o.x=n),o.x>c&&(o.x=c),o.y<i&&(o.y=i),o.y>s&&(o.y=s),this.node.setPosition(o)},update:function(e){0===this.xdirection&&0===this.ydirection?this.speed=0:Math.abs(this.speed)>this.speedMax?(this.speed=this.speedMax,log("最大速度")):this.speed+=this.speedA*e,this.hero.x+=this.speed*this.xdirection,this.hero.y+=this.speed*this.ydirection}}),cc._RFpop()},{}]},{},["bulletHandler","bullet_loop","game","heroBlood","monestHandler","monesterBlood","monesterLoop","move"]);