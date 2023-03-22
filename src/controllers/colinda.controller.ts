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
import {Colinda} from '../models';
import {ColindaRepository} from '../repositories';

export class ColindaController {
  constructor(
    @repository(ColindaRepository)
    public colindaRepository : ColindaRepository,
  ) {}

  @post('/colindas')
  @response(200, {
    description: 'Colinda model instance',
    content: {'application/json': {schema: getModelSchemaRef(Colinda)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Colinda, {
            title: 'NewColinda',
            
          }),
        },
      },
    })
    colinda: Colinda,
  ): Promise<Colinda> {
    return this.colindaRepository.create(colinda);
  }

  @get('/colindas/count')
  @response(200, {
    description: 'Colinda model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Colinda) where?: Where<Colinda>,
  ): Promise<Count> {
    return this.colindaRepository.count(where);
  }

  @get('/colindas')
  @response(200, {
    description: 'Array of Colinda model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Colinda, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Colinda) filter?: Filter<Colinda>,
  ): Promise<Colinda[]> {
    return this.colindaRepository.find(filter);
  }

  @patch('/colindas')
  @response(200, {
    description: 'Colinda PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Colinda, {partial: true}),
        },
      },
    })
    colinda: Colinda,
    @param.where(Colinda) where?: Where<Colinda>,
  ): Promise<Count> {
    return this.colindaRepository.updateAll(colinda, where);
  }

  @get('/colindas/{id}')
  @response(200, {
    description: 'Colinda model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Colinda, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Colinda, {exclude: 'where'}) filter?: FilterExcludingWhere<Colinda>
  ): Promise<Colinda> {
    return this.colindaRepository.findById(id, filter);
  }

  @patch('/colindas/{id}')
  @response(204, {
    description: 'Colinda PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Colinda, {partial: true}),
        },
      },
    })
    colinda: Colinda,
  ): Promise<void> {
    await this.colindaRepository.updateById(id, colinda);
  }

  @put('/colindas/{id}')
  @response(204, {
    description: 'Colinda PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() colinda: Colinda,
  ): Promise<void> {
    await this.colindaRepository.replaceById(id, colinda);
  }

  @del('/colindas/{id}')
  @response(204, {
    description: 'Colinda DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.colindaRepository.deleteById(id);
  }
}
