/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { SimulationRun, SimulationRunCollection } from '../../entities';
import { type ErrorResponse, type Response } from '../../internal';
import { BaseResource, PathParameters, QueryParameters } from '../../internal/base';
import type { ISimulationRunResponse } from '../../types';
import { type GetSimulationRunQueryParameters, type ListSimulationRunQueryParameters } from './operations';

export * from './operations';

const SimulationRunPaths = {
  list: '/simulations/{simulation_id}/runs',
  create: '/simulations/{simulation_id}/runs',
  get: '/simulations/{simulation_id}/runs/{simulation_run_id}',
} as const;

export class SimulationRunsResource extends BaseResource {
  public list(simulationId: string, queryParams?: ListSimulationRunQueryParameters): SimulationRunCollection {
    const queryParameters = new QueryParameters(queryParams);
    const urlWithPathParams = new PathParameters(SimulationRunPaths.list, {
      simulation_id: simulationId,
    }).deriveUrl();

    return new SimulationRunCollection(this.client, urlWithPathParams + queryParameters.toQueryString());
  }

  public async create(simulationId: string): Promise<SimulationRun> {
    const urlWithPathParams = new PathParameters(SimulationRunPaths.create, {
      simulation_id: simulationId,
    }).deriveUrl();

    const response = await this.client.post<undefined, Response<ISimulationRunResponse> | ErrorResponse>(
      urlWithPathParams,
      undefined,
    );

    const data = this.handleResponse<ISimulationRunResponse>(response);

    return new SimulationRun(data);
  }

  public async get(
    simulationId: string,
    simulationRunId: string,
    queryParams?: GetSimulationRunQueryParameters,
  ): Promise<SimulationRun> {
    const queryParameters = new QueryParameters(queryParams);

    const urlWithPathParams = new PathParameters(SimulationRunPaths.get, {
      simulation_id: simulationId,
      simulation_run_id: simulationRunId,
    }).deriveUrl();

    const response = await this.client.get<
      GetSimulationRunQueryParameters | undefined,
      Response<ISimulationRunResponse> | ErrorResponse
    >(urlWithPathParams, queryParameters);

    const data = this.handleResponse<ISimulationRunResponse>(response);

    return new SimulationRun(data);
  }
}