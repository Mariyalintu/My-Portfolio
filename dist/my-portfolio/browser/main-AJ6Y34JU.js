import{a as b,b as F,c as w,e as P}from"./chunk-KQVRZIGJ.js";import{Ia as v,O as l,P as d,Pa as C,V as p,Z as h,aa as c,ab as R,oa as m,ta as u,ua as g,va as f,wa as y,xa as A}from"./chunk-HE6JJD22.js";var I=[{path:"portfolio-website",loadChildren:()=>import("./chunk-3GB22GTQ.js").then(i=>i.PortfolioWebsiteModule)}];var E="@",_=(()=>{class i{constructor(t,r,o,n,s){this.doc=t,this.delegate=r,this.zone=o,this.animationType=n,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=p(g,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-IQFGAQNT.js")).catch(r=>{throw new l(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc,this.scheduler);let n=new o(this.delegate,this._engine,this.zone);return this.delegate=n,n})}createRenderer(t,r){let o=this.delegate.createRenderer(t,r);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let n=new a(o);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let S=s.createRenderer(t,r);n.use(S)}).catch(s=>{n.use(o)}),n}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(r){u()}}static{this.\u0275prov=d({token:i,factory:i.\u0275fac})}}return i})(),a=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,o){this.delegate.insertBefore(e,t,r,o)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,o){this.delegate.setAttribute(e,t,r,o)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,o){this.delegate.setStyle(e,t,r,o)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(E)}};function M(i="animations"){return y("NgAsyncAnimations"),c([{provide:f,useFactory:(e,t,r)=>new _(e,t,r,i),deps:[R,b,A]},{provide:m,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var D={providers:[P(I),M()]};var N=(()=>{class i{constructor(){this.title="MyPortfolio"}static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275cmp=h({type:i,selectors:[["app-root"]],standalone:!0,features:[C],decls:1,vars:0,template:function(r,o){r&1&&v(0,"router-outlet")},dependencies:[w]})}}return i})();F(N,D).catch(i=>console.error(i));
