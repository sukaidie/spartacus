import { DIALOG_TYPE } from '../../../../layout/launch-dialog/config/launch-config';
import { LayoutConfig } from '../../../../layout/config/layout-config';
import { StockNotificationDialogComponent } from './stock-notification-dialog.component';

export const defaultStockNotificationLayoutConfig: LayoutConfig = {
  launch: {
    STOCK_NOTIFICATION: {
      inlineRoot: true,
      component: StockNotificationDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG,
    },
  },
};