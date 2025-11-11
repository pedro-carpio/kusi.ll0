import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-image.component.html',
  styleUrls: ['./content-image.component.scss']
})
export class ContentImageComponent {
  @Input() file = '';
  // allow usage like: <app-content-image img-alt="Descripción"></app-content-image>
  @Input('img-alt') imgAlt = '';
  @Input() link?: string;
}
