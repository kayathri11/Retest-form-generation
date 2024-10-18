const fs = require('fs');
const mysql = require('mysql2');
const { read, utils } = require('xlsx');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Kayathri',
  password: 'Kayathri2003',
  database: 'student_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Function to format DOB (if needed)
const formatDOB = (dob) => {
  if (!dob) return null;
  const [day, month, year] = dob.split('-');
  return `${year}-${month}-${day}`;  // MySQL format
};

// Function to load student data from the combined Excel file
const loadStudentData = () => {
  const file = 'ECE.xlsx';  // Your combined file
  if (!fs.existsSync(file)) {
  console.error(`File not found: ${file}`);
  return;
}
  let insertPromises = [];

  const workbook = read(file);
  console.log('Sheet names:', workbook.SheetNames);
  const sheet = workbook.Sheets['Sheet1'];
  const data = utils.sheet_to_json(sheet);
  console.log('Parsed data:', data);  // Log parsed data

  data.forEach((student) => {
    const sno = student['sno'];
    const regno = student['RegNo'];
    const admno = student['AdmNo'];
    const name = student['Student Name'];
    const gender = student['Gender'];
    const fatherName = student['Father Name'];
    const dob = formatDOB(student['DOB']);  // Ensure date is in MySQL format

    console.log(`Inserting: SNo: ${sno}, RegNo: ${regno}, AdmNo: ${admno}, Name: ${name}, Gender: ${gender}, Father Name: ${fatherName}, DOB: ${dob}`);

    if (regno && name) {
      const query = 'INSERT INTO students (sno, RegNo, AdmNo, Student Name, Gender, Father Name, DOB) VALUES (?, ?, ?, ?, ?, ?, ?)';
      const insertPromise = new Promise((resolve, reject) => {
        try {
          connection.query(query, [sno, regno, admno, name, gender, fatherName, dob], (error, results) => {
            if (error) {
              console.error('Error inserting data:', error);
              reject(error);
            } else {
              console.log(`Inserted ${name} with RegNo ${regno}`);
              resolve(results);
            }
          });
        } catch (error) {
          console.error('Error inserting data:', error);
          reject(error);
        }
      });
      insertPromises.push(insertPromise);
    } else {
      console.error('Missing RegNo or Student Name for student:', student);
    }
  });

  Promise.all(insertPromises)
    .then(() => {
      console.log('All data inserted successfully.');
      connection.end();
    })
    .catch((error) => {
      console.error('Error during insertion:', error);
      connection.end();
    });
};

loadStudentData();
