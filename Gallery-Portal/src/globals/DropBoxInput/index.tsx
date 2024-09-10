// import {
//   ChangeEvent,
//   DragEvent,
//   InputHTMLAttributes,
//   ReactNode,
//   useRef,
//   useState,
// } from 'react'

// import { appNotify, Text } from 'components'
// import styles from './styles.module.scss'

// interface DropBoxI
//   extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
//   icon?: string | ReactNode
//   subText: string
//   summary: string
//   MaxFileSizeInMb?: number
//   onGetFile: (fileProps: { files: FileList | null; preview: string }) => void
// }
// export const DEFAULT_MAX_FILE_SIZE_IN_MB = 50

// const BrowseButton = ({ onClick }: { onClick: () => void }) => {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       style={{
//         backgroundColor: 'transparent',
//         color: 'var(--blue-500)',
//         border: 'none',
//         cursor: 'pointer',
//         fontSize: '16px',
//       }}
//     >
//       browse
//     </button>
//   )
// }
// const DropBoxInput = ({
//   icon: Icon,
//   subText,
//   summary,
//   MaxFileSizeInMb,
//   onGetFile,
//   ...rest
// }: DropBoxI) => {
//   const [files, setFiles] = useState<FileList | null>(null)
//   const [preview, setPreview] = useState<string>()
//   const fileRef = useRef<HTMLInputElement>(null)
//   const maxFileSize = MaxFileSizeInMb || DEFAULT_MAX_FILE_SIZE_IN_MB

//   const handleFileChange = (_files: FileList) => {
//     if (_files && _files.length > 0) {
//       if (_files[0].size <= maxFileSize * 1024 * 1024) {
//         setFiles(_files)
//         //to read the file
//         const reader = new FileReader()
//         reader.readAsDataURL(_files[0])
//         //loading data
//         reader.onload = () => {
//           if (onGetFile) {
//             onGetFile({ files: _files, preview: reader.result as string })
//           }
//           setPreview(reader.result as string)
//         }
//       }
//     } else {
//       appNotify(
//         'error',
//         `File Size exceeds the maximum allowed size ${maxFileSize}MB`
//       )
//     }
//   }

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault()
//     const _files = e.target.files
//     if (_files) handleFileChange(_files)
//   }

//   const handleDrop = (event: DragEvent<HTMLInputElement>) => {
//     event.preventDefault()
//     const _files = event.dataTransfer.files
//     if (_files) handleFileChange(_files)
//   }
//   const handleClickOnBrowse = () => {
//     if (fileRef.current) {
//       fileRef.current.click()
//     }
//   }
//   const handleRemoveSelection = () => {
//     if (fileRef.current) {
//       setFiles(null)
//       onGetFile({ files: null, preview: '' })
//     }
//   }

//   return (
//     <div
//       role="presentation"
//       onDrop={handleDrop}
//       onDragOver={(e) => e.preventDefault()}
//       className={styles.DropBox}
//     >
//       {Icon ? (
//         typeof Icon === 'string' ? (
//           <img src={Icon} alt="Drag and Drop Here" />
//         ) : (
//           Icon
//         )
//       ) : null}

//       {!files ? (
//         <>
//           <Text size="Small" className={styles.subText}>
//             {subText ? (
//               <>
//                 {subText} or <BrowseButton onClick={handleClickOnBrowse} />
//               </>
//             ) : (
//               <BrowseButton onClick={handleClickOnBrowse} />
//             )}
//           </Text>
//           <Text size="Small" content={summary} className={styles.summary} />
//         </>
//       ) : (
//         <>
//           <div className={styles.containerForImgAndText}>
//             <img
//               src={preview as string}
//               alt="Drag and Drop Image here"
//               className={styles.DocImg}
//             />
//             <div>
//               <Text
//                 size="Default"
//                 content={files[0].name}
//                 className={styles.DocNane}
//                 style={{ paddingTop: '10px' }}
//               />
//               <button
//                 className={styles.removeBtn}
//                 onClick={handleRemoveSelection}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//       <input
//         type="file"
//         ref={fileRef}
//         onChange={handleChange}
//         hidden
//         {...rest}
//       />
//     </div>
//   )
// }

// export default DropBoxInput

import { ChangeEvent, DragEvent, InputHTMLAttributes, ReactNode, useRef, useState } from 'react';
import { appNotify } from '../appNotify/index'
import { Text } from '../../globals/topography/index';

interface DropBoxI extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  icon?: string | ReactNode;
  subText: string;
  summary: string;

  MaxFileSizeInMb?: number;
  onGetFile: (fileProps: { files: FileList | null; preview: string }) => void;
}

const DEFAULT_MAX_FILE_SIZE_IN_MB = 50;

const BrowseButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="text-red-500 underline hover:text-red-700 transition duration-200"
  >
    browse
  </button>
);

const DropBoxInput = ({
  icon: Icon,
  subText,
  summary,
  MaxFileSizeInMb,
  onGetFile,
  ...rest
}: DropBoxI) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [preview, setPreview] = useState<string>();
  const fileRef = useRef<HTMLInputElement>(null);
  const maxFileSize = MaxFileSizeInMb || DEFAULT_MAX_FILE_SIZE_IN_MB;

  const handleFileChange = (_files: FileList) => {
    if (_files && _files.length > 0) {
      if (_files[0].size <= maxFileSize * 1024 * 1024) {
        setFiles(_files);

        const reader = new FileReader();
        reader.readAsDataURL(_files[0]);

        reader.onload = () => {
          if (onGetFile) {
            onGetFile({ files: _files, preview: reader.result as string });
          }
          setPreview(reader.result as string);
        };
      } else {
        appNotify('error', `File Size exceeds the maximum allowed size ${maxFileSize}MB`);
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const _files = e.target.files;
    if (_files) handleFileChange(_files);
  };

  const handleDrop = (event: DragEvent<HTMLInputElement>) => {
    event.preventDefault();
    const _files = event.dataTransfer.files;
    if (_files) handleFileChange(_files);
  };

  const handleClickOnBrowse = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleRemoveSelection = () => {
    if (fileRef.current) {
      setFiles(null);
      onGetFile({ files: null, preview: '' });
    }
  };

  return (
    <div
      role="presentation"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-400 rounded-lg mb-4 cursor-pointer"
    >
      {Icon ? (
        typeof Icon === 'string' ? (
          <img src={Icon} alt="Drag and Drop Here" />
        ) : (
          Icon
        )
      ) : null}

      {!files ? (
        <>
          <Text size="Small" className="font-semibold mb-2">
            {subText} or <BrowseButton onClick={handleClickOnBrowse} />
          </Text>
          <Text size="Small" content={summary} className="text-gray-400" />
        </>
      ) : (
        <div className="flex flex-col items-center w-full">
          <div className="flex items-start gap-4 mb-4 w-full">
            <img
              src={preview as string}
              alt="Drag and Drop Image here"
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <Text size="Default" content={files[0].name} className="pt-2" />


              <button
                className="text-red-500 underline hover:text-red-700 transition duration-200 mt-4"
                onClick={handleRemoveSelection}
              >
                Remove
              </button>


            </div>
          </div>
        </div>
      )}
      <input

        type="file"
        ref={fileRef}
        onChange={handleChange}
        hidden
        // Allow multiple file selection

        {...rest}
      />
    </div>
  );
};

export default DropBoxInput;

