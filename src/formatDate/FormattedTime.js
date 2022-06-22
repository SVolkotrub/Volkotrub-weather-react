

export default function FormattedTime(props) {
    let hours = props.hours;
    let minutes = props.minutes;
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (hours < 10) {
        hours = `0${hours}`;
    }
    return `${hours}:${minutes}`;
}