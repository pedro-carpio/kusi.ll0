import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTextComponent } from '../shared/content/content-text/content-text.component';
import { ContentImageComponent } from '../shared/content/content-image/content-image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContentTextComponent, ContentImageComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
