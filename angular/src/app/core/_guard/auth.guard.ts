import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const platformId = inject(PLATFORM_ID);
  const isBrowser = isPlatformBrowser(platformId);
  const router = inject(Router);
  const toastr = inject(ToastrService);

  if (isBrowser != null) {
    return true;
  } else {
    if (isBrowser) {
      toastr.warning('Unauthorized access');
      router.navigateByUrl('/login');
    }
    return false;
  }
};