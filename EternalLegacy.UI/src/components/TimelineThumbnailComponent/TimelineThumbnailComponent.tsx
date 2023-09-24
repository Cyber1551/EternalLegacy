import {Image} from '@mantine/core';
import {ILegacyContent} from "../../models/legacyContent.ts";
import {FC} from "react";
import './style.css'
import {useLegacy} from "../../contexts/LegacyContext.tsx";

export interface ITimelineThumbnailComponent {
    legacyContent: ILegacyContent;
    index: number;
}
const TimelineThumbnailComponent:FC<ITimelineThumbnailComponent> = ({legacyContent, index}:ITimelineThumbnailComponent) => {
    const {onLegacyContentClick, currentLegacyContentIndex} = useLegacy();

    return <Image className={'timelineThumbnailComponent'}
                  src={`https://lavender-ambitious-fish-346.mypinata.cloud/ipfs/${legacyContent.contentID}`}
                  width={85}
                  height={85}
                  style={{marginLeft: currentLegacyContentIndex === index ? 40 : "auto"}}
                  onClick={() => onLegacyContentClick(index)}
            />
}

export default TimelineThumbnailComponent;