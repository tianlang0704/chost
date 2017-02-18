import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TestGroundComponent } from './components/test-ground/test-ground.component';
import { VoteComponent } from './components/test-ground/vote/vote.component';

import { VoteService } from "./services/vote.service";
import { VoteDetailComponent } from './components/test-ground/vote/vote-detail/vote-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    BodyComponent,
    FooterComponent,
    PostsComponent,
    ProjectsComponent,
    TestGroundComponent,
    VoteComponent,
    VoteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [VoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
