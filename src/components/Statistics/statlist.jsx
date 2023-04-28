
export const Statlist = ({ stata }) => {   
    console.log(stata)
    const arrStat = stata.data;
    arrStat.map(el => {            
        return (
    <li className="item" id={el.id}>
        <span className="label">{el.label}</span>
        <span className="percentage">{el.percentage}</span>
    </li>   
)
    })
       
}
