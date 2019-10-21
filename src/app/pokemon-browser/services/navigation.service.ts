import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
  constructor(private readonly router: Router) {}

  public navigate(commands: any[]): void {
    this.router.navigate(commands);
  }
}
