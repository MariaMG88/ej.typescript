/** Crear interfaces y clases para definir esta situación:

Tenemos una ciudad con varias CASAS , estas pueden ser compradas por distintas PERSONAS.
 De las casas necesitamos guardar la información de su superficie, precio, número de habitaciones, número de baños, tipo de casa (chalet, piso o duplex),
 si la casa está en venta, y su propietario/s en caso de que los tenga.
 De las personas necesitamos conocer su nombre, su edad, el dinero del que disponen, su DNI y su estado civil,
 en caso de que las personas estén casadas además necesitamos conocer su pareja.

Habrá 2 acciones que sea posible realizar: 

- Comprar una casa: En caso de que una casa sea adquirida deberá dejar de estar en venta y se deberá registrar su propietario o propietarios.
- Casarse: 2 personas podrán casarse si no están ya casados con otra persona. Se deberá registrar su nueva pareja y cambiar su estado civil.

Se deberán crear las clases e interfaces necesarias para poder definir las distintas personas y casas.
Además las clases deberán contener los métodos necesarios para que se puedan realizar las acciones descritas.
Se deberá intentar utilizar tipos personalizados y herencia de clases. */

/** Enumeración con los tipos de casa, completar */
enum TipoCasa {
    CHALET = 'chalet';
    PISO = 'piso';
    DUPLEX = 'duplex';
}

/** Enumeración con los tipos de estado civil, completar */
enum EstadoCivil {
    CASADO = 'casado',
    SOLTERO = 'soltero'
}

/** Interfaz Casa, completar con el resto de información necesaria */
interface CasaInterface {
    precio: number;
    tipoCasa: TipoCasa[];
    numeroHab: number;
    numeroBañ: number;
    /** Lista con los propietario/s */
    propietarios: Persona[];
    enVenta: boolean;
}

/** Interfaz persona completar con el resto de información necesaria */
interface PersonaInterface {
    nombre: string;
    estadoCivil: EstadoCivil;
    edad: number;
    money: boolean;
    dni: number;
}

/** Clase casa, completar con atributos que faltan */
class Casa implements CasaInterface {
    precio: number;
    tipoCasa: TipoCasa;
    propietarios: Persona;
    enVenta: boolean;
    superficie: number;
    numeroHab: number;
    numeroBañ: number;


    constructor(precio: number, tipoCasa: TipoCasa[], propietarios: Persona[], enVenta: boolean, superficie: number, numeroHab: number, numeroBañ: number) {
        this.precio = precio;
        this.tipoCasa = [];
        this.superficie = superficie;
        this.numeroBañ = numeroBañ;
        this.numeroHab = numeroHab;
        // La casa empieza sin propietarios
        this.propietarios = [];
        // La casa al principio está en venta
        this.enVenta = true;
    }

    /** Función para comprar una casa, añadir lógica para que no se compre una casa si los compradores no disponen del dinero suficiente */
    comprar(compradores: Persona[]) {
        // Si está en venta se permite comprarla (añadir condición para que los compradores tengan el dinero)
        // y restar de su dinero el precio de la casa si la compran.
        if (this.enVenta) {
            this.persona = compradores;
            this.enVenta = false;
        } else {
            console.log('ERROR: La casa no está en venta')
        }
    }
}

/** Clase persona, completar con atributos y constructor */
class Persona implements PersonaInterface {
    nombre: string;
    estadoCivil: EstadoCivil;
    edad: number;
    money: boolean;
    dni: number;
    /** Opcional porque no se rellena a menos que la persona esté casada */
    pareja?: Persona;

    constructor(nombre: string, estadoCivil: EstadoCivil, edad: number, money: boolean, dni: number) {
        this.nombre = nombre;
        this.estadoCivil = estadoCivil;
        this.edad = edad;
        this.money = money;
        this.dni = dni;
    }

    /** Implementar lógica para actualizar el estado civil de ambas personas y su pareja
     * Se deberá comprobar que las 2 personas estén solteras antes de casarlos.
     */
    casarse(persona: Persona) {
        if(this.estadoCivil = SOLTERO){
            console.log('Pueden casarse');
        }else{
            console.log('No pueden casarse');
        }
    }
}

/** Crear las personas y casas que se desee y hacer pruebas (se valorará que se creen nuevas pruebas inventadas) */
/**
 * Este es un ejemplo de como debería funcionar el programa una vez haya sido terminado, los comentarios a la derecha de cada línea de código describen el resultado que se debe
 * mostrar al usuario por consola:
 * 
 * const raquel: Persona = new Persona('Raquel', 27, 185000, '45852695D', EstadoCivil.SOLTERO);
 * const javier: Persona = new Persona('Javier', 37, 250000, '12218221D', EstadoCivil.CASADO);
 * const diego: Persona = new Persona('Diego', 26, 167000, '12584621D', EstadoCivil.CASADO);
 * const juan: Persona = new Persona('Juan', 32, 50000, '54672398L', EstadoCivil.SOLTERO);
 * const maria: Persona = new Persona('María', 34, 125000, '34568910T', EstadoCivil.SOLTERO);
 * const paula: Persona = new Persona('Paula', 27, 195000, '34589921D', EstadoCivil.SOLTERO);
 * const chalet1: Casa = new Casa(152, 160000, 3, 2, TipoCasa.CHALET);
 * const piso1: Casa = new Casa(68, 60000, 2, 1, TipoCasa.PISO);
 * const duplex1: Casa = new Casa(67, 50000, 3, 2, TipoCasa.DUPLEX);
 * const chalet2: Casa = new Casa(152, 160000, 4, 4, TipoCasa.CHALET);
 * const piso2: Casa = new Casa(45, 260000, 3, 4, TipoCasa.PISO);
 * const duplex2: Casa = new Casa(77, 240000, 1, 2, TipoCasa.DUPLEX);
 * 
 * 
 * maria.casarse(juan); // Debería funcionar correctamente.
 * maria.casarse(paula); // Debería imprimir en consola el error "ERROR: La persona ya está casada".
 * chalet1.comprar([juan, maria]); // Debería comprar el chalet correctamente al tener entre los dos suficiente dinero
 * piso1.comprar([juan]); // ERROR: Los compradores no tienen suficiente dinero para adquirir esta casa.
 * 
 * console.log(juan.estadoCivil); // casado
 * console.log(paula.estadoCivil); // soltero
 * console.log(chalet1.enVenta); // false
 * console.log(piso1.enVenta); //true
 * 
 */
