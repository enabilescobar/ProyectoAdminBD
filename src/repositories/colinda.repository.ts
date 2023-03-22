import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Colinda, ColindaRelations} from '../models';

export class ColindaRepository extends DefaultCrudRepository<
  Colinda,
  typeof Colinda.prototype.colindaId,
  ColindaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Colinda, dataSource);
  }
}
