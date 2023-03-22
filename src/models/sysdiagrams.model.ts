import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'sysdiagrams'}}})
export class Sysdiagrams extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 128,
    generated: false,
    mssql: {columnName: 'name', dataType: 'nvarchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  name: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    generated: false,
    mssql: {columnName: 'principal_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: false},
  })
  principalId: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: 1,
    id: 1,
    mssql: {columnName: 'diagram_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO', generated: 1},
  })
  diagramId?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: false,
    mssql: {columnName: 'version', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES', generated: false},
  })
  version?: number;

  @property({
    type: 'Binary',
    length: -1,
    generated: false,
    mssql: {columnName: 'definition', dataType: 'varbinary', dataLength: -1, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  definition?: Buffer;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Sysdiagrams>) {
    super(data);
  }
}

export interface SysdiagramsRelations {
  // describe navigational properties here
}

export type SysdiagramsWithRelations = Sysdiagrams & SysdiagramsRelations;
