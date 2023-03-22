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
import {PersonaLabor} from '../models';
import {PersonaLaborRepository} from '../repositories';

export class PersonalaborController {
  constructor(
    @repository(PersonaLaborRepository)
    public personaLaborRepository : PersonaLaborRepository,
  ) {}

  @post('/persona-labors')
  @response(200, {
    description: 'PersonaLabor model instance',
    content: {'application/json': {schema: getModelSchemaRef(PersonaLabor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PersonaLabor, {
            title: 'NewPersonaLabor',
            
          }),
        },
      },
    })
    personaLabor: PersonaLabor,
  ): Promise<PersonaLabor> {
    return this.personaLaborRepository.create(personaLabor);
  }

  @get('/persona-labors/count')
  @response(200, {
    description: 'PersonaLabor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PersonaLabor) where?: Where<PersonaLabor>,
  ): Promise<Count> {
    return this.personaLaborRepository.count(where);
  }

  @get('/persona-labors')
  @response(200, {
    description: 'Array of PersonaLabor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PersonaLabor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PersonaLabor) filter?: Filter<PersonaLabor>,
  ): Promise<PersonaLabor[]> {
    return this.personaLaborRepository.find(filter);
  }

  @patch('/persona-labors')
  @response(200, {
    description: 'PersonaLabor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PersonaLabor, {partial: true}),
        },
      },
    })
    personaLabor: PersonaLabor,
    @param.where(PersonaLabor) where?: Where<PersonaLabor>,
  ): Promise<Count> {
    return this.personaLaborRepository.updateAll(personaLabor, where);
  }

  @get('/persona-labors/{id}')
  @response(200, {
    description: 'PersonaLabor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PersonaLabor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PersonaLabor, {exclude: 'where'}) filter?: FilterExcludingWhere<PersonaLabor>
  ): Promise<PersonaLabor> {
    return this.personaLaborRepository.findById(id, filter);
  }

  @patch('/persona-labors/{id}')
  @response(204, {
    description: 'PersonaLabor PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PersonaLabor, {partial: true}),
        },
      },
    })
    personaLabor: PersonaLabor,
  ): Promise<void> {
    await this.personaLaborRepository.updateById(id, personaLabor);
  }

  @put('/persona-labors/{id}')
  @response(204, {
    description: 'PersonaLabor PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() personaLabor: PersonaLabor,
  ): Promise<void> {
    await this.personaLaborRepository.replaceById(id, personaLabor);
  }

  @del('/persona-labors/{id}')
  @response(204, {
    description: 'PersonaLabor DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.personaLaborRepository.deleteById(id);
  }
}
