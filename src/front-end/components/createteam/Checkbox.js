import styles from '../../css/createteam/Checkbox.module.scss';

export function Checkbox({ name, onChange }) {
  return (
    <>
      <label className={styles['b-contain']}>
        <span>{name}</span>
        <input type="checkbox"
          id={name}
          name={name}
          value={name}
          label={name}
          onChange={onChange}
        />
        <div className={styles['b-input']}></div>
      </label>
    </>
  )
}
