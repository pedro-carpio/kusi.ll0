import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { I18nService } from '../../../../services/i18n.service';

@Component({
  selector: 'app-buttons',
  imports: [CommonModule, RouterModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
})
export class ButtonsComponent implements OnInit, OnDestroy {
  private langSub?: Subscription;
  @Output() shareClick = new EventEmitter<void>();

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

  onShareClick(): void {
    this.shareClick.emit();
  }
}
