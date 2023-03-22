import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Persona'}}})
export class Persona extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: {columnName: 'PersonaID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  personaId: number;

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
    length: -1,
    generated: false,
    mssql: {columnName: 'Nombre', dataType: 'varchar', dataLength: -1, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
    length: 1,
    generated: false,
    mssql: {columnName: 'Sexo', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  sexo: string;

  @property({
    type: 'string',
    required: true,
    length: 1,
    generated: false,
    mssql: {columnName: 'Civil', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  civil: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    generated: false,
    mssql: {columnName: 'Identidad', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  identidad: string;

  @property({
    type: 'string',
    required: true,
    length: 1,
    generated: false,
    mssql: {columnName: 'TipoIdentidad', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  tipoIdentidad: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    generated: false,
    mssql: {columnName: 'RTN', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  rtn: string;

  @property({
    type: 'date',
    required: true,
    generated: false,
    mssql: {columnName: 'FechaNac', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  fechaNac: string;

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
    length: 100,
    generated: false,
    mssql: {columnName: 'Direccion', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  direccion: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    mssql: {columnName: 'NacionalidadID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  nacionalidadId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    mssql: {columnName: 'ProfesionID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  profesionId: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    generated: false,
    mssql: {columnName: 'Email', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  email: string;

  @property({
    type: 'boolean',
    required: true,
    generated: false,
    mssql: {columnName: 'Vehiculo', dataType: 'bit', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  vehiculo: boolean;

  @property({
    type: 'string',
    required: true,
    length: 20,
    generated: false,
    mssql: {columnName: 'Modelo', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  modelo: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    mssql: {columnName: 'Anno', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  anno: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    generated: false,
    mssql: {columnName: 'Placa', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  placa: string;

  @property({
    type: 'string',
    required: true,
    length: 1,
    generated: false,
    mssql: {columnName: 'TipoCasa', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  tipoCasa: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
