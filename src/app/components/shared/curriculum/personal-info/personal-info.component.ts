import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../../../services/i18n.service';

@Component({
  selector: 'app-personal-info',
  imports: [CommonModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
})
export class PersonalInfoComponent {
  @Output() copyValue = new EventEmitter<string>();

  constructor(private i18n: I18nService) {}

  t(key: string): any {
    return this.i18n.t(key);
  }

  onCopy(value: string): void {
    this.copyValue.emit(value);
  }
}
