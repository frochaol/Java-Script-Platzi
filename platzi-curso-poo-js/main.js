// // OBJETO UTILIZADO COMO PROTOTIPO
// function Student(name, age, cursosAprobados) {
//     this.name = name;
//     this.age = age,
//     this.cursosAprobados = cursosAprobados;
//     // this.aprobarCurso = function (nuevoCurso) {
//     //     this.cursosAprobados.push(nuevoCurso);
//     // }
// }
// // -- SE PUEDE REALIZAR DE ESTA MANERA IGUALMENTE
// Student.prototype.aprobarCurso = function (nuevoCurso) {
//     this.cursosAprobados.push(nuevoCurso);
// }

// const juanita = new Student("Juanita", 15, ['Curso1', 'Curso2']);

// // OBJETO LITERAL
// const natalia = {
//     name: "Natalia",
//     age: 20,
//     cursosAprobados: [
//         'JS Básico', 
//         'JS Práctico'
//     ],
//     aprobarCurso(nuevoCurso) {    // ESTO SERÍA UN MÉTODO EN JS
//         this.cursosAprobados.push(nuevoCurso);
//     }
// };

// // PROTOTIPO CON LA SINTAXIS DE CLASES
// class Student2 {
//     // constructor(name, age, cursosAprobados) {
//     //     this.name = name;
//     //     this.age = age;
//     //     this.cursosAprobados = cursosAprobados;
//     // }
//     constructor({
//         name,
//         age,
//         cursosAprobados = []
//     }){
//         this.name = name;
//         this.age = age;
//         this.cursosAprobados = cursosAprobados;
//     }

//     aprobarCurso(nuevoCurso) {
//         this.cursosAprobados.push(nuevoCurso);
//     }
// };

// // const mariano = new Student2('Mariano', 20, ['Test1', 'Test2']);
// const mariana = new Student2({age: 20, name: 'Mariana'});
class Comment {
    constructor({
        content,
        studentName,
        studentRol = 'student',
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRol = studentRol;
        this.likes = 0;
    }

    publicar() {
        console.log(this.studentName + " tiene el rol de " + this.studentRol);
    }

}


function videoPlay(id) {
    const urlSecreta = "Https://platzisecreto.com/" + id;
    console.log(urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "http://secreto.com/" + id;
}

class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name; 
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID);
    }
}

class LearningPath { 
    constructor({
        name, 
        courses = []
    }) {
        this.name = name;
        this.courses = courses;
    }

    addCourse(newCourse) {
        this.courses.push(newCourse);
    }
}

class Comments {
    constructor({user, comment}){
        this.user = user;
        this.comment = comment;
    }
}
const primerComentario = new Comments({user: 'Fernando', comment: 'Este es el primer comentario'});

class Classes {
    constructor({name, time, comentarios = []}){
        this.name = name; 
        this.time = time;
        this.comentarios = comentarios;
    }
}
const primeraClaseProgramacionBasica = new Classes({name: 'Que es la programación', comentarios: [primerComentario]});

class Course {

    constructor({
        name, 
        classes = [],
        isFree = false,
        lang = "spanish"
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombre) {
        if (nuevoNombre === "Curso Malito") {
            console.error("No puedes cambiar el nombre");            
        } else {
            this._name = nuevoNombre;
        }        
    }
}

const cursoProgramacionBasica = new Course({
    name: 'Curso Gratis de programación Básica', 
    isFree: true,
    lang: 'spanish',
    classes: primeraClaseProgramacionBasica
});
cursoProgramacionBasica.name = 'Test nombre'    // esto llama a la función set. 

const cursoDefinitivoHTMLyCSS = new Course({
    name: 'Curso definitivo de HTML y CSS',
    lang: 'english'
});
const cursoPracticoHTMLyCSS = new Course({name: 'Curso práctico de HTML y CSS'});

const escuelaWeb = new LearningPath({
        name: 'Escuela de desarrollo web', 
        courses: [
            cursoProgramacionBasica,
            cursoDefinitivoHTMLyCSS,
            cursoPracticoHTMLyCSS,
        ]
    });

const escuelaData = new LearningPath({
    name: 'Escuela de Data Science',
    courses: [
        cursoProgramacionBasica,
        'Curso DataBusiness',
        'Curso Dataviz'
    ]
});

const escuelaVgs = new LearningPath({
    name: 'Escuela de videojuegos',
    courses: [
        cursoProgramacionBasica,
        'Curso de Unity',
        'Curso de Unreal'
    ]
});

class Student{
    constructor({
        name,
        email,
        username,        
        twitter = undefined ,
        instagram = undefined,
        facebook = undefined,
        approvedCourses,
        learningPaths
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class FreeStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) { 
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) { 
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
        }
    }
} 

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) { 
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) { 
        this.approvedCourses.push(newCourse);
    }

    // SOBRECARGA
    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRol: "Teacher",
        });
        comment.publicar();
    }
}

const fernando = new FreeStudent({
    name: 'Fernando',
    username: 'fazta',
    email: 'frocha@dlya',
    twitter: 'frochaol',
    learningPaths: [
        escuelaWeb,
    ],
});

const fredy = new TeacherStudent({
    name: 'fredy',
    username: 'ff',
    email: 'fred@dlya',
    twitter: 'frochaol',
});