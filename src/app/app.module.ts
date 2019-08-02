import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './component/header/top-bar/top-bar.component';
import { HeadMenuComponent } from './component/header/head-menu/head-menu.component';
import { SearchInputComponent } from './component/header/search-input/search-input.component';
import { ContactRightComponent } from './component/header/contact-right/contact-right.component';
import { MenuVerticalComponent } from './component/header/menu-vertical/menu-vertical.component';
import { ShopPageComponent } from './page/shop-page/shop-page.component';
import { TitlePageComponent } from './component/other/title-page/title-page.component';
import { MenuWidgetComponent } from './component/widget/menu-widget/menu-widget.component';
import { PriceWidgetComponent } from './component/widget/price-widget/price-widget.component';
import { PopularWidgetComponent } from './component/widget/popular-widget/popular-widget.component';
import { SortShopPageComponent } from './component/shop-page/sort-shop-page/sort-shop-page.component';
import { ViewShopPageComponent } from './component/shop-page/view-shop-page/view-shop-page.component';
import { ShowShopPageComponent } from './component/shop-page/show-shop-page/show-shop-page.component';
import { BodyShopPageComponent } from './component/shop-page/body-shop-page/body-shop-page.component';
import { FooterComponent } from './component/footer/footer/footer.component';
import { PaginationShopPageComponent } from './component/shop-page/pagination-shop-page/pagination-shop-page.component';
import { SubscribeFooterComponent } from './component/footer/subscribe-footer/subscribe-footer.component';
import { MenuFooterComponent } from './component/footer/menu-footer/menu-footer.component';
import { InfoFooterComponent } from './component/footer/info-footer/info-footer.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ImageProductPageComponent } from './component/product-page/image-product-page/image-product-page.component';
import { ShortDescriptionProductPageComponent } from './component/product-page/short-description-product-page/short-description-product-page.component';
import { SummaryProductPageComponent } from './component/product-page/summary-product-page/summary-product-page.component';
import { DescriptionProductPageComponent } from './component/product-page/description-product-page/description-product-page.component';
import { PopularBigWidgetComponent } from './component/widget/popular-big-widget/popular-big-widget.component';
import { CartPageComponent } from './page/cart-page/cart-page.component';
import { ListCartPageComponent } from './component/cart-page/list-cart-page/list-cart-page.component';
import { SubmitCartPageComponent } from './component/cart-page/submit-cart-page/submit-cart-page.component';
import { CheckoutPageComponent } from './page/checkout-page/checkout-page.component';
import { StepperCheckoutPageComponent } from './component/checkout-page/stepper-checkout-page/stepper-checkout-page.component';
import { PersonalCheckoutPageComponent } from './component/checkout-page/personal-checkout-page/personal-checkout-page.component';
import { LoginCheckoutPageComponent } from './component/checkout-page/login-checkout-page/login-checkout-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeadMenuComponent,
    SearchInputComponent,
    ContactRightComponent,
    MenuVerticalComponent,
    ShopPageComponent,
    TitlePageComponent,
    MenuWidgetComponent,
    PriceWidgetComponent,
    PopularWidgetComponent,
    SortShopPageComponent,
    ViewShopPageComponent,
    ShowShopPageComponent,
    BodyShopPageComponent,
    FooterComponent,
    PaginationShopPageComponent,
    SubscribeFooterComponent,
    MenuFooterComponent,
    InfoFooterComponent,
    ProductPageComponent,
    ImageProductPageComponent,
    ShortDescriptionProductPageComponent,
    SummaryProductPageComponent,
    DescriptionProductPageComponent,
    PopularBigWidgetComponent,
    CartPageComponent,
    ListCartPageComponent,
    SubmitCartPageComponent,
    CheckoutPageComponent,
    StepperCheckoutPageComponent,
    PersonalCheckoutPageComponent,
    LoginCheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    // MatButtonModule,
    // MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
