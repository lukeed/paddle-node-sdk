/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import type { SimulationScenarioType } from '../../../enums';
import type { IEventName } from '../../../notifications';

export interface CreateSimulation {
  notificationSettingId: string;
  type: IEventName | SimulationScenarioType;
  name: string;
  payload?: any;
}
