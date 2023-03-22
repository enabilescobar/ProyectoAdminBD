import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {ReciboCab, ReciboCabRelations} from '../models';

export class ReciboCabRepository extends DefaultCrudRepository<
  ReciboCab,
  typeof ReciboCab.prototype.reciboCabId,
  ReciboCabRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(ReciboCab, dataSource);
  }
}
