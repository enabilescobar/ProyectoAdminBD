import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {WebTransaccion, WebTransaccionRelations} from '../models';

export class WebTransaccionRepository extends DefaultCrudRepository<
  WebTransaccion,
  typeof WebTransaccion.prototype.webTransaccionId,
  WebTransaccionRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(WebTransaccion, dataSource);
  }
}
