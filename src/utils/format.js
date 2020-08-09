const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
  ];
  
  const weekdays = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ];
  
  function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1;
    return subjects[arrayPosition];
  }
  
  function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":");
    return Number(hour * 60 + minutes);
  }
  
  module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes,
  };