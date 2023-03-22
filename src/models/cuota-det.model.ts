import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'CuotaDet'}}})
export class CuotaDet extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: {columnName: 'CuotaDetID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  cuotaDetId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    mssql: {columnName: 'CuotaCabID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  cuotaCabId: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    generated: false,
    mssql: {columnName: 'Codigo', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  codigo: string;

  @property({
    type: 'date',
    required: true,
    generated: false,
    mssql: {columnName: 'FechaProceso', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  fechaProceso: string;

  @property({
    type: 'date',
    required: true,
    generated: false,
    mssql: {columnName: 'FechaVence', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  fechaVence: string;

  @property({
    type: 'date',
    required: true,
    generated: false,
    mssql: {columnName: 'FechaPago', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  fechaPago: string;

  @property({
    type: 'number',
    required: true,
    precision: 53,
    generated: false,
    mssql: {columnName: 'Capital', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'NO', generated: false},
  })
  capital: number;

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
    precision: 53,
    generated: false,
    mssql: {columnName: 'Extra', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'NO', generated: false},
  })
  extra: number;

  @property({
    type: 'number',
    required: true,
    precision: 53,
    generated: false,
    mssql: {columnName: 'Mora', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'NO', generated: false},
  })
  mora: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CuotaDet>) {
    super(data);
  }
}

export interface CuotaDetRelations {
  // describe navigational properties here
}

export type CuotaDetWithRelations = CuotaDet & CuotaDetRelations;
