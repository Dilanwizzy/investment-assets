import React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const HomeComponent = ({
  data, error, isFetching, onClick, styles
}) => (
  <div className={styles.home}>
    <Button className={styles.button} onClick={onClick}>Fetch Server Info</Button>
    {data && (
      <ul className={styles.info}>
        { data.map((d, k) => (
          <li key={JSON.stringify(k)}>
            <b>{`${d.name}: `}</b>
            {d.value}
          </li>
        ))}
      </ul>
    )}
    {error && <div className={styles.error}>{error}</div>}
    {isFetching && (
      <div className={styles.spinnerContainer}>
        <CircularProgress className={styles.spinner} />
      </div>
    )}
  </div>
)
export default HomeComponent
