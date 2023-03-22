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
import {PagoCab} from '../models';
import {PagoCabRepository} from '../repositories';

export class PagocabController {
  constructor(
    @repository(PagoCabRepository)
    public pagoCabRepository : PagoCabRepository,
  ) {}

  @post('/pago-cabs')
  @response(200, {
    description: 'PagoCab model instance',
    content: {'application/json': {schema: getModelSchemaRef(PagoCab)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PagoCab, {
            title: 'NewPagoCab',
            
          }),
        },
      },
    })
    pagoCab: PagoCab,
  ): Promise<PagoCab> {
    return this.pagoCabRepository.create(pagoCab);
  }

  @get('/pago-cabs/count')
  @response(200, {
    description: 'PagoCab model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PagoCab) where?: Where<PagoCab>,
  ): Promise<Count> {
    return this.pagoCabRepository.count(where);
  }

  @get('/pago-cabs')
  @response(200, {
    description: 'Array of PagoCab model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PagoCab, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PagoCab) filter?: Filter<PagoCab>,
  ): Promise<PagoCab[]> {
    return this.pagoCabRepository.find(filter);
  }

  @patch('/pago-cabs')
  @response(200, {
    description: 'PagoCab PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PagoCab, {partial: true}),
        },
      },
    })
    pagoCab: PagoCab,
    @param.where(PagoCab) where?: Where<PagoCab>,
  ): Promise<Count> {
    return this.pagoCabRepository.updateAll(pagoCab, where);
  }

  @get('/pago-cabs/{id}')
  @response(200, {
    description: 'PagoCab model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PagoCab, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PagoCab, {exclude: 'where'}) filter?: FilterExcludingWhere<PagoCab>
  ): Promise<PagoCab> {
    return this.pagoCabRepository.findById(id, filter);
  }

  @patch('/pago-cabs/{id}')
  @response(204, {
    description: 'PagoCab PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PagoCab, {partial: true}),
        },
      },
    })
    pagoCab: PagoCab,
  ): Promise<void> {
    await this.pagoCabRepository.updateById(id, pagoCab);
  }

  @put('/pago-cabs/{id}')
  @response(204, {
    description: 'PagoCab PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pagoCab: PagoCab,
  ): Promise<void> {
    await this.pagoCabRepository.replaceById(id, pagoCab);
  }

  @del('/pago-cabs/{id}')
  @response(204, {
    description: 'PagoCab DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pagoCabRepository.deleteById(id);
  }
}
