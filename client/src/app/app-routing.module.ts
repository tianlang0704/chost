/**
 * Created by CMonk on 2/17/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PostsComponent } from "./components/posts/posts.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { TestGroundComponent } from "./components/test-ground/test-ground.component";
import { VoteComponent } from "./components/test-ground/vote/vote.component";
import { VoteDetailComponent } from "./components/test-ground/vote/vote-detail/vote-detail.component";

const routes: Routes = [
  {path: "", redirectTo: "posts", pathMatch: "full"},
  {path: "posts", component: PostsComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "testground", component: TestGroundComponent},
  {path: "testground/vote", component: VoteComponent},
  {path: "testground/vote/:number", component: VoteDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }


