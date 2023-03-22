import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {CuotaDet, CuotaDetRelations} from '../models';

export class CuotaDetRepository extends DefaultCrudRepository<
  CuotaDet,
  typeof CuotaDet.prototype.cuotaDetId,
  CuotaDetRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(CuotaDet, dataSource);
  }
}
