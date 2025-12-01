import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { I18nService } from '../../../../services/i18n.service';

@Component({
  selector: 'app-personal-info',
  imports: [CommonModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
})
export class PersonalInfoComponent implements OnInit, OnDestroy {
  @Output() copyValue = new EventEmitter<string>();
  private langSub?: Subscription;

  constructor(
    private i18n: I18nService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.langSub = this.i18n.langChanges.subscribe(() => this.cdr.markForCheck());
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  t(key: string): any {
    return this.i18n.t(key);
  }

  onCopy(value: string): void {
    this.copyValue.emit(value);
  }
}
