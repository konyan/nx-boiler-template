import { DialogBox, FormInput } from '@dh-ticketing/shared/ui';
import {
  PhotographIcon,
  MenuIcon,
  ScissorsIcon,
  TrashIcon,
  LinkIcon,
  PencilAltIcon,
} from '@heroicons/react/outline';
import { DropZoneHoc } from '@dh-ticketing/shared-hooks';
import React from 'react';
import { useState } from 'react';
import { ApiService, getSignUrl, UploadImage } from '../../../api/nodeServer';

interface UploadDialogProps {
  open: boolean;
  onClose: (v: boolean) => void;
  callback: () => void;
}
interface UploadFileType {
  image_url: File | null;
  image_name: string;
  caption: string;
  searchable_text: string | string[];
}
const UploadDialog = ({ open, onClose, callback }: UploadDialogProps) => {
  const [uploadFileData, setUploadFileData] = useState<UploadFileType>({
    image_url: null,
    image_name: '',
    caption: '',
    searchable_text: '',
  });
  const [signUrl, setSignUrl] = useState<{ filename: string; url: string }>({
    filename: '',
    url: '',
  });

  const uploadFile = async (file: File) => {
    const data = await getSignUrl(file);
    setSignUrl(data);
  };

  const handleClose = () => {
    setUploadFileData({
      image_url: null,
      image_name: '',
      caption: '',
      searchable_text: '',
    });
    setSignUrl({
      filename: '',
      url: '',
    });
    onClose(false);
  };

  const handlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadFileData({ ...uploadFileData, [e.target.name]: e.target.value });
  };
  const handleCreateImage = async () => {
    if (
      !uploadFileData.image_url ||
      uploadFileData.caption === '' ||
      uploadFileData.searchable_text === ''
    ) {
      return alert('Field missing ');
    }
    if (uploadFileData.image_url) {
      await UploadImage(uploadFileData.image_url, signUrl.url);
    }

    const data = {
      image_url: signUrl.filename,
      image_name: signUrl?.filename?.replace('admin/', ''),
      caption: uploadFileData.caption,
      searchable_text: uploadFileData.searchable_text,
    };
    await ApiService.post('/admin/images', data).then((res) => {
      handleClose();
      callback();
    });
  };
  return (
    <DialogBox
      size="extra"
      title="Upload Media"
      open={open}
      onClose={(v) => {
        handleClose();
      }}
    >
      <div className="grid grid-cols-2 gap-[10px]">
        {/* RightSide Menu */}

        <div className="h-full">
          <div className="w-full h-[300px]">
            <DropZoneHoc
              callback={(file: any) => {
                setUploadFileData({ ...uploadFileData, image_url: file });
                uploadFile(file);
              }}
            >
              {uploadFileData.image_url ? (
                <div className="w-full h-full cursor-pointer relative overflow-hidden rounded-md">
                  <div className="absolute w-full h-full flex items-center justify-center bg-light-gray opacity-50">
                    <PencilAltIcon className="h-8 w-8 text-white" />
                  </div>
                  <img
                    className="object-cover w-full h-full rounded-md"
                    src={URL.createObjectURL(uploadFileData.image_url)}
                    alt={uploadFileData.image_name}
                  />
                </div>
              ) : (
                <div className="w-full h-full cursor-pointer relative overflow-hidden rounded-md">
                  <div className="absolute w-full flex-col h-full flex items-center justify-center ">
                    <PhotographIcon className="mb-1 w-6 h-6" />

                    <button className="flex-1 max-h-[40px] rounded-full border border-transparent bg-indigo-600 py-2 px-4 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Upload image
                    </button>

                    <p>Drop image to upload</p>
                    <div className="text-center">
                      <p className="text-xs ">File type: JPG, PNG or GIF</p>
                      <p className="text-xs ">{'File size: <500kb'}</p>
                    </div>
                  </div>
                </div>
              )}
            </DropZoneHoc>
          </div>
          <div className="mx-6 mt-3 gap-[10px] hidden items-center  rounded-lg bg-gray-100 px-0.5 py-3 sm:flex">
            <button
              type="button"
              className="ml-0.5 rounded-md hover:bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <TrashIcon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Use list view</span>
            </button>
            <button
              type="button"
              className="ml-0.5 rounded-md hover:bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <LinkIcon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Use grid view</span>
            </button>
            <button
              type="button"
              className="ml-0.5 rounded-md hover:bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <ScissorsIcon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Use grid view</span>
            </button>
          </div>
        </div>
        {/* left Side Menu */}

        <div className="px-[20px]">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-md">
                Size:{' '}
                {uploadFileData.image_url?.size &&
                  uploadFileData.image_url?.size + 'KB'}
              </p>
            </div>
            <div>
              <p className="text-md">
                Extension:{uploadFileData.image_url?.type}
              </p>
            </div>
          </div>
          <div className="mt-5">
            <FormInput
              disabled
              value={signUrl.filename.replace('admin/', '')}
              id="Name"
              label="File Name"
              name="file_name"
              type="text"
              placeholder="File Name"
              className="form-control"
            />
          </div>
          <div className="mt-5">
            <FormInput
              id="regular-form-1"
              label="Search Keyword"
              name="searchable_text"
              onChange={handlChange}
              type="text"
              value={uploadFileData.searchable_text}
              placeholder="Alternated Name"
              className="form-control"
            />
          </div>
          <div className="mt-5">
            <FormInput
              id="regular-form-1"
              label="Caption"
              name="caption"
              value={uploadFileData.caption}
              onChange={handlChange}
              type="text"
              placeholder="caption"
              className="form-control"
            />
          </div>
          <div className="mt-5 text-end  flex gap-2 w-full">
            <button
              onClick={handleCreateImage}
              className=" rounded-full border border-transparent bg-indigo-600 py-2 px-4 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Upload image
            </button>
            <button
              onClick={() => {
                onClose(false);
              }}
              className=" rounded-full border border-indigo-600 bg-transparent py-2 px-4 text-xs font-medium text-indigo-600 hover:text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </DialogBox>
  );
};

export default UploadDialog;
