
import { SectionBlock } from "./section-block";


interface JobDescriptionProps {
    description: string;
    responsibilities: string[];
    whoYouAre: string[];
    niceToHave: string[];
  }

export const JobDescriptionContent = ({
  description,
  responsibilities,
  whoYouAre,
  niceToHave,
}: JobDescriptionProps) => (
  <div className="w-full md:w-2/3 md:pr-8">
    <SectionBlock
      title="Description"
      items={description}
    />
    <SectionBlock
      title="Responsibilities"
      items={responsibilities}
      isList={true}
    />
    <SectionBlock
      title="Who You Are"
      items={whoYouAre}
      isList={true}
    />
    <SectionBlock
      title="Nice-To-Haves"
      items={niceToHave}
      isList={true}
    />
  </div>
);
