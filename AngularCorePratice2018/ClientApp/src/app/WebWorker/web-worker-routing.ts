import { Routes } from "@angular/router";
import { WebWorkerComponent } from "./web-worker/web-worker.component";
import { WebWorkWithGitFileComponent } from "./web-work-with-git-file/web-work-with-git-file.component";
import { WebWorkerOrbComponent } from "./web-worker-orb/web-worker-orb.component";

export const workerRoute: Routes = [
  {
    path: '', //path:/home/WebWorker
    component: WebWorkerComponent,
    children: [
      { path: '', component: WebWorkerComponent }
      , { path: 'workBasic', component: WebWorkerOrbComponent }
      , { path: 'workerWithGitFile', component: WebWorkWithGitFileComponent }
    ]
  }
];
