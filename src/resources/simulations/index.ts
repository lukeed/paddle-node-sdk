/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { Simulation, SimulationCollection } from '../../entities';
import type { SimulationScenarioType } from '../../enums';
import { type ErrorResponse, type Response } from '../../internal';
import { BaseResource, PathParameters, QueryParameters } from '../../internal/base';
import type { IEventName } from '../../notifications';
import { type ISimulationResponse } from '../../types';
import {
  type CreateSimulationRequestBody,
  type ListSimulationQueryParameters,
  type UpdateSimulationRequestBody,
} from './operations';

export * from './operations';

const SimulationPaths = {
  list: '/simulations',
  create: '/simulations',
  get: '/simulations/{simulation_id}',
  update: '/simulations/{simulation_id}',
} as const;

export class SimulationsResource extends BaseResource {
  public list<T extends IEventName | SimulationScenarioType>(
    queryParams?: ListSimulationQueryParameters,
  ): SimulationCollection<T> {
    const queryParameters = new QueryParameters(queryParams);
    return new SimulationCollection(this.client, SimulationPaths.list + queryParameters.toQueryString());
  }

  public async create<T extends IEventName | SimulationScenarioType>(
    createSimulationParameters: CreateSimulationRequestBody<T>,
  ): Promise<Simulation<T>> {
    const response = await this.client.post<
      CreateSimulationRequestBody<T>,
      Response<ISimulationResponse<T>> | ErrorResponse
    >(SimulationPaths.create, createSimulationParameters);

    const data = this.handleResponse<ISimulationResponse<T>>(response);

    return new Simulation(data);
  }

  public async get<T extends IEventName | SimulationScenarioType>(simulationId: string): Promise<Simulation<T>> {
    const urlWithPathParams = new PathParameters(SimulationPaths.get, {
      simulation_id: simulationId,
    }).deriveUrl();

    const response = await this.client.get<undefined, Response<ISimulationResponse<T>> | ErrorResponse>(
      urlWithPathParams,
    );

    const data = this.handleResponse<ISimulationResponse<T>>(response);

    return new Simulation(data);
  }

  public async update<T extends IEventName | SimulationScenarioType>(
    simulationId: string,
    updateSimulation: UpdateSimulationRequestBody,
  ): Promise<Simulation<T>> {
    const urlWithPathParams = new PathParameters(SimulationPaths.update, {
      simulation_id: simulationId,
    }).deriveUrl();

    const response = await this.client.patch<
      UpdateSimulationRequestBody,
      Response<ISimulationResponse<T>> | ErrorResponse
    >(urlWithPathParams, updateSimulation);

    const data = this.handleResponse<ISimulationResponse<T>>(response);

    return new Simulation(data);
  }
}
