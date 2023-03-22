import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'LoteGasto'}}})
export class LoteGasto extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: {columnName: 'LoteGastoID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  loteGastoId: number;

  @property({
    type: 'date',
    generated: false,
    mssql: {columnName: 'Fecha', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  fecha?: string;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    mssql: {columnName: 'Documento', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  documento?: string;

  @property({
    type: 'string',
    length: 1,
    generated: false,
    mssql: {columnName: 'TipoDocumento', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  tipoDocumento?: string;

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
    precision: 10,
    scale: 0,
    generated: false,
    mssql: {columnName: 'LoteID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  loteId: number;

  @property({
    type: 'string',
    length: 50,
    generated: false,
    mssql: {columnName: 'Archivo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  archivo?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<LoteGasto>) {
    super(data);
  }
}

export interface LoteGastoRelations {
  // describe navigational properties here
}

export type LoteGastoWithRelations = LoteGasto & LoteGastoRelations;
