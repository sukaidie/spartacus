import { NgModule } from '@angular/core';
import {
  I18nModule,
  provideDefaultConfig,
  provideDefaultConfigFactory,
} from '@spartacus/core';
import { ListModule } from '@spartacus/organization/administration/components';
import { AccountSummaryListComponent } from './account-summary-list.component';
import {
  accountSummaryListCmsConfig,
  accountSummaryUnitsTableConfigFactory,
} from './account-summary-list.config';

@NgModule({
  imports: [I18nModule, ListModule],
  providers: [
    provideDefaultConfig(accountSummaryListCmsConfig),
    provideDefaultConfigFactory(accountSummaryUnitsTableConfigFactory),
  ],
  declarations: [AccountSummaryListComponent],
  exports: [AccountSummaryListComponent],
})
export class AccountSummaryListModule {}