// Import express
const express = require('express');
const app = express();

// Middleware untuk parsing data form
app.use(express.urlencoded({ extended: true }));

// Halaman utama yang menampilkan "Hello, World!" dan tombol menuju form
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My Hello World App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            text-align: center;
            padding: 50px;
          }
          h1 {
            color: #4CAF50;
          }
          .btn {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            text-decoration: none;
          }
          .btn:hover {
            background-color: #45a049;
          }
        </style>
      </head>
      <body>
        <h1>Hello, World!</h1>
        <p>Selamat datang di aplikasi web sederhana ini.</p>
        <a href="/form" class="btn">Go to Form</a>
      </body>
    </html>
  `);
});

// Halaman form untuk menginput data
app.get('/form', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Form Input</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            text-align: center;
            padding: 50px;
          }
          h1 {
            color: #4CAF50;
          }
          .form-container {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            margin: 0 auto;
          }
          input[type="text"], input[type="email"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 16px;
          }
          input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            font-size: 16px;
          }
          input[type="submit"]:hover {
            background-color: #45a049;
          }
        </style>
      </head>
      <body>
        <div class="form-container">
          <h1>Form Input</h1>
          <form action="/submit" method="POST">
            <label for="name">Nama:</label><br>
            <input type="text" id="name" name="name" required><br><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>
            <input type="submit" value="Kirim">
          </form>
        </div>
      </body>
    </html>
  `);
});

// Endpoint untuk menangani pengiriman form
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`
    <html>
      <head>
        <title>Terima Kasih</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            text-align: center;
            padding: 50px;
          }
          h1 {
            color: #4CAF50;
          }
        </style>
      </head>
      <body>
        <h1>Terima kasih, ${name}!</h1>
        <p>Email Anda: ${email}</p>
      </body>
    </html>
  `);
});

// Jalankan server di port 3000
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
