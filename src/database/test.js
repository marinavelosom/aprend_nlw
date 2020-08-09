const Database = require('./db')
const createProffy = require('./createProffy')
Database.then(async (db) => {
    // Inserir dados
    
    proffyValue = {
        name: "Carlos Lamark", 
        avatar: "/images/prof_carlinhos.jpg",
        whatsapp: "87988375787",
        bio: "Entusiasta dos jogos e da tecnologia. <br><br>Estudante de Eng. da Computação, apaixonado por derrubar montanhas e especialista em Villages, no minecraft. Já ajudou vários jogadores com suas 'farms' de diamante e de ferro, tornando ultrapassado a busca por minérios. Acima de tudo é um grande conhecedor das artes manuais."
    }

    classValue = {
        subject: 1, 
        cost: "100"
        // o proffy id virá pelo banco de dados 
    }

    classScheduleValues = [
        // o proffy id virá pelo banco de dados 
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos
    
    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    

    //consultar as classes de um determindao proffy 
    //e trazer junto os dados do proffy
    const selectedClassesAndProffys = await db.all(`
        SELECT classes. *, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)

    // o horario que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horário do time_from (8h) precisa ser menor ou igual ao horario solicitado
    // o time_to precisa ser acima
    const selectClassesShedules = await db.all(`
        SELECT class_schedule. *
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520" 
    `)
    console.log(selectClassesShedules)
})