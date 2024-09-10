
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const appNotify = (type:any, message:any) => {
  switch (type) {
    case 'success':
      toast.success(message, { position: 'top-right', theme:'dark', autoClose: 5000 });
      break;
    case 'error':
      toast.error(message, { position:'top-right',theme:'dark', autoClose: 5000 });
      break;
    case 'info':
      toast.info(message, { position: 'top-right', autoClose: 5000 });
      break;
    case 'warning':
      toast.warn(message, { position: 'top-right', autoClose: 5000 });
      break;
    default:
      toast(message, { position: 'top-right', autoClose: 5000 });
      break;
  }
};