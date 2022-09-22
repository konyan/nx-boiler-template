import { useDropzone } from 'react-dropzone';
import { ReactNode } from 'react';

interface DropZoneHocProps {
  children: ReactNode;
  callback: (file: File) => void;
}

export function DropZoneHoc({ children, callback }: DropZoneHocProps) {
  const onDrop = (acceptedFiles: any, fileRejections: any) => {
    if (fileRejections?.length > 0) {
      fileRejections.forEach((fileRejection: any) => {
        fileRejection.errors.forEach((err: any) => {
          console.log('erro');
        });
      });
      return;
    }
    callback(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    minSize: 0,
    maxSize: 500000,
  });

  return (
    <div {...getRootProps()} className="UploadDropzone">
      <div className="w-full h-full">
        <input {...getInputProps()} />
        {children}
      </div>
    </div>
  );
}

export default DropZoneHoc;
