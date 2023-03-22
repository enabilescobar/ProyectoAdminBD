import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'ReciboCab'}}})
export class ReciboCab extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: {columnName: 'ReciboCabID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  reciboCabId: number;

  @property({
    type: 'date',
    required: true,
    generated: false,
    mssql: {columnName: 'FechaMovimiento', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  fechaMovimiento: string;

  @property({
    type: 'date',
    required: true,
    generated: false,
    mssql: {columnName: 'FechaProceso', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  fechaProceso: string;

  @property({
    type: 'number',
    required: true,
    precision: 53,
    generated: false,
    mssql: {columnName: 'Valor', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'NO', generated: false},
  })
  valor: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ReciboCab>) {
    super(data);
  }
}

export interface ReciboCabRelations {
  // describe navigational properties here
}

export type ReciboCabWithRelations = ReciboCab & ReciboCabRelations;
