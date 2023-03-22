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
import {CuotaCab} from '../models';
import {CuotaCabRepository} from '../repositories';

export class CuotacabController {
  constructor(
    @repository(CuotaCabRepository)
    public cuotaCabRepository : CuotaCabRepository,
  ) {}

  @post('/cuota-cabs')
  @response(200, {
    description: 'CuotaCab model instance',
    content: {'application/json': {schema: getModelSchemaRef(CuotaCab)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CuotaCab, {
            title: 'NewCuotaCab',
            
          }),
        },
      },
    })
    cuotaCab: CuotaCab,
  ): Promise<CuotaCab> {
    return this.cuotaCabRepository.create(cuotaCab);
  }

  @get('/cuota-cabs/count')
  @response(200, {
    description: 'CuotaCab model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CuotaCab) where?: Where<CuotaCab>,
  ): Promise<Count> {
    return this.cuotaCabRepository.count(where);
  }

  @get('/cuota-cabs')
  @response(200, {
    description: 'Array of CuotaCab model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CuotaCab, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CuotaCab) filter?: Filter<CuotaCab>,
  ): Promise<CuotaCab[]> {
    return this.cuotaCabRepository.find(filter);
  }

  @patch('/cuota-cabs')
  @response(200, {
    description: 'CuotaCab PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CuotaCab, {partial: true}),
        },
      },
    })
    cuotaCab: CuotaCab,
    @param.where(CuotaCab) where?: Where<CuotaCab>,
  ): Promise<Count> {
    return this.cuotaCabRepository.updateAll(cuotaCab, where);
  }

  @get('/cuota-cabs/{id}')
  @response(200, {
    description: 'CuotaCab model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CuotaCab, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CuotaCab, {exclude: 'where'}) filter?: FilterExcludingWhere<CuotaCab>
  ): Promise<CuotaCab> {
    return this.cuotaCabRepository.findById(id, filter);
  }

  @patch('/cuota-cabs/{id}')
  @response(204, {
    description: 'CuotaCab PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CuotaCab, {partial: true}),
        },
      },
    })
    cuotaCab: CuotaCab,
  ): Promise<void> {
    await this.cuotaCabRepository.updateById(id, cuotaCab);
  }

  @put('/cuota-cabs/{id}')
  @response(204, {
    description: 'CuotaCab PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cuotaCab: CuotaCab,
  ): Promise<void> {
    await this.cuotaCabRepository.replaceById(id, cuotaCab);
  }

  @del('/cuota-cabs/{id}')
  @response(204, {
    description: 'CuotaCab DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cuotaCabRepository.deleteById(id);
  }
}
