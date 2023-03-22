import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Referencia'}}})
export class Referencia extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    id: 1,
    mssql: {columnName: 'ReferenciaID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  referenciaId: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    mssql: {columnName: 'PersonaID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  personaId: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    generated: false,
    mssql: {columnName: 'Nombre', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    generated: false,
    mssql: {columnName: 'Observacion', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  observacion: string;

  @property({
    type: 'string',
    required: true,
    length: 10,
    generated: false,
    mssql: {columnName: 'Tipo', dataType: 'varchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    generated: false,
    mssql: {columnName: 'Telefono', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    generated: false,
    mssql: {columnName: 'Direccion', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    generated: false,
    mssql: {columnName: 'Correo', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  correo: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Referencia>) {
    super(data);
  }
}

export interface ReferenciaRelations {
  // describe navigational properties here
}

export type ReferenciaWithRelations = Referencia & ReferenciaRelations;
