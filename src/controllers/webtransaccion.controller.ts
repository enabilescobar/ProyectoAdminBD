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
import {WebTransaccion} from '../models';
import {WebTransaccionRepository} from '../repositories';

export class WebtransaccionController {
  constructor(
    @repository(WebTransaccionRepository)
    public webTransaccionRepository : WebTransaccionRepository,
  ) {}

  @post('/web-transaccions')
  @response(200, {
    description: 'WebTransaccion model instance',
    content: {'application/json': {schema: getModelSchemaRef(WebTransaccion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WebTransaccion, {
            title: 'NewWebTransaccion',
            
          }),
        },
      },
    })
    webTransaccion: WebTransaccion,
  ): Promise<WebTransaccion> {
    return this.webTransaccionRepository.create(webTransaccion);
  }

  @get('/web-transaccions/count')
  @response(200, {
    description: 'WebTransaccion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(WebTransaccion) where?: Where<WebTransaccion>,
  ): Promise<Count> {
    return this.webTransaccionRepository.count(where);
  }

  @get('/web-transaccions')
  @response(200, {
    description: 'Array of WebTransaccion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(WebTransaccion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(WebTransaccion) filter?: Filter<WebTransaccion>,
  ): Promise<WebTransaccion[]> {
    return this.webTransaccionRepository.find(filter);
  }

  @patch('/web-transaccions')
  @response(200, {
    description: 'WebTransaccion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WebTransaccion, {partial: true}),
        },
      },
    })
    webTransaccion: WebTransaccion,
    @param.where(WebTransaccion) where?: Where<WebTransaccion>,
  ): Promise<Count> {
    return this.webTransaccionRepository.updateAll(webTransaccion, where);
  }

  @get('/web-transaccions/{id}')
  @response(200, {
    description: 'WebTransaccion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(WebTransaccion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(WebTransaccion, {exclude: 'where'}) filter?: FilterExcludingWhere<WebTransaccion>
  ): Promise<WebTransaccion> {
    return this.webTransaccionRepository.findById(id, filter);
  }

  @patch('/web-transaccions/{id}')
  @response(204, {
    description: 'WebTransaccion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WebTransaccion, {partial: true}),
        },
      },
    })
    webTransaccion: WebTransaccion,
  ): Promise<void> {
    await this.webTransaccionRepository.updateById(id, webTransaccion);
  }

  @put('/web-transaccions/{id}')
  @response(204, {
    description: 'WebTransaccion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() webTransaccion: WebTransaccion,
  ): Promise<void> {
    await this.webTransaccionRepository.replaceById(id, webTransaccion);
  }

  @del('/web-transaccions/{id}')
  @response(204, {
    description: 'WebTransaccion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.webTransaccionRepository.deleteById(id);
  }
}
