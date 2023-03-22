
--drop database lotificadoraBD
use master
go
create database LotificadoraBD
go
use LotificadoraBD
go

--MODULO CLIENTE
create table Profesion (
ProfesionID int primary key not null,
Codigo varchar(20),
Nombre varchar(50)
);

create table Localidad (
	LocalidadID int primary key not null,
	Nombre varchar(50)
);

create table Nacionalidad (
	NacionalidadID int primary key not null,
	Codigo varchar(20) not null,
	Nombre varchar(50) not null
);

create table Persona (
	PersonaID int primary key not null,
	Codigo varchar(20) not null,
	Nombre varchar(MAX)not null,
	Sexo varchar(1) not null,
	Civil varchar(1) not null,
	Identidad varchar(20) not null,
	TipoIdentidad varchar(1) not null,
	RTN varchar(20) not null,
	FechaNac datetime not null,
	LocalidadID int not null,
	Direccion varchar(100) not null,
	NacionalidadID int not null,
	ProfesionID int not null,
	Email varchar(50) not null,
	Vehiculo bit not null,
	Modelo varchar(20) not null,
	Anno int not null,
	Placa varchar(20) not null,
	TipoCasa varchar(1) not null,
	foreign key (ProfesionID) references Profesion(ProfesionID),
	foreign key (LocalidadID) references Localidad(LocalidadID),
	foreign key (NacionalidadID) references Nacionalidad(NacionalidadID)
);

create table Referencia (
	ReferenciaID int primary key not null,
	PersonaID int not null,
	Nombre varchar(50) not null,
	Observacion varchar(200) not null,
	Tipo varchar(10) not null,
	Telefono varchar(20) not null,
	Direccion varchar(50) not null,
	Correo varchar(50) not null,
	foreign key (PersonaID) references Persona(PersonaID)
);

create table Actividad (
	ActividadID int primary key not null,
	Codigo varchar(20) not null,
	Nombre varchar(50) not null
);

create table Empresa (
	EmpresaID int primary key not null,
	Codigo varchar(20) not null,
	Nombre varchar(50) not null,
	ActividadID int not null,
	Ingreso datetime not null,
	Puesto varchar(50) not null,
	Sueldo float not null,
	Web varchar(50),
	Direccion varchar(50) not null,
	foreign key (ActividadID) references Actividad(ActividadID)
);

create table PersonaLabor (
	PersonaLaborID int primary key not null,
	PersonaID int not null,
	EmpresaID int not null,
	foreign key (PersonaID) references Persona(PersonaID),
	foreign key (EmpresaID) references Empresa(EmpresaID)
);

--MODULO VENTA
create table Bloque (
	BloqueID int primary key not null,
	Codigo varchar(20) not null,
	UrbanizacionID int not null
	--foreign key (UrbanizacionID) references Urbanizacion(UrbanizacionID)
);

create table Lote (
	LoteID int primary key not null,
	BloqueID int not null,
	Codigo varchar(20),
	Area float,
	Matricula varchar(20),
	Catastral varchar(20),
	foreign key (BloqueID) references Bloque(BloqueID)
);

create table Moneda (
	MonedaID int primary key not null,
	Codigo varchar(20),
	Nombre varchar(50)
);

create table Banco (
	BancoID int primary key not null,
	Codigo varchar(20) not null,
	Nombre varchar(50) not null
);

create table Casa (
	CasaID int primary key not null,
	Codigo varchar(20),
	Nombre varchar(50)
);

create table Venta (
	VentaID int primary key not null,
	Codigo varchar(20) not null,
	LoteID int not null,
	ClienteID int not null,
	SucesorID int not null,
	RepresentanteID int not null,
	CasaID int not null,
	Estado varchar(1),
	BancoID int,
	Reserva varchar(20),
	MonedaID int not null,
	Activo bit,
	foreign key (LoteID) references Lote(LoteID),
	foreign key (CasaID) references Casa(CasaID),
	foreign key (BancoID) references Banco(BancoID),
	foreign key (MonedaID) references Moneda(MonedaID),
	foreign key (ClienteID) references Persona(PersonaID)
);

create table CuotaCab (
	CuotaCabID int primary key not null,
	VentaID int not null,
	Valor float not null,
	Interes float not null,
	Tiempo int not null,
	Estado varchar(1) not null,
	foreign key (VentaID) references Venta(VentaID)
);

create table CuotaDet (
	CuotaDetID int primary key not null,
	CuotaCabID int not null,
	Codigo varchar(20) not null,
	FechaProceso datetime not null,
	FechaVence datetime not null,
	FechaPago datetime not null,
	Capital float not null,
	Interes float not null,
	Extra float not null,
	Mora float not null,
	foreign key (CuotaCabID) references CuotaCab(CuotaCabID)
);

--MODULO INVENTARIO
create table Urbanizacion (
	UrbanizacionID int primary key not null,
	Codigo varchar(2) not null,
	Nombre varchar(50) not null,
	LocalidadID int not null,
	Fraccionamiento varchar(20) not null,
	Tomo varchar(20) not null,
	Costo float not null,
	Inicio datetime not null,
	Observacion varchar(300),
	foreign key (LocalidadID) references Localidad(LocalidadID)
);

Alter table Bloque add constraint fkUrbanizacionID foreign key (UrbanizacionID) references Urbanizacion(UrbanizacionID)

create table Colinda (
	ColindaID int primary key not null,
	LoteID int not null,
	Descripcion varchar(200),
	foreign key (LoteID) references Lote(LoteID)
);

create table LoteGasto (
	LoteGastoID int primary key not null,
	Fecha datetime,
	Documento varchar(20),
	TipoDocumento varchar(1),
	Valor float not null,
	LoteID int not null,
	Archivo varchar(50),
	foreign key (LoteID) references Lote(LoteID)
);

create table Usuario (
	UsuarioID int primary key not null,
	Codigo varchar(20) not null,
	Nombre varchar(50) not null
);

create table UrbanizacionAcceso (
	UrbanizacionAccesoID int primary key not null,
	UrbanizacionID int not null,
	UsuarioID int not null,
	foreign key (UrbanizacionID) references Urbanizacion(UrbanizacionID),
	foreign key (UsuarioID) references Usuario(UsuarioID)
);

Create table Cobranza (
	CobranzaID int primary key not null,
	UrbanizacionID int not null,
	BancoID int not null,
	foreign key (BancoID) references Banco(BancoID),
	foreign key (UrbanizacionID) references Urbanizacion(UrbanizacionID)
);

--MODULO PAGO
create table WebRespuesta (
	WebRespuestaID int primary key not null,
	Codigo varchar(20),
	Nombre varchar(50)
);

create table WebTransaccion (
	WebTransaccionID int primary key not null,
	Fecha datetime not null,
	Sucursal varchar(20),
	Agencia varchar(20),
	WebRespuestaID int not null,
	Referencia varchar(20),
	Moneda varchar(20),
	Reversion int,
	Usuario varchar(20) not null,
	Tasa float not null,
	Clave varchar(20) not null,
	Banco varchar(20),
	foreign key (WebRespuestaID) references WebRespuesta(WebRespuestaID)
);

create table ReciboCab (
	ReciboCabID int primary key not null,
	FechaMovimiento datetime not null,
	FechaProceso datetime not null,
	Valor float not null,
);

create table PagoCab (
	PagoCabID int primary key not null,
	VentaID int not null,
	WebTransaccionID int not null,
	Fecha datetime,
	Estado varchar(1),
	ReciboCabID int not null,
	foreign key (VentaID) references Venta(VentaID),
	foreign key (WebTransaccionID) references WebTransaccion(WebTransaccionID),
	foreign key (ReciboCabID) references ReciboCab(ReciboCabID)
);

create table PagoDet (
	PagoDetID int primary key not null,
	PagoCabID int not null,
	CuotaDetID int not null,
	Valor float,
	foreign key (PagoCabID) references PagoCab(PagoCabID),
	foreign key (CuotaDetID) references CuotaDet(CuotaDetID)
);



