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
import {UrbanizacionAcceso} from '../models';
import {UrbanizacionAccesoRepository} from '../repositories';

export class UrbanizacionaccesoController {
  constructor(
    @repository(UrbanizacionAccesoRepository)
    public urbanizacionAccesoRepository : UrbanizacionAccesoRepository,
  ) {}

  @post('/urbanizacion-accesos')
  @response(200, {
    description: 'UrbanizacionAcceso model instance',
    content: {'application/json': {schema: getModelSchemaRef(UrbanizacionAcceso)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UrbanizacionAcceso, {
            title: 'NewUrbanizacionAcceso',
            
          }),
        },
      },
    })
    urbanizacionAcceso: UrbanizacionAcceso,
  ): Promise<UrbanizacionAcceso> {
    return this.urbanizacionAccesoRepository.create(urbanizacionAcceso);
  }

  @get('/urbanizacion-accesos/count')
  @response(200, {
    description: 'UrbanizacionAcceso model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UrbanizacionAcceso) where?: Where<UrbanizacionAcceso>,
  ): Promise<Count> {
    return this.urbanizacionAccesoRepository.count(where);
  }

  @get('/urbanizacion-accesos')
  @response(200, {
    description: 'Array of UrbanizacionAcceso model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UrbanizacionAcceso, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UrbanizacionAcceso) filter?: Filter<UrbanizacionAcceso>,
  ): Promise<UrbanizacionAcceso[]> {
    return this.urbanizacionAccesoRepository.find(filter);
  }

  @patch('/urbanizacion-accesos')
  @response(200, {
    description: 'UrbanizacionAcceso PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UrbanizacionAcceso, {partial: true}),
        },
      },
    })
    urbanizacionAcceso: UrbanizacionAcceso,
    @param.where(UrbanizacionAcceso) where?: Where<UrbanizacionAcceso>,
  ): Promise<Count> {
    return this.urbanizacionAccesoRepository.updateAll(urbanizacionAcceso, where);
  }

  @get('/urbanizacion-accesos/{id}')
  @response(200, {
    description: 'UrbanizacionAcceso model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UrbanizacionAcceso, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UrbanizacionAcceso, {exclude: 'where'}) filter?: FilterExcludingWhere<UrbanizacionAcceso>
  ): Promise<UrbanizacionAcceso> {
    return this.urbanizacionAccesoRepository.findById(id, filter);
  }

  @patch('/urbanizacion-accesos/{id}')
  @response(204, {
    description: 'UrbanizacionAcceso PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UrbanizacionAcceso, {partial: true}),
        },
      },
    })
    urbanizacionAcceso: UrbanizacionAcceso,
  ): Promise<void> {
    await this.urbanizacionAccesoRepository.updateById(id, urbanizacionAcceso);
  }

  @put('/urbanizacion-accesos/{id}')
  @response(204, {
    description: 'UrbanizacionAcceso PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() urbanizacionAcceso: UrbanizacionAcceso,
  ): Promise<void> {
    await this.urbanizacionAccesoRepository.replaceById(id, urbanizacionAcceso);
  }

  @del('/urbanizacion-accesos/{id}')
  @response(204, {
    description: 'UrbanizacionAcceso DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.urbanizacionAccesoRepository.deleteById(id);
  }
}
