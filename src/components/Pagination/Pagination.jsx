import React from "react";
import styles from "./Pagination.module.css";
const Pagination = ({ setPage, page }) => {
  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        {page > 1 ? (
          <div className={styles.prev} onClick={() => setPage(page - 1)}>
            Prev
          </div>
        ) : null}
        {page > 3 ? (
          <div
            className={styles.pageMinusThree}
            onClick={() => setPage(page - 3)}
          >
            {page - 3}
          </div>
        ) : null}

        {page > 2 ? (
          <div
            className={styles.pageMinusTwo}
            onClick={() => setPage(page - 2)}
          >
            {page - 2}
          </div>
        ) : null}
        {page > 1 ? (
          <div
            className={styles.pageMinusOne}
            onClick={() => setPage(page - 1)}
          >
            {page - 1}
          </div>
        ) : null}
        <div className={styles.page} disabled={true}>{page}</div>
        <div className={styles.pagePlusOne} onClick={() => setPage(page + 1)}>
          {page + 1}
        </div>
        <div className={styles.pagePlusTwo} onClick={() => setPage(page + 2)}>
          {page + 2}
        </div>
        <div className={styles.pagePlusThree} onClick={() => setPage(page + 3)}>
          {page + 3}
        </div>
        <div className={styles.pagePlusFour} onClick={() => setPage(page + 4)}>
          {page + 4}
        </div>
        <div className={styles.dots}>...</div>
        <div className={styles.next} onClick={() => setPage(page + 1)}>
          Next
        </div>
      </div>
    </div>
  );
};

export default Pagination;
