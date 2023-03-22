--Vistas
use LotificadoraBD
go

Create view Pagos_12meses
as
select VentaID, Valor, Interes, Tiempo, Estado from CuotaCab

Create view Intereses_generados
as
select CuotaCabID,CuotaDetID,Interes,Extra,Mora,Capital,FechaPago from CuotaDet

Create view Lotes_disponibles
as
select LoteID,BloqueID,Area,Catastral,Codigo from Lote

Create view vista_Ventas
as 
select VentaID,LoteID,ClienteID,SucesorID,CasaID,Estado,BancoID,Reserva,Activo from Venta

Create view vista_CostoLote
as 
select LoteGastoID,LoteID,Documento,Archivo,Valor from LoteGasto

Create view vista_TransaccionWeb
as 
select WebTransaccionID,Fecha,Sucursal,Usuario,Banco,Tasa from WebTransaccion

Create view vista_Recibos
as
select ReciboCabID,FechaMovimiento,FechaProceso,Valor from ReciboCab

Create view vista_Pagos
as
select PagoCabID,VentaID,WebTransaccionID,Fecha,Estado,ReciboCabID from PagoCab

Create view vista_Personal
as
select PersonaLaborID, PersonaID, EmpresaID from PersonaLabor

Create view vista_Referencias
as
select ReferenciaID,PersonaID, Nombre, Observacion, Tipo, Telefono, Direccion, Correo from Referencia

Create view vista_Persona 
as
select PersonaID,Nombre,Sexo,Civil,Identidad,TipoIdentidad,RTN,FechaNac,NacionalidadID,Email,TipoCasa from Persona

Create view vista_Nacionalidad 
as
select NacionalidadID, Codigo, Nombre from Nacionalidad 

Create view vista_Empresa 
as
select EmpresaID,Nombre,ActividadID,Ingreso,Puesto,Sueldo,Web,Direccion from Empresa

Create view vista_Profesion
as
select ProfesionID, Codigo, Nombre from Profesion

Create view vista_Banco
as
select BancoID,Codigo,Nombre from Banco

Create view vista_Urbanizacion
as
select UrbanizacionID,Nombre, LocalidadID, Fraccionamiento,Tomo,Costo, Inicio, Observacion  from Urbanizacion

Create view vista_Usuario
as
select UsuarioID,Nombre, Codigo from Usuario

Create view vista_UrbanizacionAccesos
as
select UsuarioID,UrbanizacionAccesoID, UrbanizacionID from UrbanizacionAcceso

Create view vista_Cobranza
as
select CobranzaID,UrbanizacionID,BancoID  from Cobranza

Select *from Pagos_12meses
Select *from Intereses_generados
Select *from Lotes_disponibles
Select *from vista_Ventas
Select *from vista_TransaccionWeb
Select *from vista_Recibos
Select *from vista_Personal
Select *from vista_Referencias
Select *from vista_Persona
Select *from vista_Nacionalidad 
Select *from vista_Empresa 
Select *from vista_Profesion
Select *from vista_Banco
Select *from vista_Urbanizacion
Select *from vista_Usuario
Select *from vista_UrbanizacionAccesos
Select *from vista_Cobranza



--Triggers 
use LotificadoraBD
go

Create trigger TR_Lote
on Lote for insert 
as
insert into Venta values (6,45,6,6,6,6,6,'B',6,'contrato', 6,1)

Create trigger TR_Bloque
on Bloque for insert 
as
insert into Lote values (6,6,'PO23',1254,'MA56S4','50145658m')


Create trigger TR_Banco
on Banco for insert 
as
insert into Moneda values (6,4542,'Dolares')


Create trigger TR_Personal
on PersonaLabor for insert 
as
insert into Venta values (7,50,7,7,7,7,7,'B',7,'contrato', 7,1)

Create trigger TR_Persona
on Persona for insert 
as
insert into CuotaCab values (7,7,20,8.4,20,'A')



--Procedimientos Almacenados
use LotificadoraBD
go

create procedure obtener_ventas
as
begin
    select *from Venta
	end 
EXEC obtener_ventas


create procedure obtener_actividad
as
begin
    select *from Actividad
	end 
EXEC obtener_actividad


create procedure obtener_Profesion
as
begin
    select *from Profesion
	end 
EXEC obtener_Profesion


create procedure obtener_Localidad
as
begin
    select *from Localidad
	end 
EXEC obtener_Localidad


create procedure obtener_Nacionalidad
as
begin
    select *from Nacionalidad 
	end 
EXEC obtener_Nacionalidad


create procedure obtener_Persona
as
begin
    select *from Persona
	end 
EXEC obtener_Persona


create procedure obtener_Referencia
as
begin
    select *from Referencia
	end 
EXEC obtener_Referencia


create procedure obtener_Empresa
as
begin
    select *from Empresa
	end 
EXEC obtener_Empresa


create procedure obtener_PersonaLabor
as
begin
    select *from PersonaLabor
	end 
EXEC obtener_PersonaLabor


create procedure obtener_Bloque
as
begin
    select *from Bloque
	end 
EXEC obtener_Bloque 


create procedure obtener_Lote
as
begin
    select *from Lote
	end 
EXEC obtener_Lote


create procedure obtener_Moneda
as
begin
    select *from Moneda
	end 
EXEC obtener_Moneda


create procedure obtener_Banco
as
begin
    select *from Banco
	end 
EXEC obtener_Banco


create procedure obtener_Casa
as
begin
    select *from Casa
	end 
EXEC obtener_Casa


create procedure obtener_CuotaCab
as
begin
    select *from CuotaCab
	end 
EXEC obtener_CuotaCab


create procedure obtener_CuotaDet
as
begin
    select *from CuotaDet
	end 
EXEC obtener_CuotaDet


create procedure obtener_Urbanizacion
as
begin
    select *from Urbanizacion 
	end 
EXEC obtener_Urbanizacion


create procedure obtener_Colinda
as
begin
    select *from Colinda
	end 
EXEC obtener_Colinda


create procedure obtener_LoteGasto
as
begin
    select *from LoteGasto
	end 
EXEC obtener_LoteGasto


create procedure obtener_Usuario
as
begin
    select *from Usuario
	end 
EXEC obtener_Usuario


create procedure obtener_UrbanizacionAcceso
as
begin
    select *from UrbanizacionAcceso
	end 
EXEC obtener_UrbanizacionAcceso


create procedure obtener_Cobranza
as
begin
    select *from Cobranza
	end 
EXEC obtener_Cobranza


create procedure obtener_WebRespuesta
as
begin
    select *from WebRespuesta
	end 
EXEC obtener_WebRespuesta


create procedure obtener_WebTransaccion
as
begin
    select *from WebTransaccion
	end 
EXEC obtener_WebTransaccion


create procedure obtener_ReciboCab
as
begin
    select *from ReciboCab
	end 
EXEC obtener_ReciboCab


create procedure obtener_PagoCab
as
begin
    select *from PagoCab
	end 
EXEC obtener_PagoCab


create procedure obtener_PagoDet
as
begin
    select *from PagoDet
	end 
EXEC obtener_PagoDet
