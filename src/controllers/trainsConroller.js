import { pool } from '../../utils/db.js';

export const getAvailableTrains = (req, res) => {
  const { departure, arrival } = req.query;

  let query = 'SELECT * FROM trains';

  const params = [];

  if (departure && arrival) {
    query += ' WHERE departure_station = ? AND arrival_station = ?';
    params.push(departure, arrival);
  }

  pool.execute(query, params, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Помилка сервера' });
    } else {
      res.status(200).json(results);
    }
  });
};
