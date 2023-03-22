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
import {WebRespuesta} from '../models';
import {WebRespuestaRepository} from '../repositories';

export class WebrespuestaController {
  constructor(
    @repository(WebRespuestaRepository)
    public webRespuestaRepository : WebRespuestaRepository,
  ) {}

  @post('/web-respuestas')
  @response(200, {
    description: 'WebRespuesta model instance',
    content: {'application/json': {schema: getModelSchemaRef(WebRespuesta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WebRespuesta, {
            title: 'NewWebRespuesta',
            
          }),
        },
      },
    })
    webRespuesta: WebRespuesta,
  ): Promise<WebRespuesta> {
    return this.webRespuestaRepository.create(webRespuesta);
  }

  @get('/web-respuestas/count')
  @response(200, {
    description: 'WebRespuesta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(WebRespuesta) where?: Where<WebRespuesta>,
  ): Promise<Count> {
    return this.webRespuestaRepository.count(where);
  }

  @get('/web-respuestas')
  @response(200, {
    description: 'Array of WebRespuesta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(WebRespuesta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(WebRespuesta) filter?: Filter<WebRespuesta>,
  ): Promise<WebRespuesta[]> {
    return this.webRespuestaRepository.find(filter);
  }

  @patch('/web-respuestas')
  @response(200, {
    description: 'WebRespuesta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WebRespuesta, {partial: true}),
        },
      },
    })
    webRespuesta: WebRespuesta,
    @param.where(WebRespuesta) where?: Where<WebRespuesta>,
  ): Promise<Count> {
    return this.webRespuestaRepository.updateAll(webRespuesta, where);
  }

  @get('/web-respuestas/{id}')
  @response(200, {
    description: 'WebRespuesta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(WebRespuesta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(WebRespuesta, {exclude: 'where'}) filter?: FilterExcludingWhere<WebRespuesta>
  ): Promise<WebRespuesta> {
    return this.webRespuestaRepository.findById(id, filter);
  }

  @patch('/web-respuestas/{id}')
  @response(204, {
    description: 'WebRespuesta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WebRespuesta, {partial: true}),
        },
      },
    })
    webRespuesta: WebRespuesta,
  ): Promise<void> {
    await this.webRespuestaRepository.updateById(id, webRespuesta);
  }

  @put('/web-respuestas/{id}')
  @response(204, {
    description: 'WebRespuesta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() webRespuesta: WebRespuesta,
  ): Promise<void> {
    await this.webRespuestaRepository.replaceById(id, webRespuesta);
  }

  @del('/web-respuestas/{id}')
  @response(204, {
    description: 'WebRespuesta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.webRespuestaRepository.deleteById(id);
  }
}
