import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Empresa'}}})
export class Empresa extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: {columnName: 'EmpresaID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  empresaId: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    generated: false,
    mssql: {columnName: 'Codigo', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
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
    mssql: {columnName: 'ActividadID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  actividadId: number;

  @property({
    type: 'date',
    required: true,
    generated: false,
    mssql: {columnName: 'Ingreso', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  ingreso: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    generated: false,
    mssql: {columnName: 'Puesto', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  puesto: string;

  @property({
    type: 'number',
    required: true,
    precision: 53,
    generated: false,
    mssql: {columnName: 'Sueldo', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'NO', generated: false},
  })
  sueldo: number;

  @property({
    type: 'string',
    length: 50,
    generated: false,
    mssql: {columnName: 'Web', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  web?: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    generated: false,
    mssql: {columnName: 'Direccion', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  direccion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Empresa>) {
    super(data);
  }
}

export interface EmpresaRelations {
  // describe navigational properties here
}

export type EmpresaWithRelations = Empresa & EmpresaRelations;
