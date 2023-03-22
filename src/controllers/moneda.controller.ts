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
import {Moneda} from '../models';
import {MonedaRepository} from '../repositories';

export class MonedaController {
  constructor(
    @repository(MonedaRepository)
    public monedaRepository : MonedaRepository,
  ) {}

  @post('/monedas')
  @response(200, {
    description: 'Moneda model instance',
    content: {'application/json': {schema: getModelSchemaRef(Moneda)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Moneda, {
            title: 'NewMoneda',
            
          }),
        },
      },
    })
    moneda: Moneda,
  ): Promise<Moneda> {
    return this.monedaRepository.create(moneda);
  }

  @get('/monedas/count')
  @response(200, {
    description: 'Moneda model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Moneda) where?: Where<Moneda>,
  ): Promise<Count> {
    return this.monedaRepository.count(where);
  }

  @get('/monedas')
  @response(200, {
    description: 'Array of Moneda model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Moneda, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Moneda) filter?: Filter<Moneda>,
  ): Promise<Moneda[]> {
    return this.monedaRepository.find(filter);
  }

  @patch('/monedas')
  @response(200, {
    description: 'Moneda PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Moneda, {partial: true}),
        },
      },
    })
    moneda: Moneda,
    @param.where(Moneda) where?: Where<Moneda>,
  ): Promise<Count> {
    return this.monedaRepository.updateAll(moneda, where);
  }

  @get('/monedas/{id}')
  @response(200, {
    description: 'Moneda model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Moneda, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Moneda, {exclude: 'where'}) filter?: FilterExcludingWhere<Moneda>
  ): Promise<Moneda> {
    return this.monedaRepository.findById(id, filter);
  }

  @patch('/monedas/{id}')
  @response(204, {
    description: 'Moneda PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Moneda, {partial: true}),
        },
      },
    })
    moneda: Moneda,
  ): Promise<void> {
    await this.monedaRepository.updateById(id, moneda);
  }

  @put('/monedas/{id}')
  @response(204, {
    description: 'Moneda PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() moneda: Moneda,
  ): Promise<void> {
    await this.monedaRepository.replaceById(id, moneda);
  }

  @del('/monedas/{id}')
  @response(204, {
    description: 'Moneda DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.monedaRepository.deleteById(id);
  }
}
