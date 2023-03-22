import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {PagoCab, PagoCabRelations} from '../models';

export class PagoCabRepository extends DefaultCrudRepository<
  PagoCab,
  typeof PagoCab.prototype.pagoCabId,
  PagoCabRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(PagoCab, dataSource);
  }
}
