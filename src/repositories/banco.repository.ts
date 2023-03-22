import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Banco, BancoRelations} from '../models';

export class BancoRepository extends DefaultCrudRepository<
  Banco,
  typeof Banco.prototype.bancoId,
  BancoRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Banco, dataSource);
  }
}
