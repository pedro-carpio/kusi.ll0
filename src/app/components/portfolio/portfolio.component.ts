import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  // responsive state
  isMobile = false;
  asideOpen = false; // when true the aside nav is visible on mobile

  // nested toggles inside the aside
  trabajosOpen = false;
  extraOpen = false;

  constructor(private i18n: I18nService) {}

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 768;
    this.asideOpen = !this.isMobile; // open by default on desktop
  }

  @HostListener('window:resize')
  onResize(): void {
    const nowMobile = window.innerWidth < 768;
    if (nowMobile !== this.isMobile) {
      this.isMobile = nowMobile;
      // collapse aside when switching to mobile, expand on desktop
      this.asideOpen = !this.isMobile;
    }
  }

  toggleAside(): void {
    this.asideOpen = !this.asideOpen;
  }

  toggleTrabajos(): void {
    this.trabajosOpen = !this.trabajosOpen;
  }

  toggleExtra(): void {
    this.extraOpen = !this.extraOpen;
  }

  // helper to access translations from template
  t(key: string): string {
    return this.i18n.t(key);
  }

}
