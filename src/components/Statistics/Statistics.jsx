import css from "./Statistics.module.css"

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
      {title && (<h2 className={css.title}>{title}</h2>)}

    <ul className={css.statlist}>
    {stats.map(({id, label, percentage}) => 
    
     <li style={{backgroundColor: getRandomHexColor()}} key={id} className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
   
    )}
    </ul>
</section>
    )
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}