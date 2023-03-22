import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Lote'}}})
export class Lote extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: {columnName: 'LoteID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  loteId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    mssql: {columnName: 'BloqueID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  bloqueId: number;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    mssql: {columnName: 'Codigo', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  codigo?: string;

  @property({
    type: 'number',
    precision: 53,
    generated: false,
    mssql: {columnName: 'Area', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES', generated: false},
  })
  area?: number;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    mssql: {columnName: 'Matricula', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  matricula?: string;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    mssql: {columnName: 'Catastral', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  catastral?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Lote>) {
    super(data);
  }
}

export interface LoteRelations {
  // describe navigational properties here
}

export type LoteWithRelations = Lote & LoteRelations;
