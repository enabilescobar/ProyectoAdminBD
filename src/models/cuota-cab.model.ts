import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'CuotaCab'}}})
export class CuotaCab extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: {columnName: 'CuotaCabID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  cuotaCabId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    mssql: {columnName: 'VentaID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  ventaId: number;

  @property({
    type: 'number',
    required: true,
    precision: 53,
    generated: false,
    mssql: {columnName: 'Valor', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'NO', generated: false},
  })
  valor: number;

  @property({
    type: 'number',
    required: true,
    precision: 53,
    generated: false,
    mssql: {columnName: 'Interes', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'NO', generated: false},
  })
  interes: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    mssql: {columnName: 'Tiempo', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  tiempo: number;

  @property({
    type: 'string',
    required: true,
    length: 1,
    generated: false,
    mssql: {columnName: 'Estado', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  estado: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CuotaCab>) {
    super(data);
  }
}

export interface CuotaCabRelations {
  // describe navigational properties here
}

export type CuotaCabWithRelations = CuotaCab & CuotaCabRelations;
