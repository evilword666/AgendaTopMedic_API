//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  contador:any = 0;
  private db: SQLiteObject;
  private isOpen: boolean;


  constructor( public storage: SQLite) {
    console.log('Hello DatabaseProvider Provider');

    if (!this.isOpen) {
      this.storage = new SQLite();
      this.storage.create({ name: "topmedic11.db", location: "default" }).then((db: SQLiteObject) => {
        this.db = db;
/*
        db.executeSql("CREATE TABLE IF NOT EXISTS tb_datos_Pacientes (id INTEGER PRIMARY KEY AUTOINCREMENT, fecha_consulta text, hora text, horb text, descripcion text, link_token text, tipo_servicio text, booking_id text,edad_paciente text,Sexo text,padecimiento text, nombre_completo_paciente text)", []).then(()=>{
            db.executeSql("CREATE TABLE IF NOT EXISTS tb_citas_pacientes (id INTEGER PRIMARY KEY AUTOINCREMENT, id_T text, fecha_cita text, titulo text, descripcion text, hora_inicio text, tipo_servicio text, booking_id text,edad_paciente text,Sexo text,padecimiento text, nombre_completo_paciente text)", []).then(()=>{                
                db.executeSql("CREATE TABLE IF NOT EXISTS tb_servicios_medicos (id INTEGER PRIMARY KEY AUTOINCREMENT, id_T text, fecha_cita text, titulo text, descripcion text, hora_inicio text, tipo_servicio text, booking_id text,edad_paciente text,Sexo text,padecimiento text, nombre_completo_paciente text)", []).then(()=>{
                    db.executeSql("CREATE TABLE IF NOT EXISTS tb_horarios_medicos (id INTEGER PRIMARY KEY AUTOINCREMENT, id_T text, fecha_cita text, titulo text, descripcion text, hora_inicio text, tipo_servicio text, booking_id text,edad_paciente text,Sexo text,padecimiento text, nombre_completo_paciente text)", []).then(()=>{
                    }).catch((err)=>console.log("Error al tratar de crear la tabla tb_horarios_medicos", err));
                }).catch((err)=>console.log("Error al tratar de crear la tabla tb_servicios_medicos", err));
            }).catch((err)=>console.log("Error al tratar de crear la tabla tb_citas_pacientes", err));
        }).catch((err)=>console.log("Error al crear la tabla tb_datos_Pacientes", err));
*/
db.executeSql("CREATE TABLE IF NOT EXISTS tb_datos_citas_pacientes (id INTEGER PRIMARY KEY AUTOINCREMENT, id_cita text, fecha_cita text, hora_inicio text, hora_final text, enlace_videochat text, tipo_servicio text, descripcion text,antecedentes_principales text,id_medico text, id_paciente text,nombre text, apellido_paterno text,apellido_materno text, sexo text, edad text)", []).then(()=>{
    console.log("Tabla tb_citas_medicos creada exitosamente!")
}).catch((err)=>console.log("Error al tratar de crear la tabla tb_horarios_medicos", err));

      this.isOpen = true;

      }).catch((error) => {
        console.log("Error en la BD: "+error);
      })

    }

  }

/***********************************************************************************************************/
/***************************** Funciones para almacenar datos la primera vez *******************************/
/***********************************************************************************************************/
almacenarCitasEnBD(id_cita: string, fecha_cita:string, hora_inicio:string, hora_final: string, enlace_videochat: string,tipo_servicio:string, descripcion:string, antecedentes_principales: string, id_medico: string,id_paciente:string, nombre: string,apellido_paterno:string,apellido_materno:string, sexo:string, edad:string, numCitas:number ){
    console.log("Desde funcion de almacenamiento: \nid_cita: "+id_cita+" \nfecha_cita: "+fecha_cita+" "+" \nhora_inicio: "+hora_inicio+" \nhora_final: "+hora_final+" \nenlace_videochat: "+enlace_videochat+"\ntipo_servicio: "+tipo_servicio+"\ndescripcion: "+descripcion+" \nantecedentes_principales: "+antecedentes_principales+"\nid_medico: "+id_medico+" \nid_paciente: "+id_paciente+" \nnombre: "+nombre+" \napellido_paterno: "+apellido_paterno+"  \napellido_materno: "+apellido_materno+"   \nsexo: "+sexo+"   \nedad: "+edad+" ")

    return new Promise ((resolve, reject) => {
      //id_cita text, fecha_cita text, hora_inicio text, hora_final text, enlace_videochat text, tipo_servicio text, descripcion text,antecedentes_principales text,id_paciente text,nombre text, apellido_paterno text,apellido_materno text, sexo text, edad text   
      //id_cita text, fecha_cita text, hora_inicio text, hora_final text, enlace_videochat text, tipo_servicio text, descripcion text,antecedentes_principales text,id_paciente text,nombre text, apellido_paterno text,apellido_materno text, sexo text, edad text)"
      let sql = "INSERT INTO tb_datos_citas_pacientes (id_cita, fecha_cita, hora_inicio, hora_final, enlace_videochat,tipo_servicio, descripcion, antecedentes_principales, id_medico, id_paciente, nombre, apellido_paterno,apellido_materno,sexo,edad) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      this.db.executeSql(sql, [id_cita, fecha_cita, hora_inicio, hora_final, enlace_videochat,tipo_servicio, descripcion, antecedentes_principales,id_medico, id_paciente, nombre, apellido_paterno,apellido_materno,sexo,edad]).then((data) =>{
      //Aqui iba el resolve  
        //alert("Insercion correcta: "+data)
        //console.log("Duda CONVERTIDA: "+JSON.stringify(data))
      }, (error) => {
        //alert("Insert db function: "+JSON.stringify(error))
        reject(error)
      });
      this.contador++; 
      resolve(this.contador);   
      
      if(this.contador == numCitas){
        //alert("Contador local: "+this.contador+" \nParametro: "+numCitas)        
        //alert("Se reiniciara el contador a 0")
        this.contador = 0;
      }else{
        
      }
//      resolve(this.contador);     
    });
  }
   
  obtenerCitas(){
    return new Promise ((resolve, reject) => {
      this.db.executeSql("SELECT * FROM tb_datos_citas_pacientes", []).then((data) => {
        //alert("Numero de filas de consulta: "+data.rows.length)
        let arrayUsers = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            arrayUsers.push({
              id_cita: data.rows.item(i).id_cita,
              fecha_cita: data.rows.item(i).fecha_cita,
              hora_inicio: data.rows.item(i).hora_inicio,
              hora_final: data.rows.item(i).hora_final,
              enlace_videochat: data.rows.item(i).enlace_videochat,
              tipo_servicio: data.rows.item(i).tipo_servicio,
              descripcion: data.rows.item(i).descripcion,
              antecedentes_principales: data.rows.item(i).antecedentes_principales,
              id_medico: data.rows.item(i).id_medico,
              id_paciente: data.rows.item(i).id_paciente,
              nombre: data.rows.item(i).nombre,
              apellido_paterno: data.rows.item(i).apellido_paterno,
              apellido_materno: data.rows.item(i).apellido_materno,
              sexo: data.rows.item(i).sexo,
              edad: data.rows.item(i).edad
            });            
          }          
        }
        //alert(arrayUsers)
        resolve(arrayUsers);
      }, (error) => {
        alert(error)
        reject(error);
      })
    })
  }
  


/***********************************************************************************************************/
/********************************** Obtener todos los campos de la cita seleccionada ***********************/
/***********************************************************************************************************/
obtenerCamposCitaSeleccionada(fechaCitaSeleccionada,horaInicioCitaSeleccionada,horaFinCitaSeleccionada){
  return new Promise ((resolve, reject) => {
     //id_cita text, fecha_cita text, hora_inicio text, hora_final text, enlace_videochat text, tipo_servicio text, descripcion text,antecedentes_principales text,id_paciente text,nombre text, apellido_paterno text,apellido_materno text, sexo text, edad text   

    let query = "SELECT * FROM tb_datos_citas_pacientes WHERE fecha_cita = ? AND hora_inicio = ? AND hora_final = ? ";
    //alert(query)
      this.db.executeSql(query, [fechaCitaSeleccionada,horaInicioCitaSeleccionada,horaFinCitaSeleccionada]).then((data) => {
        
      //this.db.executeSql("SELECT * FROM horarios", []).then((data) => {
      //alert("Numero de filas de consulta: "+data.rows.length)
      let arrayCamposCitaSeleccionada = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          arrayCamposCitaSeleccionada.push({
            id_cita: data.rows.item(i).id_cita,
            fecha_cita: data.rows.item(i).fecha_cita,
            hora_inicio: data.rows.item(i).hora_inicio,
            hora_final: data.rows.item(i).hora_final,
            enlace_videochat: data.rows.item(i).enlace_videochat,
            tipo_servicio: data.rows.item(i).tipo_servicio,
            descripcion: data.rows.item(i).descripcion,
            antecedentes_principales: data.rows.item(i).antecedentes_principales,
            id_medico: data.rows.item(i).id_medico,
            id_paciente: data.rows.item(i).id_paciente,
            nombre: data.rows.item(i).nombre,
            apellido_paterno: data.rows.item(i).apellido_paterno,
            apellido_materno: data.rows.item(i).apellido_materno,
            sexo: data.rows.item(i).sexo,
            edad: data.rows.item(i).edad
          });            
        }          
      }
//      alert(JSON.stringify(arrayUsers))
      resolve(arrayCamposCitaSeleccionada);
    }, (error) => {
//      alert(JSON.stringify(error))
      reject(error);
    })
  })
}
/***********************************************************************************************************/
/***********************************************************************************************************/
limpiarTabla(){
    return new Promise ((resolve, reject) => {
      this.db.executeSql("DELETE FROM tb_datos_citas_pacientes", []).then((data) => {
        let arrayUsers = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            arrayUsers.push({
              id_cita: data.rows.item(i).id_cita,
              fecha_cita: data.rows.item(i).fecha_cita,
              hora_inicio: data.rows.item(i).hora_inicio,
              hora_final: data.rows.item(i).hora_final,
              enlace_videochat: data.rows.item(i).enlace_videochat,
              tipo_servicio: data.rows.item(i).tipo_servicio,
              descripcion: data.rows.item(i).descripcion,
              antecedentes_principales: data.rows.item(i).antecedentes_principales,
              id_medico: data.rows.item(i).id_medico,
              id_paciente: data.rows.item(i).id_paciente,
              nombre: data.rows.item(i).nombre,
              apellido_paterno: data.rows.item(i).apellido_paterno,
              apellido_materno: data.rows.item(i).apellido_materno,
              sexo: data.rows.item(i).sexo,
              edad: data.rows.item(i).edad
            });            
          }          
        }
        resolve(arrayUsers);
      }, (error) => {
        reject(error);
      })
    })
  }
/***********************************************************************************************************/
/***********************************************************************************************************/  



/***********************************************************************************************************/
/***************************** Funciones para almacenar tabla con datos obtenidos del API ******************/
/***********************************************************************************************************/
almacenarHorariosCitasEnBDconAPI(id: string, fecha_cita:string, titulo:string, descripcion: string, hora_inicio: string,hora_final: string,color: string,sub_color: string,enlace_videochat: string,enlace_cita: string,status: string, Paciente: string, Doctor: string, numCitas:number ){

  return new Promise ((resolve, reject) => {
                                
    let sql = "INSERT INTO horarios_API (id,fecha_cita, titulo, descripcion, hora_inicio, hora_final, color, sub_color, enlace_videochat, enlace_cita, status, Paciente, Doctor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    this.db.executeSql(sql, [id,fecha_cita, titulo, descripcion, hora_inicio, hora_final, color, sub_color, enlace_videochat, enlace_cita, status, Paciente, Doctor]).then((data) =>{
    //Aqui iba el resolve  
      //alert("Duda: "+data)
      //console.log("Duda CONVERTIDA: "+JSON.stringify(data))
    }, (error) => {
      //alert("Insert db function: "+JSON.stringify(error))
      reject(error);
    });
    this.contador++; 
    resolve(this.contador);   
    
    if(this.contador == numCitas){
      //alert("Contador local: "+this.contador+" \nParametro: "+numCitas)        
      //alert("Se reiniciara el contador a 0")
      this.contador = 0;
    }else{
      
    }
//      resolve(this.contador);     
  });
}
  
/***********************************************************************************************************/
/************************** Funcion para obtener los datos de las consultas por usuario ********************/
/***********************************************************************************************************/

obtenerCitasPorMedicoAPI(){
  return new Promise ((resolve, reject) => {
    this.db.executeSql("SELECT * FROM horarios_API", []).then((data) => {
      //alert("Numero de filas de consulta: "+data.rows.length)
      let arrayUsers = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          arrayUsers.push({
            id: data.rows.item(i).id,
            fecha_consulta: data.rows.item(i).fecha_consulta,
            hora: data.rows.item(i).hora,
            horb: data.rows.item(i).horb,
            descripcion: data.rows.item(i).descripcion,
          });            
        }          
      }
      //alert(arrayUsers)
      resolve(arrayUsers);
    }, (error) => {
      //alert(error)
      reject(error);
    })
  })
}




}
