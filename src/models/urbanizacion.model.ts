import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Urbanizacion'}}})
export class Urbanizacion extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: {columnName: 'UrbanizacionID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  urbanizacionId: number;

  @property({
    type: 'string',
    required: true,
    length: 2,
    generated: false,
    mssql: {columnName: 'Codigo', dataType: 'varchar', dataLength: 2, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  codigo: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    generated: false,
    mssql: {columnName: 'Nombre', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    mssql: {columnName: 'LocalidadID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  localidadId: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    generated: false,
    mssql: {columnName: 'Fraccionamiento', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  fraccionamiento: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    generated: false,
    mssql: {columnName: 'Tomo', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  tomo: string;

  @property({
    type: 'number',
    required: true,
    precision: 53,
    generated: false,
    mssql: {columnName: 'Costo', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'NO', generated: false},
  })
  costo: number;

  @property({
    type: 'date',
    required: true,
    generated: false,
    mssql: {columnName: 'Inicio', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  inicio: string;

  @property({
    type: 'string',
    length: 300,
    generated: false,
    mssql: {columnName: 'Observacion', dataType: 'varchar', dataLength: 300, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  observacion?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Urbanizacion>) {
    super(data);
  }
}

export interface UrbanizacionRelations {
  // describe navigational properties here
}

export type UrbanizacionWithRelations = Urbanizacion & UrbanizacionRelations;
