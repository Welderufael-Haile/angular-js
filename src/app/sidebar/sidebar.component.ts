import { Component } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
