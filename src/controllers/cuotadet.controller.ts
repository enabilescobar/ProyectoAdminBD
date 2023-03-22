import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {CuotaDet} from '../models';
import {CuotaDetRepository} from '../repositories';

export class CuotadetController {
  constructor(
    @repository(CuotaDetRepository)
    public cuotaDetRepository : CuotaDetRepository,
  ) {}

  @post('/cuota-dets')
  @response(200, {
    description: 'CuotaDet model instance',
    content: {'application/json': {schema: getModelSchemaRef(CuotaDet)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CuotaDet, {
            title: 'NewCuotaDet',
            
          }),
        },
      },
    })
    cuotaDet: CuotaDet,
  ): Promise<CuotaDet> {
    return this.cuotaDetRepository.create(cuotaDet);
  }

  @get('/cuota-dets/count')
  @response(200, {
    description: 'CuotaDet model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CuotaDet) where?: Where<CuotaDet>,
  ): Promise<Count> {
    return this.cuotaDetRepository.count(where);
  }

  @get('/cuota-dets')
  @response(200, {
    description: 'Array of CuotaDet model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CuotaDet, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CuotaDet) filter?: Filter<CuotaDet>,
  ): Promise<CuotaDet[]> {
    return this.cuotaDetRepository.find(filter);
  }

  @patch('/cuota-dets')
  @response(200, {
    description: 'CuotaDet PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CuotaDet, {partial: true}),
        },
      },
    })
    cuotaDet: CuotaDet,
    @param.where(CuotaDet) where?: Where<CuotaDet>,
  ): Promise<Count> {
    return this.cuotaDetRepository.updateAll(cuotaDet, where);
  }

  @get('/cuota-dets/{id}')
  @response(200, {
    description: 'CuotaDet model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CuotaDet, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CuotaDet, {exclude: 'where'}) filter?: FilterExcludingWhere<CuotaDet>
  ): Promise<CuotaDet> {
    return this.cuotaDetRepository.findById(id, filter);
  }

  @patch('/cuota-dets/{id}')
  @response(204, {
    description: 'CuotaDet PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CuotaDet, {partial: true}),
        },
      },
    })
    cuotaDet: CuotaDet,
  ): Promise<void> {
    await this.cuotaDetRepository.updateById(id, cuotaDet);
  }

  @put('/cuota-dets/{id}')
  @response(204, {
    description: 'CuotaDet PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cuotaDet: CuotaDet,
  ): Promise<void> {
    await this.cuotaDetRepository.replaceById(id, cuotaDet);
  }

  @del('/cuota-dets/{id}')
  @response(204, {
    description: 'CuotaDet DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cuotaDetRepository.deleteById(id);
  }
}
