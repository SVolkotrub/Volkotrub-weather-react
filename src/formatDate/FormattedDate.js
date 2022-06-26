import FormattedMonth from "./FormattedMonth";
import FormattedDay from "./FormattedDay";
import FormattedTime from "./FormattedTime";

export default function FormattedDate(props) {
    let date = new Date(props.dt * 1000);
    console.log({ date });
    return (<span>
        <FormattedDay form="short" dayIndex={date.getDay()} />
        {", "}
        <FormattedMonth form="short" monthIndex={date.getMonth()} /> {date.getDate()}
        {", "} <FormattedTime date={props.timezone} />
    </span>
    )
}