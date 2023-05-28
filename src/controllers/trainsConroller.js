import { pool } from '../../utils/db.js';

export const getAvailableTrains = (req, res) => {
  const { departure, arrival, date } = req.query;

  let query = 'SELECT * FROM trains';

  const params = [];

  if (departure) {
    query += ' WHERE departure_station = ?';
    params.push(departure, arrival, date);
  }

  if (arrival) {
    query += ' AND arrival_station = ?';
  }

  if (date) {
    query += ' AND DATE(departure_time) = ?';
  }

  pool.execute(query, params, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Помилка сервера' });
    } else {
      res.status(200).json(results);
    }
  });
};
