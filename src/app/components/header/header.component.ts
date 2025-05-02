import { Component, Input } from '@angular/core';
import { FormatTitrePipe } from "../../pipes/format-titre.pipe";
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [FormatTitrePipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string = '';

}
