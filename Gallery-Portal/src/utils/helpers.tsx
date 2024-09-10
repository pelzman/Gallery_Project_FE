import { format } from 'date-fns';

export const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    if(!isNaN(date.getTime())){
        return format(new Date(date), 'yyyy-MM-dd');
    }
   else {
    console.log('Invalid Date');
   }
};