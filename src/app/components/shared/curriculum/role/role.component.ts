import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { I18nService } from '../../../../services/i18n.service';

@Component({
  selector: 'app-role',
  imports: [CommonModule, RouterModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss',
})
export class RoleComponent implements OnInit, OnDestroy {
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
}
