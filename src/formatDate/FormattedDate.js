import FormattedMonth from "./FormattedMonth";
import FormattedDay from "./FormattedDay";
import FormattedTime from "./FormattedTime";

export default function FormattedDate(props) {
    const date = new Date(props.dt*1000  + props.timezone_off*720);
    
    console.log(`V FormattedDate timezone^ ${props.timezone_off} ${date.getDate()}`);
    return (<span>
        <FormattedDay form="short" dayIndex={date.getDay()} />
        {", "}
        <FormattedMonth form="short" monthIndex={date.getMonth()} /> {date.getDate()}
        {", "} <FormattedTime date={props.timezone_off} />
    </span>
    )
}