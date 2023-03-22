import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {WebRespuesta, WebRespuestaRelations} from '../models';

export class WebRespuestaRepository extends DefaultCrudRepository<
  WebRespuesta,
  typeof WebRespuesta.prototype.webRespuestaId,
  WebRespuestaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(WebRespuesta, dataSource);
  }
}
