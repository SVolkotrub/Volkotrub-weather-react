import FormattedMonth from "./FormattedMonth";
import FormattedDay from "./FormattedDay";
import FormattedTime from "./FormattedTime";

export default function FormattedDate(props) {
       
    return (<span>
        <FormattedDay form="short" dayIndex={props.date.getDay()} />
        {", "}
        <FormattedMonth form="short" monthIndex={props.date.getMonth()} /> {props.date.getDate()}
        {", "} <FormattedTime hours={props.date.getHours()} minutes={props.date.getMinutes() } />
    </span>
    )
}