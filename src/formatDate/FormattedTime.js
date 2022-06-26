

export default function FormattedTime(props) {

    let currentLocationDate = new Date();

    let minutes = currentLocationDate.getUTCMinutes();
    let hours =
      currentLocationDate.getUTCHours() + props.date / 3600;

    if (hours < 0) {
      hours = 24 + hours;
    }
    if (hours >= 24) {
      hours = hours - 24;
    }

    // Time adjustment if the time zone is not integer
    if (Number.isInteger(hours) === false) {
      minutes = minutes + 30;
      if (minutes >= 60) {
        minutes = minutes - 60;
        hours = hours + 1;
      }
      hours = hours.toString().slice(0, -2);
    }

    
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (hours < 10) {
        hours = `0${hours}`;
    }
    return `${hours}:${minutes}`;
}