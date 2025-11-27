import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../../../services/i18n.service';

@Component({
  selector: 'app-buttons',
  imports: [CommonModule, RouterModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
})
export class ButtonsComponent {
  constructor(private i18n: I18nService) {}

  t(key: string): any {
    return this.i18n.t(key);
  }
}
