import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Moneda, MonedaRelations} from '../models';

export class MonedaRepository extends DefaultCrudRepository<
  Moneda,
  typeof Moneda.prototype.monedaId,
  MonedaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Moneda, dataSource);
  }
}
