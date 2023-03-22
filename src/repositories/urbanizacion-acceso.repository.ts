import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {UrbanizacionAcceso, UrbanizacionAccesoRelations} from '../models';

export class UrbanizacionAccesoRepository extends DefaultCrudRepository<
  UrbanizacionAcceso,
  typeof UrbanizacionAcceso.prototype.urbanizacionAccesoId,
  UrbanizacionAccesoRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(UrbanizacionAcceso, dataSource);
  }
}
