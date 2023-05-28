import { pool } from '../../utils/db.js';
import { addDays, formatDate } from '../helpers/index.js';

export const getAvailableTrains = (req, res) => {
  const { departure, arrival, date } = req.query;

  let query = 'SELECT * FROM trains';
  const params = [];

  if (departure) {
    query += ' WHERE departure_station = ?';
    params.push(departure);
  }

  if (arrival) {
    query += ' AND arrival_station = ?';
    params.push(arrival);
  }

  if (date === 'next7days') {
    const currentDate = new Date();
    const nextSevenDays = Array.from({ length: 7 }, (_, index) =>
      addDays(currentDate, index)
    );
    const formattedDates = nextSevenDays.map((day) => formatDate(day));
    query += ` AND DATE(departure_time) IN (${formattedDates
      .map(() => '?')
      .join(',')})`;
    params.push(...formattedDates);
  } else if (date) {
    query += ' AND DATE(departure_time) = ?';
    params.push(date);
  }

  pool.execute(query, params, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Помилка сервера' });
    } else {
      res.status(200).json(results);
    }
  });
};
