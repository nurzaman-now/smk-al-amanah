import { format } from 'date-fns';
import id from 'date-fns/locale/id';

const ConvertDateId = (timestamp: string) => {
  const date = new Date(timestamp);
  
  const formattedDate = format(date, 'dd MMMM yyyy', { locale: id });
  return formattedDate;
}

export default ConvertDateId;
