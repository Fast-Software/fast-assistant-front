import { Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { ChatComponent } from "./pages/chat/chat.component";
import { AssistantsListComponent } from "./pages/assistants/pages/list/assistants.component";
import { AssistantsFormComponent } from "./pages/assistants/pages/form/assistants.component";
import { SettingsComponent } from "./pages/settings/settings.component";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    data: { showSidebar: false },
  },
  { path: "chat", component: ChatComponent, data: { showSidebar: true } },
  {
    path: "assistentes",
    data: { showSidebar: true },
    children: [
      { path: "", component: AssistantsListComponent },
      { path: "novo", component: AssistantsFormComponent },
      { path: ":id", component: AssistantsFormComponent },
    ],
  },
  {
    path: "configuracoes",
    component: SettingsComponent,
    data: { showSidebar: true },
  },
  { path: "**", redirectTo: "/login", pathMatch: "full" },
];
