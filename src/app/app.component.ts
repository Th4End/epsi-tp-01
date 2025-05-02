import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormatTitrePipe } from './pipes/format-titre.pipe';
import { HeaderComponent } from "./components/header/header.component";
import { BookListComponent } from "./components/book-list/book-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, FormatTitrePipe, HeaderComponent, BookListComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'tp01_ANGULAR_ePsi';
}
