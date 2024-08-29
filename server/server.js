
const express = require('express');
const cors = require('cors');
const pool = require('./database'); // Ensure this points to your database.js file
const pool1 = require('./db');
const app = express();
const port = 4000;

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Adjust to your frontend's URL
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Login authentication endpoint
app.post('/emp_login', async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const authResult = await authenticate(username, password);
    if (authResult) {
      return res.json({ message: "Login successful" });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

async function authenticate(username, password) {
  try {
    const query = 'SELECT * FROM employees WHERE username = $1 AND password = $2';
    const values = [username, password];
    const result = await pool.query(query, values);
    return result.rows.length > 0;
  } catch (error) {
    console.error('Database query error:', error);
    return false;
  }
}

// Outing form submission endpoint
app.post('/Outing_form', async (req, res) => {
  console.log("Outing Form Request Body:", req.body); // Log the incoming request body

  const { employeeName, employeeID, designation, section, purpose, location, dateOfOuting, outTime } = req.body;

  console.log(`Received fields:
    employeeName: ${employeeName},
    employeeID: ${employeeID},
    designation: ${designation},
    section: ${section},
    purpose: ${purpose},
    location: ${location},
    dateOfOuting: ${dateOfOuting},
    outTime: ${outTime}`);

  if (!employeeName || !employeeID || !designation || !section || !purpose || !location || !dateOfOuting || !outTime) {
    console.log("Missing field detected");
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const query = `
      INSERT INTO outings (employee_name, employee_id, designation, section, purpose, location, date_of_outing, out_time)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
    const values = [employeeName, employeeID, designation, section, purpose, location, dateOfOuting, outTime];

    const result = await pool.query(query, values);

    console.log('Data inserted successfully:', result.rows[0]); // Log the successful insertion
    res.status(200).json({ message: 'Form submitted successfully', data: result.rows[0] });
  } catch (error) {
    console.error('Error inserting data:', error.message); // Log the error message
    console.error('Stack Trace:', error.stack); // Log the stack trace
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});







// Endpoint to handle visitor requisition form submission
app.post('/Vis_form', async (req, res) => {
  const { name, phone, designation, organisation, purpose, aadhar_no, date } = req.body;

  if (!name || !phone || !designation || !organisation || !purpose || !aadhar_no || !date) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await pool1.query(
      'INSERT INTO visitor_requisition (name, phone, designation, organisation, purpose, aadhar_no, date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, phone, designation, organisation, purpose, aadhar_no, date]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});









// Endpoint to get all visitors
app.get('/visitors', async (req, res) => {
  try {
    const result = await pool1.query('SELECT * FROM visitor_requisition');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Endpoint to update visitor status
app.put('/visitor.status/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const result = await pool1.query(
      'UPDATE visitor_requisition SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});