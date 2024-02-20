/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IAdjustmentOriginalAmountNotificationResponse } from '../../types';
import { type AdjustmentCurrencyCode } from '../../../enums';

export class AdjustmentOriginalAmountNotification {
  public readonly amount: string;
  public readonly currencyCode: AdjustmentCurrencyCode;

  constructor(originalAmount: IAdjustmentOriginalAmountNotificationResponse) {
    this.amount = originalAmount.amount;
    this.currencyCode = originalAmount.currency_code;
  }
}