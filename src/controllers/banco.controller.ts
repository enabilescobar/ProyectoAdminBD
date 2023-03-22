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
import {Banco} from '../models';
import {BancoRepository} from '../repositories';

export class BancoController {
  constructor(
    @repository(BancoRepository)
    public bancoRepository : BancoRepository,
  ) {}

  @post('/bancos')
  @response(200, {
    description: 'Banco model instance',
    content: {'application/json': {schema: getModelSchemaRef(Banco)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Banco, {
            title: 'NewBanco',
            
          }),
        },
      },
    })
    banco: Banco,
  ): Promise<Banco> {
    return this.bancoRepository.create(banco);
  }

  @get('/bancos/count')
  @response(200, {
    description: 'Banco model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Banco) where?: Where<Banco>,
  ): Promise<Count> {
    return this.bancoRepository.count(where);
  }

  @get('/bancos')
  @response(200, {
    description: 'Array of Banco model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Banco, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Banco) filter?: Filter<Banco>,
  ): Promise<Banco[]> {
    return this.bancoRepository.find(filter);
  }

  @patch('/bancos')
  @response(200, {
    description: 'Banco PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Banco, {partial: true}),
        },
      },
    })
    banco: Banco,
    @param.where(Banco) where?: Where<Banco>,
  ): Promise<Count> {
    return this.bancoRepository.updateAll(banco, where);
  }

  @get('/bancos/{id}')
  @response(200, {
    description: 'Banco model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Banco, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Banco, {exclude: 'where'}) filter?: FilterExcludingWhere<Banco>
  ): Promise<Banco> {
    return this.bancoRepository.findById(id, filter);
  }

  @patch('/bancos/{id}')
  @response(204, {
    description: 'Banco PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Banco, {partial: true}),
        },
      },
    })
    banco: Banco,
  ): Promise<void> {
    await this.bancoRepository.updateById(id, banco);
  }

  @put('/bancos/{id}')
  @response(204, {
    description: 'Banco PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() banco: Banco,
  ): Promise<void> {
    await this.bancoRepository.replaceById(id, banco);
  }

  @del('/bancos/{id}')
  @response(204, {
    description: 'Banco DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.bancoRepository.deleteById(id);
  }
}
