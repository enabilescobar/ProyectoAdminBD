import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Colinda'}}})
export class Colinda extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: {columnName: 'ColindaID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  colindaId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    mssql: {columnName: 'LoteID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  loteId: number;

  @property({
    type: 'string',
    length: 200,
    generated: false,
    mssql: {columnName: 'Descripcion', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  descripcion?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Colinda>) {
    super(data);
  }
}

export interface ColindaRelations {
  // describe navigational properties here
}

export type ColindaWithRelations = Colinda & ColindaRelations;
