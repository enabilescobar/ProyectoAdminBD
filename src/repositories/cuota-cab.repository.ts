import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {CuotaCab, CuotaCabRelations} from '../models';

export class CuotaCabRepository extends DefaultCrudRepository<
  CuotaCab,
  typeof CuotaCab.prototype.cuotaCabId,
  CuotaCabRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(CuotaCab, dataSource);
  }
}
