import React from "react";
import PropTypes from "prop-types";

import classes from "./Statistics.module.scss";

const Statistics = ({ title, stats }) => {
  const randomBg = () => {
    const valor = Math.floor(Math.random() * 16777215);
    const hex = "#" + valor.toString(16);

    return hex;
  };

  const li_statistics = stats.map((stat) => {
    return (
      <li
        key={stat.id}
        style={{
          backgroundColor: `${randomBg()} `,
        }}
      >
        <span>{stat.label}</span>
        <span className={classes.percentage}>{stat.percentage}%</span>
      </li>
    );
  });

  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}
      <ul className={classes["stat-list"]}>{li_statistics}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
