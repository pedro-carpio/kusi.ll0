import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-text.component.html',
  styleUrls: ['./content-text.component.scss']
})
export class ContentTextComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() link?: string;
  /** Optional floating image shown on hover (non-mobile). Can be a path or data URL. */
  @Input() image?: string;
  /** Width of the floating image as percentage of viewport width (number, e.g. 40 -> 40%). */
  @Input('img-width') imgWidth?: number;

  get imgWidthStyle(): string {
    const w = this.imgWidth ?? 40; // default 40%
    return `${w}vw`;
  }
}
