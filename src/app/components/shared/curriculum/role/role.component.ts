import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../../../services/i18n.service';

@Component({
  selector: 'app-role',
  imports: [CommonModule, RouterModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss',
})
export class RoleComponent {
  constructor(private i18n: I18nService) {}

  t(key: string): any {
    return this.i18n.t(key);
  }
}
