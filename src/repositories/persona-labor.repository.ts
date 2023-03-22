import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {PersonaLabor, PersonaLaborRelations} from '../models';

export class PersonaLaborRepository extends DefaultCrudRepository<
  PersonaLabor,
  typeof PersonaLabor.prototype.personaLaborId,
  PersonaLaborRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(PersonaLabor, dataSource);
  }
}
