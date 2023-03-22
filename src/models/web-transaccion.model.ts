import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'WebTransaccion'}}
})
export class WebTransaccion extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: {columnName: 'WebTransaccionID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  webTransaccionId: number;

  @property({
    type: 'date',
    required: true,
    generated: false,
    mssql: {columnName: 'Fecha', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  fecha: string;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    mssql: {columnName: 'Sucursal', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  sucursal?: string;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    mssql: {columnName: 'Agencia', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  agencia?: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    mssql: {columnName: 'WebRespuestaID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  webRespuestaId: number;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    mssql: {columnName: 'Referencia', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  referencia?: string;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    mssql: {columnName: 'Moneda', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  moneda?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: false,
    mssql: {columnName: 'Reversion', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: false},
  })
  reversion?: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    generated: false,
    mssql: {columnName: 'Usuario', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  usuario: string;

  @property({
    type: 'number',
    required: true,
    precision: 53,
    generated: false,
    mssql: {columnName: 'Tasa', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'NO', generated: false},
  })
  tasa: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    generated: false,
    mssql: {columnName: 'Clave', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  clave: string;

  @property({
    type: 'string',
    length: 20,
    generated: false,
    mssql: {columnName: 'Banco', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  banco?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<WebTransaccion>) {
    super(data);
  }
}

export interface WebTransaccionRelations {
  // describe navigational properties here
}

export type WebTransaccionWithRelations = WebTransaccion & WebTransaccionRelations;
