import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// import 'hammerjs';

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
    PaginationShopPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    // MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
