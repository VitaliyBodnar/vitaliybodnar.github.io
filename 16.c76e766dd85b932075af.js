(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"04fK":function(e,t,n){"use strict";n.r(t),n.d(t,"CheckStatusApplicationModule",(function(){return $}));var r,o,a=n("ofXK"),i=n("3Pt+"),p=n("904P"),l=n("oW1M"),s=n("eFDl"),c=n("PCNd"),u=n("tyNb"),d=n("Ql4B"),m=n("fXoL"),E=n("mrSG"),f=n("z6cu"),I=n("JIr8"),g=n("nYR2"),C=n("1G5W"),h=n("l+2V"),R=n("fcMp"),O=n("V1FT"),_=n("gtvE"),T=n("x2pC"),S=n("Xznm"),P=n("KLjb"),b=((r={})[P.a.PROCESSING]={icon:"icon-processing-clock",caption:"MICROCREDIT.RESULT_PAGE.PROCESSING.TITLE",body:"MICROCREDIT.RESULT_PAGE.PROCESSING.BODY",buttonCaption:"BUTTONS.CLOSE",routeLink:"/home"},r[P.a.AVAILABLE]={icon:"icon-success-circle",caption:"MICROCREDIT.RESULT_PAGE.AVAILABLE.TITLE",body:"MICROCREDIT.RESULT_PAGE.AVAILABLE.BODY",buttonCaption:"BUTTONS.OPEN_ACCOUNT",routeLink:"/registration-choose"},r[P.a.UNAVAILABLE_OR_REVIEW]={icon:"icon-error-circle",caption:"MICROCREDIT.RESULT_PAGE.UNAVAILABLE_OR_REVIEW.TITLE",body:"MICROCREDIT.RESULT_PAGE.UNAVAILABLE_OR_REVIEW.BODY",buttonCaption:"BUTTONS.APPLY",routeLink:"/microcredit"},r[P.a.NEGATIVE]={icon:"icon-error-circle",caption:"MICROCREDIT.RESULT_PAGE.NEGATIVE.TITLE",body:"MICROCREDIT.RESULT_PAGE.NEGATIVE.BODY",buttonCaption:"BUTTONS.OF_COURSE",routeLink:"/home"},r[P.a.CALL_MISSED]={icon:"icon-error-circle",caption:"MICROCREDIT.RESULT_PAGE.CALL_MISSED.TITLE",body:"MICROCREDIT.RESULT_PAGE.CALL_MISSED.BODY",buttonCaption:"BUTTONS.APPLY",routeLink:"/microcredit"},r[P.a.TECHNICAL_ERROR]={icon:"icon-error-circle",caption:"MICROCREDIT.RESULT_PAGE.TECHNICAL_ERROR.TITLE",body:"MICROCREDIT.RESULT_PAGE.TECHNICAL_ERROR.BODY",buttonCaption:"BUTTONS.APPLY",routeLink:"/microcredit"},r);!function(e){e.UNKNOWN="ERROR:APP:001",e.INCORRECT_PHONE_NUMBER_OR_PASSWORD="ERROR:SIENNA:008",e.ERROR_NO_TICKET="ERROR:SIENNA:009",e.ERROR_NO_LIMIT="ERROR:SIENNA:010",e.ERROR_EXPIRED_LIMIT="ERROR:SIENNA:011"}(o||(o={}));var v=n("tk/3"),y=function(){function e(e){this.http=e}return e.prototype.checkStatusApplication=function(e){var t=this.getSpecialHeaders();return this.http.post(T.cc,e,{headers:t}).pipe(Object(I.a)((function(e){return Object(f.a)(e||"CheckStatusApplicationService checkStatusApplication() hasError !")})))},e.prototype.getSpecialHeaders=function(){return(new v.e).set("X-Systemcode","90")},e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275inject"](v.b))},e.\u0275prov=m["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),x=n("LzQu"),A=n("TMn8"),L=n("6fPx"),N=n("sYmb");function M(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div",6),m["\u0275\u0275elementStart"](1,"span"),m["\u0275\u0275text"](2),m["\u0275\u0275pipe"](3,"translate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](m["\u0275\u0275pipeBind1"](3,1,n.unexpectedErrorMessage))}}function w(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"li"),m["\u0275\u0275text"](1),m["\u0275\u0275pipe"](2,"translate"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind1"](2,1,"VALIDATIONS.REQUIRED")," "))}function D(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"li"),m["\u0275\u0275text"](1),m["\u0275\u0275pipe"](2,"translate"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind1"](2,1,"VALIDATIONS.INVALID_PHONE")," "))}function k(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"li"),m["\u0275\u0275text"](1),m["\u0275\u0275pipe"](2,"translate"),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"](3);m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind1"](2,1,null==n.phoneNumberControl.errors?null:n.phoneNumberControl.errors.phoneError)," ")}}function B(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ul",25),m["\u0275\u0275template"](1,w,3,3,"li",26),m["\u0275\u0275template"](2,D,3,3,"li",26),m["\u0275\u0275template"](3,k,3,3,"li",26),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",null==n.phoneNumberControl.errors?null:n.phoneNumberControl.errors.required),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",null==n.phoneNumberControl.errors?null:n.phoneNumberControl.errors.pattern),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",null==n.phoneNumberControl.errors?null:n.phoneNumberControl.errors.phoneError)}}function V(e,t){if(1&e&&(m["\u0275\u0275text"](0),m["\u0275\u0275pipe"](1,"translate"),m["\u0275\u0275pipe"](2,"translate")),2&e){var n=m["\u0275\u0275nextContext"](2);m["\u0275\u0275textInterpolate1"](" ",n.isVisiblePassword?m["\u0275\u0275pipeBind1"](1,1,"LOGIN.TOOLTIP.HIDE_PASSWORD"):m["\u0275\u0275pipeBind1"](2,3,"LOGIN.TOOLTIP.SHOW_PASSWORD")," ")}}var U=function(e){return{requiredLength:e}};function G(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ul",25),m["\u0275\u0275elementStart"](1,"li",27),m["\u0275\u0275text"](2),m["\u0275\u0275pipe"](3,"translate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"li",27),m["\u0275\u0275text"](5),m["\u0275\u0275pipe"](6,"translate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("hidden",!(null!=n.passwordControl.errors&&n.passwordControl.errors.required)),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind1"](3,4,"VALIDATIONS.REQUIRED")," "),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("hidden",!(null!=n.passwordControl.errors&&n.passwordControl.errors.minlength)),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind2"](6,6,"VALIDATIONS.REQUIRED_LENGTH_NUMBER",m["\u0275\u0275pureFunction1"](9,U,null==n.passwordControl.errors||null==n.passwordControl.errors.minlength?null:n.passwordControl.errors.minlength.requiredLength))," ")}}var j=function(e){return{"filter-blur-3":e}},H=function(e){return{mask:e}};function F(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"div",7),m["\u0275\u0275elementStart"](1,"div",8),m["\u0275\u0275elementStart"](2,"label",9),m["\u0275\u0275text"](3),m["\u0275\u0275pipe"](4,"translate"),m["\u0275\u0275elementStart"](5,"button",10),m["\u0275\u0275pipe"](6,"translate"),m["\u0275\u0275element"](7,"i",11),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"div",12),m["\u0275\u0275elementStart"](9,"div",13),m["\u0275\u0275elementStart"](10,"span",14),m["\u0275\u0275text"](11,"+380"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](12,"input",15),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](13,"div",16),m["\u0275\u0275template"](14,B,4,3,"ul",17),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](15,"div",8),m["\u0275\u0275elementStart"](16,"label",18),m["\u0275\u0275text"](17),m["\u0275\u0275pipe"](18,"translate"),m["\u0275\u0275elementStart"](19,"button",10),m["\u0275\u0275pipe"](20,"translate"),m["\u0275\u0275element"](21,"i",11),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](22,"div",19),m["\u0275\u0275element"](23,"input",20),m["\u0275\u0275pipe"](24,"translate"),m["\u0275\u0275template"](25,V,3,5,"ng-template",null,21,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementStart"](27,"div",22),m["\u0275\u0275elementStart"](28,"button",23),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().changeTypePasswordText()})),m["\u0275\u0275element"](29,"i"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](30,"div",16),m["\u0275\u0275template"](31,G,7,11,"ul",17),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](32,"button",24),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().onSubmit()})),m["\u0275\u0275text"](33),m["\u0275\u0275pipe"](34,"translate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var r=m["\u0275\u0275reference"](26),o=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("formGroup",o.form)("ngClass",m["\u0275\u0275pureFunction1"](31,j,o.isShowLoader)),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind1"](4,19,"MICROCREDIT.CREDIT_REQUEST_FORM.PHONE")," "),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("tooltip",m["\u0275\u0275pipeBind1"](6,21,"MICROCREDIT.CHECK_STATUS_APPLICATION_PAGE.PHONE_TOOLTIP")),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("ngClass",o.controlClass(o.phoneNumberControl)),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("textMask",m["\u0275\u0275pureFunction1"](33,H,o.phoneMask)),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngIf",o.isControlInvalid(o.phoneNumberControl)),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind1"](18,23,"LOGIN.LABEL.PASSWORD")," "),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("tooltip",m["\u0275\u0275pipeBind1"](20,25,"MICROCREDIT.CHECK_STATUS_APPLICATION_PAGE.PASSWORD_TOOLTIP")),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("ngClass",o.isControlInvalid(o.passwordControl)?"is-invalid":""),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("type",o.passwordInputType)("textMask",m["\u0275\u0275pureFunction1"](35,H,o.sumMask))("placeholder",m["\u0275\u0275pipeBind1"](24,27,"LOGIN.PLACEHOLDER.ENTER_YOUR_PASSWORD")),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("tooltip",r),m["\u0275\u0275advance"](1),m["\u0275\u0275classMap"](o.isVisiblePassword?"i-visibility-off":"i-visibility"),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngIf",o.isControlInvalid(o.passwordControl)),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind1"](34,29,"MICROCREDIT.CREDIT_REQUEST_FORM.CONTINUE")," ")}}function W(e,t){1&e&&m["\u0275\u0275element"](0,"fuib-digital-preloader",28)}var z=function(e){function t(t,n,r,o,a){var i=e.call(this)||this;return i.formBuilder=t,i.router=n,i.changeDetectorRef=r,i.popupService=o,i.checkStatusApplicationService=a,i.resultTypePage=new m.EventEmitter(null),i.phoneMask=T.cb,i.passwordInputType="password",i.isShowLoader=!1,i.sumMask=Object(h.createNumberMask)({prefix:"",includeThousandsSeparator:!1,allowLeadingZeroes:!0,integerLimit:7}),i}return Object(E.d)(t,e),Object.defineProperty(t.prototype,"phoneNumberControl",{get:function(){return this.form.controls.phone},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"passwordControl",{get:function(){return this.form.controls.password},enumerable:!1,configurable:!0}),t.prototype.ngOnInit=function(){this.createForm()},t.prototype.ngOnDestroy=function(){this.destroy()},t.prototype.changeTypePasswordText=function(){this.passwordInputType="password"===this.passwordInputType?"text":"password",this.isVisiblePassword=!this.isVisiblePassword},t.prototype.onSubmit=function(){if(this.formSubmitAttempt=!0,this.form.valid){this.isShowLoader=!0;var e={phone:"+380"+this.form.getRawValue().phone.replace("(","").replace(")","").replace("-","").replace(" ",""),password:this.passwordControl.value};this.checkStatusApplication(e)}},t.prototype.isControlInvalid=function(e){return e.invalid&&e.touched||e.untouched&&this.formSubmitAttempt},t.prototype.controlClass=function(e){return this.isControlInvalid(e)?"is-invalid":""},t.prototype.createForm=function(){this.form=this.formBuilder.group({phone:["",i.Validators.compose([i.Validators.required,i.Validators.pattern(T.eb)])],password:["",i.Validators.compose([i.Validators.required,i.Validators.minLength(7),i.Validators.maxLength(7),S.b])]})},t.prototype.checkStatusApplication=function(e){var t=this;this.isShowLoader=!0,this.checkStatusApplicationService.checkStatusApplication(e).pipe(Object(I.a)((function(e){return t.handleError(e),Object(f.a)(e)})),Object(g.a)((function(){t.isShowLoader=!1,t.changeDetectorRef.detectChanges()})),Object(C.a)(this.componentDestroyed$)).subscribe((function(e){if(e.clientDocumentsStatusInfo.isUploaded||e.ticket.status!==P.c.VER)if(e.ticket.status===P.c.ERROR)t.resultTypePage.emit(P.a.TECHNICAL_ERROR);else if(e.ticket.status===P.c.CALL_MISSED)t.resultTypePage.emit(P.a.CALL_MISSED);else if(e.limit.status===P.b.AVAILABLE||e.limit.status===P.b.OVERDUE){var n=new Date(e.limit.dateInto).toLocaleDateString();b[P.a.AVAILABLE].bodyTranslateParams=[{name:"amount",value:e.limit.limitInit.toString()},{name:"expiredDate",value:n}],t.resultTypePage.emit(P.a.AVAILABLE)}else e.limit.status===P.b.PROCESSING?t.resultTypePage.emit(P.a.PROCESSING):e.limit.status===P.b.NEGATIVE?(n=new Date(e.limit.dateInto).toLocaleDateString(),b[P.a.NEGATIVE].bodyTranslateParams=[{name:"expiredDate",value:n}],t.resultTypePage.emit(P.a.NEGATIVE)):e.limit.status!==P.b.UNAVAILABLE&&e.limit.status!==P.b.REVIEW||t.resultTypePage.emit(P.a.UNAVAILABLE_OR_REVIEW);else t.router.navigate([x.c.MICROCREDIT_UPLOAD_DOCUMENTS],{queryParams:{ticketId:e.ticket.ticketId}})}))},t.prototype.handleError=function(e){var t=e.error;switch(t&&t.error&&t.error.code){case o.ERROR_EXPIRED_LIMIT:this.resultTypePage.emit(P.a.UNAVAILABLE_OR_REVIEW);break;case o.INCORRECT_PHONE_NUMBER_OR_PASSWORD:this.unexpectedErrorMessage=o.INCORRECT_PHONE_NUMBER_OR_PASSWORD;break;case o.UNKNOWN:case o.ERROR_NO_TICKET:case o.ERROR_NO_LIMIT:this.popupService.create({text:"MICROCREDIT.UNKNOWN_ERROR",buttons:[R.d.OK]})}this.changeDetectorRef.detectChanges()},t.\u0275fac=function(e){return new(e||t)(m["\u0275\u0275directiveInject"](i.FormBuilder),m["\u0275\u0275directiveInject"](u.d),m["\u0275\u0275directiveInject"](m.ChangeDetectorRef),m["\u0275\u0275directiveInject"](O.a),m["\u0275\u0275directiveInject"](y))},t.\u0275cmp=m["\u0275\u0275defineComponent"]({type:t,selectors:[["fuib-check-status-application-form"]],outputs:{resultTypePage:"resultTypePage"},features:[m["\u0275\u0275InheritDefinitionFeature"]],decls:8,vars:6,consts:[[1,"check-status-application__container","position-relative","d-flex","flex-column","align-items-center","justify-content-center","pt-2"],[1,"text-center","title"],[1,"error-container","mb-2"],["class","error-message",4,"ngIf"],["class","w-100",3,"formGroup","ngClass",4,"ngIf"],["class","loading loading-centered loading-sm",4,"ngIf"],[1,"error-message"],[1,"w-100",3,"formGroup","ngClass"],[1,"form-group"],["for","phone",1,"check-status-application__label"],["container","body","containerClass","white-tooltip questionnaire-tooltip",1,"check-status-application__tooltip",3,"tooltip"],[1,"fsz-1","i-question"],[1,"input-group","input-phone",3,"ngClass"],[1,"input-group-prepend"],[1,"input-group-text"],["id","phone","type","phone","formControlName","phone","inputmode","tel","placeholder","(00) 000-0000","fuibIsFocused","",1,"form-control",3,"textMask"],[1,"input-message-container"],["class","error-list",4,"ngIf"],["for","password",1,"d-flex","mb-0"],[1,"input-group",3,"ngClass"],["id","password","inputmode","decimal","formControlName","password","autocomplete","off","fuibIsFocused","",1,"form-control",3,"type","textMask","placeholder"],["passwordTooltip",""],[1,"input-group-append"],["type","button","tabindex","-1","container","body",1,"btn","input-group-text","input-group-icon",3,"tooltip","click"],["id","submitBtn","type","button",1,"check-status-application__submit","btn","btn-block","btn-primary","btn-lg","mt-4",3,"click"],[1,"error-list"],[4,"ngIf"],[3,"hidden"],[1,"loading","loading-centered","loading-sm"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"h4",1),m["\u0275\u0275text"](2),m["\u0275\u0275pipe"](3,"translate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"div",2),m["\u0275\u0275template"](5,M,4,3,"div",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](6,F,35,37,"div",4),m["\u0275\u0275template"](7,W,1,0,"fuib-digital-preloader",5),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind1"](3,4,"MICROCREDIT.CHECK_STATUS_APPLICATION_PAGE.CAPTION")," "),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("ngIf",t.unexpectedErrorMessage),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.form),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.isShowLoader))},directives:[a.t,i.NgControlStatusGroup,i.FormGroupDirective,a.q,l.l,i.DefaultValueAccessor,i.NgControlStatus,i.FormControlName,A.a,p.MaskedInputDirective,L.a],pipes:[N.d],styles:[".dropdown-menu[_ngcontent-%COMP%]{z-index:1080}.check-status-application__container[_ngcontent-%COMP%]{max-width:460px;margin:104px auto 0}.check-status-application__container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]{height:20px}.check-status-application__label[_ngcontent-%COMP%]{position:relative;display:flex}.check-status-application__tooltip[_ngcontent-%COMP%]{color:#93939e;display:flex;border:none;margin-left:10px;margin-top:2px;background:none;outline:none}.check-status-application__tooltip[_ngcontent-%COMP%]:hover{color:#f91f2b}@media (min-width:320px) and (max-width:768px){.check-status-application__submit[_ngcontent-%COMP%]{height:40px}}"],changeDetection:0}),t}(_.a),K=function(e){return[e]};function Y(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div",1),m["\u0275\u0275elementStart"](1,"div",2),m["\u0275\u0275element"](2,"img",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](3,"div",4),m["\u0275\u0275pipe"](4,"translate"),m["\u0275\u0275element"](5,"div",5),m["\u0275\u0275pipe"](6,"translate"),m["\u0275\u0275elementStart"](7,"button",6),m["\u0275\u0275text"](8),m["\u0275\u0275pipe"](9,"translate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("src",n.iconSrc,m["\u0275\u0275sanitizeUrl"]),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("innerHtml",m["\u0275\u0275pipeBind1"](4,5,n.resultPageParams.caption),m["\u0275\u0275sanitizeHtml"]),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("innerHtml",m["\u0275\u0275pipeBind2"](6,7,n.resultPageParams.body,n.bodyTranslateParams),m["\u0275\u0275sanitizeHtml"]),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("routerLink",m["\u0275\u0275pureFunction1"](12,K,n.resultPageParams.routeLink)),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind1"](9,10,n.resultPageParams.buttonCaption)," ")}}var q=function(){function e(){}return e.prototype.ngOnInit=function(){this.resultPageParams=b[this.resultType]},Object.defineProperty(e.prototype,"iconSrc",{get:function(){return"assets/icons/"+this.resultPageParams.icon+".svg"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bodyTranslateParams",{get:function(){return this.resultPageParams.bodyTranslateParams?this.resultPageParams.bodyTranslateParams.reduce((function(e,t){var n;return Object(E.a)(Object(E.a)({},e),((n={})[t.name]=t.value,n))}),{}):{}},enumerable:!1,configurable:!0}),e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["fuib-check-status-application-result-page"]],inputs:{resultType:"resultType"},decls:1,vars:1,consts:[["class","d-flex flex-column justify-content-center align-items-center result-page__container mx-auto mt-4 pt-4",4,"ngIf"],[1,"d-flex","flex-column","justify-content-center","align-items-center","result-page__container","mx-auto","mt-4","pt-4"],[1,"d-flex","mb-3","mt-5","pt-4"],["alt","Icon Credit Succeeded",3,"src"],[1,"d-flex","h5","mx-auto","mb-3","result-page__title",3,"innerHtml"],[1,"d-flex","mb-4","tac","result-page__message",3,"innerHtml"],["type","button",1,"btn","btn-primary","w-100","result-page__button","fsz-1-1",3,"routerLink"]],template:function(e,t){1&e&&m["\u0275\u0275template"](0,Y,10,14,"div",0),2&e&&m["\u0275\u0275property"]("ngIf",t.resultPageParams)},directives:[a.t,u.e],pipes:[N.d],styles:[".result-page__container[_ngcontent-%COMP%]{max-width:456px}.result-page__title[_ngcontent-%COMP%]{text-align:center;line-height:32px}@media (max-width:768px){.result-page__title[_ngcontent-%COMP%]{font-size:25px}}@media (max-width:768px){.result-page__message[_ngcontent-%COMP%]{font-size:14px}}.result-page__button[_ngcontent-%COMP%]{height:56px}@media (max-width:768px){.result-page__button[_ngcontent-%COMP%]{height:40px}}"],changeDetection:0}),e}();function Q(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"fuib-check-status-application-form",7),m["\u0275\u0275listener"]("resultTypePage",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().setResultTypePage(e)})),m["\u0275\u0275elementEnd"]()}}function X(e,t){if(1&e&&m["\u0275\u0275element"](0,"fuib-check-status-application-result-page",8),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("resultType",n.resultTypePage)}}var J=[{path:"",component:function(){function e(){}return e.prototype.setResultTypePage=function(e){this.resultTypePage=e},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["fuib-check-status-application"]],decls:7,vars:2,consts:[[1,"container","position-relative","pb-4"],[1,"form-wrap","mx-auto"],[1,"form-wrap-inner"],[1,"position-relative","pb-2"],[1,"outlet-wrap"],[3,"resultTypePage",4,"ngIf"],[3,"resultType",4,"ngIf"],[3,"resultTypePage"],[3,"resultType"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"section",1),m["\u0275\u0275elementStart"](2,"div",2),m["\u0275\u0275elementStart"](3,"div",3),m["\u0275\u0275elementStart"](4,"div",4),m["\u0275\u0275template"](5,Q,1,0,"fuib-check-status-application-form",5),m["\u0275\u0275template"](6,X,1,1,"fuib-check-status-application-result-page",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("ngIf",!t.resultTypePage),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.resultTypePage))},directives:[a.t,z,q],styles:[".dropdown-menu[_ngcontent-%COMP%]{z-index:1080}[_nghost-%COMP%]{display:flex;padding-top:112px;min-height:calc(100vh - 112px)}[_nghost-%COMP%]   section[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   section.form-wrap[_ngcontent-%COMP%]{max-width:500px!important;width:100%;min-width:200px}[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .form-wrap-inner[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .form-wrap-inner[_ngcontent-%COMP%]   .h-custom[_ngcontent-%COMP%]{height:90%}[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .form-wrap-inner[_ngcontent-%COMP%]   .h-custom[_ngcontent-%COMP%]   .outlet-wrap[_ngcontent-%COMP%]{height:100%}"],data:{animation:[d.h]},changeDetection:0}),e}()}],Z=function(){function e(){}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[u.h.forChild(J)],u.h]}),e}(),$=function(){function e(){}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,i.FormsModule,i.ReactiveFormsModule,c.a,l.m.forRoot(),Z,s.a.forRoot(),l.k.forRoot(),p.TextMaskModule]]}),e}()}}]);