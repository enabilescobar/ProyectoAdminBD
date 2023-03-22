import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {PagoDet, PagoDetRelations} from '../models';

export class PagoDetRepository extends DefaultCrudRepository<
  PagoDet,
  typeof PagoDet.prototype.pagoDetId,
  PagoDetRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(PagoDet, dataSource);
  }
}
