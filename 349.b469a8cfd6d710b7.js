(self.webpackChunkmerch_store=self.webpackChunkmerch_store||[]).push([[349],{7349:(m,l,i)=>{"use strict";i.r(l),i.d(l,{default:()=>D});var e=i(1635);var s=i(7988),y=i.n(s),n=i(4438),a=i(5152),r=i(2864),v=i(2234),b=i(5964),o=i(8141),f=i(5558),C=i(152),P=i(980),h=i(177),k=i(9079),S=i(9417),z=i(8834),A=i(9213),L=i(4710),O=i(7673),R=i(1413),p=i(1716);let x=class{};x=(0,e.Cg)([(0,n.uAl)({selector:"app-product-list-wrapper",standalone:!0,imports:[h.MD],template:"<ng-content></ng-content>",providers:[{provide:p.YE,useValue:p.v.ProductList}],styles:[""]})],x);var Q=i(4633);let u=class{};u=(0,e.Cg)([(0,n.uAl)({selector:"app-recommendations-wrapper",standalone:!0,imports:[h.MD],template:"<ng-content></ng-content>",providers:[{provide:p.YE,useValue:p.v.Recommendation}],styles:[""]})],u);let g=class{cartDataService=(0,n.WQX)(a.Wv);specialService=(0,n.WQX)(a.Fp);bannerService=(0,n.WQX)(r.zR);focusService=(0,n.WQX)(a.c4);destroyRef=(0,n.WQX)(n.abz);router=(0,n.WQX)(L.Ix);userService=(0,n.WQX)(a.DL);isTabletOrLower=(0,n.WQX)(a.RL).isTabletOrLower;skeletonProductsConfig={height:"158px",width:"100%",border:"1px solid white",borderRadius:"8px"};skeletonSummaryConfig={height:"100%",width:"100%",border:"1px solid white"};loading=(0,n.vPA)(!1);mayAlsoLikeProducts=(0,n.vPA)([]);isLoadingMayAlsoLikeProducts=(0,n.vPA)(!1);isDisplayMayAlsoLikeCarousel=(0,n.vPA)(!0);recentlyViewedProducts=(0,n.vPA)([]);isLoadingRecentlyViewedProducts=(0,n.vPA)(!1);popularProducts=(0,n.vPA)([]);cartUpdateLoading=(0,n.vPA)(!1);vm=(0,n.EWP)(()=>({productCard:this.cartDataService.productDetailsCart(),loading:this.loading(),isEmpty:!this.cartDataService.productDetailsCart()?.products.length}));uniqBrandIdsFromCart=(0,n.EWP)(()=>[...new Set((this.cartDataService.productDetailsCart()?.products??[]).map(t=>t.brandId))]);cartProductsIds=(0,n.EWP)(()=>this.cartDataService.productDetailsCart()?.products.map(t=>t.productId)??[]);constructor(){(0,n.QZP)(()=>{this.cartProductsIds()?.length?this.fetchMayAlsoLikeProducts():this.isDisplayMayAlsoLikeCarousel.set(!1)},{allowSignalWrites:!0})}ngOnInit(){this.bindFetchProductsCallToHttpRequest(),this.fetchProducts(),this.fetchDataForCarousels(),this.fetchMayAlsoLikeProducts()}fetchMayAlsoLikeProducts(){(0,O.of)(this.cartProductsIds()).pipe((0,b.p)(t=>!!t&&!!t?.length),(0,o.M)(()=>this.isLoadingMayAlsoLikeProducts.set(!0)),(0,f.n)(t=>this.specialService.getYouMayAlsoLikeItems(t))).subscribe(t=>{this.mayAlsoLikeProducts.set(t),this.isLoadingMayAlsoLikeProducts.set(!1),this.isDisplayMayAlsoLikeCarousel.set(!!t.length)})}redirectToCheckout(){this.vm().productCard?.products?.every(d=>d.isAvailable)?this.router.navigate([a.K_.CHECKOUT]):this.bannerService.error("Error","You have one or more items in your cart that is no longer available. Please remove it to continue to checkout.")}onContinueShopping(){this.router.navigate([a.K_.ROOT]).then(()=>this.focusService.focusHeaderAction())}triggerFetchProducts=new R.B;bindFetchProductsCallToHttpRequest(){this.triggerFetchProducts.asObservable().pipe((0,k.pQ)(this.destroyRef),(0,C.B)(200),(0,o.M)(t=>{t&&this.loading.set(!0)}),(0,f.n)(t=>this.cartDataService.fetchProductCart().pipe((0,P.j)(()=>t&&this.loading.set(!1))))).subscribe()}fetchProducts(t=!0){this.triggerFetchProducts.next(t)}fetchDataForCarousels(){this.specialService.getRecentlyViewed({count:8},()=>{}),this.specialService.getMostPopular({},()=>{}),this.specialService.popularSubject.subscribe(t=>{t.length>0&&this.popularProducts.set(t)}),this.isLoadingRecentlyViewedProducts.set(!0),this.specialService.recentlyViewedSubject.subscribe(t=>{this.isLoadingRecentlyViewedProducts.set(!1),this.recentlyViewedProducts.set(t)})}onUpdate({productId:t,quantity:d}){this.cartUpdateLoading.set(!0),this.cartDataService.updateProduct({productId:t,quantity:d}).pipe((0,o.M)(()=>this.cartDataService.optimisticProductUpdate(t,d)),(0,o.M)(()=>this.fetchProducts(!1))).subscribe()}onRemove({productId:t}){this.cartDataService.removeProduct(t).pipe((0,o.M)(()=>this.cartDataService.optimisticProductRemove(t)),(0,o.M)(()=>this.fetchProducts(!1))).subscribe()}static ctorParameters=()=>[]};g=(0,e.Cg)([(0,n.uAl)({selector:"app-cart",template:'@if (vm(); as vm) {\n  <div class="wrapper box-container">\n    <h1 class="category-heading">Cart</h1>\n    <div class="carts-wrapper">\n      @if (vm.loading) {\n        <div class="list">\n          <ngx-skeleton-loader\n            animation="progress-dark"\n            [count]="3"\n            [theme]="skeletonProductsConfig"\n          ></ngx-skeleton-loader>\n        </div>\n        <div class="summary">\n          <ngx-skeleton-loader\n            animation="progress-dark"\n            [count]="1"\n            [theme]="skeletonSummaryConfig"\n          ></ngx-skeleton-loader>\n        </div>\n      } @else if (!vm.isEmpty) {\n        <app-product-list-wrapper>\n          <div class="list">\n            <p class="subheading-2 cart-list-title">Your items</p>\n            <div class="cart-items-wrapper">\n              @for (product of vm.productCard?.products; track product.productId) {\n                <lib-cart-item\n                  [product]="product"\n                  (quantityChange)="onUpdate($event)"\n                  (remove)="onRemove($event)"\n                ></lib-cart-item>\n              }\n            </div>\n            <div class="mobile-summary">\n              <ng-container *ngTemplateOutlet="summaryTpl; context: { vm }"></ng-container>\n            </div>\n            <div class="actions">\n              <button\n                mat-stroked-button\n                (click)="onContinueShopping()"\n                trackClick\n                [trackClick]="{ item: \'list > continue\', linkName: \'Continue shopping\' }"\n              >\n                Continue shopping\n              </button>\n              <button\n                mat-raised-button\n                (click)="redirectToCheckout()"\n                trackClick\n                [trackClick]="{ item: \'list > checkout\', linkName: \'Go to checkou\' }"\n              >\n                Go to checkout\n              </button>\n            </div>\n          </div>\n        </app-product-list-wrapper>\n        <div class="summary">\n          <ng-container *ngTemplateOutlet="summaryTpl; context: { vm }"></ng-container>\n        </div>\n        <div class="additional-summary">\n          <div class="totals">\n            <p>Subtotal</p>\n            <div class="values">\n              <p>\n                <span class="cta">{{ vm.productCard.subtotalPrice | currency }}</span>\n                or\n                {{ vm.productCard.subtotalPrice * (userService.balance()?.conversionRate ?? 0) | appDigitsGrouping }}\n                pts\n              </p>\n              \x3c!-- @if (vm.productCard.isPromo) {\n                <span class="invalid body-2">\n                  {{ vm.productCard.subtotalPriceOriginal | currency }}\n                  or {{ vm.productCard.subtotalPointsOriginal | number }} pts\n                </span>\n              } --\x3e\n              <p class="at-checkout body-2">Shipping and tax finalized at checkout</p>\n            </div>\n          </div>\n          <div class="summary-actions">\n            <button\n              mat-stroked-button\n              (click)="onContinueShopping()"\n              trackClick\n              [trackClick]="{ item: \'list > continue\', linkName: \'Continue shopping\' }"\n            >\n              Continue shopping\n            </button>\n            <button\n              mat-raised-button\n              (click)="redirectToCheckout()"\n              trackClick\n              [trackClick]="{ item: \'list > checkout\', linkName: \'Go to checkou\' }"\n            >\n              Go to checkout\n            </button>\n          </div>\n        </div>\n      } @else {\n        <div class="empty">\n          <mat-icon class="large-icon empty-icon" svgIcon="ico_cart_empty" aria-label="Cart"></mat-icon>\n          <h3 class="category-heading">Your cart is empty</h3>\n          <p class="body-1">Explore our brands, new arrivals and more.</p>\n          <button\n            class="continue-btn"\n            mat-raised-button\n            (click)="onContinueShopping()"\n            trackClick\n            [trackClick]="{ item: \'list > continue\', linkName: \'Continue shopping\' }"\n          >\n            Continue shopping\n          </button>\n        </div>\n      }\n    </div>\n  </div>\n}\n<div class="cart-container">\n  @if (isDisplayMayAlsoLikeCarousel()) {\n    <app-recommendations-wrapper>\n      <lib-product-card-slider\n        title="You may also like"\n        subTitle="Similar to items you have in a cart."\n        [products]="mayAlsoLikeProducts()"\n        [isLoading]="isLoadingMayAlsoLikeProducts()"\n        [withAction]="false"\n      ></lib-product-card-slider>\n    </app-recommendations-wrapper>\n  }\n\n  <app-recently-viewed-slider-wrapper>\n    <lib-product-card-slider\n      title="Recently viewed"\n      [products]="recentlyViewedProducts()"\n      [isLoading]="isLoadingRecentlyViewedProducts()"\n      [withAction]="false"\n    ></lib-product-card-slider>\n  </app-recently-viewed-slider-wrapper>\n</div>\n\n<ng-template #summaryTpl let-vm="vm">\n  @if (!isTabletOrLower()) {\n    <p class="subheading-2">Cart Summary</p>\n  }\n  <div class="divider"></div>\n  <app-cart-total-info [data]="vm?.productCard" [hideTax]="true"></app-cart-total-info>\n</ng-template>\n',changeDetection:n.Ngq.OnPush,standalone:!0,imports:[A.An,h.MD,z.$z,S.YN,r.TK,v.Yq,r.Qo,r.cK,r.Y0,x,p.nj,Q.S,u],styles:[y()]}),(0,e.Sn)("design:paramtypes",[])],g);const D=g},7988:(m,l,i)=>{var e=i(8564),s=i(8557)(e);s.push([m.id,'@font-face {\n  font-family: "Queens";\n  src: url("/assets/fonts/Queens/Queens_W-Regular.woff2") format("woff2"), url("/assets/fonts/Queens/Queens_W-Regular.woff") format("woff");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Queens";\n  src: url("/assets/fonts/Queens/Queens_W-Italic.woff2") format("woff2"), url("/assets/fonts/Queens/Queens_W-Italic.woff") format("woff");\n  font-weight: 400;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Queens";\n  src: url("/assets/fonts/Queens/Queens_W-Bold.woff2") format("woff2"), url("/assets/fonts/Queens/Queens_W-Bold.woff") format("woff");\n  font-weight: 500;\n  font-style: bold;\n}\n.heading-1 {\n  font-size: 64px !important;\n  line-height: 88px !important;\n  font-weight: 300 !important;\n  font-family: "Open Sans", sans-serif !important;\n  letter-spacing: 0 !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .heading-1 {\n    font-size: 36px !important;\n    line-height: 44px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .heading-1 {\n    font-size: 36px !important;\n    line-height: 44px !important;\n  }\n}\n\n.heading-2 {\n  font-size: 64px !important;\n  line-height: 88px !important;\n  font-weight: 400 !important;\n  font-family: "Queens", sans-serif !important;\n  letter-spacing: 0 !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .heading-2 {\n    font-size: 36px !important;\n    line-height: 44px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .heading-2 {\n    font-size: 36px !important;\n    line-height: 44px !important;\n  }\n}\n\n.heading-3 {\n  font-size: 24px !important;\n  line-height: 32px !important;\n  font-weight: 500 !important;\n  font-family: "Open Sans", sans-serif !important;\n  letter-spacing: 0.32px !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .heading-3 {\n    font-size: 18px !important;\n    line-height: 28px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .heading-3 {\n    font-size: 18px !important;\n    line-height: 28px !important;\n  }\n}\n\n.heading-4 {\n  font-size: 20px !important;\n  line-height: 28px !important;\n  font-weight: 500 !important;\n  font-family: "Open Sans", sans-serif !important;\n  letter-spacing: 0.32px !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .heading-4 {\n    font-size: 14px !important;\n    line-height: 20px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .heading-4 {\n    font-size: 14px !important;\n    line-height: 20px !important;\n  }\n}\n\n.category-heading {\n  font-size: 40px !important;\n  line-height: 48px !important;\n  font-weight: 400 !important;\n  font-family: "Queens", sans-serif !important;\n  letter-spacing: 0 !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .category-heading {\n    font-size: 36px !important;\n    line-height: 44px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .category-heading {\n    font-size: 36px !important;\n    line-height: 44px !important;\n  }\n}\n\n.h1, h1 {\n  font-size: 18px !important;\n  line-height: 28px !important;\n  font-weight: 600 !important;\n  font-family: "Open Sans", sans-serif !important;\n  letter-spacing: -0.8px !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .h1, h1 {\n    font-size: 14px !important;\n    line-height: 20px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .h1, h1 {\n    font-size: 14px !important;\n    line-height: 20px !important;\n  }\n}\n\n.h2, h2 {\n  font-size: 18px !important;\n  line-height: 28px !important;\n  font-weight: 400 !important;\n  font-family: "Queens", sans-serif !important;\n  letter-spacing: 0 !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .h2, h2 {\n    font-size: 14px !important;\n    line-height: 20px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .h2, h2 {\n    font-size: 14px !important;\n    line-height: 20px !important;\n  }\n}\n\n.subheading-1 {\n  font-size: 16px !important;\n  line-height: 16px !important;\n  font-weight: 600 !important;\n  font-family: "Open Sans", sans-serif !important;\n  letter-spacing: 0 !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .subheading-1 {\n    font-size: 14px !important;\n    line-height: 14px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .subheading-1 {\n    font-size: 14px !important;\n    line-height: 14px !important;\n  }\n}\n\n.subheading-2 {\n  font-size: 28px !important;\n  line-height: 28px !important;\n  font-weight: 400 !important;\n  font-family: "Queens", sans-serif !important;\n  letter-spacing: 0 !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .subheading-2 {\n    font-size: 20px !important;\n    line-height: 20px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .subheading-2 {\n    font-size: 20px !important;\n    line-height: 20px !important;\n  }\n}\n\n.body-0 {\n  font-size: 16px !important;\n  line-height: 24px !important;\n  font-weight: 400 !important;\n  font-family: "Open Sans", sans-serif !important;\n  letter-spacing: 0 !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .body-0 {\n    font-size: 14px !important;\n    line-height: 20px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .body-0 {\n    font-size: 14px !important;\n    line-height: 20px !important;\n  }\n}\n\n.body-1 {\n  font-size: 14px !important;\n  line-height: 20px !important;\n  font-weight: 400 !important;\n  font-family: "Open Sans", sans-serif !important;\n  letter-spacing: 0 !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .body-1 {\n    font-size: 12px !important;\n    line-height: 16px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .body-1 {\n    font-size: 12px !important;\n    line-height: 16px !important;\n  }\n}\n\n.body-2 {\n  font-size: 12px !important;\n  line-height: 16px !important;\n  font-weight: 400 !important;\n  font-family: "Open Sans", sans-serif !important;\n  letter-spacing: 0 !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .body-2 {\n    font-size: 10px !important;\n    line-height: 12px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .body-2 {\n    font-size: 10px !important;\n    line-height: 12px !important;\n  }\n}\n\n.cta {\n  font-size: 18px !important;\n  line-height: 28px !important;\n  font-weight: 600 !important;\n  font-family: "Open Sans", sans-serif !important;\n  letter-spacing: 0.8px !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .cta {\n    font-size: 16px !important;\n    line-height: 24px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .cta {\n    font-size: 16px !important;\n    line-height: 24px !important;\n  }\n}\n\n.label {\n  font-size: 14px !important;\n  line-height: 14px !important;\n  font-weight: 500 !important;\n  font-family: "Open Sans", sans-serif !important;\n  letter-spacing: 1.4px !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .label {\n    font-size: 12px !important;\n    line-height: 12px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .label {\n    font-size: 12px !important;\n    line-height: 12px !important;\n  }\n}\n\n.label-2 {\n  font-size: 16px !important;\n  line-height: 16px !important;\n  font-weight: 500 !important;\n  font-family: "Open Sans", sans-serif !important;\n  letter-spacing: 1.6px !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .label-2 {\n    font-size: 14px !important;\n    line-height: 14px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .label-2 {\n    font-size: 14px !important;\n    line-height: 14px !important;\n  }\n}\n\n.link {\n  font-size: 16px !important;\n  line-height: 24px !important;\n  font-weight: 600 !important;\n  font-family: "Open Sans", sans-serif !important;\n  letter-spacing: 0 !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .link {\n    font-size: 16px !important;\n    line-height: 24px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .link {\n    font-size: 16px !important;\n    line-height: 24px !important;\n  }\n}\n\n.breadcrumb {\n  font-size: 12px !important;\n  line-height: 16px !important;\n  font-weight: 500 !important;\n  font-family: "Open Sans", sans-serif !important;\n  letter-spacing: 0 !important;\n  margin: 0 !important;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .breadcrumb {\n    font-size: 12px !important;\n    line-height: 16px !important;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .breadcrumb {\n    font-size: 12px !important;\n    line-height: 16px !important;\n  }\n}\n\n.uppercase {\n  text-transform: uppercase;\n}\n\n.old-price {\n  color: #747578;\n  text-decoration: line-through;\n}\n\n.no-wrap {\n  white-space: nowrap;\n}\n\n:host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 24px;\n  gap: 24px;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  :host {\n    padding: 8px;\n    padding-top: 48px;\n  }\n}\n@media (min-width: 480px) {\n  :host {\n    padding-top: 56px;\n  }\n}\n@media (min-width: 1200px) {\n  :host {\n    padding-top: 40px;\n  }\n}\n:host ::ng-deep .mat-mdc-outlined-button:not(:disabled) {\n  border-color: #2e2e2e !important;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 64px;\n  width: -webkit-fill-available;\n}\n\n@media (min-width: 481px) and (max-width: 1024px) {\n  h1 {\n    margin-top: 20px;\n  }\n}\n\n.carts-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  margin: 28px 0;\n}\n@media (min-width: 1024px) and (max-width: 19000px) {\n  .carts-wrapper {\n    flex-wrap: nowrap;\n  }\n}\n\n.list {\n  background: white;\n  border-radius: 12px;\n  flex: 1;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 1024px) and (max-width: 19000px) {\n  .list {\n    gap: 24px;\n  }\n}\n\n.summary {\n  display: none;\n  background: white;\n  border-radius: 12px;\n  padding: 16px;\n  max-width: 450px;\n  height: 290px;\n  width: 100%;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n}\n@media (min-width: 1024px) and (max-width: 19000px) {\n  .summary {\n    display: block;\n  }\n}\n\n.totals {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.total {\n  color: #2e2e2e;\n}\n\n.total-item {\n  display: flex;\n  justify-content: space-between;\n}\n\n.divider-line {\n  border-bottom: 1px solid black;\n}\n\n.quantity {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.divider {\n  margin: 15px 0;\n}\n\n.invalid {\n  text-decoration: line-through;\n  color: #747578;\n}\n\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 35px;\n  width: 100%;\n  justify-content: center;\n}\n.empty .continue-btn {\n  width: 280px;\n}\n\n.empty-icon {\n  width: 48px !important;\n  height: 48px !important;\n}\n\n.cart-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 64px;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .cart-container {\n    max-width: 1440px;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .cart-container {\n    max-width: 672px;\n  }\n}\n@media (min-width: 1200px) and (max-width: 19000px) {\n  .cart-container {\n    max-width: 1440px;\n  }\n}\n\n.mobile-summary {\n  margin: 40px 0;\n}\n.mobile-summary .divider,\n.mobile-summary span.h2 {\n  display: none;\n}\n@media (min-width: 1024px) and (max-width: 19000px) {\n  .mobile-summary {\n    display: none;\n  }\n}\n@media (max-width: 480px) {\n  .mobile-summary .totals {\n    padding: 0 16px;\n  }\n}\n\n.additional-summary {\n  display: none;\n  background: white;\n  padding: 16px;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 9;\n  position: fixed;\n  max-width: 600px;\n  width: 100%;\n  border-top-right-radius: 20px 20px;\n  border-top-left-radius: 20px 20px;\n  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.1);\n}\n.additional-summary .totals {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n}\n.additional-summary .values {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n}\n.additional-summary .at-checkout {\n  color: #747578;\n}\n.additional-summary .summary-actions {\n  display: flex;\n  margin-top: 10px;\n}\n.additional-summary .summary-actions > * {\n  flex: 1;\n}\n@media (max-width: 1024px) {\n  .additional-summary {\n    display: block;\n  }\n}\n\n.cart-list-title {\n  padding: 24px;\n  padding-bottom: 0;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .cart-list-title {\n    padding: 24px 8px;\n    padding-bottom: 0;\n  }\n}\n\n.cart-items-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 1200px) and (max-width: 19000px) {\n  .cart-items-wrapper {\n    gap: 24px;\n    padding: 0 24px;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  .cart-items-wrapper {\n    gap: 0px;\n    padding: 0 24px;\n  }\n}\n\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  padding: 24px;\n  padding-top: 0;\n}\n@media (min-width: 0) and (max-width: 480px) {\n  .actions {\n    padding: 24px 8px;\n    padding-top: 0;\n  }\n}\n.actions button {\n  flex: 1;\n}\n@media (min-width: 1024px) and (max-width: 19000px) {\n  .actions button {\n    max-width: 280px;\n    width: 100%;\n    flex: unset;\n  }\n}\n@media (max-width: 480px) {\n  .actions {\n    gap: 0;\n    flex-direction: column-reverse;\n  }\n}',""]),m.exports=s.toString()}}]);