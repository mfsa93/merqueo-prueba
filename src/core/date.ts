import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import es from 'dayjs/locale/es'

dayjs.locale(es);
dayjs.extend(relativeTime);


export function fromNow(timestamp: number) {
    return capitalize(dayjs.unix(timestamp).fromNow())
}


export function capitalize( value: string ) {
    return value.charAt(0).toUpperCase() + value.slice(1)
}