import VoiceProfile, { IVoiceProfileProps } from "./VoiceProfile";
import SearchBox from "./SearchBox";
import { voices } from "../mockData";
import React from "react";

export default function VoiceList() {
  const [demoVoices, setDemoVoices] = React.useState<IVoiceProfileProps[]>([]);

  React.useEffect(() => {
    setDemoVoices(voices);
  }, []);

  const searchVoices = (searchText: string) => {
    const filteredVoices = voices.filter((voice) =>
      voice.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setDemoVoices(filteredVoices);
  };

  return (
    <div className="p-5">
      <label>Voices</label>
      <SearchBox onSearch={searchVoices} />
      <div className="grid gap-3 grid-cols1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {demoVoices.map((voice) => (
          <VoiceProfile
            key={voice.voiceId}
            voiceId={voice.voiceId}
            name={voice.name}
            desc={voice.desc}
            avatarUrl={voice.avatarUrl}
            previewUrl={voice.previewUrl}
          />
        ))}
      </div>
    </div>
  );
}
