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
import {PagoDet} from '../models';
import {PagoDetRepository} from '../repositories';

export class PagodetController {
  constructor(
    @repository(PagoDetRepository)
    public pagoDetRepository : PagoDetRepository,
  ) {}

  @post('/pago-dets')
  @response(200, {
    description: 'PagoDet model instance',
    content: {'application/json': {schema: getModelSchemaRef(PagoDet)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PagoDet, {
            title: 'NewPagoDet',
            
          }),
        },
      },
    })
    pagoDet: PagoDet,
  ): Promise<PagoDet> {
    return this.pagoDetRepository.create(pagoDet);
  }

  @get('/pago-dets/count')
  @response(200, {
    description: 'PagoDet model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PagoDet) where?: Where<PagoDet>,
  ): Promise<Count> {
    return this.pagoDetRepository.count(where);
  }

  @get('/pago-dets')
  @response(200, {
    description: 'Array of PagoDet model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PagoDet, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PagoDet) filter?: Filter<PagoDet>,
  ): Promise<PagoDet[]> {
    return this.pagoDetRepository.find(filter);
  }

  @patch('/pago-dets')
  @response(200, {
    description: 'PagoDet PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PagoDet, {partial: true}),
        },
      },
    })
    pagoDet: PagoDet,
    @param.where(PagoDet) where?: Where<PagoDet>,
  ): Promise<Count> {
    return this.pagoDetRepository.updateAll(pagoDet, where);
  }

  @get('/pago-dets/{id}')
  @response(200, {
    description: 'PagoDet model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PagoDet, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PagoDet, {exclude: 'where'}) filter?: FilterExcludingWhere<PagoDet>
  ): Promise<PagoDet> {
    return this.pagoDetRepository.findById(id, filter);
  }

  @patch('/pago-dets/{id}')
  @response(204, {
    description: 'PagoDet PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PagoDet, {partial: true}),
        },
      },
    })
    pagoDet: PagoDet,
  ): Promise<void> {
    await this.pagoDetRepository.updateById(id, pagoDet);
  }

  @put('/pago-dets/{id}')
  @response(204, {
    description: 'PagoDet PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pagoDet: PagoDet,
  ): Promise<void> {
    await this.pagoDetRepository.replaceById(id, pagoDet);
  }

  @del('/pago-dets/{id}')
  @response(204, {
    description: 'PagoDet DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pagoDetRepository.deleteById(id);
  }
}
