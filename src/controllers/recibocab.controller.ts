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
import {ReciboCab} from '../models';
import {ReciboCabRepository} from '../repositories';

export class RecibocabController {
  constructor(
    @repository(ReciboCabRepository)
    public reciboCabRepository : ReciboCabRepository,
  ) {}

  @post('/recibo-cabs')
  @response(200, {
    description: 'ReciboCab model instance',
    content: {'application/json': {schema: getModelSchemaRef(ReciboCab)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReciboCab, {
            title: 'NewReciboCab',
            
          }),
        },
      },
    })
    reciboCab: ReciboCab,
  ): Promise<ReciboCab> {
    return this.reciboCabRepository.create(reciboCab);
  }

  @get('/recibo-cabs/count')
  @response(200, {
    description: 'ReciboCab model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ReciboCab) where?: Where<ReciboCab>,
  ): Promise<Count> {
    return this.reciboCabRepository.count(where);
  }

  @get('/recibo-cabs')
  @response(200, {
    description: 'Array of ReciboCab model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ReciboCab, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ReciboCab) filter?: Filter<ReciboCab>,
  ): Promise<ReciboCab[]> {
    return this.reciboCabRepository.find(filter);
  }

  @patch('/recibo-cabs')
  @response(200, {
    description: 'ReciboCab PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReciboCab, {partial: true}),
        },
      },
    })
    reciboCab: ReciboCab,
    @param.where(ReciboCab) where?: Where<ReciboCab>,
  ): Promise<Count> {
    return this.reciboCabRepository.updateAll(reciboCab, where);
  }

  @get('/recibo-cabs/{id}')
  @response(200, {
    description: 'ReciboCab model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ReciboCab, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ReciboCab, {exclude: 'where'}) filter?: FilterExcludingWhere<ReciboCab>
  ): Promise<ReciboCab> {
    return this.reciboCabRepository.findById(id, filter);
  }

  @patch('/recibo-cabs/{id}')
  @response(204, {
    description: 'ReciboCab PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReciboCab, {partial: true}),
        },
      },
    })
    reciboCab: ReciboCab,
  ): Promise<void> {
    await this.reciboCabRepository.updateById(id, reciboCab);
  }

  @put('/recibo-cabs/{id}')
  @response(204, {
    description: 'ReciboCab PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() reciboCab: ReciboCab,
  ): Promise<void> {
    await this.reciboCabRepository.replaceById(id, reciboCab);
  }

  @del('/recibo-cabs/{id}')
  @response(204, {
    description: 'ReciboCab DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reciboCabRepository.deleteById(id);
  }
}
