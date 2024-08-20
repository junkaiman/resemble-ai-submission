import { avatarDefault } from "../mockData";

export interface IVoiceProfileProps {
  voiceId: number;
  name: string;
  desc: string;
  avatarUrl: string;
  previewUrl: string;
}

export default function VoiceProfile(props: IVoiceProfileProps) {
  const { name, desc, avatarUrl, previewUrl } = props;

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={avatarUrl || avatarDefault}
          alt="image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{desc}</span>
        <div className="flex mt-4 md:mt-6">
          <audio controls src={previewUrl} className="w-48"></audio>
        </div>
      </div>
    </div>
  );
}
