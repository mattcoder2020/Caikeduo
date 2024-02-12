"use strict";(self.webpackChunkAccessManagment=self.webpackChunkAccessManagment||[]).push([[232],{4232:(M,g,s)=>{s.r(g),s.d(g,{ProductModule:()=>z});var h=s(4755),Z=s(4466),_=s(672),l=s(6304),r=s(5030),u=s(6104),p=s(939),t=s(2223),T=s(6899);let f=(()=>{class i{constructor(e){this.restService=e,this.apiName="Default",this.create=(o,n)=>this.restService.request({method:"POST",url:"/api/app/product-type",body:o},{apiName:this.apiName,...n}),this.delete=(o,n)=>this.restService.request({method:"DELETE",url:`/api/app/product-type/${o}`},{apiName:this.apiName,...n}),this.get=(o,n)=>this.restService.request({method:"GET",url:`/api/app/product-type/${o}`},{apiName:this.apiName,...n}),this.getList=(o,n)=>this.restService.request({method:"GET",url:"/api/app/product-type",params:{sorting:o.sorting,skipCount:o.skipCount,maxResultCount:o.maxResultCount}},{apiName:this.apiName,...n}),this.update=(o,n,c)=>this.restService.request({method:"PUT",url:`/api/app/product-type/${o}`,body:n},{apiName:this.apiName,...c})}static#t=this.\u0275fac=function(o){return new(o||i)(t.LFG(l.vgb))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var m=s(9585),b=s(4115);function x(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().row,c=t.oxw();return t.KtG(c.deleteProduct(n.id))}),t._uU(1),t.ALo(2,"abpLocalization"),t.qZA()}2&i&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"::passwordreset")," "))}function y(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"div",20)(1,"button",21),t.NdJ("click",function(){const c=t.CHM(e).row,a=t.oxw();return t.KtG(a.editProduct(c.id))}),t._uU(2),t.ALo(3,"abpLocalization"),t.qZA()(),t.TgZ(4,"div",22)(5,"button",23),t._UZ(6,"i",24),t._uU(7),t.ALo(8,"abpLocalization"),t.qZA(),t.TgZ(9,"div",25)(10,"button",26),t.NdJ("click",function(){const c=t.CHM(e).row,a=t.oxw();return t.KtG(a.editProduct(c.id))}),t._uU(11),t.ALo(12,"abpLocalization"),t.qZA(),t.TgZ(13,"button",26),t.NdJ("click",function(){const c=t.CHM(e).row,a=t.oxw();return t.KtG(a.deleteProduct(c.id))}),t._uU(14),t.ALo(15,"abpLocalization"),t.qZA(),t.YNc(16,x,3,3,"button",27),t.qZA()()}2&i&&(t.xp6(2),t.hij(" ",t.lcZ(3,5,"::Edit")," "),t.xp6(5),t.hij("",t.lcZ(8,7,"::moreActions")," "),t.xp6(4),t.hij(" ",t.lcZ(12,9,"::edit")," "),t.xp6(3),t.hij(" ",t.lcZ(15,11,"::delete")," "),t.xp6(2),t.Q6J("abpPermission","ProductManagement.Edit"))}function P(i,d){if(1&i&&(t.TgZ(0,"h3"),t._uU(1),t.ALo(2,"abpLocalization"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,e.selectedProduct&&e.selectedProduct.id?"::editproduct":"::newproduct"))}}function v(i,d){if(1&i&&(t.TgZ(0,"option",40),t._uU(1),t.qZA()),2&i){const e=d.$implicit;t.Q6J("ngValue",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function A(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"form",28),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.save())}),t.TgZ(1,"div",29)(2,"label",30),t._uU(3),t.ALo(4,"abpLocalization"),t.qZA(),t.TgZ(5,"span"),t._uU(6," * "),t.qZA(),t._UZ(7,"input",31),t.qZA(),t.TgZ(8,"div",29)(9,"label",32),t._uU(10),t.ALo(11,"abpLocalization"),t.qZA(),t.TgZ(12,"span"),t._uU(13," * "),t.qZA(),t._UZ(14,"input",33),t.qZA(),t.TgZ(15,"div",29)(16,"label",34),t._uU(17),t.ALo(18,"abpLocalization"),t.qZA(),t.TgZ(19,"span"),t._uU(20," * "),t.qZA(),t._UZ(21,"input",35),t.qZA(),t.TgZ(22,"div",29)(23,"label",36),t._uU(24),t.ALo(25,"abpLocalization"),t.qZA(),t.TgZ(26,"span"),t._uU(27," * "),t.qZA(),t._UZ(28,"input",37),t.qZA(),t.TgZ(29,"div",29)(30,"label",32),t._uU(31),t.ALo(32,"abpLocalization"),t.qZA(),t.TgZ(33,"span"),t._uU(34," * "),t.qZA(),t.TgZ(35,"select",38),t.YNc(36,v,2,2,"option",39),t.qZA()()()}if(2&i){const e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(3),t.Oqu(t.lcZ(4,7,"::productname")),t.xp6(7),t.Oqu(t.lcZ(11,9,"::description")),t.xp6(7),t.Oqu(t.lcZ(18,11,"::price")),t.xp6(7),t.Oqu(t.lcZ(25,13,"::cost")),t.xp6(7),t.Oqu(t.lcZ(32,15,"::productype")),t.xp6(5),t.Q6J("ngForOf",e.ProductTypes.items)}}function C(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"button",41),t._uU(1),t.ALo(2,"abpLocalization"),t.qZA(),t.TgZ(3,"button",42),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.save())}),t._UZ(4,"i",43),t._uU(5),t.ALo(6,"abpLocalization"),t.qZA()}if(2&i){const e=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,3,"::Close")," "),t.xp6(2),t.Q6J("disabled",e.form.invalid),t.xp6(2),t.hij(" ",t.lcZ(6,5,"::Save")," ")}}function q(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"div",16)(1,"button",17),t.NdJ("click",function(){const c=t.CHM(e).row,a=t.oxw();return t.KtG(a.edit(c.id))}),t._uU(2),t.ALo(3,"abpLocalization"),t.qZA()(),t.TgZ(4,"div",18)(5,"button",19),t._UZ(6,"i",20),t._uU(7),t.ALo(8,"abpLocalization"),t.qZA(),t.TgZ(9,"div",21)(10,"button",22),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.navigatetoproduct())}),t._uU(11),t.ALo(12,"abpLocalization"),t.qZA(),t.TgZ(13,"button",22),t.NdJ("click",function(){const c=t.CHM(e).row,a=t.oxw();return t.KtG(a.delete(c.id))}),t._uU(14),t.ALo(15,"abpLocalization"),t.qZA()()()}2&i&&(t.xp6(2),t.hij(" ",t.lcZ(3,4,"::Edit")," "),t.xp6(5),t.hij("",t.lcZ(8,6,"::moreActions")," "),t.xp6(4),t.hij(" ",t.lcZ(12,8,"::newproduct")," "),t.xp6(3),t.hij(" ",t.lcZ(15,10,"::delete")," "))}function U(i,d){if(1&i&&(t.TgZ(0,"h3"),t._uU(1),t.ALo(2,"abpLocalization"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,e.selectedProductType&&e.selectedProductType.id?"::editproducttype":"::newproducttype"))}}function w(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"form",23),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.save())}),t.TgZ(1,"div",24)(2,"label",25),t._uU(3),t.ALo(4,"abpLocalization"),t.qZA(),t.TgZ(5,"span"),t._uU(6," * "),t.qZA(),t._UZ(7,"input",26),t.qZA()()}if(2&i){const e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(3),t.Oqu(t.lcZ(4,2,"::name"))}}function N(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"button",27),t._uU(1),t.ALo(2,"abpLocalization"),t.qZA(),t.TgZ(3,"button",28),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.save())}),t._UZ(4,"i",29),t._uU(5),t.ALo(6,"abpLocalization"),t.qZA()}if(2&i){const e=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,3,"::Close")," "),t.xp6(2),t.Q6J("disabled",e.form.invalid),t.xp6(2),t.hij(" ",t.lcZ(6,5,"::Save")," ")}}const J=[{path:"productlist",component:(()=>{class i{constructor(e,o,n,c,a){this.list=e,this.ProductService=o,this.ProductTypeService=n,this.fb=c,this.confirmation=a,this.Products={items:[],totalCount:0},this.ProductTypes={items:[],totalCount:0},this.selectedProduct={},this.isModalOpen=!1}ngOnInit(){this.list.hookToQuery(n=>this.ProductService.getProductsWithDetail(n)).subscribe(n=>{this.Products=n}),this.list.hookToQuery(n=>this.ProductTypeService.getList(n)).subscribe(n=>{this.ProductTypes=n})}createProduct(){this.selectedProduct={},this.buildForm(),this.isModalOpen=!0}editProduct(e){this.ProductService.get(e).subscribe(o=>{this.selectedProduct=o,this.buildForm(),this.isModalOpen=!0})}getProductTypeName(e){const o=this.ProductTypes.items.find(n=>n.id===e);return o?o.name:"Unknown"}deleteProduct(e){this.confirmation.warn("::AreYouSureToDelete","AbpAccount::AreYouSure").subscribe(o=>{o===u.Tv.Status.confirm&&this.ProductService.delete(e).subscribe(()=>this.list.get())})}buildForm(){this.form=this.fb.group({id:[this.selectedProduct.id||null],name:[this.selectedProduct.name||null,r.Validators.required],price:[this.selectedProduct.price||null,r.Validators.required],description:[this.selectedProduct.description||null,r.Validators.required],cost:[this.selectedProduct.cost||null,r.Validators.required],productTypeId:[this.selectedProduct?.productType?.id||null]})}save(){this.form.invalid||(this.selectedProduct.id?this.ProductService.update(this.selectedProduct.id,this.form.value):this.ProductService.create(this.form.value)).subscribe(()=>{this.isModalOpen=!1,this.form.reset(),this.list.get()})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(l.XNV),t.Y36(T.M),t.Y36(f),t.Y36(r.qu),t.Y36(u.YP))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-product"]],features:[t._Bn([l.XNV,{provide:p.DO,useClass:p.s5}])],decls:35,vars:30,consts:[[1,"card"],[1,"card-body"],[1,"row","align-items-center"],[1,"col-6"],[1,"card-title"],["id","2div",1,"col-6","d-flex","justify-content-end"],["id","create","type","button",1,"btn","btn-primary",3,"click"],[1,"fa","fa-plus","me-1"],["default","",3,"rows","count","list"],["prop","name",3,"name"],["prop","description",3,"name"],["prop","price",3,"name"],["prop","cost",3,"name"],["prop","productType.name",3,"name"],[3,"name","maxWidth","sortable"],["ngx-datatable-cell-template",""],[3,"visible","visibleChange"],["abpHeader",""],["abpBody",""],["abpFooter",""],["role","group",1,"btn-group","mr-4"],[1,"btn","btn-sm","text-black","mr-2",3,"click"],["ngbDropdown","","container","body",1,"btn","btn-sm","border-0","bg-transparent"],["data-toggle","dropdown","aria-haspopup","true","ngbDropdownToggle","",1,"btn","btn-primary","btn-sm","dropdown-toggle"],[1,"fa","fa-cog","me-1"],["ngbDropdownMenu",""],["ngbDropdownItem","",3,"click"],["ngbDropdownItem","",3,"click",4,"abpPermission"],[3,"formGroup","ngSubmit"],[1,"mt-2"],["for","productname"],["type","text","id","name","formControlName","name","autofocus","",1,"form-control"],["for","storefullname"],["type","text","id","description","formControlName","description",1,"form-control"],["for","price"],["type","text","id","price","formControlName","price",1,"form-control"],["for","cost"],["type","text","id","cost","formControlName","cost",1,"form-control"],["id","productType","formControlName","productTypeId",1,"form-control"],[3,"ngValue",4,"ngFor","ngForOf"],[3,"ngValue"],["type","button","abpClose","",1,"btn","btn-secondary"],[1,"btn","btn-primary",3,"disabled","click"],[1,"fa","fa-check","mr-1"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),t._uU(5),t.ALo(6,"abpLocalization"),t.qZA()(),t.TgZ(7,"div",5)(8,"button",6),t.NdJ("click",function(){return n.createProduct()}),t._UZ(9,"i",7),t.TgZ(10,"span"),t._uU(11),t.ALo(12,"abpLocalization"),t.qZA()()()(),t.TgZ(13,"div",1)(14,"ngx-datatable",8),t._UZ(15,"ngx-datatable-column",9),t.ALo(16,"abpLocalization"),t._UZ(17,"ngx-datatable-column",10),t.ALo(18,"abpLocalization"),t._UZ(19,"ngx-datatable-column",11),t.ALo(20,"abpLocalization"),t._UZ(21,"ngx-datatable-column",12),t.ALo(22,"abpLocalization"),t._UZ(23,"ngx-datatable-column",13),t.ALo(24,"abpLocalization"),t.TgZ(25,"ngx-datatable-column",14),t.ALo(26,"abpLocalization"),t.YNc(27,y,17,13,"ng-template",15),t.qZA()()()(),t.TgZ(28,"abp-modal",16),t.NdJ("visibleChange",function(a){return n.isModalOpen=a}),t.YNc(29,P,3,3,"ng-template",null,17,t.W1O),t.YNc(31,A,37,17,"ng-template",null,18,t.W1O),t.YNc(33,C,7,7,"ng-template",null,19,t.W1O),t.qZA()()),2&o&&(t.xp6(5),t.hij(" ",t.lcZ(6,14,"::Menu:products")," "),t.xp6(6),t.Oqu(t.lcZ(12,16,"::newproduct")),t.xp6(3),t.Q6J("rows",n.Products.items)("count",n.Products.totalCount)("list",n.list),t.xp6(1),t.Q6J("name",t.lcZ(16,18,"::name")),t.xp6(2),t.Q6J("name",t.lcZ(18,20,"::description")),t.xp6(2),t.Q6J("name",t.lcZ(20,22,"::price")),t.xp6(2),t.Q6J("name",t.lcZ(22,24,"::cost")),t.xp6(2),t.Q6J("name",t.lcZ(24,26,"::producttype")),t.xp6(2),t.Q6J("name",t.lcZ(26,28,"::Actions"))("maxWidth",250)("sortable",!1),t.xp6(3),t.Q6J("visible",n.isModalOpen))},dependencies:[h.sg,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.sg,r.u,l.Uqp,l.YzZ,l.l97,m.nE,m.UC,m.vq,b.hL,b.J5,u.zS,u.x7,u.j3,u.YM,p.jt,p.iD,p.Vi,p.TH,l.fuE]})}return i})()},{path:"producttypelist",component:(()=>{class i{constructor(e,o,n,c,a){this.list=e,this.ProductTypeService=o,this.fb=n,this.confirmation=c,this.router=a,this.ProductTypes={items:[],totalCount:0},this.selectedProductType={},this.isModalOpen=!1}ngOnInit(){this.list.hookToQuery(o=>this.ProductTypeService.getList(o)).subscribe(o=>{this.ProductTypes=o})}create(){this.selectedProductType={},this.buildForm(),this.isModalOpen=!0}edit(e){this.ProductTypeService.get(e).subscribe(o=>{this.selectedProductType=o,this.buildForm(),this.isModalOpen=!0})}delete(e){this.confirmation.warn("::AreYouSureToDelete","AbpAccount::AreYouSure").subscribe(o=>{o===u.Tv.Status.confirm&&this.ProductTypeService.delete(e).subscribe(()=>this.list.get())})}buildForm(){this.form=this.fb.group({id:[this.selectedProductType.id||null],name:[this.selectedProductType.name||null,r.Validators.required]})}navigatetoproduct(){this.router.navigate(["/product/productlist"])}save(){this.form.invalid||(this.selectedProductType.id?this.ProductTypeService.update(this.selectedProductType.id,this.form.value):this.ProductTypeService.create(this.form.value)).subscribe(()=>{this.isModalOpen=!1,this.form.reset(),this.list.get()})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(l.XNV),t.Y36(f),t.Y36(r.qu),t.Y36(u.YP),t.Y36(_.F0))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-product-type"]],features:[t._Bn([l.XNV,{provide:p.DO,useClass:p.s5}])],decls:27,vars:18,consts:[[1,"card"],[1,"card-body"],[1,"row","align-items-center"],[1,"col-6"],[1,"card-title"],["id","2div",1,"col-6","d-flex","justify-content-end"],["id","create","type","button",1,"btn","btn-primary",3,"click"],[1,"fa","fa-plus","me-1"],["default","",3,"rows","count","list"],["prop","name",3,"name"],[3,"name","maxWidth","sortable"],["ngx-datatable-cell-template",""],[3,"visible","visibleChange"],["abpHeader",""],["abpBody",""],["abpFooter",""],["role","group",1,"btn-group","mr-4"],[1,"btn","btn-sm","text-black","mr-2",3,"click"],["ngbDropdown","","container","body",1,"btn","btn-sm","border-0","bg-transparent"],["data-toggle","dropdown","aria-haspopup","true","ngbDropdownToggle","",1,"btn","btn-primary","btn-sm","dropdown-toggle"],[1,"fa","fa-cog","me-1"],["ngbDropdownMenu",""],["ngbDropdownItem","",3,"click"],[3,"formGroup","ngSubmit"],[1,"mt-2"],["for","productname"],["type","text","id","name","formControlName","name","autofocus","",1,"form-control"],["type","button","abpClose","",1,"btn","btn-secondary"],[1,"btn","btn-primary",3,"disabled","click"],[1,"fa","fa-check","mr-1"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),t._uU(5),t.ALo(6,"abpLocalization"),t.qZA()(),t.TgZ(7,"div",5)(8,"button",6),t.NdJ("click",function(){return n.create()}),t._UZ(9,"i",7),t.TgZ(10,"span"),t._uU(11),t.ALo(12,"abpLocalization"),t.qZA()()()(),t.TgZ(13,"div",1)(14,"ngx-datatable",8),t._UZ(15,"ngx-datatable-column",9),t.ALo(16,"abpLocalization"),t.TgZ(17,"ngx-datatable-column",10),t.ALo(18,"abpLocalization"),t.YNc(19,q,16,12,"ng-template",11),t.qZA()()()(),t.TgZ(20,"abp-modal",12),t.NdJ("visibleChange",function(a){return n.isModalOpen=a}),t.YNc(21,U,3,3,"ng-template",null,13,t.W1O),t.YNc(23,w,8,4,"ng-template",null,14,t.W1O),t.YNc(25,N,7,7,"ng-template",null,15,t.W1O),t.qZA()()),2&o&&(t.xp6(5),t.hij(" ",t.lcZ(6,10,"::Menu:producttypes")," "),t.xp6(6),t.Oqu(t.lcZ(12,12,"::newproducttype")),t.xp6(3),t.Q6J("rows",n.ProductTypes.items)("count",n.ProductTypes.totalCount)("list",n.list),t.xp6(1),t.Q6J("name",t.lcZ(16,14,"::name")),t.xp6(2),t.Q6J("name",t.lcZ(18,16,"::Actions"))("maxWidth",250)("sortable",!1),t.xp6(3),t.Q6J("visible",n.isModalOpen))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,l.Uqp,l.YzZ,m.nE,m.UC,m.vq,b.hL,b.J5,u.zS,u.x7,u.j3,u.YM,p.jt,p.iD,p.Vi,p.TH,l.fuE]})}return i})()}];let S=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#o=this.\u0275inj=t.cJS({imports:[_.Bz.forChild(J),_.Bz]})}return i})(),z=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#o=this.\u0275inj=t.cJS({imports:[h.ez,Z.m,p.M,S]})}return i})()}}]);